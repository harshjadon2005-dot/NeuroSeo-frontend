const testPayload = {
  slug: 'neuroseo-vs-chatgpt',
  title: 'NeuroSEO vs ChatGPT: Which is Better for SEO?',
  excerpt: 'A deep dive into why AI chat interfaces fail at scale, and why programmatic SEO engines like NeuroSEO are the future.',
  tags: ['Compare', 'AI Tools'],
  content: `
## Why ChatGPT isn't enough
While ChatGPT is great for one-off drafting, it lacks the systemic architecture to manage internal linking, topical authority maps, and programmatic deployment.

### The NeuroSEO Advantage
NeuroSEO automatically handles:
1. Automated internal linking
2. Schema markup generation
3. Direct CMS publishing

<div class="callout bg-emerald-50/50 border border-emerald-500/20 p-4 rounded-xl my-6">
  <strong>Verdict:</strong> Use ChatGPT for brainstorming. Use NeuroSEO for scaling your organic growth engine.
</div>
  `
};

fetch('http://localhost:3002/api/neuroseo-webhook', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    // In dev mode, the signature check is bypassed if we don't send one
  },
  body: JSON.stringify(testPayload)
})
.then(res => {
  if (!res.ok) throw new Error('Webhook failed: ' + res.statusText);
  console.log('Successfully triggered webhook! Article should now exist.');
})
.catch(err => console.error(err));
