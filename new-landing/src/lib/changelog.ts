/**
 * Release notes / changelog content.
 *
 * Releases up to Q3 2026 come from the quarterly business reviews, so only
 * their quarter is known. `date` places each one on a representative month
 * inside that quarter, and `precision` stays "month", so the page shows the
 * month and the year only and implies no precision we lack. A release that the
 * changelog routine writes carries the exact day of the push and sets
 * `precision` to "day", so the page shows that day. Several releases can ship
 * in one month, thus the day is what separates them.
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
   * ISO date, YYYY-MM-DD. For a quarterly release the month is representative;
   * from September 2026 on it is exact. Drives sorting and the RSS feed.
   */
  date: string;
  /**
   * How exact `date` is, and therefore how the page renders it. "day" shows
   * the day, and belongs to a release dated from its own push. "month" shows
   * the month and the year only, and is the default, because an older entry
   * knows its quarter and not its day.
   */
  precision?: "day" | "month";
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
    slug: "oct-2026-scorecard-deadlines-chart-color",
    date: "2026-10-28",
    precision: "day",
    title:
      "See which goals are slipping, and the text AI never reads on your pages",
    summary:
      "A goal with no date and no rank cannot tell you where to look first, and a page whose answer appears only after JavaScript may never be read by the engines you are trying to win. This release closes both, and keeps what AI believes about you current every day.",
    tags: ["New", "Improved"],
    highlights: [
      {
        title: "Know which goals are at risk, while you can still act",
        description:
          "A goal now carries a deadline and a priority, so the board tells you where the risk is instead of asking you to read every card. A goal that falls behind the pace it needs turns amber, then red, early enough to do something about it.",
        bullets: [
          "A deadline in one click: the end of the month, the end of the quarter, 30 days or 90 days",
          "The page of a goal says in one sentence whether you are ahead or behind",
          "The agent asks for the deadline and the priority while you build the goal, thus no goal starts without them",
        ],
      },
      {
        title: "The text that AI crawlers never read",
        description:
          "If the answer on your page appears only after JavaScript runs, a crawler that does not run JavaScript never reads it, and a page you paid for cannot be cited. Content Analysis now compares your page before and after JavaScript and lists the text that only a browser sees, so your developers get the exact lines to fix.",
        link: { label: "See Content Analysis", href: "/content-analysis/" },
      },
      {
        title: "What AI believes about you, checked every day",
        description:
          "A claim that the engines start repeating about your brand reaches you within a day, with no manual run. Reputation moves faster than a check that waits for somebody to remember it.",
      },
    ],
    otherUpdates: [
      "Charts carry the colour of your brand, which you pick in the settings of the dashboard. Competitors keep their own.",
      "Mark the owner of a domain one time on Citations, and each URL of that domain follows.",
      "The sentiment of a cited Instagram post, reel or profile now comes from the content itself.",
      "Crawlability tries again as a browser when a site refuses it, and names Cloudflare or the firewall that refused, because the same rule can refuse the AI bots.",
      "A ChatGPT ad of more than one card shows as the carousel that ChatGPT shows.",
      "An answer carries the name of the engine that gave it, such as ChatGPT or Perplexity, in place of \"Assistant\".",
      "The brand picker shows the ID of two brands that share a name.",
    ],
  },

  {
    slug: "oct-2026-perception-monitoring-public-api",
    // Shipped in October 2026, dated from the release history.
    date: "2026-10-20",
    title: "Perception Monitoring, the Public API and AI crawler analytics",
    summary:
      "Knowing that an engine mentions you is the start. This release tracks whether the specific claims it makes about you hold up over time, shows which AI bots actually read your site, and opens the platform's data to your own tools through a public API.",
    tags: ["New", "Improved", "API"],
    highlights: [
      {
        title: "Perception Monitoring",
        description:
          "Pick a claim about your brand and Genezio tracks it across every run: how often AI answers agree or disagree, how that agreement moves over time, and how it differs from one model to the next. Each verdict keeps the pages it cited, so you can see which domains sit behind the answers that get you right and the ones that get you wrong.",
      },
      {
        title: "Public API and API keys",
        description:
          "Account owners create API keys, each limited to the brands it needs, and read Genezio data from their own reporting stack. The API covers visibility, recommendation, citations, sentiment, fact checking, query fan-outs, products and conversations, and manages topics, scenarios, competitors and personas. It is described in OpenAPI and documented with a full reference.",
      },
      {
        title: "ChatGPT Ads",
        description:
          "ChatGPT now shows sponsored placements inside answers. A new Ads page captures each ad in your tracked conversations and shows who advertises on your topics, which creatives they run, the topics and scenarios that trigger them, and your share of ad visibility against competitors.",
      },
      {
        title: "Agent Analytics",
        description:
          "Upload an access log from your site or CDN and see which AI bots visit, what they read, how your server answers them, and how often the pages they read end up cited in AI answers. Each visit is checked against the IP ranges that the AI providers publish, so a fake user agent shows up as unverified instead of inflating the count.",
      },
      {
        title: "Crawlability",
        description:
          "For each website of a brand, Crawlability reads robots.txt and the sitemaps and shows which of 49 AI bots can crawl the site. A host is flagged when a main AI search bot is blocked, when robots.txt is unreachable, or when no valid sitemap exists.",
      },
      {
        title: "Custom roles",
        description:
          "Account owners define their own roles and give each one a level for every area of the product. Members and invites take a custom role or a built-in one.",
      },
      {
        title: "Content Hub: plans, formats and video",
        description:
          "Content Hub now shows the plan of an article for your approval before it writes, and one run produces every format you ask for.",
        bullets: [
          "Brand skills: house style and structure rules, written once or uploaded from PDF, Word or Markdown files, that the agents follow",
          "Content Analysis reads a YouTube link and gives a video analysis, with a partial report when the video has no transcript",
          "Topics in New Content have search and filters",
        ],
        link: { label: "See Content Hub", href: "/content-hub/" },
      },
      {
        title: "Scorecard goals over MCP",
        description:
          "An MCP client such as Claude can now create and change Scorecard goals. The goal agent does the build, the same way it does in the dashboard.",
        link: { label: "See the MCP server", href: "/mcp/" },
      },
    ],
    otherUpdates: [
      "A new sidebar for the brand, the account and the user, with a search of every page.",
      "ChatGPT answers that use generative UI show as ChatGPT draws them: layout, maps, images, forms and charts.",
      "Custom answer engines, with a plan limit and an explicit choice of the topics they run on.",
      "The prompts of a topic can come from Search Console queries.",
      "The users page exports the members as a CSV file.",
    ],
  },
  {
    slug: "sep-2026-scorecard-content-hub",
    // Shipped in September 2026, dated from the release history.
    date: "2026-09-25",
    title: "Scorecard, and a Content Hub that works the way editors do",
    summary:
      "Dashboards answer the questions someone thought to build them for. Scorecard answers yours: describe a business goal in plain words, and an agent turns it into a metric that updates every day.",
    tags: ["New", "Improved", "Integrations"],
    highlights: [
      {
        title: "Scorecard",
        description:
          "Describe a goal in a conversation, for example the share of recommendations you win against one competitor in one market. The goal agent writes the metric, runs it on yesterday's data every day, and puts it on a board you arrange yourself.",
        bullets: [
          "Views for checklists, step lines, share bars and day grids",
          "A row that names a product shows the product's photo",
          "Every action on the board goes to the audit log",
        ],
      },
      {
        title: "Content Hub editing",
        description:
          "The New Content wizard starts with the content type, and a brief can generate its own type. Each version highlights the text that changed, and an article gives its schema.org JSON-LD markup.",
        link: { label: "See Content Hub", href: "/content-hub/" },
      },
      {
        title: "Content Analysis for landing pages and lists of URLs",
        description:
          "Content Analysis has a mode for landing pages, and it can start one analysis for each URL of a list.",
        link: { label: "See Content Analysis", href: "/content-analysis/" },
      },
      {
        title: "Topics from a Search Console export",
        description:
          "A brand can seed its topics from a Search Console CSV export, which works without a live connection.",
      },
      {
        title: "Personas with a country",
        description:
          "Each persona shows its country, and its conversations take that country's language.",
      },
    ],
    otherUpdates: [
      "Free-text search across the conversations of a brand.",
      "A Usage tab for each brand.",
      "Master filters hold personas, and the topic list names the type of each topic.",
      "A knowledge base imports a CSV file or a workbook.",
      "The title of a citation fills in from the page itself.",
      "An owner renames the account from the menu.",
    ],
  },
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

/**
 * The date as a reader says it. An entry of day precision gives
 * "23 October 2026", and any other entry gives "October 2026".
 */
export function formatChangelogDate(entry: ChangelogEntry): string {
  const month = formatChangelogMonth(entry.date);
  if (entry.precision !== "day") return month;
  return `${Number(entry.date.slice(8, 10))} ${month}`;
}

/**
 * The top line of the date rail. An entry of day precision gives "Oct 23", and
 * any other entry gives "Oct".
 */
export function formatChangelogRailDate(entry: ChangelogEntry): string {
  const short = formatChangelogMonthShort(entry.date);
  if (entry.precision !== "day") return short;
  return `${short} ${Number(entry.date.slice(8, 10))}`;
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
