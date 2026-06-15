import { Input } from "@/components/ui/input";
import {
  SearchIcon,
  ArrowRightIcon,
  ClockIcon,
  CalendarIcon,
  FlaskConicalIcon,
} from "lucide-react";
import { useState } from "react";
import { PolymetSEO } from "@/polymet/components/polymet-seo";
import { getResearchPosts, getPostPath } from "@/lib/posts";
import { BlogPostTypeBadge } from "@/polymet/components/blog-post-type-badge";

const researchPosts = getResearchPosts();

const RESEARCH_TITLE = "Genezio Research: Original AI Search Studies";
const RESEARCH_DESCRIPTION =
  "Data-driven research on how AI models search, recommend brands, and shape competitive visibility across industries.";

export function Research() {
  const [searchQuery, setSearchQuery] = useState("");

  const sortedPosts = [...researchPosts].sort((a, b) => b.timestamp - a.timestamp);

  const filteredPosts = sortedPosts.filter((post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <PolymetSEO
        title={RESEARCH_TITLE}
        description={RESEARCH_DESCRIPTION}
        canonicalPath="/research/"
      />
      <div className="min-h-screen bg-[#050506]">
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-600/10 via-purple-600/5 to-transparent" />

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <FlaskConicalIcon className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-medium text-violet-400">
                  Original Research
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Genezio{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-fuchsia-400 text-transparent bg-clip-text">
                  Research
                </span>
              </h1>

              <p className="text-xl text-white/60 mb-8">
                Large-scale studies on how AI assistants search, cite sources,
                and decide which brands compete before a single page loads.
              </p>

              <div className="relative max-w-xl mx-auto">
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <Input
                  type="text"
                  placeholder="Search research..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-6 bg-white/5 border-white/10 text-white placeholder:text-white/40 rounded-xl focus:bg-white/10 focus:border-white/20 transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-32">
          <div className="max-w-7xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => {
                  const Icon = post.icon;
                  return (
                    <a
                      key={post.id}
                      href={getPostPath(post)}
                      className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-violet-400/30 transition-all overflow-hidden"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}
                      />

                      <div className="relative">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.gradient} opacity-20 flex items-center justify-center mb-4`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          {post.postType && (
                            <BlogPostTypeBadge type={post.postType} size="sm" />
                          )}
                          <span className="text-xs font-medium text-violet-400">
                            {post.category}
                          </span>
                          <span className="text-xs text-white/40">•</span>
                          <div className="flex items-center gap-1 text-xs text-white/40">
                            <ClockIcon className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                          {post.title}
                        </h3>

                        <p className="text-sm text-white/60 mb-4 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <div className="text-xs text-white/60">{post.author}</div>
                          <div className="flex items-center gap-1.5 text-xs text-white/40">
                            <CalendarIcon className="w-3 h-3" />
                            {post.date}
                          </div>
                        </div>

                        <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-violet-500/10 group-hover:border-violet-400/20 transition-all">
                          <ArrowRightIcon className="w-5 h-5 text-white/60 group-hover:text-violet-300 group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            ) : (
              <p className="text-center text-white/50 text-lg">
                No research articles match your search.
              </p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
