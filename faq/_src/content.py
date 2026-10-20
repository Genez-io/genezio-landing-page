# The FAQ articles. Every claim restates a fact published on genezio.com
# (home, pricing, methodology, security, product pages), in new wording.
# "summary" ships in the app bundle (needs JS), "body" in data/<id>.json
# (needs JS + fetch), "tip" in data/related/<id>.json (needs JS + a delayed fetch).

CATEGORIES = ["Getting started", "Measurement", "Platform", "Plans & billing", "Security & data"]

ARTICLES = [
  dict(id="GZ-2101", slug="what-is-genezio", cat="Getting started",
    title="What is Genezio?",
    summary="Genezio shows how AI assistants like ChatGPT and Gemini talk about your brand, and helps you become the brand they recommend.",
    body=[
      "Genezio is an AI visibility platform built for enterprise brands. It follows what answer engines such as ChatGPT, Gemini, Perplexity, Claude, Copilot and Google AI Overviews say when a buyer asks them for advice in your category.",
      "A classic SEO tool tells you where a page ranks on a results page. Genezio looks at the answer itself: whether your brand comes up, whether the assistant actually recommends it, how it describes you, and which websites it read before it replied.",
      "Those findings turn into a short list of work for your team: the content to publish or fix, and the outside sources worth earning a place in.",
    ],
    tip="Think of it as moving from tracking positions to tracking verdicts: the question is no longer where you rank, but whether the assistant picks you.",
    related=["GZ-2117", "GZ-2138", "GZ-2163"]),

  dict(id="GZ-2117", slug="which-ai-assistants-are-tracked", cat="Measurement",
    title="Which AI assistants does Genezio track?",
    summary="ChatGPT, Google AI Overviews and AI Mode, Gemini, Perplexity, Copilot, Claude, Grok, DeepSeek and Meta AI.",
    body=[
      "Genezio covers the major answer engines: ChatGPT, Google AI Overviews and AI Mode, Gemini, Perplexity, Microsoft Copilot, Claude, Grok, DeepSeek and Meta AI.",
      "Coverage is set per market and per language. The same question can get a different answer in London than in New York, so each market you sell in is measured on its own rather than averaged into one global number.",
      "Your plan decides which engines are included. Engines can be added later as your priorities change.",
    ],
    tip="Two cities that share a language can still get different shortlists from the same assistant, which is why markets are never merged.",
    related=["GZ-2124", "GZ-2179", "GZ-2101"]),

  dict(id="GZ-2124", slug="how-genezio-collects-data", cat="Measurement",
    title="How does Genezio collect its data?",
    summary="It runs realistic, multi-turn conversations with each assistant, written for the people who buy from you.",
    body=[
      "Genezio does not wait for answers to appear. It asks for them: the platform holds multi-turn conversations with each answer engine, the way a buyer would, and records what comes back.",
      "Those conversations are built from three things you agree on during onboarding: personas (who is asking), topics (what they care about) and scenarios (the situation that makes them ask).",
      "The questions are simulated, not copied from real customers. Modelling them this way is what makes the sample large enough to be statistically meaningful from week to week and market to market.",
    ],
    tip="A good persona reads like a real buyer with a deadline and a budget, not like a keyword; the answers get noticeably more realistic when it does.",
    related=["GZ-2138", "GZ-2156", "GZ-2163"]),

  dict(id="GZ-2138", slug="visibility-vs-recommendation-share", cat="Measurement",
    title="What is the difference between visibility and recommendation share?",
    summary="Visibility counts how often an assistant mentions you. Recommendation share counts how often it tells the buyer to choose you.",
    body=[
      "Visibility answers a simple question: does your brand show up in the conversation at all? An assistant can list five brands and still steer the buyer toward one of them.",
      "Recommendation share answers the harder question: in how many conversations is your brand the one the assistant actually recommends? It is the number closest to a won deal, and it is the one Genezio is built to move.",
      "Next to both, Genezio tracks sentiment (how you are described) and citations (which sources the assistant leaned on), so a drop in either metric comes with a reason attached.",
    ],
    tip="A brand can gain visibility and lose recommendation share in the same week; mentions alone do not tell you whether the assistant is still on your side.",
    related=["GZ-2142", "GZ-2124", "GZ-2156"]),

  dict(id="GZ-2252", slug="why-the-last-answer-matters", cat="Measurement",
    title="Why does Genezio focus on the last answer in a conversation?",
    summary="Because buyers act on the brand an assistant names at the end of a conversation. We call that brand the last-turn pick.",
    body=[
      "Genezio's conversations run over several turns, the way a buyer narrows a choice: a broad question first, then follow-ups about budget, use case and alternatives.",
      "Between the first and the last turn, the list of brands an assistant mentions usually changes. Some brands drop out, others appear for the first time. We call that change shortlist drift, and it is the main reason a single-prompt check can give a misleading picture of where you stand.",
      "Recommendation share counts the conversations in which your brand is the one the assistant finally recommends, so it follows the end of the conversation rather than the first mention.",
    ],
    tip="Watch for the quiet competitor: a brand that barely appears in the first answer but is the assistant's pick by the last turn. It is usually winning on one source the assistant trusts.",
    related=["GZ-2138", "GZ-2124", "GZ-2142"]),

  dict(id="GZ-2142", slug="which-sources-ai-cites", cat="Measurement",
    title="How can I see which sources AI relies on for my brand?",
    summary="Genezio records the pages each assistant cites when it answers, so you can see which sources shape what it says about you.",
    body=[
      "Every tracked conversation keeps the list of sources the assistant cited. Across thousands of conversations, that list shows which publishers, review sites, forums and pages of your own site carry the most weight in your category.",
      "It also shows the gaps: topics where the assistant cites your competitors' content and none of yours. Those are usually the fastest places to improve.",
      "Citation data is correlational. Genezio can show which sources the models read, how often, and how that changed; it does not claim that a given source caused a given sale.",
    ],
    tip="When a competitor's comparison page keeps appearing as a source, the fix is rarely a press release; it is usually a better page answering the same comparison.",
    related=["GZ-2138", "GZ-2226", "GZ-2211"]),

  dict(id="GZ-2156", slug="how-fresh-are-the-numbers", cat="Measurement",
    title="How fresh are the numbers, and when can I trust a trend?",
    summary="Data arrives continuously, but a baseline younger than two weeks is marked as directional.",
    body=[
      "Conversations run on a regular schedule, so dashboards keep filling as new answers come in.",
      "A baseline needs time. Until it is two weeks old, Genezio labels it directional, because a few days of answers can swing more than the underlying trend.",
      "Targets are shown as targets, never as guarantees. The goal is to give your team numbers it can defend in a review, not numbers that look good on day one.",
    ],
    tip="If a metric jumps in the first week, wait for the two-week mark before you report it upward; most early jumps settle.",
    related=["GZ-2124", "GZ-2138", "GZ-2163"]),

  dict(id="GZ-2163", slug="how-long-does-onboarding-take", cat="Getting started",
    title="How long does onboarding take?",
    summary="Most brands are live within days, guided by a named account manager.",
    body=[
      "Most brands go live within a few days of signing.",
      "Your account manager sets up the first personas, topics, scenarios and the competitors you want to be compared with, together with your team.",
      "Once the first results are in, they walk you through them and agree an action plan, so the first month ends with work in progress rather than a report in a folder.",
    ],
    tip="Bring the competitor list your sales team actually loses deals to; it is usually shorter, and more useful, than the official one.",
    related=["GZ-2240", "GZ-2124", "GZ-2101"]),

  dict(id="GZ-2179", slug="how-is-genezio-priced", cat="Plans & billing",
    title="How is Genezio priced?",
    summary="Every plan is custom, scoped around four things: engines, markets, personas and conversation volume.",
    body=[
      "Genezio has no fixed tiers and no per-seat pricing. Each plan is scoped around four levers: the answer engines you track, the markets and languages you cover, the personas, topics and scenarios you monitor, and your monthly conversation volume.",
      "Every engagement starts with a demo, after which the team prepares a quote for your footprint.",
      "Plans can grow or shrink later. Engines, markets, personas, brands and volume can be added, or reduced between cycles, through your account manager.",
    ],
    tip="The cheapest way to start is narrow: one or two markets and the engines your buyers really use, then widen once the first results justify it.",
    related=["GZ-2185", "GZ-2117", "GZ-2163"]),

  dict(id="GZ-2185", slug="genezio-for-agencies", cat="Plans & billing",
    title="Is there an offer for agencies?",
    summary="Yes. Agency Enterprise adds multi-client workspaces and white-label reports.",
    body=[
      "Agencies that run GEO for several clients use the Agency Enterprise offer.",
      "Brands are organised by client in separate workspaces, with their own permissions and reports, and reports can be white-labelled with the agency's own branding.",
      "Like the brand plans, it is priced around the brands, engines, markets and volume across your client roster, and brands can be added as the roster grows.",
    ],
    tip="White-label reports keep the agency in front of the client, while each workspace keeps one client's data away from the others.",
    related=["GZ-2179", "GZ-2240", "GZ-2101"]),

  dict(id="GZ-2190", slug="security-and-compliance", cat="Security & data",
    title="Which security certifications does Genezio hold?",
    summary="SOC 2 Type II, ISO 27001 and CSA STAR Level 1, with GDPR compliance and a signable DPA.",
    body=[
      "Genezio holds SOC 2 Type II, ISO 27001 and CSA STAR Level 1, and is GDPR compliant with a Data Processing Agreement you can sign.",
      "Sign-in supports SSO with SAML 2.0 and SCIM provisioning. Access is role-based with least privilege by default, and every workspace keeps audit logs.",
      "Data is encrypted with TLS in transit and AES-256 at rest, with regional data residency options. The team completes security reviews and vendor questionnaires as part of an evaluation, and the Trust Center has the current documents.",
    ],
    tip="Procurement usually moves faster when the security questionnaire is sent in the same week as the demo, not after the commercial terms.",
    related=["GZ-2204", "GZ-2179", "GZ-2163"]),

  dict(id="GZ-2204", slug="does-genezio-train-on-my-data", cat="Security & data",
    title="Does Genezio train AI models on my data?",
    summary="No. Your data is never used to train models, and you can export or delete it whenever you want.",
    body=[
      "No. Genezio never trains AI models on customer data.",
      "Integrations and MCP access are read-only by design: they can read the data you connect and nothing more. Access inside Genezio follows least privilege and is reviewed regularly.",
      "Retention is configurable. You can export your data, and Genezio deletes it on request.",
    ],
    tip="Because integrations are read-only, connecting one never gives Genezio a way to change anything in your own systems.",
    related=["GZ-2190", "GZ-2233", "GZ-2163"]),

  dict(id="GZ-2211", slug="website-analyzer-and-content-analysis", cat="Platform",
    title="What do the Website Analyzer and Content Analysis check?",
    summary="Whether AI crawlers can read your pages, and whether your content is easy for an assistant to quote.",
    body=[
      "The Website Analyzer gives an instant AI-readiness audit of a site: a quick first look at how well answer engines can work with it.",
      "Content Analysis goes deeper, page by page. It checks crawlability (can the crawlers of answer engines actually get to the text) and citable content (is the text written so an assistant can lift a clear answer from it).",
      "Both point to concrete fixes, so the outcome is a list of pages to change rather than a score.",
    ],
    tip="A page that only shows its text after scripts run can look complete in a browser and still be close to empty for some crawlers.",
    related=["GZ-2142", "GZ-2226", "GZ-2101"]),

  dict(id="GZ-2226", slug="what-is-the-content-hub", cat="Platform",
    title="What is the Content Hub?",
    summary="Briefs and drafts built from the questions and sources that drive AI answers in your category.",
    body=[
      "The Content Hub turns what Genezio measures into content work.",
      "Each brief starts from data: the questions buyers ask, the answers assistants give today, and the sources they cite. From a brief, the team can generate a draft and refine it.",
      "The aim is content that answer engines are likely to read and quote, aimed at the places where you are currently missing from the answer.",
    ],
    tip="Briefs work best when they target a single question the assistants already answer badly, rather than a broad topic.",
    related=["GZ-2142", "GZ-2211", "GZ-2138"]),

  dict(id="GZ-2233", slug="genezio-data-in-your-ai-assistant", cat="Platform",
    title="Can I use Genezio data inside my own AI assistant?",
    summary="Yes. The Genezio MCP server brings your data into the AI assistant you already use, read-only.",
    body=[
      "Genezio offers an MCP server, so you can ask questions about your Genezio data from an AI assistant that supports the Model Context Protocol.",
      "Access through MCP is read-only and limited to your own data, under the same permissions as the platform.",
      "Teams use it to pull numbers into a planning conversation or a report without opening the dashboard.",
    ],
    tip="Asking for a comparison across two markets in one sentence is often faster through MCP than building the same view in a dashboard.",
    related=["GZ-2204", "GZ-2226", "GZ-2101"]),

  dict(id="GZ-2240", slug="what-support-is-included", cat="Getting started",
    title="What support is included?",
    summary="A named account manager, a dedicated Slack channel, priority help and regular strategy reviews.",
    body=[
      "Enterprise customers get a named account manager and dedicated support in Slack, with priority assistance.",
      "Regular strategy reviews keep AI visibility running as an ongoing program instead of a one-off report.",
      "Agency plans include email and Slack support.",
    ],
    tip="Strategy reviews are most useful when someone from content and someone from SEO both attend; most fixes need both.",
    related=["GZ-2163", "GZ-2185", "GZ-2179"]),
]
