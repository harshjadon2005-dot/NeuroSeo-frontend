import { createHmac, timingSafeEqual } from 'crypto';
import fs from 'fs';
import path from 'path';

const SECRET = process.env.SEOBOX_SIGNING_SECRET || 'dev_secret';
const IS_DEV = process.env.NODE_ENV === 'development';

function valid(raw: string, sig: string) {
  const expected = createHmac("sha256", SECRET).update(raw).digest("hex");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

function routeFor(tags: string[] = []): string {
  const lowerTags = tags.map(t => t.toLowerCase());
  if (lowerTags.includes('compare')) return 'compare';
  if (lowerTags.includes('alternatives')) return 'alternatives';
  if (lowerTags.includes('case-studies') || lowerTags.includes('saas') || lowerTags.includes('case study')) return 'case-studies';
  if (lowerTags.includes('documentation') || lowerTags.includes('api')) return 'documentation';
  if (lowerTags.includes('tool') || lowerTags.includes('free tool')) return 'tools';
  return 'learn';
}

function frontmatter(p: any): string {
  const data: Record<string, any> = {
    id: p.slug, // using slug as id for simplicity
    title: p.title || p.meta_title,
    slug: p.slug,
    excerpt: p.excerpt || p.meta_description,
    tags: p.tags || [],
    category: routeFor(p.tags),
    date: new Date().toISOString().split('T')[0], // stamp with server time
    author: {
      name: 'Seobox Author',
      role: 'Content Engine',
      avatar: ''
    }
  };

  if (p.featured_image) {
    data.featured_image = { url: p.featured_image.url, alt: p.featured_image.alt || '' };
  }
  
  if (p.faq) {
    data.faq = p.faq;
  }

  // Create frontmatter block
  const lines = ['---'];
  for (const [k, v] of Object.entries(data)) {
    lines.push(`${k}: ${JSON.stringify(v)}`);
  }
  lines.push('---');
  lines.push('');
  lines.push(p.content || '');
  
  return lines.join('\n');
}

async function commitToGit(filePath: string, fileContent: string) {
  if (IS_DEV) {
    // Local dev: Write to filesystem directly
    const absolutePath = path.join(process.cwd(), 'content', filePath);
    const dir = path.dirname(absolutePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(absolutePath, fileContent, 'utf8');
    console.log(`[Webhook] Local dev: Wrote to ${absolutePath}`);
    return;
  }

  // Production: Push to GitHub
  const repo = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || 'main';
  const token = process.env.GITHUB_TOKEN;

  if (!repo || !token) {
    throw new Error("Missing GITHUB_REPO or GITHUB_TOKEN environment variables");
  }

  const url = `https://api.github.com/repos/${repo}/contents/content/${filePath}`;
  
  // 1. Check if file exists to get the SHA (required for updates)
  let sha: string | undefined;
  try {
    const res = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'Seobox-Webhook-Client'
      }
    });
    if (res.ok) {
      const data = await res.json();
      sha = data.sha;
    }
  } catch (e) {
    // Ignore error, file might just not exist
  }

  // 2. Commit the file
  const commitRes = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      'User-Agent': 'Seobox-Webhook-Client'
    },
    body: JSON.stringify({
      message: `content: publish "${filePath}" via Seobox`,
      content: Buffer.from(fileContent).toString('base64'),
      branch: branch,
      sha: sha
    })
  });

  if (!commitRes.ok) {
    const err = await commitRes.text();
    throw new Error(`GitHub API error: ${commitRes.status} ${err}`);
  }
  
  console.log(`[Webhook] Production: Pushed to GitHub ${url}`);
}

export async function POST(req: Request) {
  const raw = await req.text(); // Read raw text before parsing for HMAC
  const sig = req.headers.get("x-seobox-signature") ?? "";
  
  // In dev, skip signature check if no signature is provided for easy testing
  if (!(IS_DEV && !sig) && !valid(raw, sig)) {
    return new Response("bad signature", { status: 401 });
  }

  if (req.headers.get("x-seobox-event") === "ping") {
    return Response.json({ ok: true });
  }

  let p;
  try {
    p = JSON.parse(raw);
  } catch (e) {
    return new Response("invalid JSON", { status: 400 });
  }

  const slug = p.slug;
  if (!slug) {
    return new Response("missing slug", { status: 400 });
  }

  const categoryDir = routeFor(p.tags);
  const file = frontmatter(p);
  
  try {
    await commitToGit(`${categoryDir}/${slug}.mdx`, file);
  } catch (error: any) {
    console.error("[Webhook Error]", error);
    return new Response(error.message || "server error", { status: 500 });
  }

  const publicUrl = process.env.SITE_PUBLIC_URL || 'http://localhost:3002';

  return Response.json({
    id: slug,
    url: `${publicUrl}/resources/${categoryDir}/${slug}`,
  });
}
