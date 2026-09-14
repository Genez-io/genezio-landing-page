import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import { Input } from "@/components/ui/input";
import { SearchIcon, BookOpenIcon, SparklesIcon, ArrowRightIcon } from "lucide-react";
import { useState } from "react";

interface GlossaryTerm {
  term: string;
  acronym?: string;
  definition: string;
  category: string;
  keyTakeaway?: string;
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "AI Visibility",
    definition:
      "How often and clearly your brand appears in AI answers. It measures your presence across ChatGPT, Claude, Perplexity, and Gemini.",
    category: "Core Concepts",
    keyTakeaway: "Tracks presence across top conversational AI engines."
  },
  {
    term: "Answer Engine Optimization",
    acronym: "AEO",
    definition:
      "The practice of optimizing content to win direct AI answers. Unlike classic SEO, AEO focuses on earned citations and recommendations.",
    category: "Optimization",
    keyTakeaway: "Targets citations in AI answer boxes and chat responses."
  },
  {
    term: "Generative Engine Optimization",
    acronym: "GEO",
    definition:
      "Techniques that help generative AI models discover and trust your content. GEO ensures AI portrays your brand accurately.",
    category: "Optimization",
    keyTakeaway: "Helps AI models accurately describe your brand."
  },
  {
    term: "AI Search Optimization",
    acronym: "ASO",
    definition:
      "Optimizing your digital footprint for AI-powered search engines. It blends traditional SEO tactics with AI-specific discovery methods.",
    category: "Optimization",
    keyTakeaway: "Combines SEO fundamentals with generative AI tactics."
  },
  {
    term: "Conversation Analysis",
    definition:
      "Using AI to review customer chats and calls. It helps teams evaluate agent performance, compliance rules, and customer sentiment.",
    category: "Optimization",
    keyTakeaway: "Analyzes interaction logs to improve conversation quality."
  },
  {
    term: "Conversational Brand Presence",
    definition:
      "How AI assistants portray and recommend your brand in real conversations. It monitors tone, accuracy, and context across all platforms.",
    category: "Core Concepts",
    keyTakeaway: "Measures reputation and tone during user interactions."
  },
  {
    term: "AI Citation",
    definition:
      "A source credit that an AI engine gives to your website or brand. Citations build trust and drive organic authority in AI replies.",
    category: "Metrics",
    keyTakeaway: "The AI equivalent of a traditional web backlink."
  },
  {
    term: "Prompt Engineering",
    definition:
      "The art of writing clear prompts to guide AI answers. In marketing, it helps teams simulate the questions real buyers ask.",
    category: "Technical",
    keyTakeaway: "Tests real buyer questions to find visibility gaps."
  },
  {
    term: "Multi-Turn Conversation",
    definition:
      "A back-and-forth dialogue between a user and an AI model. Brands must stay visible across follow-up questions, not just the first reply.",
    category: "Core Concepts",
    keyTakeaway: "Evaluates visibility through multi-step buyer journeys."
  },
  {
    term: "AI Recommendation Score",
    definition:
      "A metric that shows how often AI suggests your brand over rivals. It focuses on high-intent buyer questions in your category.",
    category: "Metrics",
    keyTakeaway: "Reveals how often AI picks your product as the top choice."
  },
  {
    term: "Conversational Intent",
    definition:
      "The real goal behind a buyer's question to an AI assistant. Understanding intent helps you create content that AI engines recommend.",
    category: "Core Concepts",
    keyTakeaway: "Helps align content with what buyers ask AI engines."
  },
  {
    term: "AI Brand Perception",
    definition:
      "What AI engines say and believe about your brand from their training data. It determines whether AI describes your products favorably.",
    category: "Core Concepts",
    keyTakeaway: "Directly influences whether AI recommends you."
  },
  {
    term: "Source Attribution",
    definition:
      "When AI engines credit original web sources in their answers. Strong attribution builds brand authority and reader trust.",
    category: "Technical",
    keyTakeaway: "Credits your domain when AI answers category queries."
  },
  {
    term: "Conversational Keyword",
    definition:
      "Natural language questions buyers ask AI assistants. These are longer and more contextual than classic search keywords.",
    category: "Technical",
    keyTakeaway: "Full-sentence phrases replacing short search keywords."
  },
  {
    term: "AI Training Data",
    definition:
      "The large collection of web text used to train AI models. High-quality presence in this data shapes how AI describes your business.",
    category: "Technical",
    keyTakeaway: "The web foundation behind what AI models know."
  },
  {
    term: "Generative Response",
    definition:
      "An AI answer that combines multiple web sources into one synthesized reply, rather than simply returning a list of links.",
    category: "Core Concepts",
    keyTakeaway: "Synthesized text answers replacing blue link lists."
  },
  {
    term: "AI Mention Sentiment",
    definition:
      "The emotional tone AI uses when describing your brand: positive, neutral, or negative. Positive tone boosts buyer trust and sales.",
    category: "Metrics",
    keyTakeaway: "Scans whether AI tone helps or hurts your brand image."
  },
  {
    term: "Conversational Funnel",
    definition:
      "The path buyers take from their first AI chat to a final purchase. It is non-linear and shaped by interactive follow-up questions.",
    category: "Core Concepts",
    keyTakeaway: "Tracks how buyer intent evolves across chat replies."
  },
  {
    term: "AI Competitive Analysis",
    definition:
      "Comparing your AI visibility directly against rivals. It tracks mention rates, recommendation preference, and citation sources.",
    category: "Metrics",
    keyTakeaway: "Compares your brand share against direct category rivals."
  },
  {
    term: "Structured Data for AI",
    definition:
      "Clean data formats that help AI bots read and parse your website easily. Examples include Schema markup and knowledge graphs.",
    category: "Technical",
    keyTakeaway: "Makes web content easy for AI crawlers to digest."
  },
  {
    term: "AI Persona Targeting",
    definition:
      "Tailoring your content for specific buyer types, such as developers, executives, or consumers. Different buyers ask AI different questions.",
    category: "Strategy",
    keyTakeaway: "Adapts AI visibility to specific customer profiles."
  },
  {
    term: "AI Platform",
    definition:
      "An AI assistant or service like ChatGPT, Claude, Perplexity, or Gemini where people ask questions and discover products.",
    category: "Core Concepts",
    keyTakeaway: "The conversational engines where modern search happens."
  },
  {
    term: "Generative AI Platform",
    definition:
      "A complete system that uses AI models to generate text, analyze information, and deliver intelligent business insights.",
    category: "Core Concepts",
    keyTakeaway: "Comprehensive AI systems used for commercial workflows."
  },
  {
    term: "Conversational AI Platform",
    definition:
      "Technology that powers natural chats between humans and machines. It drives virtual assistants, chat agents, and support bots.",
    category: "Core Concepts",
    keyTakeaway: "Enables human-like dialogues for customer service."
  },
  {
    term: "Enterprise AI Platform",
    definition:
      "A secure, scalable AI system built for large corporations. It includes strict data governance, team access controls, and compliance tools.",
    category: "Core Concepts",
    keyTakeaway: "Meets strict enterprise security and data privacy standards."
  },
  {
    term: "AI Marketing Platform",
    definition:
      "Specialized software that applies AI to marketing. It helps teams track AI visibility, optimize campaigns, and win recommendations.",
    category: "Core Concepts",
    keyTakeaway: "Empowers marketing teams to measure AI search impact."
  },
  {
    term: "AI Marketing Software",
    definition:
      "Digital tools that automate marketing tasks and measure brand presence across AI-generated answers.",
    category: "Core Concepts",
    keyTakeaway: "Automates content testing and AI visibility analysis."
  },
  {
    term: "AI Platforms For Business",
    definition:
      "Commercial AI solutions designed for operational efficiency, customer support, and competitive market advantage.",
    category: "Core Concepts",
    keyTakeaway: "Integrates AI into existing enterprise business workflows."
  },
  {
    term: "Enterprise AI Software",
    definition:
      "Large-scale software equipped with enterprise security, role permissions, and advanced analytics for global teams.",
    category: "Core Concepts",
    keyTakeaway: "Built for secure multi-brand corporate deployments."
  },
  {
    term: "Chat GPT Citations",
    definition:
      "Web links that ChatGPT includes in its answers. Earning citations builds authority and drives qualified buyers to your site.",
    category: "Metrics",
    keyTakeaway: "Direct web sources cited by ChatGPT in its answers."
  },
  {
    term: "Conversation Intelligence Software",
    definition:
      "Tools that analyze customer conversations to extract insights, identify patterns, and improve response quality.",
    category: "Optimization",
    keyTakeaway: "Extracts actionable insights from customer dialogues."
  },
  {
    term: "Conversation Intelligence Platform",
    definition:
      "A central hub to capture, evaluate, and act on conversation data across both AI assistants and human agents.",
    category: "Optimization",
    keyTakeaway: "Unified dashboard for conversation insights and QA."
  },
  {
    term: "LLM Optimization",
    acronym: "LLMO",
    definition:
      "Structuring web content so Large Language Models can easily read, comprehend, and cite it accurately.",
    category: "Optimization",
    keyTakeaway: "Optimizes content directly for the language model layer."
  },
  {
    term: "Query Fan-Out",
    definition:
      "When an AI engine splits one user prompt into multiple web searches in parallel to gather facts before writing an answer.",
    category: "Technical",
    keyTakeaway: "Underlying search queries that AI engines run secretly."
  },
  {
    term: "Large Language Model",
    acronym: "LLM",
    definition:
      "An AI model trained on huge text collections to understand and generate natural human language, such as GPT-4 or Claude.",
    category: "Technical",
    keyTakeaway: "The foundation model powering modern conversational AI."
  },
  {
    term: "AI Agent",
    definition:
      "An autonomous AI program that can plan steps, browse the web, and use tools to finish tasks for a user.",
    category: "Core Concepts",
    keyTakeaway: "Autonomous AI that acts and searches on a user's behalf."
  },
  {
    term: "Agentic Search",
    definition:
      "A search workflow where an AI agent breaks goals into steps, runs queries, and compiles findings automatically.",
    category: "Core Concepts",
    keyTakeaway: "Multi-step reasoning search driven by AI agents."
  },
  {
    term: "AI Overviews",
    definition:
      "AI summaries placed at the top of search result pages. They answer queries directly by combining several web sources.",
    category: "Core Concepts",
    keyTakeaway: "Featured AI answer summaries in search engines."
  },
  {
    term: "AI Mode",
    definition:
      "A conversational search interface that replaces classic blue links with direct AI-generated answers and source links.",
    category: "Core Concepts",
    keyTakeaway: "Chat-first search experience replacing web link lists."
  },
  {
    term: "Zero-Click Search",
    definition:
      "When a user gets their answer directly on the search page without clicking any website. Brand citations become vital.",
    category: "Core Concepts",
    keyTakeaway: "Answers resolved on-page without website referral clicks."
  },
  {
    term: "AI Hallucination",
    definition:
      "When an AI model generates incorrect or fabricated facts that sound convincing. Monitoring helps catch wrong claims early.",
    category: "Technical",
    keyTakeaway: "False AI claims that require monitoring and correction."
  },
  {
    term: "Web Crawler",
    definition:
      "An automated bot that scans and downloads web pages. AI crawlers like GPTBot determine what content AI models can cite.",
    category: "Technical",
    keyTakeaway: "Automated bots gathering training and live citation data."
  },
  {
    term: "llms.txt",
    definition:
      "A standard text file at a website's root that gives AI engines a curated, clean summary of key site pages.",
    category: "Technical",
    keyTakeaway: "The AI era's version of robots.txt for large language models."
  },
  {
    term: "Knowledge Graph",
    definition:
      "A structured web of facts connecting people, brands, and products. A strong presence helps AI models describe you accurately.",
    category: "Technical",
    keyTakeaway: "Structured data map that informs AI engine facts."
  },
  {
    term: "Entity",
    definition:
      "A distinct, recognizable thing like a brand, person, or product that AI systems understand and reference in answers.",
    category: "Technical",
    keyTakeaway: "A uniquely identifiable concept in an AI's memory."
  },
  {
    term: "Model Context Protocol Server",
    acronym: "MCP Server",
    definition:
      "A server using the open Model Context Protocol to securely connect AI models with live tools and company databases.",
    category: "Technical",
    keyTakeaway: "Connects AI models safely to external real-time data."
  },
  {
    term: "AI Visibility Tool",
    definition:
      "Software that measures how often and favorably your brand appears in AI answers across ChatGPT, Claude, and Gemini.",
    category: "Optimization",
    keyTakeaway: "Tracks brand visibility and recommendations across AI engines."
  },
  {
    term: "Rank Tracking",
    definition:
      "Measuring where your brand appears in search engines and AI chat answers. In AI search, it tracks recommendation rank.",
    category: "Metrics",
    keyTakeaway: "Monitors brand position in both search and AI replies."
  },
  {
    term: "Share of Voice",
    acronym: "SOV",
    definition:
      "The percentage of AI responses in your category that mention or recommend your brand compared to competitors.",
    category: "Metrics",
    keyTakeaway: "Measures category market share inside AI answers."
  },
  {
    term: "Sentiment Analysis",
    definition:
      "Automated evaluation of whether an AI mention is positive, neutral, or negative. It shows how favorably AI portrays you.",
    category: "Metrics",
    keyTakeaway: "Classifies whether AI mentions help or damage your brand."
  },
  {
    term: "Application Programming Interface",
    acronym: "API",
    definition:
      "A set of defined rules that lets different software programs talk to each other and exchange structured data.",
    category: "Technical",
    keyTakeaway: "The building block connecting AI tools to web services."
  },
  {
    term: "Visibility-to-Recommendation Rate",
    acronym: "VRR",
    definition:
      "The percentage of times an AI engine actively recommends your brand as the best choice out of all considered options.",
    category: "Metrics",
    keyTakeaway: "Measures true buyer endorsement, not just casual mentions."
  }
];

export function Glossary() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Get unique categories
  const allCategories = ["All", ...Array.from(new Set(glossaryTerms.map((t) => t.category))).sort()];

  // Filter terms based on search query and category
  const filteredTerms = glossaryTerms.filter((item) => {
    const matchesSearch =
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.acronym?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = activeCategory === "All" || item.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Group terms by category
  const groupedTerms = filteredTerms.reduce((acc, term) => {
    if (!acc[term.category]) {
      acc[term.category] = [];
    }
    acc[term.category].push(term);
    return acc;
  }, {} as Record<string, GlossaryTerm[]>);

  // Sort categories
  const categories = Object.keys(groupedTerms).sort();

  return (
    <div className="min-h-screen bg-[#050506]">
      <PolymetSEO
        title="AI Search & Visibility Glossary | Genezio"
        description="Explore Genezio’s AI Search & Visibility glossary. Learn key terms like GEO, AEO, AI visibility, and more to understand your brand’s AI presence."
        canonicalPath="/glossary/"
      />

      {/* Hero Section */}
      <div className="relative pt-32 pb-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <HeroEyebrow className="mb-6">AI Search Glossary</HeroEyebrow>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI Search & Visibility
            <br />
            <span className="text-emerald-400">Terminology Guide</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your simple guide to AI search, conversational marketing, and brand
            recommendation metrics.
          </p>

          {/* Quick Guide Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto mb-10">
            <div className="bg-[#0A0A0C] border border-white/10 rounded-xl p-4">
              <div className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
                Short Definitions
              </div>
              <p className="text-xs text-white/70">
                Clear, simple explanations without complex technical jargon.
              </p>
            </div>
            <div className="bg-[#0A0A0C] border border-white/10 rounded-xl p-4">
              <div className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
                Key Takeaways
              </div>
              <p className="text-xs text-white/70">
                Quick bullet points highlighting why each concept matters.
              </p>
            </div>
            <div className="bg-[#0A0A0C] border border-white/10 rounded-xl p-4">
              <div className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1">
                Category Filters
              </div>
              <p className="text-xs text-white/70">
                Filter by Core Concepts, Optimization, Metrics, and Technical terms.
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <Input
              type="text"
              placeholder="Search terms, acronyms, or concepts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-6 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl text-base focus:border-white/10 focus:ring-2 focus:ring-zinc-500/20"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {allCategories.map((cat) => {
              const count = cat === "All"
                ? glossaryTerms.length
                : glossaryTerms.filter((t) => t.category === cat).length;
              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? "bg-emerald-400 text-black font-semibold"
                      : "bg-white/5 text-white/70 border border-white/10 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    isActive ? "bg-black/20 text-black" : "bg-white/10 text-white/50"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Glossary Content */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        {categories.length > 0 ? (
          <div className="space-y-12">
            {categories.map((category) => (
              <div key={category}>
                {/* Category Header */}
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">
                      {category}
                    </h2>
                    <p className="text-xs text-white/50">
                      {groupedTerms[category].length} {groupedTerms[category].length === 1 ? "term" : "terms"} in this section
                    </p>
                  </div>
                  <div className="h-px flex-1 ml-6 bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
                </div>

                {/* Terms in Category */}
                <div className="grid md:grid-cols-2 gap-4">
                  {groupedTerms[category]
                    .sort((a, b) => a.term.localeCompare(b.term))
                    .map((item, index) => {
                      const slug = item.term
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, "");
                      return (
                        <a
                          key={index}
                          href={`/glossary/${slug}/`}
                          className="group bg-[#0A0A0C] border border-white/10 rounded-xl p-6 hover:border-white/20 hover:bg-[#0E0E12] transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                                {item.term}
                              </h3>
                              <div className="flex items-center gap-1.5 flex-shrink-0">
                                {item.acronym && (
                                  <span className="px-2 py-0.5 text-[11px] font-bold bg-white/5 text-emerald-400 border border-emerald-400/20 rounded-md">
                                    {item.acronym}
                                  </span>
                                )}
                                <ArrowRightIcon className="w-4 h-4 text-white/30 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                              </div>
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                              {item.definition}
                            </p>
                          </div>

                          {item.keyTakeaway && (
                            <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-emerald-400/90 font-medium">
                              <SparklesIcon className="w-3.5 h-3.5 flex-shrink-0 text-emerald-400" />
                              <span className="line-clamp-1">{item.keyTakeaway}</span>
                            </div>
                          )}
                        </a>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
              <SearchIcon className="w-8 h-8 text-white/40" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No results found
            </h3>
            <p className="text-white/60">Try adjusting your search query or category filter</p>
          </div>
        )}
      </div>
    </div>
  );
}
