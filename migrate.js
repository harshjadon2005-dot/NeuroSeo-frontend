const fs = require('fs');
const path = require('path');

const DUMMY_CONTENT = `
## Understanding the Modern Search Landscape
Search engines are no longer just retrieving documents. They are synthesizing answers using Large Language Models (LLMs). This shift from Search Engine Results Pages (SERPs) to AI Overviews means your optimization strategy must evolve.

### What is Generative Engine Optimization?
GEO focuses on structuring content so that AI engines (like ChatGPT, Perplexity, and Google AI Overviews) can confidently extract, cite, and recommend your brand. It requires deep semantic richness, entity optimization, and unambiguous factual statements.

<div class="callout bg-emerald-50/50 border border-emerald-500/20 p-4 rounded-xl my-6">
  <strong>Key Takeaway:</strong> Stop counting keywords. Start establishing relationships between entities.
</div>

### 3 Steps to Implement GEO
1. **Structure Data Clearly:** Use proper heading hierarchies and list formats.
2. **Answer Questions Directly:** Don't bury the lede. Provide concise answers before expanding.
3. **Cite Authoritative Sources:** Establish trust by linking to primary data.

Implementing these steps ensures that when an AI engine is synthesizing a response to a complex query, your brand is the source of truth.
`;

const posts = [
  {
    id: 'l1', title: 'The Complete Guide to GEO (Generative Engine Optimization)', slug: 'complete-guide-to-geo', excerpt: 'Search is changing. Learn how to optimize your content for AI Overviews, Perplexity, and ChatGPT search with our definitive framework.', content: DUMMY_CONTENT, tags: ['GEO', 'AI Search', 'Strategy'], category: 'learn', date: '2026-07-01', author: { name: 'Sarah Jenkins', role: 'Head of SEO', avatar: '/avatars/sarah.jpg' }, readTime: '12 min', difficulty: 'Intermediate', isFeatured: true, relatedArticles: ['write-content-that-ranks-2026']
  },
  {
    id: 'l2', title: 'How to Write Content that Ranks in 2026', slug: 'write-content-that-ranks-2026', excerpt: 'Stop keyword stuffing. Discover the semantically rich, expert-driven approach to content creation that modern algorithms reward.', content: '<p>Standardizing your content workflow is essential...</p>', tags: ['Content Writing', 'SEO Fundamentals'], category: 'learn', date: '2026-06-28', author: { name: 'David Chen', role: 'Content Lead', avatar: '/avatars/david.jpg' }, readTime: '8 min', difficulty: 'Beginner'
  },
  {
    id: 'c1', title: 'NeuroSEO vs Surfer SEO: Which is Better in 2026?', slug: 'neuroseo-vs-surfer-seo', excerpt: 'Legacy keyword counting vs semantic intent matching. See how the next generation of SEO tools compares to the old guard.', content: DUMMY_CONTENT, tags: ['Compare', 'Surfer SEO'], category: 'compare', date: '2026-07-02', author: { name: 'Sarah Jenkins', role: 'Head of SEO', avatar: '/avatars/sarah.jpg' }, readTime: '10 min', isFeatured: true, pros: ['Fully autonomous publishing pipeline', 'Built for AI search engines (GEO)', 'No credit-based limits'], cons: ['Steeper learning curve', 'Overkill for single-page sites'], winner: 'NeuroSEO', pricing: [ { name: 'NeuroSEO', price: '$99/mo', details: 'Unlimited generation' }, { name: 'Surfer SEO', price: '$89/mo', details: '30 articles/mo' } ], features: [ { name: 'Semantic Entity Extraction', neuroseo: true, competitor: false }, { name: 'Autonomous Auto-Publishing', neuroseo: true, competitor: false }, { name: 'Content Editor', neuroseo: true, competitor: true } ], faq: [ { question: 'Is NeuroSEO harder to learn?', answer: 'It takes about a day to set up the pipeline, but saves hundreds of hours later.' } ]
  },
  {
    id: 'a1', title: 'Top 7 Surfer SEO Alternatives for Modern Teams', slug: 'surfer-seo-alternatives', excerpt: 'Looking to move away from Surfer SEO? Here are the best optimization platforms that focus on entity extraction and GEO.', content: DUMMY_CONTENT, tags: ['Alternatives', 'Surfer SEO'], category: 'alternatives', date: '2026-07-01', author: { name: 'Alex Rivera', role: 'Growth Marketer', avatar: '/avatars/alex.jpg' }, readTime: '14 min', isFeatured: true, pros: ['Better pricing models', 'AI-native capabilities'], cons: ['Migration takes time']
  },
  {
    id: 'cs1', title: 'How AcmeCorp Scaled Organic Traffic by 340% in 3 Months', slug: 'acmecorp-case-study', excerpt: 'By migrating from manual writing to NeuroSEO\'s programmatic pipeline, AcmeCorp dominated the competitive SaaS space.', content: DUMMY_CONTENT, tags: ['SaaS', 'B2B'], category: 'case-studies', date: '2026-06-25', author: { name: 'Elena Smith', role: 'Customer Success', avatar: '/avatars/elena.jpg' }, readTime: '5 min', isFeatured: true, metrics: [ { label: 'Traffic Increase', value: '+340%' }, { label: 'Time Saved', value: '40hrs/wk' }, { label: 'New Keywords', value: '12,500' } ], company: { name: 'AcmeCorp', industry: 'B2B SaaS', size: '250-500 employees' }, challenge: 'Producing high-quality technical content at scale was bottlenecked by manual writing and research.', solution: 'Implemented NeuroSEO autonomous pipeline to generate, review, and auto-publish 50+ articles monthly.'
  },
  {
    id: 'd1', title: 'NeuroSEO REST API v2', slug: 'rest-api-v2', excerpt: 'Build custom headless CMS integrations and trigger generation workflows programmatically.', content: DUMMY_CONTENT, tags: ['API', 'Reference'], category: 'documentation', date: '2026-07-01', author: { name: 'NeuroSEO Eng Team', role: '', avatar: '' }, readTime: '20 min', isFeatured: true
  },
  {
    id: 't1', title: 'Keyword Difficulty & Intent Checker', slug: 'keyword-difficulty-checker', excerpt: 'Instantly analyze the SERP competition and semantic intent for any keyword query before you write a single word.', content: DUMMY_CONTENT, tags: ['Free Tool', 'Research'], category: 'tools', date: '2026-07-01', author: { name: 'Product Team', role: '', avatar: '' }, readTime: 'Interactive', isFeatured: true
  }
];

const basePath = path.join(__dirname, 'content');

for (const post of posts) {
  const dir = path.join(basePath, post.category);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  // extract content
  const { content, ...frontmatter } = post;
  
  const fileContent = `---
${Object.entries(frontmatter).map(([key, value]) => {
  return `${key}: ${JSON.stringify(value)}`;
}).join('\n')}
---

${content}
`;

  fs.writeFileSync(path.join(dir, `${post.slug}.mdx`), fileContent);
  console.log(`Generated ${dir}/${post.slug}.mdx`);
}
