import { Helmet } from "react-helmet";
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
    term: "LLM Optimisation",
    definition:
      "The process of optimizing content and data to improve how Large Language Models (LLMs) understand and represent your brand. LLM optimization ensures accurate brand representation in AI responses and maximizes visibility across AI platforms powered by LLMs.",
    category: "Optimization"
  },
  {
    term: "AI Prompt Engineering",
    definition:
      "The practice of designing and refining prompts to achieve optimal results from AI systems. In a marketing context, it involves understanding how to structure queries and content so AI models provide accurate, favorable responses about your brand.",
    category: "Technical"
  },
  {
    term: "ChatGPT Prompt Engineering",
    definition:
      "Specialized prompt engineering techniques specifically for ChatGPT. This includes understanding ChatGPT's unique capabilities, limitations, and response patterns to craft prompts that elicit desired outputs and optimize brand visibility in ChatGPT conversations.",
    category: "Technical"
  },
  {
    term: "LLM Prompt Engineering",
    definition:
      "The art and science of crafting effective prompts for Large Language Models (LLMs) like GPT-4, Claude, and Gemini. LLM prompt engineering requires understanding model architectures, training data, and response patterns to optimize for accuracy and brand representation.",
    category: "Technical"
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
      <Helmet>
        <title>AI Search & Visibility Glossary | Genezio</title>
        <meta
          name="description"
          content="Explore Genezio’s AI Search & Visibility glossary. Learn key terms like GEO, AEO, AI visibility, conversational intent, and more to understand your brand’s AI presence."
        />
      </Helmet>
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
                          href={`/glossary/${slug}`}
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
