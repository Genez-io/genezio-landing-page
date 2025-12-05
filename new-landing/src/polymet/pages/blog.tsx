import { Input } from "@/components/ui/input";
import {
  SearchIcon,
  ArrowRightIcon,
  ClockIcon,
  CalendarIcon,
  SparklesIcon,
} from "lucide-react";
import { useState } from "react";

import { getAllPosts } from "@/lib/posts";

const blogPosts = getAllPosts();

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

  // Sort posts by date (newest first)
  const sortedPosts = [...blogPosts].sort((a, b) => b.timestamp - a.timestamp);

  // Filter by search query
  const searchFilteredPosts = sortedPosts.filter((post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    );
  });

  const featuredPosts = searchFilteredPosts.slice(0, 2);
  const regularPosts = searchFilteredPosts.slice(2);

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
          {/* <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px - 4 py - 2 rounded - lg text - sm font - medium transition - all ${selectedCategory === category
                  ? "bg-white/10 text-white border border-white/20"
                  : "bg-white/5 text-white/60 border border-white/5 hover:bg-white/10 hover:text-white"
                  } `}
              >
                {category}
              </button>
            ))}
          </div> */}
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

                console.log(post.id)
                return (
                  <a
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all overflow-hidden"
                  >
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset - 0 bg - gradient - to - br ${post.gradient} opacity - 0 group - hover: opacity - 5 transition - opacity`}
                    />

                    <div className="relative">
                      {/* Icon */}
                      <div
                        className={`w - 14 h - 14 rounded - xl bg - gradient - to - br ${post.gradient} opacity - 20 flex items - center justify - center mb - 6`}
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
                    className={`absolute inset - 0 bg - gradient - to - br ${post.gradient} opacity - 0 group - hover: opacity - 5 transition - opacity`}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <div
                      className={`w - 12 h - 12 rounded - xl bg - gradient - to - br ${post.gradient} opacity - 20 flex items - center justify - center mb - 4`}
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
