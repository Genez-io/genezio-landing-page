import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { Input } from "@/components/ui/input";
import { SearchIcon, BookOpenIcon } from "lucide-react";
import { useState } from "react";

interface GlossaryTerm {
  term: string;
  acronym?: string;
  definition: string;
  category: string;
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "AI Visibility",
    definition:
      "The measure of how often and how prominently your brand appears in AI-generated responses across conversational AI platforms like ChatGPT, Claude, Perplexity, and Gemini.",
    category: "Core Concepts"
  },
  {
    term: "Answer Engine Optimization",
    acronym: "AEO",
    definition:
      "The practice of optimizing content to appear in AI-generated answers and responses. Unlike traditional SEO, AEO focuses on being cited and recommended by AI engines in conversational contexts.",
    category: "Optimization"
  },
  {
    term: "Generative Engine Optimization",
    acronym: "GEO",
    definition:
      "Strategies and techniques used to optimize content for generative AI models. GEO ensures your brand is accurately represented when AI engines generate responses about your industry or products.",
    category: "Optimization"
  },
  {
    term: "AI Search Optimization",
    acronym: "ASO",
    definition:
      "The process of optimizing your digital presence to rank higher in AI-powered search results and conversational responses. ASO combines traditional SEO principles with AI-specific strategies.",
    category: "Optimization"
  },
  {
    term: "Conversation Analysis",
    definition:
      "The methodology of using AI to transcribe and evaluate customer interactions (calls, chats, emails) to assess agent performance, compliance, and customer sentiment.",
    category: "Optimization"
  },
  {
    term: "Conversational Brand Presence",
    definition:
      "How your brand is represented, mentioned, and recommended in AI-driven conversations. This includes the context, sentiment, and accuracy of brand mentions across AI platforms.",
    category: "Core Concepts"
  },
  {
    term: "AI Citation",
    definition:
      "When an AI engine references or mentions your brand, product, or content as a source in its generated response. Citations are crucial for building AI visibility and credibility.",
    category: "Metrics"
  },
  {
    term: "Prompt Engineering",
    definition:
      "The art and science of crafting effective prompts to elicit desired responses from AI models. In marketing context, it involves understanding how users ask questions about your industry.",
    category: "Technical"
  },
  {
    term: "Multi-Turn Conversation",
    definition:
      "An extended dialogue between a user and an AI where context is maintained across multiple exchanges. Brands need to maintain visibility throughout these conversations, not just in initial responses.",
    category: "Core Concepts"
  },
  {
    term: "AI Recommendation Score",
    definition:
      "A metric measuring how frequently and favorably AI engines recommend your brand when users ask for product or service suggestions in your category.",
    category: "Metrics"
  },
  {
    term: "Conversational Intent",
    definition:
      "The underlying goal or need a user has when engaging with an AI assistant. Understanding conversational intent helps optimize for relevant AI visibility opportunities.",
    category: "Core Concepts"
  },
  {
    term: "AI Brand Perception",
    definition:
      "How AI engines characterize and describe your brand based on their training data and available information. This perception directly influences how you're presented to users.",
    category: "Core Concepts"
  },
  {
    term: "Source Attribution",
    definition:
      "The practice of AI engines crediting specific sources when generating responses. Strong source attribution increases brand authority and trust in AI conversations.",
    category: "Technical"
  },
  {
    term: "Conversational Keyword",
    definition:
      "Natural language phrases and questions users ask AI assistants, as opposed to traditional search keywords. These tend to be longer and more contextual.",
    category: "Technical"
  },
  {
    term: "AI Training Data",
    definition:
      "The corpus of information used to train AI models. Your brand's presence in quality training data sources influences how AI engines understand and represent you.",
    category: "Technical"
  },
  {
    term: "Generative Response",
    definition:
      "An AI-created answer that synthesizes information from multiple sources rather than simply retrieving existing content. Optimizing for generative responses requires different strategies than traditional SEO.",
    category: "Core Concepts"
  },
  {
    term: "AI Mention Sentiment",
    definition:
      "The emotional tone and context in which AI engines mention your brand. Positive sentiment in AI responses drives better conversion and brand perception.",
    category: "Metrics"
  },
  {
    term: "Conversational Funnel",
    definition:
      "The journey users take from initial AI conversation to conversion. Unlike traditional funnels, conversational funnels are non-linear and context-dependent.",
    category: "Core Concepts"
  },
  {
    term: "AI Competitive Analysis",
    definition:
      "Evaluating how your brand's AI visibility compares to competitors. This includes mention frequency, recommendation rates, and sentiment across AI platforms.",
    category: "Metrics"
  },
  {
    term: "Structured Data for AI",
    definition:
      "Organized information formats that help AI engines better understand and represent your content. This includes schema markup, knowledge graphs, and API-accessible data.",
    category: "Technical"
  },
  {
    term: "AI Persona Targeting",
    definition:
      "Optimizing your AI visibility for specific user personas and their conversational patterns. Different personas ask different questions and require tailored optimization strategies.",
    category: "Strategy"
  },
  {
    term: "AI Platform",
    definition:
      "A conversational AI system or service (such as ChatGPT, Claude, Perplexity, or Gemini) that users interact with to get information, recommendations, and answers. Each platform has unique characteristics that affect how brands should optimize their presence.",
    category: "Core Concepts"
  },
  {
    term: "Generative AI Platform",
    definition:
      "A comprehensive platform that leverages generative AI models to create content, analyze data, and provide intelligent insights. These platforms enable businesses to harness AI capabilities for various applications from content generation to predictive analytics.",
    category: "Core Concepts"
  },
  {
    term: "Conversational AI Platform",
    definition:
      "A technology platform that enables natural language interactions between humans and machines. These platforms power chatbots, virtual assistants, and AI-driven customer service solutions that understand and respond to user queries in conversational language.",
    category: "Core Concepts"
  },
  {
    term: "Enterprise AI Platform",
    definition:
      "A scalable, secure AI infrastructure designed for large organizations. Enterprise AI platforms provide advanced features like multi-user management, data governance, compliance controls, and integration capabilities to meet corporate requirements.",
    category: "Core Concepts"
  },
  {
    term: "AI Marketing Platform",
    definition:
      "A specialized platform that applies artificial intelligence to marketing activities. These platforms help marketers optimize campaigns, personalize customer experiences, predict trends, and measure AI-driven brand visibility across conversational channels.",
    category: "Core Concepts"
  },
  {
    term: "AI Marketing Software",
    definition:
      "Software solutions that use artificial intelligence to automate and enhance marketing tasks. This includes tools for content optimization, audience targeting, campaign management, and measuring brand presence in AI-generated responses.",
    category: "Core Concepts"
  },
  {
    term: "AI Platforms For Business",
    definition:
      "Business-focused AI solutions that help companies leverage artificial intelligence for operational efficiency, customer engagement, and competitive advantage. These platforms are designed to address specific business needs and integrate with existing workflows.",
    category: "Core Concepts"
  },
  {
    term: "Enterprise AI Software",
    definition:
      "AI software specifically built for enterprise-scale deployments. Features include robust security, compliance certifications, advanced analytics, multi-tenant architecture, and enterprise support to meet the demands of large organizations.",
    category: "Core Concepts"
  },
  {
    term: "Chat GPT Citations",
    definition:
      "References and source attributions that ChatGPT provides when generating responses. Citations indicate which sources informed the AI's answer, building credibility and allowing users to verify information. Earning ChatGPT citations is crucial for brand authority.",
    category: "Metrics"
  },
  {
    term: "Conversation Intelligence Software",
    definition:
      "Software that analyzes conversations (between customers and AI, or customers and agents) to extract insights, identify patterns, and optimize outcomes. This technology helps businesses understand conversation quality, sentiment, and conversion effectiveness.",
    category: "Optimization"
  },
  {
    term: "Conversation Intelligence Platform",
    definition:
      "A comprehensive platform for capturing, analyzing, and acting on conversational data. These platforms provide dashboards, analytics, and recommendations to improve conversation quality, agent performance, and customer satisfaction across AI and human interactions.",
    category: "Optimization"
  },
  {
    term: "LLM Optimization",
    acronym: "LLMO",
    definition:
      "The practice of structuring and publishing content so that Large Language Models can easily ingest, understand, and reproduce it accurately. LLMO focuses on the model layer beneath answer engines, complementing GEO and AEO to ensure accurate brand representation across AI platforms.",
    category: "Optimization"
  },
  {
    term: "Query Fan-Out",
    definition:
      "An architectural technique where a single user request (query) is automatically broken down or multiplied into several parallel sub-queries to retrieve complex and comprehensive information from various data sources.",
    category: "Technical"
  },
  {
    term: "Large Language Model",
    acronym: "LLM",
    definition:
      "An AI model trained on vast amounts of text to understand and generate human-like language. LLMs such as GPT-4, Claude, and Gemini power the conversational AI platforms where brand visibility is now measured and optimized.",
    category: "Technical"
  },
  {
    term: "AI Agent",
    definition:
      "An autonomous AI system that can plan, take actions, and use tools to complete tasks on a user's behalf, rather than only answering a single question. Agents increasingly search the web and select sources independently, making brand presence in their reasoning steps a new visibility frontier.",
    category: "Core Concepts"
  },
  {
    term: "Agentic Search",
    definition:
      "A search process driven by an AI agent that breaks a goal into steps, issues multiple queries, evaluates results, and synthesizes an answer autonomously. Unlike a single keyword search, agentic search means a brand must be discoverable across an entire reasoning chain.",
    category: "Core Concepts"
  },
  {
    term: "AI Overviews",
    definition:
      "AI-generated summaries that appear at the top of a search results page, answering a query directly by synthesizing multiple sources. Because they often satisfy the user without a click, being cited within an AI Overview is critical for maintaining visibility.",
    category: "Core Concepts"
  },
  {
    term: "AI Mode",
    definition:
      "A conversational, AI-first interface within a search engine that replaces the traditional list of blue links with a generated, dialogue-based answer. AI Mode shifts visibility competition from ranking positions to citation and recommendation within the generated response.",
    category: "Core Concepts"
  },
  {
    term: "Zero-Click Search",
    definition:
      "A search where the user's need is met directly on the results page, through an AI Overview, featured snippet, or generated answer, without clicking through to any website. Zero-click behavior makes AI citation and brand mention more valuable than raw traffic.",
    category: "Core Concepts"
  },
  {
    term: "AI Hallucination",
    definition:
      "When an AI model generates information that is plausible-sounding but factually incorrect or fabricated. Hallucinations about a brand (wrong pricing, features, or claims) pose a reputational risk that AI visibility monitoring is designed to detect and correct.",
    category: "Technical"
  },
  {
    term: "Web Crawler",
    definition:
      "An automated bot that systematically browses and downloads web pages so their content can be indexed. AI crawlers (such as GPTBot and others) determine which pages are available as training data and citation sources for generative engines.",
    category: "Technical"
  },
  {
    term: "llms.txt",
    definition:
      "A proposed standard file placed at a website's root that provides large language models with a curated, machine-readable summary of the site's most important content. It functions like robots.txt for the AI era, guiding how generative engines read and represent a brand.",
    category: "Technical"
  },
  {
    term: "Knowledge Graph",
    definition:
      "A structured network of entities (people, places, brands, products) and the relationships between them, used by search and AI systems to understand context. A strong, accurate knowledge-graph presence improves how confidently AI engines describe and recommend a brand.",
    category: "Technical"
  },
  {
    term: "Entity",
    definition:
      "A distinct, uniquely identifiable thing, such as a brand, product, person, or place, that AI and search systems recognize and reason about. Establishing your brand as a well-defined entity is foundational to consistent AI representation.",
    category: "Technical"
  },
  {
    term: "Model Context Protocol Server",
    acronym: "MCP Server",
    definition:
      "A server implementing the Model Context Protocol, an open standard that lets AI models and agents securely connect to external tools, data sources, and services. MCP servers expand the data an AI can draw on when generating answers about a brand.",
    category: "Technical"
  },
  {
    term: "AI Visibility Tool",
    definition:
      "Software that tracks how often, how prominently, and how accurately a brand appears across AI-generated responses on platforms like ChatGPT, Claude, Perplexity, and Gemini. These tools convert conversational mentions into measurable visibility and recommendation metrics.",
    category: "Optimization"
  },
  {
    term: "Rank Tracking",
    definition:
      "The ongoing measurement of where a brand or page appears across search results and, increasingly, across AI-generated answers. In an AI-search context, rank tracking expands to monitoring citation frequency and recommendation position within generative responses.",
    category: "Metrics"
  },
  {
    term: "Share of Voice",
    acronym: "SOV",
    definition:
      "The proportion of AI responses in a category that mention or recommend your brand relative to competitors. Share of Voice quantifies competitive dominance in conversational AI, much as it traditionally did for advertising and search.",
    category: "Metrics"
  },
  {
    term: "Sentiment Analysis",
    definition:
      "The automated evaluation of whether a brand mention is positive, neutral, or negative in tone. Applied to AI-generated responses, sentiment analysis reveals not just whether a brand is mentioned, but how favorably it is characterized.",
    category: "Metrics"
  },
  {
    term: "Application Programming Interface",
    acronym: "API",
    definition:
      "A defined set of rules and endpoints that lets one software system request data or actions from another in a predictable, structured way. APIs are how applications talk to each other, and the building blocks that AI tools and MCP servers often wrap.",
    category: "Technical"
  },
  {
    term: "Visibility-to-Recommendation Rate",
    acronym: "VRR",
    definition:
      "The percentage of times an AI engine explicitly endorses a brand as the best choice for a specific user, out of all the times that brand was considered. VRR measures high-intent advocacy, going beyond passive mentions to capture actual recommendation.",
    category: "Metrics"
  }
];

export function Glossary() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter terms based on search query
  const filteredTerms = glossaryTerms.filter(
    (item) =>
      item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.acronym?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      <div className="relative pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <BookOpenIcon className="w-4 h-4 text-blue-400" />

            <span className="text-white/80 text-sm font-medium">
              AI Search Glossary
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Search & Visibility
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Terminology Guide
            </span>
          </h1>

          <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            Your comprehensive dictionary for understanding AI search
            optimization, conversational marketing, and brand visibility in the
            age of AI.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />

            <Input
              type="text"
              placeholder="Search terms, acronyms, or definitions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-6 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl text-base focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
            />
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
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">
                    {category}
                  </h2>
                  <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent" />
                </div>

                {/* Terms in Category */}
                <div className="space-y-6">
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
                          className="block group bg-white/[0.02] border border-white/5 rounded-xl p-6 hover:bg-white/[0.04] hover:border-white/10 transition-all cursor-pointer"
                        >
                          <div className="flex items-start justify-between gap-4 mb-3">
                            <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                              {item.term}
                            </h3>
                            {item.acronym && (
                              <span className="px-3 py-1 text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full flex-shrink-0">
                                {item.acronym}
                              </span>
                            )}
                          </div>
                          <p className="text-white/70 leading-relaxed">
                            {item.definition}
                          </p>
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
            <p className="text-white/60">Try adjusting your search query</p>
          </div>
        )}
      </div>
    </div>
  );
}
