import {
    SparklesIcon,
    TrendingUpIcon,
    TargetIcon,
    BrainIcon,
    ZapIcon,
    BarChartIcon,
} from "lucide-react";
import { authors } from "./authors";
import postsMeta from "./posts-meta.json";

export type BlogPostType = "research";

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    description?: string;
    category: string;
    postType?: BlogPostType;
    readTime: string;
    date: string;
    author: string;
    authorRole: string;
    featured: boolean;
    icon: any;
    gradient: string;
    content: string;
    timestamp: number;
    metaOgImage?: string;
    metaOgUrl?: string;
    metaTitle?: string;
    tags?: string[];
}

const icons = [
    SparklesIcon,
    TrendingUpIcon,
    TargetIcon,
    BrainIcon,
    ZapIcon,
    BarChartIcon,
];

const gradients = [
    "from-zinc-500 to-zinc-500",
    "from-emerald-500 to-zinc-500",
    "from-zinc-500 to-zinc-500",
    "from-zinc-500 to-zinc-500",
    "from-zinc-500 to-zinc-500",
    "from-zinc-500 to-zinc-500",
];

// SSR-only raw modules loader (only bundled for SSR build, completely dead-code eliminated in client build)
let ssrModules: Record<string, string> = {};
if (import.meta.env.SSR) {
    ssrModules = import.meta.glob("../posts/*.md", { query: "?raw", import: "default", eager: true });
}

// Client-side async dynamic loader for on-demand post content (split into separate tiny chunks)
const clientPostLoaders = import.meta.glob("../posts/*.md", { query: "?raw", import: "default" });

export function getPostPath(post: Pick<BlogPost, "id" | "postType">): string {
    const base = post.postType === "research" ? "/research" : "/blog";
    return `${base}/${post.id}/`;
}

export function getAllPosts(): BlogPost[] {
    return (postsMeta as any[]).map((item) => {
        const iconIndex = item.id.length % icons.length;
        const gradientIndex = item.id.length % gradients.length;
        const authorKey = item.author?.toLowerCase()?.split(" ")?.join("-");
        const authorData = authors[authorKey];

        let content = "";
        if (import.meta.env.SSR) {
            const raw = ssrModules[`../posts/${item.id}.md`] || "";
            let contentBody = raw.replace(/^---\n[\s\S]*?\n---/, "").trim();
            contentBody = contentBody.replace(
                /{{<\s*external-link\s+link="([^"]+)"\s*>}}(.*?){{<\s*\/external-link\s*>}}/g,
                "[$2]($1)"
            );
            content = contentBody;
        }

        return {
            ...item,
            authorRole: authorData?.role || "Contributor",
            featured: true,
            icon: icons[iconIndex],
            gradient: gradients[gradientIndex],
            content,
        };
    });
}

export function getPostById(id: string): BlogPost | undefined {
    const posts = getAllPosts();
    return posts.find((post) => post.id === id);
}

export async function fetchPostContent(id: string): Promise<string> {
    const loader = clientPostLoaders[`../posts/${id}.md`];
    if (!loader) return "";
    const raw = (await loader()) as string;
    let contentBody = raw.replace(/^---\n[\s\S]*?\n---/, "").trim();
    contentBody = contentBody.replace(
        /{{<\s*external-link\s+link="([^"]+)"\s*>}}(.*?){{<\s*\/external-link\s*>}}/g,
        "[$2]($1)"
    );
    return contentBody;
}

export function getBlogPosts(): BlogPost[] {
    return getAllPosts().filter((post) => post.postType !== "research");
}

export function getResearchPosts(): BlogPost[] {
    return getAllPosts().filter((post) => post.postType === "research");
}
