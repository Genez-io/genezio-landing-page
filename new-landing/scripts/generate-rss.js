import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://genezio.com';
const RSS_FILE = path.join(__dirname, '../public/rss.xml');

/**
 * Parses simple frontmatter from markdown content
 */
function parseFrontmatter(content) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
    const match = content.match(frontmatterRegex);
    if (!match) return {};

    const frontmatterBlock = match[1];
    const frontmatter = {};

    frontmatterBlock.split("\n").forEach((line) => {
        const [key, ...valueParts] = line.split(":");
        if (key && valueParts.length > 0) {
            let value = valueParts.join(":").trim();
            // Remove quotes if present
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }
            frontmatter[key.trim()] = value;
        }
    });

    return frontmatter;
}

/**
 * Discovers all blog posts and their metadata
 */
function getBlogPosts() {
    const postsDir = path.join(__dirname, '../src/posts');
    if (!fs.existsSync(postsDir)) return [];

    const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

    const posts = files.map(file => {
        const fullPath = path.join(postsDir, file);
        const content = fs.readFileSync(fullPath, 'utf-8');
        const frontmatter = parseFrontmatter(content);
        const id = file.replace('.md', '');
        const isResearch = frontmatter.type === 'research';

        if (isResearch) {
            return null;
        }

        return {
            id,
            slug: `/blog/${id}/`,
            title: frontmatter.title || id,
            description: frontmatter.description || '',
            thumbnail: frontmatter.thumbnail || '',
            author: frontmatter.author || 'Genezio Team',
            date: frontmatter.date ? new Date(frontmatter.date) : new Date()
        };
    });

    // Sort posts by date, newest first
    return posts.filter(Boolean).sort((a, b) => b.date.getTime() - a.date.getTime());
}

function generateRss() {
    console.log('📡 Starting RSS feed generation...');

    const blogPosts = getBlogPosts();
    console.log(`📝 Found ${blogPosts.length} blog posts for RSS.`);

    const today = new Date().toUTCString();

    const rssContent = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
    <title>Genezio Blog</title>
    <link>${BASE_URL}/blog/</link>
    <description>The platform built for Generative Search and Answer Engine Optimization.</description>
    <language>en-us</language>
    <lastBuildDate>${today}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    
${blogPosts.map(post => `    <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${BASE_URL}${post.slug}</link>
        <guid isPermaLink="true">${BASE_URL}${post.slug}</guid>
        <description><![CDATA[${post.description}]]></description>
        <pubDate>${post.date.toUTCString()}</pubDate>
        <author>${post.author}</author>
        ${post.thumbnail ? `<enclosure url="${BASE_URL}${post.thumbnail}" type="image/webp" length="0" />` : ''}
    </item>`).join('\n')}
</channel>
</rss>`;

    fs.writeFileSync(RSS_FILE, rssContent);
    console.log(`✅ RSS feed generated at ${RSS_FILE}`);
}

try {
    generateRss();
} catch (error) {
    console.error('❌ Error generating RSS feed:', error);
    process.exit(1);
}
