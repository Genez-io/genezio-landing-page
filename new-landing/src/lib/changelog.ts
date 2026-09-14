/**
 * Release notes / changelog content.
 *
 * Shipped work is recorded per quarter in the quarterly business reviews, so
 * the quarter of each release is known but the exact day is not. `date` places
 * each release on a representative month inside its known quarter — the month
 * is approximate, the quarter it sits in is not. The page deliberately renders
 * month and year only, never a day, so it does not imply precision we lack.
 *
 * Add a new release by prepending an entry. Only shipped work belongs here —
 * never roadmap or committed-but-unreleased capabilities.
 */

export type ChangelogTag =
  | "New"
  | "Improved"
  | "Fixed"
  | "API"
  | "Integrations";

export interface ChangelogHighlight {
  /** Feature name, rendered as the sub-heading of the block. */
  title: string;
  /** One or two sentences describing what shipped and why it matters. */
  description: string;
  /** Optional supporting bullets for the details that don't need a paragraph. */
  bullets?: string[];
  /** Optional screenshot or GIF illustrating the feature. */
  image?: { src: string; alt: string };
  /** Optional "Learn more" call to action. */
  link?: { label: string; href: string };
}

export interface ChangelogEntry {
  /** URL-safe id, used for the deep-link anchor (#<slug>). */
  slug: string;
  /**
   * ISO date, YYYY-MM-DD. The month is a representative month within the
   * release's known quarter; the day is never displayed. Drives sorting and
   * the RSS feed.
   */
  date: string;
  /** Headline for the whole release. */
  title: string;
  /** Short intro paragraph shown under the title. */
  summary: string;
  /** Labels shown next to the title. */
  tags: ChangelogTag[];
  /** Optional hero image for the release. */
  image?: { src: string; alt: string };
  /** The features that shipped in this period. */
  highlights: ChangelogHighlight[];
  /** Smaller items that don't warrant a full block. */
  otherUpdates?: string[];
}

export const changelog: ChangelogEntry[] = [
  {
    slug: "sep-2026-analytics-integrations",
    // Reported in Q3 2026; the month below is representative, not exact.
    date: "2026-09-10",
    title: "Google Analytics 4 and Search Console integrations",
    summary:
      "Genezio now connects to the two places your traditional web data already lives, so AI visibility can be read next to the traffic and the search behaviour around it.",
    tags: ["New", "Integrations"],
    highlights: [
      {
        title: "Google Analytics 4 integration",
        description:
          "A native GA4 connection that correlates AI visibility and recommendation metrics with downstream web traffic behaviour, including attribution for AI-influenced visits that arrive without a referrer header.",
      },
      {
        title: "Google Search Console integration",
        description:
          "Connect Search Console to a brand to correlate traditional search visibility with AI recommendation trends, and to generate topics directly from the queries your site already ranks for.",
      },
    ],
  },
  {
    slug: "jun-2026-share-of-voice-fact-checker",
    // Reported in Q2 2026; the month below is representative, not exact.
    date: "2026-06-24",
    title: "AI Share of Voice, the Fact Checker agent and SOC 2 Type II",
    summary:
      "The market moved from “are we mentioned” to “are we mentioned correctly.” This release followed it: a new headline metric, an agent that catches false claims, and the enterprise certifications and coverage to run all of it at scale.",
    tags: ["New", "Improved", "Integrations"],
    highlights: [
      {
        title: "AI Share of Voice",
        description:
          "A new headline metric measuring a brand's share of visibility across AI answers versus its competitors, with sentence-level brand attribution per AI response.",
      },
      {
        title: "Fact Checker agent and the Knowledge Base Layer",
        description:
          "The Knowledge Base Layer is a brand truth layer that verifies what an AI engine states during a conversation. The Fact Checker agent sits on top of it and flags when an engine says something false about your brand — bringing the agent suite to five: Prompter, Comparer, Introspector, Recommender and Fact Checker.",
      },
      {
        title: "Brand Perception & Sentiment",
        description:
          "How AI talks about a brand, not just whether it does: tone, trend over time, and an AI-perceived SWOT.",
      },
      {
        title: "Passage-Level Retrieval Analysis",
        description:
          "Captures the exact text fragments AI engines cite and maps them back to the source sections they came from, so you can see which passages are being retrieved and which are ignored.",
        link: { label: "See Content Analysis", href: "/content-analysis/" },
      },
      {
        title: "CDN Log Ingestion & Clustering",
        description:
          "Process server logs to show which AI crawlers visit a site and which of those visits turn into citations — tying crawl activity to real server traffic instead of estimates.",
      },
      {
        title: "Shopping Analysis",
        description:
          "A new module for tracking product and retailer visibility inside AI shopping conversations. Launched and in active testing with clients.",
        link: { label: "See In-Chat Shopping", href: "/in-chat-shopping/" },
      },
      {
        title: "Enterprise readiness and engine coverage",
        description:
          "SOC 2 Type II certification achieved, removing a recurring blocker in enterprise procurement, alongside broader authentication and coverage.",
        bullets: [
          "Enterprise auth: SAML SSO and Microsoft login",
          "Three new AI engines: DeepSeek, Grok and Microsoft Copilot",
          "Dedicated in-country proxies for Germany, France, Australia, Czechia and Austria",
        ],
        link: { label: "Enterprise & security", href: "/security/" },
      },
      {
        title: "Content Hub templates and per-topic engines",
        description:
          "Reusable templates for generating on-brand articles and briefs, plus the ability to choose which AI engines run on each topic for more granular testing.",
        link: { label: "See Content Hub", href: "/content-hub/" },
      },
    ],
    otherUpdates: [
      "Introspector positive signals: positive statements and positive citation scoring added to the Introspector agent.",
      "Notifications system with automatic alerts.",
      "Custom tagging system for organising topics with your own labels.",
    ],
  },
  {
    slug: "mar-2026-self-serve-four-agents",
    // Reported in Q1 2026; the month below is representative, not exact.
    date: "2026-03-18",
    title: "Self-serve goes live, and the platform consolidates around four agents",
    summary:
      "Self-serve onboarding went into production in January, and the product consolidated around four specialised agents — each with a strategy adapted to the customer's business type.",
    tags: ["New", "Improved"],
    highlights: [
      {
        title: "Self-serve onboarding in production",
        description:
          "Self-serve functionality went live in January, removing the manual setup that every new account previously depended on.",
      },
      {
        title: "The four-agent suite",
        description:
          "Prompter, Comparer, Introspector and Recommender were refined into a coherent suite, each running a strategy adapted to the customer's business type. Personas and multi-turn conversations were sharpened as the core differentiators.",
      },
      {
        title: "Page Analyser",
        description:
          "Explains why a competitor's article gets cited — comparing the content against the topic and scenario it is winning on.",
        link: { label: "See Content Analysis", href: "/content-analysis/" },
      },
      {
        title: "Content Generation",
        description:
          "Generate an article or a brief from a topic, a set of keywords and a subject, closing the gap between finding a content gap and filling it.",
        link: { label: "See Content Hub", href: "/content-hub/" },
      },
      {
        title: "Competitor head-to-head analysis and query fanout clustering",
        description:
          "Direct brand-versus-competitor comparison, and clustering of the fanned-out queries an engine generates from a single prompt.",
      },
      {
        title: "Citation classification",
        description:
          "Every citation is now classified as first-party, competitor, social media, news or community, which required auto-detecting the domains each competitor owns.",
      },
      {
        title: "Chat with your data",
        description:
          "Ask questions of your own visibility data in natural language, including through the Genezio connector for Claude as a skill and over MCP.",
        link: { label: "See the MCP server", href: "/mcp/" },
      },
    ],
    otherUpdates: [
      "A Recommender question now closes the Comparer flow.",
      "UI Automation workers that run logged out or with a free account.",
      "Prompt Test Framework.",
      "Introspector KPIs, plus Recommender fixes to recommended competitors and to how recommendation rate is calculated.",
      "More actionable insights, and an improved empty state after onboarding.",
      "DRIP email campaigns.",
    ],
  },
  {
    slug: "nov-2025-brand-analysis-redesign",
    // Reported in Q4 2025; the month below is representative, not exact.
    date: "2025-11-26",
    title: "A rebuilt Brand Analysis experience and agency mode",
    summary:
      "Brand Analysis became the primary driver of sales conversations, so it was rebuilt from the ground up — new interface, deeper analysis types, and a mode for agencies running several brands.",
    tags: ["New", "Improved"],
    highlights: [
      {
        title: "New Brand Analysis UI and UX",
        description:
          "A rebuilt interface, significantly more advanced than the previous dashboard and designed for deeper analytical exploration.",
      },
      {
        title: "Fanout queries and statements",
        description:
          "Analysis now works at the level of the queries an engine fans out from a prompt, and of the individual statements it makes about a brand.",
      },
      {
        title: "Three new topic types",
        description:
          "Introspector, Recommender and Comparer joined the product as distinct topic types, each probing brand presence from a different angle.",
      },
      {
        title: "Agency mode",
        description:
          "Agency mode in Brand Analysis, for teams running the platform across multiple client brands.",
        link: { label: "For agencies", href: "/agencies/" },
      },
    ],
    otherUpdates: [
      "Brand Analysis self-serve reached near-production readiness.",
      "The Customer Support Evaluation Platform continued in enterprise testing.",
    ],
  },
  {
    slug: "sep-2025-brand-analysis-ships",
    // Reported in Q3 2025; the month below is representative, not exact.
    date: "2025-09-09",
    title: "Brand Analysis ships, across four AI engines",
    summary:
      "Brand Analysis went from feature to finished product, with coverage across the four engines that mattered most to customers, and user management to go with it.",
    tags: ["New"],
    highlights: [
      {
        title: "Brand Analysis",
        description:
          "The Brand Analysis feature was completed — a periodic report giving customers insight into their brand's visibility across leading LLMs.",
      },
      {
        title: "Four AI engines",
        description:
          "A brand can now be analysed across ChatGPT, Google AI Overview, Perplexity and Google AI Mode.",
      },
      {
        title: "User management",
        description:
          "User management functionality was added to the dashboard.",
      },
    ],
    otherUpdates: [
      "The Customer Support Evaluation Platform entered testing with an enterprise client.",
    ],
  },
  {
    slug: "may-2025-agents-audit-logs",
    // Reported in Q2 2025; the month below is representative, not exact.
    date: "2025-05-21",
    title: "More evaluation agents, audit logs and a metrics dashboard",
    summary:
      "The agent library grew in both directions — existing agents got better, and three new ones covered ground the suite had been missing.",
    tags: ["New", "Improved"],
    highlights: [
      {
        title: "Three new agents",
        description:
          "Industry Bias, Sanitization and Capability Detection joined the evaluation agent library.",
      },
      {
        title: "Improved existing agents",
        description:
          "Fact Checker, Functional Tester, Offtopic, Competitor Advertising and Security were all improved.",
      },
      {
        title: "Metrics dashboard",
        description:
          "A dashboard showing how a chatbot has evolved over time, rather than only how it performs in a single run.",
      },
      {
        title: "Audit logs",
        description:
          "Audit logs were added to the platform.",
      },
    ],
    otherUpdates: [
      "Improved testing conversations.",
      "Better fact and testing scenario generation.",
    ],
  },
  {
    slug: "feb-2025-evaluation-agents-platform",
    // Reported in Q1 2025; the month below is representative, not exact.
    date: "2025-02-19",
    title: "The Evaluation Agents Platform",
    summary:
      "The platform pivoted: a new core product for evaluating agentic AI applications, with a dashboard, a scalable simulation engine, and the first library of testing agents.",
    tags: ["New"],
    highlights: [
      {
        title: "Evaluation Agents Platform",
        description:
          "A new core product, with a dashboard where clients manage knowledge bases, personas, test agent libraries, simulations and detailed reports.",
      },
      {
        title: "Conversations at scale",
        description:
          "Clients can run thousands of conversations in parallel, across multiple languages and configurations.",
      },
      {
        title: "The first AI Test Agents Library",
        description:
          "The first version of our own suite of testing agents, covering three families.",
        bullets: [
          "Personality and behavioural profile agents",
          "Compliance and industry-specific agents",
          "Security evaluation agents",
        ],
      },
    ],
    otherUpdates: [
      "A new homepage and messaging aligned with the agentic app positioning.",
      "Infrastructure shifted to support Python-first, agent-based development and deployment.",
    ],
  },
];

const MONTHS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/** Month and year, e.g. "September 2026". The day is never shown. */
export function formatChangelogMonth(iso: string): string {
  const [year, month] = iso.split("-").map(Number);
  const monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][month - 1];
  return `${monthName} ${year}`;
}

/** Abbreviated month for the date rail, e.g. "Sep". */
export function formatChangelogMonthShort(iso: string): string {
  return MONTHS_SHORT[Number(iso.split("-")[1]) - 1];
}

/** Four-digit year for the date rail. */
export function formatChangelogYear(iso: string): string {
  return iso.slice(0, 4);
}

/** Newest first. */
export function getChangelogEntries(): ChangelogEntry[] {
  return [...changelog].sort((a, b) => b.date.localeCompare(a.date));
}
