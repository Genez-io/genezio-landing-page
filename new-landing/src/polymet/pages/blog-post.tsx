import React from "react";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import { Tweet } from "react-tweet";
import { ArrowLeftIcon, ClockIcon, CalendarIcon, SparklesIcon } from "lucide-react";
import { getPostById, getAllPosts } from "@/lib/posts";

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
          <a href="/blog" className="text-blue-400 hover:underline">
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
                  <a href={`/blog/author/${post.author?.toLowerCase()?.split(" ")?.join("-")}`}>{post.author}</a>
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
                    <table className="w-full text-left border-collapse" {...props} />
                  </div>
                ),
                thead: ({ node, ...props }) => (
                  <thead className="bg-white/5 text-white font-semibold" {...props} />
                ),
                tbody: ({ node, ...props }) => (
                  <tbody className="divide-y divide-white/10 text-white/80" {...props} />
                ),
                tr: ({ node, ...props }) => (
                  <tr className="hover:bg-white/5 transition-colors" {...props} />
                ),
                th: ({ node, ...props }) => (
                  <th className="p-4 border-b border-white/10" {...props} />
                ),
                td: ({ node, ...props }) => (
                  <td className="p-4 align-top" {...props} />
                ),
                p: ({ node, ...props }) => (
                  <p className="mb-3 leading-relaxed text-white/80" {...props} />
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
                      className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                    />
                  );
                },
              }}
            >
              {contentWithTweets}
            </ReactMarkdown>
          </div>

          {/* Author Bio - simplified as we don't have bio in frontmatter yet */}
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
                  <a href={`/blog/author/${post.author?.toLowerCase()?.split(" ")?.join("-")}`}>
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
