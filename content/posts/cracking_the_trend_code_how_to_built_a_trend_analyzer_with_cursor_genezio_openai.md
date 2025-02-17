---
title: "Cracking the Trend Code: How to Built a Trend Analyzer with Cursor, Genezio & OpenAI"
date: 2025-02-12
tags:
  - Tutorials
author: Rares Istoc
linkedIn: https://ro.linkedin.com/in/rares-istoc-9aa401123
thumbnail: /images/trend-analyzer.webp
preview: This year has started on a rollercoaster, tech included. Incredible news appear every second day, the AI industry is on fire and the benchmarks are constantly moving. Funny enough, the buzz is contained in the online world while the day to day has more predictable shifts.
# meta data start
description: Learn how MLVanguards built an AI-powered LinkedIn trend tracker using Genezio. Step-by-step guide on trend monitoring, AI integration, and cloud deployment.
meta_og_url: "https://genezio.com/blog/ai-trend-tracker-genezio/"
meta_og_image: "https://genezio.com/images/trend-analyzer.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 10
url: /blog/ai-trend-tracker-genezio/
---

This year has started on a rollercoaster, tech included. Incredible news appear every second day, the AI industry is on fire and the benchmarks are constantly moving. Funny enough, the buzz is contained in the online world while the day to day has more predictable shifts.

We wanted to showcase today a use case presented by MLVanguards, where they solved a real day to day problem for the common developer: chasing & catching up to trends.

They analysed the content on LinkedIn – arguably the place to be to chase trends – and found some interesting pain points:

- **For passive users**, trends felt like a whirlwind of information attacking them from every side. “As a user, am I up to date? Is this informative post still relevant?”

- **For users who intend to start posting**, the issue came at which trends were worth hopping on for the most reach? What is the hot topic this week within their niche?

- **And for active users** (i.e “influencers”): Are people still interested in this topic enough to interact with the post? Or is this post forgettable?

They devised a solution to allow any type of user to create their own internal tool for trend monitoring – all deployed with the help of Genezio! Here’s how they did it:

## Architecture walk through

![alt_text](/posts/analyzer.gif)

The techniques presented combine knowledge of machine learning and data analysis. The entire solution can be found on {{< external-link link="https://github.com/mlvanguards/scaling-data-harvesting" >}}GitHub{{< /external-link >}} for those looking for a hands-on approach.

**Prerequisites**

- A **RapidAPI Account** and a free subscription to {{< external-link link="https://rapidapi.com/freshdata-freshdata-default/api/fresh-linkedin-profile-data" >}}Fresh LinkedIn Profile Data{{< /external-link >}};

- **OpenAI Key**, or any other model preferred;

- A **Genezio** account for their cloud capabilities.

**Data Collection and Preprocessing**

The first step in any AI solution required data collection. In their approach, the profiles of a select numbers of top influencers were determined as the starting point for catching trends at their best which enters the system via a simble Chat UI.

The leading actor is the scheduling part itself since it’s the main entry point of the system where the whole flow is orchestrated. It spanws enough crawlers that have one job – to take an individual profile, extract posts from that persons page, clean the raw text then store all the posts in a MongoDB.

**Model Selection and Trend Extraction**

After each crawler has finished their job, we return to the Scheduler that extracts the processed text and prepares it as input for the `gpt-4o-mini` model from OpenAI. The great part of this open-source solution is that any model can be integrated with a simple API call. GPT 4o was used for its robustness and benchmark results.

**Deployment and Monitoring**
A last step for those looking to deploy this project on their own domain. The convenient way is to head over & clone the repo from {{< external-link link="https://github.com/mlvanguards/scaling-data-harvesting" >}}GitHub{{< /external-link >}}, create a `.env` file by following the `.env.example` in the backend folder, then run this command:

`> make local`

> In order to deploy the solution, use `make deploy` in the root folder.

The easy way is to head over to the {{< external-link link="https://app.genez.io/auth/login?redirect=new-project" >}}Genezio Dashboard{{< /external-link >}} to create a new project based on a template, add a personal implemmentation in the backend folder, a pretty UI in the frontend folder, the use `genezio local` test locally, then `genezio deploy` to put it online. Monitoring is then possible via the Genezio dashboard linked above.

## Preview

![alt_text](/posts/analyzer.webp)

The solution is available online at {{< external-link link="https://pink-equivalent-cat.app.genez.io/" >}}this URL{{< /external-link >}}.

MLVanguards is a weekly newsletter putting their production knowledge to use. Each of their articles reflect real life issues and architectures around deploying and scaling ML solutions. To learn more about their journey, follow them on {{< external-link link="https://mlvanguards.substack.com/" >}}Substack{{< /external-link >}}.
