import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://genezio.com';
const RSS_FILE = '/tmp/substack-feed.xml';

// A simple function to convert basic Markdown to HTML
function basicMarkdownToHtml(md) {
    if (!md) return '';
    let html = md
        .replace(/^### (.*$)/gim, '<h3>$1</h3>')
        .replace(/^## (.*$)/gim, '<h2>$1</h2>')
        .replace(/^# (.*$)/gim, '<h1>$1</h1>')
        .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
        .replace(/\*(.*)\*/gim, '<em>$1</em>')
        .replace(/!\[(.*?)\]\((.*?)\)/gim, '<img alt="$1" src="https://genezio.com$2" />')
        .replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>')
        .replace(/\n$/gim, '<br />')
        .split('\n')
        .filter(line => line.trim() !== '')
        .map(line => line.startsWith('<') ? line : `<p>${line}</p>`)
        .join('\\n');
    return html;
}

function parseFrontmatter(content) {
    const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
    const match = content.match(frontmatterRegex);
    if (!match) return { frontmatter: {}, body: content };

    const frontmatterBlock = match[1];
    const frontmatter = {};
    const body = content.slice(match[0].length).trim();

    frontmatterBlock.split("\n").forEach((line) => {
        const [key, ...valueParts] = line.split(":");
        if (key && valueParts.length > 0) {
            let value = valueParts.join(":").trim();
            if (value.startsWith('"') && value.endsWith('"')) {
                value = value.slice(1, -1);
            }
            frontmatter[key.trim()] = value;
        }
    });

    return { frontmatter, body };
}

function getBlogPosts() {
    const postsDir = path.join(__dirname, '../src/posts');
    if (!fs.existsSync(postsDir)) return [];

    const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

    const posts = files.map(file => {
        const fullPath = path.join(postsDir, file);
        const content = fs.readFileSync(fullPath, 'utf-8');
        const { frontmatter, body } = parseFrontmatter(content);
        const id = file.replace('.md', '');

        return {
            id,
            slug: `/blog/${id}/`,
            title: frontmatter.title || id,
            description: frontmatter.description || '',
            thumbnail: frontmatter.thumbnail || '',
            author: frontmatter.author || 'Genezio Team',
            date: frontmatter.date ? new Date(frontmatter.date) : new Date(),
            bodyMarkdown: body
        };
    });

    return posts.sort((a, b) => b.date.getTime() - a.date.getTime());
}

function generateRss() {
    console.log('📡 Starting Substack RSS feed generation...');
    const blogPosts = getBlogPosts();
    const today = new Date().toUTCString();

    const rssContent = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:media="http://search.yahoo.com/mrss/">
<channel>
    <title>Genezio Blog</title>
    <link>${BASE_URL}/blog/</link>
    <description>The platform built for Generative Search and Answer Engine Optimization.</description>
    <language>en-us</language>
    <lastBuildDate>${today}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    
${blogPosts.map(post => {
    // Substack looks for an image at the top of content:encoded for the cover image
    const htmlBody = basicMarkdownToHtml(post.bodyMarkdown);
    const coverImageHtml = post.thumbnail ? `<p><img src="${BASE_URL}${post.thumbnail}" alt="Cover Image" /></p>` : '';
    const fullHtml = coverImageHtml + htmlBody;

    return `    <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${BASE_URL}${post.slug}</link>
        <guid isPermaLink="true">${BASE_URL}${post.slug}</guid>
        <description><![CDATA[${post.description}]]></description>
        <pubDate>${post.date.toUTCString()}</pubDate>
        <author>${post.author}</author>
        ${post.thumbnail ? `<media:content url="${BASE_URL}${post.thumbnail}" medium="image" />` : ''}
        <content:encoded><![CDATA[${fullHtml}]]></content:encoded>
    </item>`;
}).join('\n')}
</channel>
</rss>`;

    fs.writeFileSync(RSS_FILE, rssContent);
    console.log(`✅ Substack RSS feed generated at ${RSS_FILE}`);
}

try {
    generateRss();
} catch (error) {
    console.error('❌ Error generating RSS feed:', error);
    process.exit(1);
}
