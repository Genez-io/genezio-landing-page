import React from "react";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Tweet } from "react-tweet";
import { PolymetSEO } from "@/polymet/components/polymet-seo";
import {
  ArrowLeftIcon,
  ClockIcon,
  CalendarIcon,
  SparklesIcon
} from "lucide-react";
import { getPostById, getAllPosts } from "@/lib/posts";
import { authors } from "@/lib/authors";

export function BlogPost() {
  const { slug } = useParams<{
    slug: string;
  }>();

  const post = getPostById(slug || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-[#050506] flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <a href="/blog/" className="text-blue-400 hover:underline">
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  // Simple related posts logic: same category, exclude current
  const relatedPosts = getAllPosts()
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  // Preprocess content to replace tweet shortcodes with marker links
  const contentWithTweets = React.useMemo(() => {
    if (!post.content) return "";
    return post.content.replace(
      /{{<\s*tweet\s+"(https?:\/\/twitter\.com\/[^\/]+\/status\/(\d+))"\s*>}}/g,
      (_, url, id) => `[TWEET_EMBED__${id}](${url})`
    );
  }, [post.content]);

  let customSchema: Record<string, unknown> | undefined = undefined;
  if (post.id === "ai-recommendation-vs-ai-visibility") {
    customSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the main difference between AI Visibility and AI Recommendation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI Visibility simply means your brand is mentioned or listed by an AI model in response to a user's query, which doesn't guarantee endorsement and can sometimes include negative context. AI Recommendation, on the other hand, is a proactive, explicit endorsement by the AI, positioning your brand as the best or most suitable option to meet the user's specific intent, which significantly drives conversions."
          }
        },
        {
          "@type": "Question",
          "name": "Why are Large Language Models (LLMs) considered \"zero-click gatekeepers\"?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LLMs act as zero-click gatekeepers because they synthesize vast amounts of information and provide direct, comprehensive answers right within the conversational interface. This eliminates the need for users to click through traditional search engine links to find what they are looking for, effectively collapsing the traditional discovery and conversion funnel."
          }
        },
        {
          "@type": "Question",
          "name": "How can brands successfully transition their strategy from SEO to Artificial Engine Optimization (AEO)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To succeed in AEO, brands must shift their focus from simple keyword matching to establishing semantic proximity and entity authority. This involves implementing robust structured data, accumulating authoritative third-party citations, proactively managing brand sentiment across the web, and aligning content tightly with complex, multi-turn user constraints to ensure LLMs confidently and explicitly recommend them."
          }
        }
      ]
    };
  } else if (post.id === "visibility-to-recommendation-rate") {
    customSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the fundamental difference between Share of Voice (SOV) and Visibility-to-Recommendation Rate (VRR)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SOV measures how often a brand is passively mentioned across keywords, assuming a traditional search environment where users view multiple links. VRR measures the percentage of times an AI explicitly endorses a brand as the definitive best choice out of all the times it was considered, tracking how stable that endorsement is across varying prompts, time, and AI platforms."
          }
        },
        {
          "@type": "Question",
          "name": "Why does VRR impact revenue more than traditional search metrics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Data shows that users who receive an explicit recommendation from an AI assistant convert 5 times better than those navigating traditional search results. The AI acts as a trusted consultant, removing decision friction. VRR directly measures your ability to capture these high-intent, high-converting users."
          }
        },
        {
          "@type": "Question",
          "name": "What is a \"Fanout Query\" in Artificial Engine Optimization (AEO)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A Fanout Query takes a core topic (e.g., \"Sustainable Fashion\") and expands it into hundreds of permutations by adding contextual constraints (e.g., \"under £100,\" \"London delivery\"). This allows marketers to map exactly how AI models recommend brands across diverse user personas."
          }
        },
        {
          "@type": "Question",
          "name": "How does Genezio track VRR differently than other tools?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike basic keyword trackers, our platform measures VRR by configuring advanced user Personas and tracking brand endorsements across complex, multi-turn conversations. We also use specialized AI agents (Recommender and Comparer) to force the LLM to make definitive choices, ensuring we measure true market dominance, not just passing mentions."
          }
        },
        {
          "@type": "Question",
          "name": "Why is \"Zero-Sum Visibility\" a critical concept in generative AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike search engines that provide 10 visible links, an LLM typically synthesizes an answer that highlights one definitive solution. If the AI explicitly recommends your competitor as the best fit for that specific query, your effective visibility and market power for that interaction drop to zero."
          }
        }
      ]
    };
  } else if (post.id === "guide-to-ai-visibility") {
    customSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the first steps in conducting AI visibility analysis for brands?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To begin, outline your brand's objectives and identify key personas that reflect your target audience. Conduct comprehensive market research and create detailed persona profiles to enhance your understanding of user behaviour and needs."
          }
        },
        {
          "@type": "Question",
          "name": "How do I configure AI analysis parameters for my brand's visibility study?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Configure AI analysis parameters by defining geographical targeting scopes, selecting relevant languages, and setting demographic filtering criteria. Focus on creating a contextual framework that reveals how AI platforms perceive your brand within different regional environments."
          }
        },
        {
          "@type": "Question",
          "name": "What is the purpose of simulating AI interactions in this analysis process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simulating AI interactions allows you to anticipate how AI systems might interpret your brand's messaging across various scenarios. Design diverse conversation scenarios to test these interactions and gain insights into potential misrepresentations before they occur."
          }
        },
        {
          "@type": "Question",
          "name": "How can I effectively measure my brand's AI visibility results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Measure AI brand visibility by establishing baseline performance indicators and evaluating both quantitative and qualitative metrics. Use these insights to decode your brand's narrative and identify any gaps in communication, then adjust your strategies accordingly."
          }
        },
        {
          "@type": "Question",
          "name": "What steps should I take to refine my visibility strategy based on AI insights?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To refine your AI visibility strategy, validate insights against real-world performance metrics and identify emerging communication patterns. Develop targeted messaging improvements and establish continuous learning mechanisms to optimise your brand's digital representation over time."
          }
        }
      ]
    };
  } else if (post.id === "bcr-success-story") {
    customSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between SEO and GEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO (Search Engine Optimization) focuses on increasing visibility in classic search engines, relying on backlinks and keywords. GEO (Generative Engine Optimization) aims to optimize content so it can be retrieved and cited by Artificial Intelligence models (LLMs) like ChatGPT or Gemini, emphasizing authority, structure, and context."
          }
        },
        {
          "@type": "Question",
          "name": "How is success measured in AI visibility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brands use the Genezio platform to monitor the Visibility Score and Confidence Level. These indicators show how frequently and with what sentiment the brand is mentioned in AI-generated responses for specific user scenarios compared to competitors."
          }
        },
        {
          "@type": "Question",
          "name": "Why is AI optimization important in the financial sector?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Because users, especially younger demographics (Gen Z), are increasingly using AI assistants to compare financial products and discover offers before visiting a bank's website for the final transaction."
          }
        }
      ]
    };
  } else if (post.id === "content-types-that-drive-llm-mentions") {
    customSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of content do LLMs prioritize when making brand recommendations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LLMs prioritize six key content types: high-authority informational sources, structured rankings and comparative guides, well-organized product or program pages, evidence-based content with measurable outcomes, intent-aligned content that matches real user queries, and brands with a strong citation footprint across credible external domains."
          }
        },
        {
          "@type": "Question",
          "name": "How do LLMs decide which brands to mention in their responses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike search engines that rely on keywords and backlinks, LLMs generate recommendations based on structured knowledge, reasoning patterns, and source authority. They favor brands whose content is easy to reason about, appears in reliable and structured sources, offers clear evidence with predictable formatting, and matches the intent behind real user questions."
          }
        },
        {
          "@type": "Question",
          "name": "Why are rankings and comparative guides so important for AI visibility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rankings and structured comparisons are the highest-influence content format for LLMs because they provide a clear hierarchy or scoring framework that models can use as anchors in their reasoning chains. This allows AI systems to confidently recommend one brand over another with logical justification."
          }
        },
        {
          "@type": "Question",
          "name": "What is a citation footprint and why does it matter for GEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A citation footprint refers to how frequently a brand appears across external authoritative sources such as directory listings, comparison guides, editorial reviews, and Wikipedia entries. In AI-driven discovery, presence creates presence — brands with more external coverage become more visible in LLM outputs because models treat widely-cited entities as more trustworthy."
          }
        },
        {
          "@type": "Question",
          "name": "How can brands optimize their content to be mentioned by AI models like ChatGPT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brands should focus on creating structured, evidence-based content that aligns with real user intent. This includes publishing clear product pages with organized headings, providing measurable outcomes and statistics, appearing in authoritative third-party rankings, and building a wide citation footprint across credible external domains. Tools like Genezio can help identify which queries and scenarios influence AI recommendations."
          }
        }
      ]
    };
  } else if (post.id === "gen-z-trusts-ai-over-google") {
    customSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What percentage of Gen Z and younger millennials trust AI over Google?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "According to our survey of over 100 respondents under 29, 76.3% now trust answers from an AI more than from a traditional Google search. Of these, 45.6% trust AI answers \"most of the time\" and 30.7% trust them \"sometimes, if it sounds smart.\""
          }
        },
        {
          "@type": "Question",
          "name": "How often does Gen Z use AI tools like ChatGPT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Nearly 90% of surveyed Gen Z and younger millennial respondents use AI tools every day for tasks ranging from coding assistance and information summarization to creative brainstorming. ChatGPT is the tool of choice for over 80% of respondents."
          }
        },
        {
          "@type": "Question",
          "name": "Do AI recommendations influence Gen Z purchasing decisions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. While only 6% of users have made a purchase solely based on an AI recommendation, a significant 27% have purchased a product or service after getting input from an AI. This demonstrates AI's powerful role as a \"Trusted Advisor\" in shaping the consideration set before final purchasing decisions are made."
          }
        },
        {
          "@type": "Question",
          "name": "What is the difference between SEO and GEO (Generative Engine Optimization)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO (Search Engine Optimization) focuses on ranking favorably on Google through keywords and backlinks. GEO (Generative Engine Optimization) focuses on controlling your AI Narrative — the sum of everything a Large Language Model says about your brand, products, and competitors in AI-generated conversations, which is where Gen Z increasingly starts their discovery journey."
          }
        },
        {
          "@type": "Question",
          "name": "How can brands manage their presence in AI conversations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Brands need to move beyond traditional SEO and start monitoring how LLMs portray them in nuanced conversations. This involves conducting comprehensive narrative audits across major AI platforms, tracking competitive positioning in AI-generated recommendations, and identifying inaccuracies or negative sentiment in the AI's knowledge that could steer customers away."
          }
        }
      ]
    };
  } else if (post.id === "best-accurate-data-platform-for-ai-search-optimization") {
    customSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why does data accuracy matter more for AI search optimization than for traditional SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In SEO, data sources are relatively standardized. Search Console, your analytics platform, established rank trackers, all measure roughly the same things using methodologies the industry converged on over two decades. AI search is different. Methodology is still evolving and varies dramatically between platforms. The platform you choose effectively defines what reality looks like for your AI search program."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between \"AI visibility\" and \"AI recommendations\" in Genezio's methodology?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visibility is whether your brand appears in an AI response. Recommendation is whether AI explicitly suggests your brand as a top option, describing it substantively rather than relegating it to a passing mention. The two are tracked separately because the gap between them is the most actionable diagnostic."
          }
        },
        {
          "@type": "Question",
          "name": "Why is multi-turn measurement important?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Real buyers don't ask AI a single question and stop. They ask, see options, then refine. Each refinement narrows the recommended set. A brand that appears in the initial top-5 but gets dropped at the first refinement has a problem that single-turn measurement won't reveal."
          }
        },
        {
          "@type": "Question",
          "name": "Why does persona segmentation matter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The same product is perceived differently by different buyer types. AI may recommend you to developers and a competitor to procurement leads within the same company evaluating the same purchase. Aggregate recommendation rates hide this. Persona-segmented data tells you not just whether you're recommended, but to whom."
          }
        },
        {
          "@type": "Question",
          "name": "Why do confidence intervals matter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI search metrics are built on samples. Without confidence intervals, you can't tell whether a change reflects real movement or random variation in a small sample. Genezio attaches statistical confidence to every metric. The practical impact: decisions get made on signal rather than noise, and executive reporting can survive challenge."
          }
        },
        {
          "@type": "Question",
          "name": "What is prompt relevance scoring?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A monitoring program is only as accurate as the prompts you're running and the competitors you're tracking. Both can drift out of alignment with your market. When a prompt returns no brand matches, yours or your competitors, that's a signal. Either your competitor set is incomplete (AI is recommending brands you haven't classified) or the prompt isn't relevant. Genezio surfaces these cases and shows you what AI actually returned, letting you triage in real time."
          }
        },
        {
          "@type": "Question",
          "name": "Is Genezio appropriate for enterprise procurement requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Genezio is built with enterprise procurement in mind: documented data handling, role-based access, multi-brand governance, and audit capabilities support standard vendor review processes."
          }
        },
        {
          "@type": "Question",
          "name": "How is Genezio different from SEO platforms that have added AI features?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SEO suites like Semrush and Ahrefs have added AI modules to their existing suites. Genezio is purpose-built for AI search optimization rather than as a feature layer on a different foundation. The differences show up where it matters: recommendation tracking as a first-class metric, multi-turn handling, persona segmentation, and statistical confidence."
          }
        }
      ]
    };
  } else if (post.id === "briefs-not-articles") {
    customSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Why does Genezio focus on content briefs instead of generating complete articles directly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generating complete articles without strategic guiding parameters produces generic content that repeats competitor language or hallucinates facts. By generating a data-backed content brief first, Genezio ensures your content is specific, optimized for chunkability, and targeted to the precise queries and context that AI search engines actually use to make recommendations."
          }
        },
        {
          "@type": "Question",
          "name": "What are the main factors that determine whether AI cites or recommends a brand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Three main factors drive AI citations: chunkability (structuring content in self-contained, easily extractable units), specificity (concrete claims with figures, certifications, and product codes), and citation frequency (how frequently external, authoritative sites reference your brand or product)."
          }
        },
        {
          "@type": "Question",
          "name": "What is a query fan-out and how does it affect content creation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A query fan-out refers to the multiple, highly specific ways real buyers phrase search queries in conversation with AI. Instead of relying on static, outdated search keywords, content briefs utilize these verbatim, conversational phrasings to structure articles around actual customer intent."
          }
        },
        {
          "@type": "Question",
          "name": "How does starting with a detailed content brief prevent AI hallucinations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "AI models hallucinate context when given a blank prompt. A detailed brief contains verified product specifications, verified competitor positioning, and explicit source URLs, restricting the writing process to verified facts and making the output over 95% accurate."
          }
        }
      ]
    };
  } else if (post.id === "genezio-vs-profound-ai-visibility-platform") {
    customSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What's the difference between GEO and AEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) describe the same broad goal — being present and chosen in AI-generated answers. AEO is the term Profound favors. The practical question isn't the label; it's whether a tool measures recommendation or only mentions."
          }
        },
        {
          "@type": "Question",
          "name": "Which AI engines should I track first?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start where your buyers already are: ChatGPT and Google AI Overviews for reach, Perplexity for research-stage buyers, then Claude and Gemini. Watch for plans that lock the engines you need behind enterprise tiers."
          }
        },
        {
          "@type": "Question",
          "name": "How many prompts do I need to track?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Enough to cover your real buyer questions, not a round number. Twenty-five to fifty high-intent prompts is a solid pilot. What matters more is how many conversations run behind each prompt, because that's what gives the score a confidence interval instead of a guess."
          }
        },
        {
          "@type": "Question",
          "name": "Can I just measure AI traffic in my analytics?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Mostly no, and this is where teams get a false sense of security. GA4 routinely shows a fraction of a percent of traffic from AI. When we pulled one client's server logs, the real number was orders of magnitude higher than GA4 reported. Analytics undercounts AI conversations badly, which is exactly why measuring recommendation directly matters."
          }
        },
        {
          "@type": "Question",
          "name": "Do SEO tools replace a GEO platform?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For baseline mention monitoring, an SEO suite add-on is fine — especially if you already use it. For recommendation optimization, perception analysis, and a prioritized action plan, a purpose-built GEO platform does what a suite add-on wasn't designed to do."
          }
        },
        {
          "@type": "Question",
          "name": "How does Genezio measure recommendations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "By simulating multi-turn conversations as your configured customer personas, across engines and geographies, at a sample size large enough to report a recommendation rate with a confidence interval — then mapping the gaps to specific actions on your website, content, and citations."
          }
        }
      ]
    };
  }

  return (
    <div className="min-h-screen bg-[#050506]">
      <PolymetSEO
        title={post.metaTitle || post.title}
        description={post.description || post.excerpt}
        canonicalPath={`/blog/${slug}/`}
        ogUrl={post.metaOgUrl}
        ogImage={post.metaOgImage}
        ogImageWidth="1920"
        ogImageHeight="1080"
        ogType="article"
        schema={customSchema}
        authorName={post.author}
        datePublished={post.date}
        tags={post.tags}
      />
      {/* Back Button */}
      <div className="pt-24 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <a
            href="/blog/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors group"
          >
            <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />

            <span className="text-sm font-medium">Back to Blog</span>
          </a>
        </div>
      </div>

      {/* Article Header */}
      <article className="px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <SparklesIcon className="w-4 h-4 text-blue-400" />

            <span className="text-sm font-medium text-blue-400">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-white/60 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-white/10">
            {/* Author */}
            <div className="flex items-center gap-3">
              {(() => {
                const authorKey = post.author
                  ?.toLowerCase()
                  ?.split(" ")
                  ?.join("-");
                const authorData = authors[authorKey];
                if (authorData?.image) {
                  return (
                    <img
                      src={authorData.image}
                      alt={post.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                    />
                  );
                }
                return (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {post.author
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </span>
                  </div>
                );
              })()}
              <div>
                <div className="text-sm font-medium text-white">
                  <a
                    href={`/blog/author/${post.author?.toLowerCase()?.split(" ")?.join("-")}/`}
                  >
                    {post.author}
                  </a>
                </div>
                <div className="text-xs text-white/40">{post.authorRole}</div>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-white/60">
              <CalendarIcon className="w-4 h-4" />

              {post.date}
            </div>

            {/* Read Time */}
            <div className="flex items-center gap-2 text-sm text-white/60">
              <ClockIcon className="w-4 h-4" />

              {post.readTime}
            </div>

            {/* Share Buttons */}
            {/* <div className="ml-auto flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20"
              >
                <ShareIcon className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div> */}
          </div>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none mb-16 text-white/80">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => (
                  <h1
                    className="text-4xl font-bold text-white mt-12 mb-6 leading-tight"
                    {...props}
                  />
                ),
                h2: ({ node, ...props }) => (
                  <h2
                    className="text-3xl font-bold text-white mt-10 mb-5 leading-snug"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h3
                    className="text-2xl font-bold text-white mt-8 mb-4 leading-snug"
                    {...props}
                  />
                ),
                table: ({ node, ...props }) => (
                  <div className="overflow-x-auto my-8 border border-white/10 rounded-lg">
                    <table
                      className="w-full text-left border-collapse"
                      {...props}
                    />
                  </div>
                ),
                thead: ({ node, ...props }) => (
                  <thead
                    className="bg-white/5 text-white font-semibold"
                    {...props}
                  />
                ),
                tbody: ({ node, ...props }) => (
                  <tbody
                    className="divide-y divide-white/10 text-white/80"
                    {...props}
                  />
                ),
                tr: ({ node, ...props }) => (
                  <tr
                    className="hover:bg-white/5 transition-colors"
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul
                    className="list-disc pl-6 mb-6 text-white/80 space-y-2"
                    {...props}
                  />
                ),
                ol: ({ node, ...props }) => (
                  <ol
                    className="list-decimal pl-6 mb-6 text-white/80 space-y-2"
                    {...props}
                  />
                ),
                li: ({ node, ...props }) => (
                  <li className="leading-relaxed" {...props} />
                ),
                th: ({ node, ...props }) => (
                  <th className="p-4 border-b border-white/10" {...props} />
                ),
                td: ({ node, ...props }) => (
                  <td className="p-4 align-top" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p
                    className="mb-3 leading-relaxed text-white/80"
                    {...props}
                  />
                ),
                h4: ({ node, ...props }) => (
                  <h4
                    className="text-xl font-bold text-white mt-6 mb-3"
                    {...props}
                  />
                ),
                h5: ({ node, ...props }) => (
                  <h5
                    className="text-lg font-bold text-white mt-4 mb-2"
                    {...props}
                  />
                ),
                h6: ({ node, ...props }) => (
                  <h6
                    className="text-base font-bold text-white mt-4 mb-2"
                    {...props}
                  />
                ),
                a: ({ node, ...props }) => {
                  const children = props.children;
                  // Check if this is our tweet marker
                  if (
                    typeof children === "string" &&
                    children.startsWith("TWEET_EMBED__")
                  ) {
                    const id = children.replace("TWEET_EMBED__", "");
                    return (
                      <div className="flex justify-center my-8 not-prose tweet-container">
                        <Tweet id={id} />
                      </div>
                    );
                  }

                  const isExternal = props.href?.startsWith("http");
                  return (
                    <a
                      {...props}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="text-blue-400 hover:text-blue-300 transition-colors break-all"
                    />
                  );
                }
              }}
            >
              {contentWithTweets}
            </ReactMarkdown>
          </div>

          {/* Author Bio - simplified as we don't have bio in frontmatter yet */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 mb-16">
            <div className="flex items-start gap-4">
              {(() => {
                const authorKey = post.author
                  ?.toLowerCase()
                  ?.split(" ")
                  ?.join("-");
                const authorData = authors[authorKey];
                if (authorData?.image) {
                  return (
                    <img
                      src={authorData.image}
                      alt={post.author}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white/10 flex-shrink-0"
                    />
                  );
                }
                return (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-lg">
                      {post.author
                        .split(" ")
                        .map((n: string) => n[0])
                        .join("")}
                    </span>
                  </div>
                );
              })()}
              <div>
                <div className="text-lg font-semibold text-white mb-1">
                  <a
                    href={`/blog/author/${post.author?.toLowerCase()?.split(" ")?.join("-")}/`}
                  >
                    {post.author}
                  </a>
                </div>
                <div className="text-sm text-white/60 mb-3">
                  {post.authorRole}
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <a
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}/`}
                    className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all"
                  >
                    <div className="text-xs font-medium text-blue-400 mb-3">
                      {relatedPost.category}
                    </div>
                    <h3 className="text-base font-semibold text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {relatedPost.title}
                    </h3>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* CTA Section */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-white/10 rounded-2xl p-12 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent" />

            <div className="relative text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Optimize Your Brand for AI Search?
              </h2>
              <p className="text-lg text-white/60 mb-8 max-w-2xl mx-auto">
                Join leading brands using Genezio to increase their visibility
                across AI platforms and conversational search engines.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/pricing/">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-8 py-6 rounded-xl text-base">
                    Get Started
                    <ArrowLeftIcon className="w-5 h-5 ml-2 rotate-180" />
                  </Button>
                </a>
                <a href="/conversational-brand-presence/">
                  <Button
                    variant="outline"
                    className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20 font-semibold px-8 py-6 rounded-xl text-base"
                  >
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
