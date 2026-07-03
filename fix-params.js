const fs = require('fs');
const path = require('path');

const files = [
  'src/app/resources/learn/[slug]/page.tsx',
  'src/app/resources/tools/[slug]/page.tsx',
  'src/app/resources/documentation/[slug]/page.tsx',
  'src/app/resources/compare/[slug]/page.tsx',
  'src/app/resources/case-studies/[slug]/page.tsx',
  'src/app/resources/alternatives/[slug]/page.tsx',
];

for (const file of files) {
  const absolutePath = path.join(process.cwd(), file);
  let content = fs.readFileSync(absolutePath, 'utf8');

  // Fix generateMetadata
  content = content.replace(
    /export function generateMetadata\(\{ params \}: \{ params: \{ slug: string \} \}\): Metadata \{/g,
    'export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {\n  const { slug } = await params;'
  );

  // Fix default export component
  content = content.replace(
    /export default function ([A-Za-z]+)\(\{ params \}: \{ params: \{ slug: string \} \}\) \{/g,
    'export default async function $1({ params }: { params: Promise<{ slug: string }> }) {\n  const { slug } = await params;'
  );

  // Replace params.slug with slug
  content = content.replace(/params\.slug/g, 'slug');

  fs.writeFileSync(absolutePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
