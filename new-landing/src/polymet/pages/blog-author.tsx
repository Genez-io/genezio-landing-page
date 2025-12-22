import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router";
import {
    ArrowLeftIcon,
    LinkedinIcon,
    ClockIcon,
    CalendarIcon,
} from "lucide-react";
import { getAllPosts } from "@/lib/posts";

import { authors } from "@/lib/authors";

function BlogAuthor() {
    const { name } = useParams<{ name: string }>();
    // Default to luis-minvielle if name matches or just use the parameter
    const slug = name || "luis-minvielle";
    const author = authors[slug];

    if (!author) {
        return (
            <div className="min-h-screen bg-[#050506] flex items-center justify-center px-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">
                        Author Not Found
                    </h1>
                    <p className="text-white/60 mb-8">
                        The author you're looking for doesn't exist.
                    </p>
                    <Link to="/blog">
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500">
                            Back to Blog
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    const allBlogPosts = getAllPosts();
    // Filter posts where the author name matches the author's name
    const authorPosts = allBlogPosts.filter((post) => post.author === author.name);

    // Update stats dynamically
    author.stats.articles = authorPosts.length;

    return (
        <div className="min-h-screen bg-[#050506]">
            {/* Back Button */}
            <div className="px-6 pt-8">
                <div className="max-w-7xl mx-auto">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                    >
                        <ArrowLeftIcon className="w-4 h-4" />
                        Back to Blog
                    </Link>
                </div>
            </div>

            {/* Author Hero Section */}
            <section className="relative pt-16 pb-20 px-6 overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-purple-600/5 to-transparent" />

                <div className="relative max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Author Image */}
                        <div className="flex-shrink-0">
                            <img
                                src={author.image}
                                alt={author.name}
                                className="w-35 h-40 rounded-2xl border-2 border-white/20 object-fit-contain"
                            />
                        </div>

                        {/* Author Info */}
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                                {author.name}
                            </h1>
                            <p className="text-xl text-blue-400 mb-4">{author.role}</p>
                            <p className="text-lg text-white/60 mb-6 leading-relaxed max-w-3xl">
                                {author.bio}
                            </p>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-6 mb-6">
                                <div>
                                    <div className="text-2xl font-bold text-white">
                                        {author.stats.articles}
                                    </div>
                                    <div className="text-sm text-white/40">Articles</div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-3">
                                <a
                                    href={author.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center transition-all"
                                >
                                    <LinkedinIcon className="w-5 h-5 text-white/60" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Author's Articles */}
            <section className="px-6 pb-32">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8">
                        Articles by {author.name}
                    </h2>

                    {authorPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {authorPosts.map((post) => {
                                const Icon = post.icon;
                                return (
                                    <Link
                                        key={post.id}
                                        to={`/blog/${post.id}`}
                                        className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all overflow-hidden"
                                    >
                                        {/* Gradient overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

                                        <div className="relative">
                                            {/* Icon */}
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.gradient} opacity-20 flex items-center justify-center mb-4`}>
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

                                            {/* Date */}
                                            <div className="flex items-center gap-1.5 pt-4 border-t border-white/10 text-xs text-white/40">
                                                <CalendarIcon className="w-3 h-3" />
                                                {post.date}
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-white/60">No articles yet.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default BlogAuthor;
