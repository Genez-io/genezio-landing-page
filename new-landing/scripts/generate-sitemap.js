import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://genezio.com';
const SITEMAP_FILE = path.join(__dirname, '../public/sitemap.xml');
const IMAGES_SITEMAP_FILE = path.join(__dirname, '../public/imagessitemap.xml');

// Static routes
const staticRoutes = [
    '/',
    '/pricing',
    '/conversational-brand-presence',
    '/increase-conversion',
    '/glossary',
    '/terms-and-conditions',
    '/support-terms',
    '/data-processing-agreement',
    '/privacy-policy',
    '/industry-leaderboards',
    '/about-genezio',
    '/agencies',
    '/blog',
    '/research'
];

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
 * Extracts glossary slugs from the glossary component
 */
function extractGlossarySlugs() {
    const glossaryPath = path.join(__dirname, '../src/polymet/pages/glossary.tsx');
    if (!fs.existsSync(glossaryPath)) return [];

    const content = fs.readFileSync(glossaryPath, 'utf-8');
    const termRegex = /term:\s*"([^"]+)"/g;
    const slugs = [];
    let match;

    while ((match = termRegex.exec(content)) !== null) {
        const term = match[1];
        const slug = term
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "");
        slugs.push(`/glossary/${slug}`);
    }

    return slugs;
}

/**
 * Loads author data for image mapping and route generation
 */
function loadAuthors() {
    const authorsPath = path.join(__dirname, '../src/lib/authors.ts');
    if (!fs.existsSync(authorsPath)) return { images: {}, slugs: [] };

    const content = fs.readFileSync(authorsPath, 'utf-8');
    // Extract authors by matching the slug and the block content until the next top-level key or end of object
    // This is more robust than a single regex for multiple properties
    const authorBlocks = content.split(/^\s{4}"/gm).slice(1);
    
    const authorImages = {};
    const authorSlugs = [];

    authorBlocks.forEach(block => {
        const slugMatch = block.match(/^([^"]+)":\s*{/);
        if (!slugMatch) return;
        
        const slug = slugMatch[1];
        
        // Skip if drafted
        if (block.includes('"draft": true')) {
            return;
        }

        const imageMatch = block.match(/"image":\s*"([^"]+)"/);
        if (imageMatch) {
            authorImages[slug] = imageMatch[1];
            authorSlugs.push(`/blog/author/${slug}/`);
        }
    });

    return { images: authorImages, slugs: authorSlugs };
}

/**
 * Discovers all blog posts and their metadata
 */
function getBlogPosts(authorImages) {
    const postsDir = path.join(__dirname, '../src/posts');
    if (!fs.existsSync(postsDir)) return [];

    const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

    return files.map(file => {
        const fullPath = path.join(postsDir, file);
        const content = fs.readFileSync(fullPath, 'utf-8');
        const frontmatter = parseFrontmatter(content);
        const id = file.replace('.md', '');
        const isResearch = frontmatter.type === 'research';
        const authorKey = frontmatter.author?.toLowerCase()?.split(" ")?.join("-");

        return {
            id,
            slug: isResearch ? `/research/${id}/` : `/blog/${id}/`,
            title: frontmatter.title || id,
            thumbnail: frontmatter.thumbnail,
            authorImage: authorImages[authorKey],
            date: frontmatter.date ? new Date(frontmatter.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
        };
    });
}

function generateSitemap() {
    console.log('🚀 Starting sitemap generation...');

    const { images: authorImages, slugs: authorSlugs } = loadAuthors();
    console.log(`👤 Found ${authorSlugs.length} authors.`);

    const glossarySlugs = extractGlossarySlugs();
    console.log(`📚 Found ${glossarySlugs.length} glossary terms.`);

    const blogPosts = getBlogPosts(authorImages);
    console.log(`📝 Found ${blogPosts.length} blog posts.`);

    const blogPostsWithImages = [];
    const blogPostsWithoutImages = [];

    blogPosts.forEach(post => {
        const hasImages = post.thumbnail || post.authorImage;
        if (hasImages) {
            blogPostsWithImages.push(post);
        } else {
            blogPostsWithoutImages.push(post);
        }
    });

    console.log(`🖼️  ${blogPostsWithImages.length} blog posts have images.`);
    console.log(`📄 ${blogPostsWithoutImages.length} blog posts have no images.`);

    const today = new Date().toISOString().split('T')[0];

    // 1. Generate Main Sitemap
    const allRoutes = [
        ...staticRoutes,
        ...authorSlugs,
        ...glossarySlugs,
        ...blogPostsWithoutImages.map(p => p.slug)
    ];

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<!--
Generated by scripts/generate-sitemap.js
-->
${allRoutes.map(route => `  <url>
    <loc>${BASE_URL}${route}${route.endsWith('/') || route.length === 1 ? '' : '/'}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1</priority>
  </url>`).join('\n')}
</urlset>`;

    fs.writeFileSync(SITEMAP_FILE, sitemapContent);
    console.log(`✅ Main sitemap generated at ${SITEMAP_FILE}`);

    // 2. Generate Images Sitemap
    const imagesSitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
<!--
Generated by scripts/generate-sitemap.js
-->
${blogPostsWithImages.map(post => {
        const images = [];
        if (post.thumbnail) images.push(post.thumbnail);
        if (post.authorImage) images.push(post.authorImage);

        return `  <url>
    <loc>${BASE_URL}${post.slug}</loc>
${images.map(img => `    <image:image>
      <image:loc>${BASE_URL}${img}</image:loc>
    </image:image>`).join('\n')}
  </url>`;
    }).join('\n')}
</urlset>`;

    fs.writeFileSync(IMAGES_SITEMAP_FILE, imagesSitemapContent);
    console.log(`✅ Images sitemap generated at ${IMAGES_SITEMAP_FILE}`);
}

try {
    generateSitemap();
} catch (error) {
    console.error('❌ Error generating sitemaps:', error);
    process.exit(1);
}
