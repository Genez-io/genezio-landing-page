import fs from 'fs';
import os from 'os';
import path from 'path';
import { pathToFileURL, fileURLToPath } from 'url';
import { build } from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://genezio.com';
const CHANGELOG_SOURCE = path.join(__dirname, '../src/lib/changelog.ts');
const FEED_FILE = path.join(__dirname, '../public/changelog.xml');

/**
 * The changelog lives in a typed TS module so the page and the feed can never
 * drift apart. Node can't import it directly, so transpile it to a temp ESM
 * file and import that.
 */
async function loadChangelog() {
    const outfile = path.join(
        fs.mkdtempSync(path.join(os.tmpdir(), 'genezio-changelog-')),
        'changelog.mjs'
    );

    await build({
        entryPoints: [CHANGELOG_SOURCE],
        outfile,
        bundle: false,
        format: 'esm',
        platform: 'node',
        target: 'node18',
        logLevel: 'silent',
    });

    const mod = await import(pathToFileURL(outfile).href);
    fs.rmSync(path.dirname(outfile), { recursive: true, force: true });
    return mod;
}

/** Plain-text summary of a release, used as the feed item description. */
function renderDescription(entry) {
    const highlights = entry.highlights
        .map((h) => `${h.title} — ${h.description}`)
        .join('\n\n');

    const other = entry.otherUpdates?.length
        ? `\n\nOther updates:\n${entry.otherUpdates.map((u) => `• ${u}`).join('\n')}`
        : '';

    return `${entry.summary}\n\n${highlights}${other}`;
}

async function generateChangelogRss() {
    console.log('📡 Starting changelog feed generation...');

    const { getChangelogEntries } = await loadChangelog();
    const entries = getChangelogEntries();
    console.log(`🗒️  Found ${entries.length} releases for the changelog feed.`);

    const today = new Date().toUTCString();

    const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
    <title>Genezio Changelog</title>
    <link>${BASE_URL}/changelog/</link>
    <description>New features, improvements and fixes shipped to the Genezio platform.</description>
    <language>en-us</language>
    <lastBuildDate>${today}</lastBuildDate>
    <atom:link href="${BASE_URL}/changelog.xml" rel="self" type="application/rss+xml" />

${entries
            .map((entry) => {
                const url = `${BASE_URL}/changelog/#${entry.slug}`;
                return `    <item>
        <title><![CDATA[${entry.period} — ${entry.title}]]></title>
        <link>${url}</link>
        <guid isPermaLink="false">genezio-changelog-${entry.slug}</guid>
        <description><![CDATA[${renderDescription(entry)}]]></description>
        <pubDate>${new Date(`${entry.date}T09:00:00Z`).toUTCString()}</pubDate>
${entry.tags.map((tag) => `        <category>${tag}</category>`).join('\n')}
    </item>`;
            })
            .join('\n')}
</channel>
</rss>`;

    fs.writeFileSync(FEED_FILE, feed);
    console.log(`✅ Changelog feed generated at ${FEED_FILE}`);
}

try {
    await generateChangelogRss();
} catch (error) {
    console.error('❌ Error generating changelog feed:', error);
    process.exit(1);
}
