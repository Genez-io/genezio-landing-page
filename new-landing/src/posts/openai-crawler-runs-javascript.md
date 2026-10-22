---
title: "OpenAI’s Search Crawler Runs JavaScript. Here’s the Proof."
metaTitle: "OpenAI's Search Crawler Runs JavaScript: Proof From Our Logs"
type: research
date: 2026-10-22
tags:
  - AI Research
  - ChatGPT
  - AI Crawlers
  - JavaScript Rendering
  - Technical SEO
author: Bogdan Vlad
linkedIn: https://www.linkedin.com/in/iulian-bogdan-vlad/

thumbnail: /images/openai-crawler-runs-javascript.webp
preview: "OAI-SearchBot executes JavaScript. Here is how we proved it, and what it means for client-side rendered sites."
# meta data start
description: "OpenAI's search crawler executes JavaScript. Next.js prefetches and a JS-only beacon, traced to OpenAI's published IP ranges, prove it. Here's the test."
meta_og_url: "https://genezio.com/research/openai-crawler-runs-javascript/"

meta_og_image: "https://genezio.com/images/openai-crawler-runs-javascript.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 4
url: /research/openai-crawler-runs-javascript/
---

![OpenAI's search crawler runs JavaScript](/images/openai-crawler-runs-javascript.webp)

## The pages that shouldn't have been cited

**OpenAI's search crawler (OAI-SearchBot) executes JavaScript. We know because we made it call us back.**

It started with something that didn't add up. Several of our clients run websites that are rendered entirely in the browser: the server sends an almost empty HTML shell, and JavaScript builds everything the visitor actually sees. If you read the raw HTML, there is no product copy, no pricing, no headings. Just a `<div id="root">` and a few script tags.

By the general consensus, ChatGPT should not be able to say anything useful about those pages. Every guide on AI crawlers repeats the same rule: OpenAI's bots fetch HTML and do not render JavaScript. Yet in our tracked conversations, ChatGPT was citing these pages, referring users to them, and quoting details that exist only after the JavaScript runs.

So we asked the obvious question. If the crawler can't run JavaScript, where is that content coming from?

## The first clue was in our own CDN logs

The Genezio website is built with Next.js, and we keep the full CDN logs, so every request from every crawler is on record.

Filtering for OpenAI's user agents, we expected the usual pattern: one request per page, for the HTML document, and nothing else. That is what a crawler that doesn't run JavaScript looks like.

Instead, alongside the page requests, we found valid Next.js prefetch requests coming from OpenAI's crawler.

That detail matters more than it looks. Next.js is a popular framework for building websites, designed to make moving between pages feel instant. Once a page loads in your browser, its JavaScript looks at the links on the page and quietly fetches the data for the next pages in the background, before you click. That background fetch is the prefetch, and it only happens if the page's JavaScript is actually running.

So a prefetch request from an OpenAI crawler is a strong sign it ran our JavaScript. Still, we wanted a test that left no room for doubt.

## The final test: a page that calls home

The cleanest proof is a request that can only happen if JavaScript runs. So we built one.

We added a small script to our website. When a page is rendered, the script sends a request back to our own server, to a dedicated endpoint that nothing else links to. A visitor who reads only the HTML never triggers it. Only a client that actually executes the page's JavaScript does.

Then we waited, and watched the logs for that endpoint.

1. OpenAI's crawler requested one of our pages.
2. The beacon endpoint received a request for that same page.
3. We checked the source IP of the beacon request against the IP ranges OpenAI publishes for its crawlers. It matched.

That request could not have come from reading HTML. Something inside OpenAI's documented infrastructure loaded our page, ran our JavaScript, and let it make a network call. The consensus says OpenAI's crawlers don't render JavaScript. Our logs say otherwise.

## What this means

Client-side rendered pages can be cited by ChatGPT, and they are. We first saw it happen in our clients' conversations, then built a mechanism that proved OpenAI's crawler executes JavaScript.

What we don't know yet is the impact. We can't say what share of JS-rendered pages actually get rendered and cited. It may happen on every visit, or only on a small fraction of them.

We'll continue to investigate this. The standard advice still holds: render your important content on the server. Server-side rendering guarantees every crawler sees your content, whether it runs JavaScript or not. What changes is that a JS-only site is no longer invisible by default.
