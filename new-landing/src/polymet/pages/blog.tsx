import { Input } from "@/components/ui/input";
import { HeroEyebrow } from "@/polymet/components/hero-eyebrow";
import {
  SearchIcon,
  ArrowRightIcon,
  ClockIcon,
  CalendarIcon,
} from "lucide-react";
import { useState } from "react";
import { PolymetSEO } from "@/polymet/components/polymet-seo";

import { getBlogPosts } from "@/lib/posts";
import { BlogPostTypeBadge } from "@/polymet/components/blog-post-type-badge";

const blogPosts = getBlogPosts();

const BLOG_TITLE = "Genezio Blog: Insights on GEO & AI Brand Visibility";
const BLOG_DESCRIPTION =
  "Master Generative Engine Optimization (GEO). Expert analysis on tracking AI brand visibility, and optimizing your presence in AI conversations.";

/* Small section label: green square marker + title */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 mb-8">
      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-[2px] bg-emerald-400" />
      <h2 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
        {children}
      </h2>
    </div>
  );
}

export function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory] = useState("All");

  const sortedPosts = [...blogPosts].sort((a, b) => b.timestamp - a.timestamp);

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
    <>
      <PolymetSEO
        title={BLOG_TITLE}
        description={BLOG_DESCRIPTION}
        canonicalPath="/blog/"
      />
      <div className="min-h-screen bg-[#050506]">
        {/* Hero */}
        <section className="relative pt-32 pb-16 md:pb-20 px-6 md:px-8 lg:px-16 overflow-hidden">

          <div className="relative max-w-3xl mx-auto text-center">
            <HeroEyebrow className="mb-6 mx-auto w-fit">
              Insights &amp; resources
            </HeroEyebrow>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-[-0.03em] mb-5">
              The Genezio <span className="text-emerald-400">Blog</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8">
              Expert insights on AI search, generative engine optimization, and
              winning brand visibility in the age of answer engines.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type="text"
                placeholder="Search articles…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-6 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl focus:bg-white/[0.07] focus:border-white/20 transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Featured */}
        {featuredPosts.length > 0 && (
          <section className="px-6 md:px-8 lg:px-16 pb-16 md:pb-20">
            <div className="max-w-7xl mx-auto">
              <SectionLabel>Featured</SectionLabel>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {featuredPosts.map((post) => {
                  const Icon = post.icon;
                  return (
                    <a
                      key={post.id}
                      href={`/blog/${post.id}/`}
                      className="group relative flex flex-col bg-[#0A0A0C] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors overflow-hidden"
                    >
                      {/* hover top accent */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* arrow */}
                      <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-emerald-400/40 transition-colors">
                        <ArrowRightIcon className="w-5 h-5 text-white/50 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                      </div>

                      {/* icon */}
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-emerald-400" />
                      </div>

                      {/* meta */}
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        {post.postType && (
                          <BlogPostTypeBadge type={post.postType} size="sm" />
                        )}
                        <span className="inline-flex items-center rounded-md bg-white/[0.06] border border-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white/70">
                          {post.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm text-white/40">
                          <ClockIcon className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white leading-snug mb-3 group-hover:text-emerald-400 transition-colors pr-12">
                        {post.title}
                      </h3>

                      <p className="text-white/60 leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/10">
                        <div>
                          <div className="text-sm font-medium text-white">
                            {post.author}
                          </div>
                          <div className="text-xs text-white/40">
                            {post.authorRole}
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-white/40">
                          <CalendarIcon className="w-4 h-4" />
                          {post.date}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* All posts */}
        <section className="px-6 md:px-8 lg:px-16 pb-32">
          <div className="max-w-7xl mx-auto">
            <SectionLabel>AI visibility &amp; recommendation deep dives</SectionLabel>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => {
                const Icon = post.icon;
                return (
                  <a
                    key={post.id}
                    href={`/blog/${post.id}/`}
                    className="group relative flex flex-col bg-[#0A0A0C] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                      <Icon className="w-5 h-5 text-emerald-400" />
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      {post.postType && (
                        <BlogPostTypeBadge type={post.postType} size="sm" />
                      )}
                      <span className="inline-flex items-center rounded-md bg-white/[0.06] border border-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/70">
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-white/40">
                        <ClockIcon className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-emerald-400 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-sm text-white/60 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="text-xs text-white/60">{post.author}</div>
                      <div className="flex items-center gap-1.5 text-xs text-white/40">
                        <CalendarIcon className="w-3 h-3" />
                        {post.date}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
