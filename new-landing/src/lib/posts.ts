import {
    SparklesIcon,
    TrendingUpIcon,
    TargetIcon,
    BrainIcon,
    ZapIcon,
    BarChartIcon,
} from "lucide-react";
import { authors } from "./authors";

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    date: string;
    author: string;
    authorRole: string;
    featured: boolean;
    icon: any;
    gradient: string;
    content: string;
    timestamp: number;
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
    "from-blue-500 to-purple-500",
    "from-emerald-500 to-teal-500",
    "from-blue-500 to-cyan-500",
    "from-purple-500 to-pink-500",
    "from-orange-500 to-red-500",
    "from-yellow-500 to-orange-500",
];

function parseFrontmatter(content: string): Record<string, any> {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
    const match = content.match(frontmatterRegex);
    if (!match) return {};

    const frontmatterBlock = match[1];
    const frontmatter: Record<string, any> = {};

    frontmatterBlock.split("\n").forEach((line) => {
        const [key, ...valueParts] = line.split(":");
        if (key && valueParts.length > 0) {
            let value = valueParts.join(":").trim();
            // Remove quotes if present
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }
            // Handle arrays (simple case for tags)
            if (key.trim() === "tags") {
                // This simple parser might fail on multi-line arrays, but let's handle the single line case or skip complex ones for now.
                // The example file had tags on new lines.
                // Let's just ignore complex array parsing for now and handle simple key-values.
                return;
            }
            // Handle tags if they are inline like tags: [AI, Tech] - not the case in example

            frontmatter[key.trim()] = value;
        }
    });

    // A bit more robust parsing for the example file structure where tags are list items
    // But for now let's stick to simple key: value.
    // The example file has:
    // tags:
    //   - AI
    // This simple parser will skip 'tags' line (value empty) and '- AI' line (no colon).
    // We can improve if needed, but 'category' is mapped from 'tags' in the plan? 
    // Wait, the plan said "tags (category)".
    // Let's try to extract the first tag if possible.

    return frontmatter;
}

// Helper to extract first tag from content if simple parsing failed
function extractFirstTag(content: string): string {
    const tagMatch = content.match(/tags:\s*\n\s*-\s*(.*)/);
    if (tagMatch) return tagMatch[1].trim();
    return "General";
}

export function getAllPosts(): BlogPost[] {
    const modules = import.meta.glob("../posts/*.md", { as: "raw", eager: true });

    const posts: BlogPost[] = [];

    for (const path in modules) {
        const content = modules[path] as string;
        const frontmatter = parseFrontmatter(content);
        const filename = path.split("/").pop()?.replace(".md", "") || "";

        // Extract tag manually if not in simple frontmatter
        const category = extractFirstTag(content);

        // Assign random icon and gradient based on filename length to be deterministic
        const iconIndex = filename.length % icons.length;
        const gradientIndex = filename.length % gradients.length;

        // Extract content (remove frontmatter)
        let contentBody = content.replace(/^---\n[\s\S]*?\n---/, "").trim();

        // Replace Hugo-style external-link shortcodes with Markdown links
        // Pattern: {{< external-link link="URL" >}}TEXT{{< /external-link >}}
        contentBody = contentBody.replace(
            /{{<\s*external-link\s+link="([^"]+)"\s*>}}(.*?){{<\s*\/external-link\s*>}}/g,
            "[$2]($1)"
        );

        const authorKey = frontmatter.author?.toLowerCase()?.split(" ")?.join("-");
        const authorData = authors[authorKey];

        posts.push({
            id: filename,
            title: frontmatter.title || "Untitled",
            excerpt: frontmatter.preview || frontmatter.description || "No description",
            category: category,
            readTime: (frontmatter.readTime ? `${frontmatter.readTime} min read` : "5 min read"),
            date: frontmatter.date ? new Date(frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }) : "Recent",
            timestamp: frontmatter.date ? new Date(frontmatter.date).getTime() : 0,
            author: frontmatter.author || "Genezio Team",
            authorRole: authorData?.role || "Contributor",
            featured: true, // As requested
            icon: icons[iconIndex],
            gradient: gradients[gradientIndex],
            content: contentBody,
        });
    }

    return posts;
}

export function getPostById(id: string): BlogPost | undefined {
    const posts = getAllPosts();
    return posts.find((post) => post.id === id);
}
