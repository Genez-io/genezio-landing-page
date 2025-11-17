import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  SearchIcon,
  ArrowRightIcon,
  ClockIcon,
  CalendarIcon,
  TrendingUpIcon,
  TargetIcon,
  SparklesIcon,
  BrainIcon,
  ZapIcon,
  BarChartIcon
} from "lucide-react";
import { useState } from "react";

const blogPosts = [
  {
    id: "ai-search-optimization-2024",
    title: "The Complete Guide to AI Search Optimization in 2024",
    excerpt:
      "Discover how leading brands are adapting their strategies to thrive in the age of conversational AI and search engines.",
    category: "AI Search",
    readTime: "8 min read",
    date: "March 15, 2024",
    author: "Sarah Chen",
    authorRole: "Head of AI Strategy",
    featured: true,
    icon: SparklesIcon,
    gradient: "from-blue-500 to-purple-500"
  },
  {
    id: "brand-visibility-ai-engines",
    title: "How to Increase Your Brand Visibility in AI Engines",
    excerpt:
      "Learn the proven tactics to ensure your brand appears prominently in ChatGPT, Claude, Perplexity, and other AI platforms.",
    category: "Brand Strategy",
    readTime: "6 min read",
    date: "March 12, 2024",
    author: "Michael Torres",
    authorRole: "Brand Strategist",
    featured: true,
    icon: TrendingUpIcon,
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    id: "conversational-marketing-future",
    title: "The Future of Conversational Marketing",
    excerpt:
      "Explore how AI-powered conversations are transforming customer engagement and what it means for your marketing strategy.",
    category: "Marketing",
    readTime: "7 min read",
    date: "March 10, 2024",
    author: "Emily Rodriguez",
    authorRole: "Marketing Director",
    featured: false,
    icon: TargetIcon,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: "measuring-ai-brand-presence",
    title: "Measuring Your AI Brand Presence: Key Metrics",
    excerpt:
      "Understanding the metrics that matter when tracking your brand's performance across AI platforms and conversational interfaces.",
    category: "Analytics",
    readTime: "5 min read",
    date: "March 8, 2024",
    author: "David Kim",
    authorRole: "Data Analyst",
    featured: false,
    icon: BarChartIcon,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: "ai-training-data-optimization",
    title: "Optimizing Your Content for AI Training Data",
    excerpt:
      "Best practices for structuring your content to be effectively captured and represented by AI language models.",
    category: "Content Strategy",
    readTime: "9 min read",
    date: "March 5, 2024",
    author: "Lisa Anderson",
    authorRole: "Content Strategist",
    featured: false,
    icon: BrainIcon,
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: "real-time-ai-monitoring",
    title: "Real-Time AI Monitoring: Stay Ahead of the Curve",
    excerpt:
      "How continuous monitoring of AI platforms helps you adapt quickly and maintain competitive advantage in conversational search.",
    category: "Technology",
    readTime: "6 min read",
    date: "March 3, 2024",
    author: "James Wilson",
    authorRole: "Tech Lead",
    featured: false,
    icon: ZapIcon,
    gradient: "from-yellow-500 to-orange-500"
  }
];

const categories = [
  "All",
  "AI Search",
  "Brand Strategy",
  "Marketing",
  "Analytics",
  "Content Strategy",
  "Technology"
];

export function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  const filteredPosts =
    selectedCategory === "All"
      ? regularPosts
      : regularPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#050506]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-purple-600/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <SparklesIcon className="w-4 h-4 text-blue-400" />

              <span className="text-sm font-medium text-blue-400">
                Insights & Resources
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              The Genezio{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                Blog
              </span>
            </h1>

            <p className="text-xl text-white/60 mb-8">
              Expert insights on AI search optimization, conversational
              marketing, and brand visibility in the age of AI.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />

              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-6 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl focus:bg-white/10 focus:border-white/20 transition-all"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-white/10 text-white border border-white/20"
                    : "bg-white/5 text-white/60 border border-white/5 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8">
              Featured Articles
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => {
                const Icon = post.icon;
                return (
                  <a
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all overflow-hidden"
                  >
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                    />

                    <div className="relative">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${post.gradient} opacity-20 flex items-center justify-center mb-6`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Category & Read Time */}
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm font-medium text-blue-400">
                          {post.category}
                        </span>
                        <span className="text-sm text-white/40">•</span>
                        <div className="flex items-center gap-1.5 text-sm text-white/40">
                          <ClockIcon className="w-4 h-4" />

                          {post.readTime}
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="text-white/60 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Author & Date */}
                      <div className="flex items-center justify-between pt-6 border-t border-white/10">
                        <div>
                          <div className="text-sm font-medium text-white">
                            {post.author}
                          </div>
                          <div className="text-xs text-white/40">
                            {post.authorRole}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-white/40">
                          <CalendarIcon className="w-4 h-4" />

                          {post.date}
                        </div>
                      </div>

                      {/* Read More Arrow */}
                      <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                        <ArrowRightIcon className="w-5 h-5 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">All Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => {
              const Icon = post.icon;
              return (
                <a
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all overflow-hidden"
                >
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.gradient} opacity-20 flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Category & Read Time */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-blue-400">
                        {post.category}
                      </span>
                      <span className="text-xs text-white/40">•</span>
                      <div className="flex items-center gap-1 text-xs text-white/40">
                        <ClockIcon className="w-3 h-3" />

                        {post.readTime}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-white/60 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Author & Date */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="text-xs text-white/60">{post.author}</div>
                      <div className="flex items-center gap-1.5 text-xs text-white/40">
                        <CalendarIcon className="w-3 h-3" />

                        {post.date}
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
