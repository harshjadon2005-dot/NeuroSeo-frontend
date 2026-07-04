export type RoadmapStatus = 'shipped' | 'building' | 'planning' | 'research' | 'deprecated';

export type ProgressItem = {
  label: string;
  value: number; // 0 to 100
};

export type RoadmapItem = {
  id: string;
  title: string;
  desc: string; // short description for the card
  tag: string; // e.g. "Core AI", "CMS", "Enterprise"
  status: RoadmapStatus;
  estimatedRelease: string;
  priority: 'High' | 'Medium' | 'Low';
  progress?: ProgressItem[]; // Optional, primarily for 'building' status
  details: {
    problem: string;
    solution: string;
    technical: string;
    impact: string;
    dependencies?: string[];
  };
};

export type RoadmapQuarter = {
  quarter: string;
  items: RoadmapItem[];
};

export const TIMELINE: RoadmapQuarter[] = [
  {
    quarter: "Q3 2025",
    items: [
      {
        id: 'NEU-094',
        title: 'AI Overviews Tracking',
        desc: 'Monitor citations and brand mentions directly within Google AI Overviews.',
        tag: 'Analytics',
        status: 'shipped',
        estimatedRelease: 'Released Aug 2025',
        priority: 'High',
        details: {
          problem: 'Standard SERP tracking tools do not capture AI-generated overviews where LLMs synthesize answers rather than just linking to pages.',
          solution: 'We built a proprietary crawler that triggers conversational queries and parses the generated AI Overviews to detect entity citations and brand sentiment.',
          technical: 'Implemented via a headless browser cluster simulating human-like search interactions, backed by our own entity-recognition model to parse the generative text.',
          impact: 'Allows enterprises to measure their GEO (Generative Engine Optimization) share of voice accurately.',
        }
      },
      {
        id: 'NEU-098',
        title: 'Extractability Scoring',
        desc: 'Algorithm to measure how easily LLMs can parse and understand your content.',
        tag: 'Core AI',
        status: 'shipped',
        estimatedRelease: 'Released Sep 2025',
        priority: 'High',
        details: {
          problem: 'Content that is highly ranked by traditional algorithms often fails to be cited by LLMs due to ambiguous semantic structure.',
          solution: 'A new metric (0-100) that evaluates semantic density, entity relationships, and syntactic clarity.',
          technical: 'Uses a lightweight transformer model to simulate an LLM\'s extraction process on your drafted content.',
          impact: 'Increases the likelihood of being cited as a definitive source in ChatGPT and Google AI overviews.',
          dependencies: ['Entity Knowledge Graph v2']
        }
      },
    ]
  },
  {
    quarter: "Q4 2025",
    items: [
      {
        id: 'NEU-102',
        title: 'WordPress Plugin v2',
        desc: 'One-click autonomous publishing support for complex WordPress architectures.',
        tag: 'CMS',
        status: 'shipped',
        estimatedRelease: 'Released Nov 2025',
        priority: 'Medium',
        details: {
          problem: 'Enterprise WordPress sites often use custom post types, ACF fields, and complex taxonomies that our v1 publisher couldn\'t handle natively.',
          solution: 'A complete rewrite of the WordPress integration supporting mapping of AI-generated content directly to Advanced Custom Fields and custom taxonomies.',
          technical: 'Built on the WordPress REST API with a custom authentication layer for secure, headless data pushing.',
          impact: 'Zero-touch publishing workflows for massive media and SaaS companies using WordPress.',
        }
      },
      {
        id: 'NEU-112',
        title: 'Shopify Product Descriptions',
        desc: 'Bulk autonomous product description generation optimized for semantic search.',
        tag: 'Integration',
        status: 'building',
        estimatedRelease: 'Expected Dec 2025',
        priority: 'High',
        progress: [
          { label: 'Backend API', value: 95 },
          { label: 'Shopify App', value: 70 },
          { label: 'Beta Testing', value: 40 }
        ],
        details: {
          problem: 'E-commerce stores struggle to write thousands of unique, semantically rich product descriptions that rank in AI search.',
          solution: 'A pipeline that ingests Shopify catalogs, enriches them with entity data, and generates highly extractable descriptions in bulk.',
          technical: 'Leverages the Shopify Admin API combined with batched asynchronous generation queues.',
          impact: 'Massive organic traffic increases for e-commerce catalogs without manual writing.',
          dependencies: ['Bulk Generation Queue']
        }
      },
    ]
  },
  {
    quarter: "Q1 2026",
    items: [
      {
        id: 'NEU-115',
        title: 'Advanced Webhooks',
        desc: 'Connect Seobox publishing events to thousands of external applications.',
        tag: 'Automation',
        status: 'building',
        estimatedRelease: 'Expected Feb 2026',
        priority: 'Medium',
        progress: [
          { label: 'Event Emitters', value: 80 },
          { label: 'UI Configuration', value: 50 },
          { label: 'Security/HMAC', value: 90 }
        ],
        details: {
          problem: 'Users want to trigger Slack notifications, Zapier workflows, and custom backend scripts immediately when content is generated or published.',
          solution: 'A robust webhook system supporting granular event subscriptions (e.g., article.drafted, article.published).',
          technical: 'Asynchronous event bus using Redis Streams to reliably dispatch signed JSON payloads to user endpoints.',
          impact: 'Unlocks limitless custom automation for advanced marketing teams.',
        }
      },
      {
        id: 'NEU-118',
        title: 'Enterprise Workspaces',
        desc: 'Role-based access control and multi-stage approval flows.',
        tag: 'Enterprise',
        status: 'planning',
        estimatedRelease: 'Expected Mar 2026',
        priority: 'High',
        details: {
          problem: 'Large organizations cannot allow AI to publish autonomously without human-in-the-loop compliance and editorial review.',
          solution: 'Customizable approval chains where Editors review drafted content before it proceeds to the Publisher role.',
          technical: 'State machine architecture managing document lifecycles tied to a rigid RBAC (Role-Based Access Control) policy engine.',
          impact: 'Unlocks Seobox for Fortune 500 companies with strict editorial guidelines.',
        }
      },
    ]
  },
  {
    quarter: "Q2 2026",
    items: [
      {
        id: 'NEU-120',
        title: 'Webflow CMS Native Sync',
        desc: 'Direct, bi-directional mapping to Webflow Collections.',
        tag: 'CMS',
        status: 'planning',
        estimatedRelease: 'Expected May 2026',
        priority: 'High',
        details: {
          problem: 'Exporting content to Webflow currently requires intermediary tools like Zapier or Make, which break complex rich text formatting.',
          solution: 'A native integration that maps Seobox document blocks directly to Webflow CMS item fields.',
          technical: 'Utilizes the new Webflow v2 Data API for precise rich text node translation.',
          impact: 'Seamless publishing for modern SaaS startups built on Webflow.',
          dependencies: ['Rich Text AST Converter']
        }
      },
      {
        id: 'NEU-124',
        title: 'Custom Brand Fine-tuning',
        desc: 'Train the core generation engine strictly on your proprietary brand voice.',
        tag: 'Core AI',
        status: 'research',
        estimatedRelease: 'Expected Jun 2026',
        priority: 'High',
        details: {
          problem: 'Prompt engineering isn\'t enough to force LLMs to perfectly mimic a highly specific, idiosyncratic corporate brand voice.',
          solution: 'Allowing enterprises to upload their past successful content to automatically fine-tune a dedicated LoRA adapter.',
          technical: 'Automated parameter-efficient fine-tuning (PEFT) pipeline using customer-provided text corpora.',
          impact: 'Generates content that requires zero editorial revisions.',
        }
      },
    ]
  },
  {
    quarter: "Q3 2026",
    items: [
      {
        id: 'NEU-128',
        title: 'Video SEO Generation',
        desc: 'Automated YouTube description, chapter, and transcript semantic optimization.',
        tag: 'New Product',
        status: 'research',
        estimatedRelease: 'Expected Aug 2026',
        priority: 'Medium',
        details: {
          problem: 'Video content is a massive search surface, but optimizing transcripts and metadata for AI engines is incredibly tedious.',
          solution: 'An automated pipeline that ingests video audio, generates semantically rich chapters, and optimizes the description for entity extraction.',
          technical: 'Integration with Whisper for ASR, followed by our core LLM stack for semantic restructuring.',
          impact: 'Captures the growing visual search and video summarization markets.',
        }
      },
      {
        id: 'NEU-135',
        title: 'Legacy SEO Deprecation',
        desc: 'Sunsetting our keyword-density tracking features.',
        tag: 'Analytics',
        status: 'deprecated',
        estimatedRelease: 'Jul 2026',
        priority: 'Low',
        details: {
          problem: 'Traditional keyword density metrics are actively harmful in a GEO (Generative Engine Optimization) world, encouraging keyword stuffing.',
          solution: 'We are completely removing keyword density and exact-match tracking from the platform.',
          technical: 'Deprecating the `v1/density` API and removing related UI components.',
          impact: 'Forces users into modern, semantic-first SEO strategies.',
        }
      }
    ]
  }
];
