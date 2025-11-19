import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import {
  ArrowLeftIcon,
  ClockIcon,
  CalendarIcon,
  ShareIcon,
  BookmarkIcon,
  TwitterIcon,
  LinkedinIcon,
  LinkIcon,
  SparklesIcon,
  TrendingUpIcon,
  TargetIcon
} from "lucide-react";

// Mock blog post data - in a real app, this would come from an API
const blogPostData: Record<string, any> = {
  "ai-search-optimization-2024": {
    title: "The Complete Guide to AI Search Optimization in 2024",
    excerpt:
      "Discover how leading brands are adapting their strategies to thrive in the age of conversational AI and search engines.",
    category: "AI Search",
    readTime: "8 min read",
    date: "March 15, 2024",
    author: "Sarah Chen",
    authorRole: "Head of AI Strategy",
    authorBio:
      "Sarah leads AI strategy initiatives at Genezio, helping brands navigate the evolving landscape of conversational AI and search optimization.",
    gradient: "from-blue-500 to-purple-500",
    content: `
      <h2>The AI Search Revolution</h2>
      <p>The landscape of search is undergoing a fundamental transformation. Traditional search engines are being complemented—and in some cases replaced—by conversational AI platforms like ChatGPT, Claude, Perplexity, and Gemini. For brands, this shift represents both a challenge and an unprecedented opportunity.</p>

      <p>In this comprehensive guide, we'll explore how leading brands are adapting their strategies to thrive in this new era of AI-powered search and discovery.</p>

      <h2>Understanding AI Search Behavior</h2>
      <p>Unlike traditional search engines that return a list of links, AI platforms provide direct, conversational answers. This means your brand needs to be part of the AI's knowledge base and training data to be recommended to users.</p>

      <h3>Key Differences from Traditional SEO</h3>
      <ul>
        <li><strong>Conversational Context:</strong> Users engage in multi-turn conversations rather than single queries</li>
        <li><strong>Direct Recommendations:</strong> AI platforms recommend specific brands and products within their responses</li>
        <li><strong>Trust Signals:</strong> AI models prioritize authoritative, well-structured information</li>
        <li><strong>Real-time Adaptation:</strong> Some platforms can access current information, making freshness crucial</li>
      </ul>

      <h2>The Three Pillars of AI Search Optimization</h2>

      <h3>1. Content Optimization</h3>
      <p>Your content needs to be structured in a way that AI models can easily understand and reference. This includes:</p>
      <ul>
        <li>Clear, authoritative information about your brand, products, and services</li>
        <li>Structured data and schema markup</li>
        <li>Comprehensive FAQ sections addressing common queries</li>
        <li>Regular content updates to maintain freshness</li>
      </ul>

      <h3>2. Brand Presence Monitoring</h3>
      <p>You can't optimize what you don't measure. Successful brands continuously monitor:</p>
      <ul>
        <li>How often their brand appears in AI responses</li>
        <li>The context and sentiment of brand mentions</li>
        <li>Competitor positioning in similar queries</li>
        <li>Gaps in AI knowledge about their offerings</li>
      </ul>

      <h3>3. Strategic Content Distribution</h3>
      <p>Getting your content into AI training data requires strategic distribution across:</p>
      <ul>
        <li>High-authority publications and media outlets</li>
        <li>Industry-specific platforms and communities</li>
        <li>Academic and research publications</li>
        <li>Social media and professional networks</li>
      </ul>

      <h2>Measuring Success in AI Search</h2>
      <p>Traditional metrics like click-through rates don't apply in conversational AI. Instead, focus on:</p>
      <ul>
        <li><strong>Mention Frequency:</strong> How often your brand appears in relevant queries</li>
        <li><strong>Recommendation Quality:</strong> The context and positioning of your brand mentions</li>
        <li><strong>Share of Voice:</strong> Your presence relative to competitors</li>
        <li><strong>Sentiment Analysis:</strong> How positively your brand is portrayed</li>
      </ul>

      <h2>Case Study: Leading Brand Success</h2>
      <p>One of our clients, a B2B SaaS company, implemented a comprehensive AI search optimization strategy and saw remarkable results:</p>
      <ul>
        <li>300% increase in brand mentions across AI platforms in 6 months</li>
        <li>Consistent top-3 positioning for key product categories</li>
        <li>45% increase in qualified leads from AI-driven discovery</li>
      </ul>

      <h2>Getting Started with AI Search Optimization</h2>
      <p>Ready to optimize your brand for AI search? Here's your action plan:</p>
      <ol>
        <li><strong>Audit Your Current Presence:</strong> Test how AI platforms currently describe your brand</li>
        <li><strong>Identify Content Gaps:</strong> Find areas where AI has incomplete or inaccurate information</li>
        <li><strong>Create Authoritative Content:</strong> Develop comprehensive resources that AI can reference</li>
        <li><strong>Monitor and Iterate:</strong> Continuously track your presence and adjust your strategy</li>
      </ol>

      <h2>The Future of AI Search</h2>
      <p>As AI platforms continue to evolve, we expect to see:</p>
      <ul>
        <li>More sophisticated understanding of brand differentiation</li>
        <li>Integration with e-commerce and direct purchasing</li>
        <li>Personalized recommendations based on user preferences</li>
        <li>Real-time brand performance tracking and optimization</li>
      </ul>

      <h2>Conclusion</h2>
      <p>AI search optimization isn't just about being found—it's about being recommended. Brands that invest in understanding and optimizing for conversational AI now will have a significant competitive advantage as this technology becomes increasingly central to how consumers discover and evaluate products and services.</p>

      <p>The question isn't whether to optimize for AI search, but how quickly you can adapt your strategy to this new reality.</p>
    `,
    relatedPosts: [
      {
        id: "brand-visibility-ai-engines",
        title: "How to Increase Your Brand Visibility in AI Engines",
        category: "Brand Strategy"
      },
      {
        id: "measuring-ai-brand-presence",
        title: "Measuring Your AI Brand Presence: Key Metrics",
        category: "Analytics"
      },
      {
        id: "ai-training-data-optimization",
        title: "Optimizing Your Content for AI Training Data",
        category: "Content Strategy"
      }
    ]
  },
  "brand-visibility-ai-engines": {
    title: "How to Increase Your Brand Visibility in AI Engines",
    excerpt:
      "Learn the proven tactics to ensure your brand appears prominently in ChatGPT, Claude, Perplexity, and other AI platforms.",
    category: "Brand Strategy",
    readTime: "6 min read",
    date: "March 12, 2024",
    author: "Michael Torres",
    authorRole: "Brand Strategist",
    authorBio:
      "Michael specializes in brand positioning and visibility strategies for the AI era, working with Fortune 500 companies and emerging startups.",
    gradient: "from-emerald-500 to-teal-500",
    content: `
      <h2>Why AI Brand Visibility Matters</h2>
      <p>Your brand's visibility in AI engines directly impacts how millions of users discover and perceive your products and services. This guide will show you exactly how to increase your presence.</p>

      <h2>The Visibility Framework</h2>
      <p>Increasing your brand visibility in AI engines requires a systematic approach across multiple channels and touchpoints.</p>

      <h3>Content Authority</h3>
      <p>Build authoritative content that AI platforms trust and reference.</p>

      <h3>Distribution Strategy</h3>
      <p>Ensure your content reaches the sources that AI models learn from.</p>

      <h3>Continuous Monitoring</h3>
      <p>Track your visibility and adapt your strategy based on real data.</p>
    `,
    relatedPosts: [
      {
        id: "ai-search-optimization-2024",
        title: "The Complete Guide to AI Search Optimization in 2024",
        category: "AI Search"
      },
      {
        id: "conversational-marketing-future",
        title: "The Future of Conversational Marketing",
        category: "Marketing"
      }
    ]
  }
};

export function BlogPost() {
  const { slug = "ai-search-optimization-2024" } = useParams<{
    slug: string;
  }>();
  const post =
    blogPostData[slug] || blogPostData["ai-search-optimization-2024"];

  return (
    <div className="min-h-screen bg-[#050506]">
      {/* Back Button */}
      <div className="pt-24 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <a
            href="/blog"
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
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {post.author
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <div className="text-sm font-medium text-white">
                  {post.author}
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
            <div className="ml-auto flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20"
              >
                <ShareIcon className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white hover:border-white/20"
              >
                <BookmarkIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-invert prose-lg max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
            style={{
              color: "rgba(255, 255, 255, 0.8)"
            }}
          />

          {/* Author Bio */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 mb-16">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold text-lg">
                  {post.author
                    .split(" ")
                    .map((n: string) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <div className="text-lg font-semibold text-white mb-1">
                  {post.author}
                </div>
                <div className="text-sm text-white/60 mb-3">
                  {post.authorRole}
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  {post.authorBio}
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {post.relatedPosts.map((relatedPost: any) => (
                  <a
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
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
                <a href="/pricing">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-8 py-6 rounded-xl text-base">
                    Get Started
                    <ArrowLeftIcon className="w-5 h-5 ml-2 rotate-180" />
                  </Button>
                </a>
                <a href="/conversational-brand-presence">
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
