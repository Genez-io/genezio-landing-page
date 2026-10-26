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
 *
 * Write for the marketer reading it, not the engineer who built it. Every
 * title says what the customer can now do or know ("Catch false claims before
 * your customers believe them"), not what the feature is called or how it
 * works. Bullets and other updates use "Benefit: detail" — the page bolds the
 * part before the colon. Leave out internal work with no customer-facing value.
 */

export type ChangelogTag =
  | "New"
  | "Improved"
  | "Fixed"
  | "API"
  | "Integrations";

export interface ChangelogHighlight {
  /** The value to the customer, rendered as the sub-heading of the block. */
  title: string;
  /** One or two sentences on what the customer gets, then what shipped. */
  description: string;
  /** Optional "Benefit: detail" bullets for details that don't need a paragraph. */
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
    slug: "oct-2026-perception-monitoring-public-api",
    // Shipped in October 2026, dated from the release history.
    date: "2026-10-20",
    title: "Know whether AI gets your story right, and put the data where your team works",
    summary:
      "Being mentioned is only the start. This release shows whether the specific claims AI makes about you hold up over time, which AI bots actually read your site, and who is buying ads on your topics in ChatGPT. Then it sends that data into the tools your team already reports from.",
    tags: ["New", "Improved", "API"],
    highlights: [
      {
        title: "Find out whether AI repeats the story you want told",
        description:
          "Pick a claim about your brand, such as “the most secure option” or “best for small teams”, and Perception Monitoring checks it in every run. See how often AI agrees, how that changes over time and model by model, and which websites sit behind the answers that get you right and the ones that get you wrong.",
      },
      {
        title: "Put AI visibility in the reports your leadership already reads",
        description:
          "The new Public API sends Genezio data straight into your own dashboards and BI tools, so AI visibility sits next to the rest of your marketing numbers. It covers visibility, recommendations, citations, sentiment, fact checks, products and conversations. Each API key is limited to the brands it needs.",
      },
      {
        title: "See who is buying their way into ChatGPT answers on your topics",
        description:
          "ChatGPT now shows sponsored placements inside answers. The new Ads page shows which competitors advertise on your topics, the ads they run, the questions that trigger them, and your share of ad visibility next to theirs.",
      },
      {
        title: "See which AI bots read your site, and whether it pays off",
        description:
          "Upload an access log from your site or CDN to see which AI bots visit, what they read, and how often those pages end up cited in AI answers. Every visit is checked against the IP ranges AI providers publish, so bots faking their identity don't inflate your numbers.",
      },
      {
        title: "Make sure AI is allowed to read your site",
        description:
          "Crawlability checks every website of your brand against 49 AI bots and flags the problems that quietly keep you out of AI answers: a major AI search bot blocked, robots.txt unreachable, or no valid sitemap.",
      },
      {
        title: "Give every teammate exactly the access they need",
        description:
          "Account owners can now create their own roles and choose what each one can see and change in every part of the product.",
      },
      {
        title: "Approve the outline before AI writes the article",
        description:
          "Content Hub now shows you the plan for an article before writing it, and one run gives you every format you asked for.",
        bullets: [
          "Content that sounds like you: upload your style guide once, as PDF, Word or Markdown, and every draft follows it.",
          "Learn from video too: paste a YouTube link and get a content analysis of the video.",
          "Find the right topic faster: search and filter topics when you start new content.",
        ],
        link: { label: "See Content Hub", href: "/content-hub/" },
      },
      {
        title: "Set business goals from Claude",
        description:
          "Create and change Scorecard goals straight from Claude or any other MCP client, without opening the dashboard.",
        link: { label: "See the MCP server", href: "/mcp/" },
      },
    ],
    otherUpdates: [
      "Find any page in seconds: a new sidebar with search across the whole product.",
      "See answers the way your customers see them: ChatGPT answers keep their maps, images, forms and charts.",
      "Track the AI assistants your industry uses: add custom answer engines and choose the topics they run on.",
      "Start from what people already search for: build a topic's prompts from your Search Console queries.",
      "Share your team list: export members as a CSV file.",
    ],
  },
  {
    slug: "sep-2026-scorecard-content-hub",
    // Shipped in September 2026, dated from the release history.
    date: "2026-09-25",
    title: "Track the goals your business cares about, not the ones a dashboard picked for you",
    summary:
      "Standard dashboards only answer the questions someone built them for. Scorecard answers yours: describe a business goal in plain words, and Genezio turns it into a metric that updates every day.",
    tags: ["New", "Improved", "Integrations"],
    highlights: [
      {
        title: "Turn any business goal into a number that updates daily",
        description:
          "Describe a goal in a conversation, for example “our share of recommendations against one competitor in Germany.” Scorecard builds the metric, refreshes it every day, and puts it on a board you arrange yourself.",
        bullets: [
          "Show progress the way your team reads it: checklists, trend lines, share bars and day grids.",
          "Recognise products at a glance: rows that name a product show its photo.",
          "Stay audit-ready: every change to the board is logged.",
        ],
      },
      {
        title: "Edit content the way your editors already work",
        description:
          "Start with the content type you need, see exactly what changed between versions, and get structured data markup with every article, ready for search engines and AI to read.",
        link: { label: "See Content Hub", href: "/content-hub/" },
      },
      {
        title: "Check landing pages, or a whole list of pages at once",
        description:
          "Content Analysis now handles landing pages, and you can paste a list of URLs to analyse them all in one go.",
        link: { label: "See Content Analysis", href: "/content-analysis/" },
      },
      {
        title: "Build topics from your search data, no connection required",
        description:
          "Upload a Search Console CSV export and Genezio turns the searches you already rank for into AI tracking topics.",
      },
      {
        title: "See what buyers in each country see",
        description:
          "Every persona now has a country, and its conversations run in that country's language.",
      },
    ],
    otherUpdates: [
      "Find any conversation: free-text search across every conversation of a brand.",
      "Keep an eye on usage: a Usage tab for each brand.",
      "Filter faster: master filters include personas, and the topic list shows each topic's type.",
      "Bring your knowledge in quickly: import a CSV file or spreadsheet into a knowledge base.",
      "Cleaner citation lists: citation titles fill in from the page itself.",
      "Rename your account from the menu.",
    ],
  },
  {
    slug: "sep-2026-analytics-integrations",
    // Reported in Q3 2026; the month below is representative, not exact.
    date: "2026-09-10",
    title: "Connect AI visibility to the search demand you already report on",
    summary:
      "AI visibility is hard to defend in a budget meeting when it lives in its own silo. Genezio now sits next to the search data your team already trusts, so you can show how AI answers and search demand move together.",
    tags: ["New", "Integrations"],
    highlights: [
      {
        title: "Turn the searches you already win into AI topics",
        description:
          "Connect Google Search Console to see whether your search rankings and your AI recommendations move together, and to build tracking topics straight from the queries your site already ranks for. No blank-page topic research.",
      },
    ],
  },
  {
    slug: "jun-2026-share-of-voice-fact-checker",
    // Reported in Q2 2026; the month below is representative, not exact.
    date: "2026-06-24",
    title: "Know your share of every AI answer, and catch what AI gets wrong about you",
    summary:
      "Being mentioned is no longer enough. Brands now need to know how much of the conversation they own and whether AI describes them correctly. This release answers both, and clears the security review that enterprise teams need before they can start.",
    tags: ["New", "Improved", "Integrations"],
    highlights: [
      {
        title: "See how much of the AI conversation you own",
        description:
          "AI Share of Voice gives you one number for your share of AI answers against your competitors, a metric you can put in front of leadership and track quarter over quarter. Every answer is broken down sentence by sentence, so you see exactly where you were named and where a competitor was.",
      },
      {
        title: "Catch false claims before your customers believe them",
        description:
          "Tell Genezio what is true about your brand once. The new Fact Checker agent then flags every time an AI engine says something false about you, whether that's an outdated price, a discontinued product or a feature you never had, so you can correct the source instead of finding out from a customer.",
      },
      {
        title: "Understand how AI talks about you, not just whether it does",
        description:
          "Brand Perception & Sentiment shows the tone AI uses when it describes you, how that tone shifts over time, and the strengths and weaknesses AI attributes to your brand, laid out as a SWOT.",
      },
      {
        title: "Learn which sentences on your site AI actually quotes",
        description:
          "See the exact passages AI engines lift from your pages and which sections they skip. Your content team knows what to protect, what to rewrite and what to stop producing.",
        link: { label: "See Content Analysis", href: "/content-analysis/" },
      },
      {
        title: "See the AI traffic your analytics can't",
        description:
          "Bring in your CDN logs and see which AI crawlers read your site, which pages they read, and which of those visits turn into citations. Real server traffic instead of estimates.",
      },
      {
        title: "Find out if AI shopping assistants recommend your products",
        description:
          "Shopping Analysis tracks how your products and retailers show up when people shop inside AI chats. Now in testing with clients.",
        link: { label: "See In-Chat Shopping", href: "/in-chat-shopping/" },
      },
      {
        title: "Pass enterprise security review and cover every market you sell in",
        description:
          "Genezio is now SOC 2 Type II certified, which removes the most common blocker in enterprise procurement.",
        bullets: [
          "Sign in the way your company already does: SAML SSO and Microsoft login.",
          "Cover the engines your customers use: DeepSeek, Grok and Microsoft Copilot join the line-up.",
          "See what local buyers see: dedicated in-country proxies for Germany, France, Australia, Czechia and Austria.",
        ],
        link: { label: "Enterprise & security", href: "/security/" },
      },
      {
        title: "Publish on-brand content faster",
        description:
          "Content Hub templates let your team turn out articles and briefs in your house style without starting from scratch. You can also choose which AI engines run on each topic, so you test where it matters to your business.",
        link: { label: "See Content Hub", href: "/content-hub/" },
      },
    ],
    otherUpdates: [
      "See what's working, not just what's broken: Introspector now highlights the positive things AI says about you and the citations that help you.",
      "Hear about changes as they happen: automatic alerts when something important moves.",
      "Organise topics your way: custom tags that match how your team plans and reports.",
    ],
  },
  {
    slug: "mar-2026-self-serve-four-agents",
    // Reported in Q1 2026; the month below is representative, not exact.
    date: "2026-03-18",
    title: "Start measuring AI recommendations on your own, the same day",
    summary:
      "You no longer need a kickoff call to see how AI treats your brand. Sign up and get results the same day, then go further: find out why competitors get cited, fill the gaps with content, and ask questions of your data in plain language.",
    tags: ["New", "Improved"],
    highlights: [
      {
        title: "Get started without waiting on a setup call",
        description:
          "Self-serve onboarding is live. Create an account and start tracking your brand right away, with no manual setup on our side.",
      },
      {
        title: "Four agents that test your brand the way buyers actually ask",
        description:
          "Prompter, Comparer, Introspector and Recommender each look at your brand from a different angle: discovery, comparison, reputation and recommendation. Each one adapts to your type of business, and each runs full multi-turn conversations as your real customer personas instead of one-off prompts.",
      },
      {
        title: "Find out why a competitor's page gets cited instead of yours",
        description:
          "Page Analyser compares a competitor's winning article with the topic and scenario it wins on, so you know what to change instead of guessing.",
        link: { label: "See Content Analysis", href: "/content-analysis/" },
      },
      {
        title: "Go from content gap to published draft in minutes",
        description:
          "Give Genezio a topic, a few keywords and a subject, and get an article or brief back. The gap you found in the morning is a draft by lunch.",
        link: { label: "See Content Hub", href: "/content-hub/" },
      },
      {
        title: "See exactly where you win and lose against each competitor",
        description:
          "Head-to-head analysis puts you and one competitor side by side. Fan-out clustering groups the follow-up searches AI runs behind a single question, so you see the whole set of queries you need to show up for.",
      },
      {
        title: "Know who controls the sources AI trusts about you",
        description:
          "Every citation is now labelled as your own site, a competitor's, social media, news or community. You can see whether AI learns about you from you or from someone else, and where your next piece of outreach should go.",
      },
      {
        title: "Ask your data a question and get an answer",
        description:
          "Ask about your AI visibility in plain language, in Genezio or straight from Claude through our MCP connector. No dashboards to dig through.",
        link: { label: "See the MCP server", href: "/mcp/" },
      },
    ],
    otherUpdates: [
      "Comparisons that end with a verdict: every Comparer conversation now closes by asking which brand AI would recommend.",
      "Results that match what real people see: conversations also run logged out and on free accounts.",
      "More reliable results: a new test framework checks every prompt before it runs.",
      "Recommendation rates you can trust: new Introspector KPIs, plus fixes to recommended competitors and to how recommendation rate is calculated.",
      "Clearer next steps: more actionable insights, and a better first view right after onboarding.",
    ],
  },
  {
    slug: "nov-2025-brand-analysis-redesign",
    // Reported in Q4 2025; the month below is representative, not exact.
    date: "2025-11-26",
    title: "Go deeper into how AI sees your brand, and run it for every client",
    summary:
      "A rebuilt Brand Analysis makes it faster to get from “what happened” to “why it happened”, and agencies can now manage every client brand from one place.",
    tags: ["New", "Improved"],
    highlights: [
      {
        title: "Get to the answer faster",
        description:
          "Brand Analysis has a completely new interface built for exploration, so you can follow a question from the headline number down to the conversation that explains it.",
      },
      {
        title: "See the exact claims AI makes about you",
        description:
          "Analysis now reaches the individual statements AI makes about your brand and the follow-up searches it runs behind each question, not just whether you appeared.",
      },
      {
        title: "Test your brand from three new angles",
        description:
          "New Introspector, Recommender and Comparer topics show what AI thinks of you, whether it recommends you, and how it stacks you up against competitors.",
      },
      {
        title: "Run GEO for every client from one account",
        description:
          "Agency mode lets agencies manage many client brands side by side, so a GEO practice scales without juggling logins.",
        link: { label: "For agencies", href: "/agencies/" },
      },
    ],
  },
  {
    slug: "sep-2025-brand-analysis-ships",
    // Reported in Q3 2025; the month below is representative, not exact.
    date: "2025-09-09",
    title: "See how your brand shows up across the AI engines your customers use",
    summary:
      "Brand Analysis is here: a regular report on how visible your brand is in the AI answers your customers read, across the four engines that matter most.",
    tags: ["New"],
    highlights: [
      {
        title: "Know where you stand in AI answers",
        description:
          "Brand Analysis gives you a periodic report on your brand's visibility in AI answers, so you can track progress instead of spot-checking.",
      },
      {
        title: "Cover the engines your customers actually use",
        description:
          "Track your brand across ChatGPT, Google AI Overviews, Perplexity and Google AI Mode from one place.",
      },
      {
        title: "Bring your whole team in",
        description:
          "Invite teammates and manage who has access, so everyone works from the same numbers.",
      },
    ],
  },
  {
    slug: "may-2025-agents-audit-logs",
    // Reported in Q2 2025; the month below is representative, not exact.
    date: "2025-05-21",
    title: "Catch more chatbot risks, and prove your chatbot is getting better",
    summary:
      "Three new testing agents find problems the suite used to miss, and a new dashboard shows how your chatbot improves from one release to the next.",
    tags: ["New", "Improved"],
    highlights: [
      {
        title: "Find bias, data leaks and hidden capabilities before your users do",
        description:
          "The Industry Bias, Sanitization and Capability Detection agents test for risks that can embarrass a brand or break compliance.",
      },
      {
        title: "Sharper results from the agents you already use",
        description:
          "Fact Checker, Functional Tester, Off-topic, Competitor Advertising and Security now catch more and report it more clearly.",
      },
      {
        title: "Show progress over time, not just a single score",
        description:
          "The metrics dashboard tracks how your chatbot improves release after release, which is the evidence stakeholders ask for.",
      },
      {
        title: "Know who changed what, and when",
        description:
          "Audit logs record every action in the platform, ready for your compliance reviews.",
      },
    ],
    otherUpdates: [
      "Tests that feel like real customers: more realistic testing conversations.",
      "Better coverage with less effort: stronger generation of facts and test scenarios.",
    ],
  },
  {
    slug: "feb-2025-evaluation-agents-platform",
    // Reported in Q1 2025; the month below is representative, not exact.
    date: "2025-02-19",
    title: "Test your AI chatbot like thousands of real customers would",
    summary:
      "Ship AI assistants with confidence. The Evaluation Agents Platform puts your chatbot through thousands of realistic conversations before your customers have a single one.",
    tags: ["New"],
    highlights: [
      {
        title: "Launch knowing how your chatbot behaves",
        description:
          "Set up your knowledge base, personas and test agents, run simulations, and get detailed reports, all from one dashboard.",
      },
      {
        title: "Test at the scale of real traffic",
        description:
          "Run thousands of conversations in parallel, in multiple languages and configurations, so problems surface before launch instead of after.",
      },
      {
        title: "Ready-made testers for the risks that matter",
        description:
          "Start with a library of testing agents instead of writing test cases by hand.",
        bullets: [
          "Real customer behaviour: agents that act out different personalities and behaviour profiles.",
          "Compliance: agents built around industry-specific rules.",
          "Security: agents that probe for vulnerabilities.",
        ],
      },
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
