---
title: "ChatGPT Ads Went Local. Measurement Didn't."
metaTitle: "ChatGPT Ads Went Local. Measurement Didn't."
date: 2026-11-20
tags:
  - ChatGPT Ads
  - AI Advertising
  - Location Targeting
  - Digital Services Act
  - AI Visibility
author: Horatiu Voicu
linkedIn: https://www.linkedin.com/in/voiqu/

thumbnail: /images/chatgpt-ads-went-local.webp
preview: Postal code targeting reached ChatGPT Ads in Europe, but Ads Manager still won't show who advertises next to your answers. What changed and what to track.
# meta data start
description: Postal code targeting reached ChatGPT Ads in Europe, but Ads Manager still won't show who advertises next to your answers. What changed and what to track.
meta_og_url: "https://genezio.com/blog/chatgpt-ads-went-local/"

meta_og_image: "https://genezio.com/images/chatgpt-ads-went-local.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 13
url: /chatgpt-ads-went-local/
---

![ChatGPT Ads went local. Measurement didn't.](/images/chatgpt-ads-went-local.webp)

## TL;DR

- **Hyperlocal targeting reached Europe.** US advertisers have had ZIP code targeting in ChatGPT Ads since May 2026. On November 12, OpenAI extended targeting within a country to other markets, officially for product feed campaigns. In our test, Ads Manager accepted a single European postal code in the campaign setup.
- **In Europe, location is the main lever.** Custom audiences aren’t supported for campaigns targeting the EEA or Switzerland. For European advertisers, ChatGPT ads are matched on where people are and what they’re asking, not on who they are.
- **Placements are spreading.** ChatGPT now shows an ad while it generates an image. Bidding is moving to automated targets: Max Bid and Max CPC retire on January 1, 2027, replaced by Target CPA and Target CPC.
- **Transparency is on the way, to some degree.** As a designated very large online search engine under the EU’s Digital Services Act, ChatGPT is required to publish a public ad repository by January 2027, covering advertisers, run dates, targeting parameters and reach. How OpenAI implements it, and how granular the data will be, is not yet known.
- **Measurement hasn’t kept up.** Ads Manager reports on your own campaigns, not on the answer next to them. Genezio tracks both in the same conversations. For a global sportswear brand that runs ChatGPT ads, its ads appeared in more than half of the conversations with ads, yet it held only 12% of ad occurrences, while one competitor took 43%. It’s a sneak peek, but no ad platform shows that combination.

When ChatGPT Ads launched in Europe in August, we opened Ads Manager and tried to target a single postal code. The option was there, marked “coming soon.”

We tried again after OpenAI’s November 12 product update. This time Ads Manager accepted a single postal code and carried it through to the campaign summary.

![ChatGPT Ads Manager campaign summary with a single postal code as the location and an ad preview](/images/chatgpt-ads-went-local-ads-manager-postal-code-summary.webp)

*The campaign summary in ChatGPT Ads Manager, with a single postal code as the campaign location and a preview of the ad.*

That changes the unit of targeting. A shopping mall, a university campus or an office district can now, at least on paper, be the audience for an ad that sits next to a ChatGPT answer. What hasn’t changed at the same pace is the ability to see what happens around those ads: who else is buying the space, and whether your brand is in the answer at all. That is the view we track at Genezio, and the first numbers are further down.

## What changed, and when

Location targeting in ChatGPT Ads has moved in steps over six months, from US-only ZIP codes to postal codes in European markets. The regulatory side is moving on a parallel track.

| Date | What happened |
| :---- | :---- |
| May 2026 | OpenAI adds state, DMA and ZIP code targeting for US advertisers in the Ads Manager beta ([PPC Land](https://ppc.land/chatgpt-ads-manager-gets-daily-budgets-geo-targeting-and-dynamic-ctas/)) |
| August 24, 2026 | ChatGPT Ads go live in 31 European markets. In our test, postal code targeting showed as “coming soon” |
| August 31, 2026 | The European Commission designates ChatGPT a very large online search engine (VLOSE) under the Digital Services Act ([European Commission](https://digital-strategy.ec.europa.eu/en/news/commission-designates-chatgpt-reddit-roblox-under-digital-services-act)) |
| November 10, 2026 | Ads start appearing while ChatGPT generates images ([Search Engine Roundtable](https://www.seroundtable.com/openai-chatgpt-ads-visual-ads-42493.html)) |
| November 12, 2026 | OpenAI’s product update: targeting within a country for product feed campaigns, intelligent bidding, Target CPA and Target CPC. A European postal code now works in our test |
| January 2027 | DSA compliance deadline, including a public ad repository |
| January 1, 2027 | Max Bid and Max CPC retire for existing campaigns |

One more detail on the new image placement: it doesn’t necessarily follow the conversation. The first person to report it noted that the ad he saw, for pet food, had nothing to do with what he’d been asking.

At the time of writing, OpenAI’s developer documentation still lists country-level targeting for new product feed campaigns, so availability may vary by account.

## Why location is the main lever in Europe

In the EEA and Switzerland, ChatGPT Ads can’t use custom audiences. Ads Manager says so directly when you add a European location: personalized ads aren’t available there yet.

![ChatGPT Ads Manager location targeting with a single postal code selected and the EEA custom audiences notice](/images/chatgpt-ads-went-local-ads-manager-eea-custom-audiences.webp)

*Location targeting in ChatGPT Ads Manager, with a single postal code selected. Below it, the notice that custom audiences aren’t supported in the EEA or Switzerland.*

That leaves two levers. The first is context, meaning what the person is asking in the current conversation. The second is location. Until November, location in Europe mostly meant a country. Now it can mean a postal code.

For a US advertiser, ZIP code targeting was one more option on top of audiences. For a European advertiser, it is close to the only way to decide who sees the ad beyond the topic of the conversation. That makes the November update more significant for European advertisers than it was for US advertisers in May.

## What hyperlocal could look like in practice

A postal code is a small area. In a large European city, a single code can cover a shopping mall, a business park, a university campus or a festival venue. That opens up scenarios that weren’t possible with country-level targeting:

- A retailer reaching people inside or around a mall while they ask ChatGPT for gift ideas or outfit suggestions.
- A bank or telecom operator reaching people at a music festival while they ask about mobile data, contactless payments or splitting costs with friends.
- A software company reaching employees in an office district while they research tools for their team during the workday.
- A course provider or a delivery app reaching students on campus while they plan their week.

These are possibilities, not proven outcomes. We haven’t run delivery tests, so we don’t know how precisely OpenAI resolves a user’s location. OpenAI’s privacy notice for European users lists approximate location among the signals used to select ads, and approximate location can be off by more than a postal code, especially on mobile networks. Reach inside a single code may also be too small to deliver at a reasonable cost. The setting exists. How well it performs is still an open question.

There is also the question of who sees ads at all. According to OpenAI’s [help center](https://help.openai.com/en/articles/20001047-ads-in-chatgpt), ads appear only for users on the Free and Go plans. Plus, Pro, Business, Enterprise and Edu accounts don’t see them, and neither do accounts identified as belonging to minors or temporary chats. Ads also aren’t placed near sensitive topics such as personal health. That matters for the scenarios above. In an office district, many employees use ChatGPT through a company Business or Enterprise account, so the audience a postal code can actually reach may be much smaller than the number of people inside it.

For consumers, the picture looks different. According to GWI data published in DataReportal’s [Digital 2027 Global Overview Report](https://datareportal.com/reports/digital-2027-global-overview-report), 9.5% of internet users aged 16 and over worldwide pay for an AI tool subscription each month, and the share is lower in most of Europe: 4.4% in France, 4.8% in Germany, 5.1% in Spain and 4.0% in Italy. Paying for an AI tool isn’t the same as being on a paid ChatGPT plan, and work accounts paid for by an employer may not show up in these figures. Still, the numbers suggest that most people using ChatGPT on their own in Europe are on plans where ads can appear.

![Share of internet users aged 16+ who pay for an AI tool subscription each month, by country, October 2026](/images/chatgpt-ads-went-local-ai-subscription-share-by-country.webp)

*Share of internet users aged 16+ who pay for an AI tool subscription each month. Source: GWI (Q2 2026), via [DataReportal](https://datareportal.com/reports/digital-2027-global-overview-report), We Are Social and Meltwater, Digital 2027 Global Overview Report.*

## The measurement gap

Ads Manager tells you what happened to your own campaigns: impressions, clicks, spend and, with the pixel or Conversions API, conversions. That is the standard view for any ad platform, and it is still thinner than what Google Ads offers. In its comparison of the two platforms, [Search Engine Land](https://searchengineland.com/chatgpt-ads-vs-google-ads-key-differences-501232) lists less detailed reporting as one of the six main differences.

The bigger gap is everything around your ad. ChatGPT ads are shown next to an answer the advertiser doesn’t control. OpenAI [states](https://help.openai.com/en/articles/20001047-ads-in-chatgpt) that ads don’t influence that answer, which means the answer can recommend your competitor while your ad sits beside it. It can also recommend you while a competitor’s ad sits beside it.

No ad platform reports on that, and it isn’t designed to. But for a brand deciding whether to spend in ChatGPT, three questions matter together:

1. Which conversations relevant to my brand show ads, and how often?
2. Who is advertising on them?
3. Is my brand in the answer, with or without paying?

As targeting gets finer, these questions also get more local. A competitor can now buy the space in one postal code while you look at national averages.

## What Genezio data shows

Genezio simulates full conversations in ChatGPT, Google AI Mode and Google AI Overviews as a brand’s customer personas, and records both the answer and any ads shown alongside it. Here is what that looks like for a global sportswear brand that runs its own ChatGPT ads. Think of it as a sneak peek at what this kind of data shows.

We track the brand in several markets, with most of its ads appearing in Canada. Over 30 days, from October 20 to November 19, 2026, 82 of its 1,795 tracked conversations showed at least one ad. Those ads came from 27 advertisers, four of them tracked competitors.

![Genezio AI Ads overview for a sportswear brand: 5% of conversations with ads, 27 advertisers, 15% not in the answer, 12% share of ads](/images/chatgpt-ads-went-local-genezio-ai-ads-overview.webp)

*The AI Ads overview for the brand over 30 days.*

### Visibility and share tell different stories

The brand’s own ads show up often: its ad appeared in 53% of the conversations with ads, more than any other advertiser. Measured by share of voice, the picture flips. The brand accounted for 44 of 359 ad occurrences, or 12%. An athleisure competitor appeared in only 11% of the conversations with ads, yet took 43% of all ad occurrences.

![Ad visibility and share of voice side by side: the brand leads on visibility with 53%, a competitor leads on share of voice with 43%](/images/chatgpt-ads-went-local-ad-visibility-vs-share-of-voice.webp)

*The same 30 days, two views. Left: the share of conversations with ads that showed each brand’s ad. Right: each brand’s share of all ad occurrences.*

Both numbers are true, and they answer different questions. Visibility tells you how often you are there at all. Share of voice tells you how much of the space you hold when you are. A brand that reports only one of them can come to the wrong conclusion about how it is doing.

The advertisers table adds one more detail. What looks like the brand’s own Canadian store appears as a separate advertiser, with 21 ads and another 43 occurrences. Inside Ads Manager, each account sees only its own campaigns. Seen from the outside, the two compete for the same conversations.

![Genezio advertisers table with ad visibility, ad share, ads and occurrences for each advertiser](/images/chatgpt-ads-went-local-genezio-advertisers-table.webp)

*Advertisers ranked by ad share, with visibility, number of ads, occurrences and when each was last seen.*

### A catalogue against a campaign

The competitor’s ads also look different. Instead of a handful of brand messages, they are product listings: the same leggings in different lengths, sizes and colours, each one a separate ad. The competitor ran 71 different ads in the period, against the brand’s 29. When several of them show up in a single conversation, one appearance turns into many occurrences.

![Competitor product ads captured by Genezio: leggings in different lengths, sizes and colours, each listed as a separate sponsored ad](/images/chatgpt-ads-went-local-competitor-product-ads.webp)

*The competitor’s ads: product listings rather than brand messages, many of them variants of the same item.*

These look like product feed ads, the campaign type that OpenAI’s November update gave more geographic options. As those campaigns become easier to target by region, a brand running only brand-message ads may increasingly find itself competing with a catalogue.

### Where the ads appear

The ads cluster around comparison questions. More than half of all ad occurrences came from a single topic comparing the brand with one of its main rivals. In questions about the brand in Canada, 44 of 110 conversations showed an ad. And in 12 of the 82 conversations with ads, the brand wasn’t mentioned in the organic answer at all.

![Genezio topics and scenarios with ads for the sportswear brand, led by brand comparison topics](/images/chatgpt-ads-went-local-topics-scenarios-with-ads.webp)

*Topics and scenarios with ads, led by questions that compare the brand with its rivals.*

Not every comparison is fought between the brands being compared. In a scenario comparing the brand’s sneakers with another sneaker brand, the ads came from footwear retailers rather than from either brand. The advertisers on a conversation are not always the companies named in it.

### What the brand’s own ads say

The brand’s ads ran seasonal messaging in the period: early Black Friday pricing for members, pointing to its own site. Seeing them next to the competitors’ ads, in the same conversations, shows how that message lands against product listings and retailer offers.

![The brand's own ads captured by Genezio, with Black Friday messaging and occurrences](/images/chatgpt-ads-went-local-brand-own-ads.webp)

*The brand’s own ads, as ChatGPT showed them next to the answers, and how often each one appeared.*

The same tracking covers other markets and languages too. Among the most recent conversations with ads were questions asked in a European language about gym bags and training gear, a reminder that the ad inventory is already live well beyond the US.

![The most recent conversations with ads, including questions about gym bags and training gear asked in a European language](/images/chatgpt-ads-went-local-recent-conversations-with-ads.webp)

*The most recent conversations with ads for the brand, across markets.*

### What this adds up to

Genezio also tracks the shopping side of the same answers: product cards, which products appear and which merchants sell them. For brands with a product feed, that adds a third layer next to the organic answer and the ads.

The point isn’t any single percentage. The point is that one view shows the organic answer and the ads together, for the same conversations. The brand can see that being present in half of the conversations with ads isn’t the same as owning the ad space around them, which rivals take the rest, and with what kind of ads. If you want the same view for your own vertical and the markets where you plan to advertise, [get in touch with us](https://genezio.com/contact-sales/).

## What the ad repository could show, and what to measure in the meantime

On August 31, 2026, the European Commission designated ChatGPT a very large online search engine under the Digital Services Act, based on 159.1 million monthly EU users of its search features. It is the first AI chatbot to receive the designation.

According to the Commission, the designation gives OpenAI four months, until January 2027, to comply with the additional obligations. They include annual systemic risk assessments, transparency reports and, under Article 39, a public repository of ads. That repository has to keep each ad for a year, with the advertiser, the period it ran, the targeting parameters and its reach. Meta, Google and TikTok already run similar libraries for their platforms.

What we don’t know yet:

- What format OpenAI will choose, and how easy the data will be to search or export.
- How granular the targeting parameters will be, for example whether individual postal codes will appear.
- How quickly new ads will show up after they start running.

Once it is live, the repository should make it much easier to see who is advertising in ChatGPT in Europe and how they target. It is designed to show ads, so it won’t show the answers next to them. That part stays with the brand to measure.

Until then, and alongside it afterwards, three things are worth tracking now. First, whether your brand is recommended in the conversations your customers actually have, not just mentioned. Second, which of those conversations already carry ads, and from whom. Third, how both change by market and, as targeting gets finer, by city. Brands that start now will have a baseline for comparison when competitors’ targeting becomes public.

If you want to see which ads already appear next to answers about your brand, [book a demo with Genezio](https://genezio.com/contact-sales/).

## FAQ

### Can you target a single postal code with ChatGPT Ads in Europe?

In our test after OpenAI’s November 12 update, Ads Manager accepted a single European postal code in the campaign setup. OpenAI announced targeting within a country for product feed campaigns, while its developer documentation, at the time of writing, still lists country-level targeting for new product feed campaigns. Availability may vary by account, and how precisely ads are delivered within a postal code is still untested.

### Can ChatGPT Ads use custom audiences in Europe?

No. Custom audiences aren’t supported for campaigns targeting the EEA or Switzerland, where personalized ads are not initially available. European ads rely on signals such as the current conversation and approximate location.

### Who sees ads in ChatGPT?

Users on the Free and Go plans. Plus, Pro, Business, Enterprise and Edu accounts don’t see ads, and neither do accounts identified as belonging to minors or temporary chats.

### Do ads influence ChatGPT’s answers?

OpenAI says they don’t. Ads run on separate systems from the chat model and are labeled as sponsored. That also means a brand can be missing from the answer next to its own ad, or present in an answer next to a competitor’s ad.

### When will the ChatGPT ad repository be available?

The European Commission designated ChatGPT a very large online search engine on August 31, 2026, with four months to comply, which points to January 2027. The repository has to include each ad’s advertiser, run dates, targeting parameters and reach. OpenAI hasn’t said yet what it will look like.

### How can I see who advertises next to answers about my brand?

Ads Manager only reports on your own campaigns. To see other advertisers and the answers next to their ads, you need to observe the conversations themselves, for example by simulating your customers’ questions and recording both the answer and any ads, which is what Genezio does.

## Sources

- [European Commission: Commission designates ChatGPT, Reddit, Roblox under Digital Services Act](https://digital-strategy.ec.europa.eu/en/news/commission-designates-chatgpt-reddit-roblox-under-digital-services-act), August 31, 2026
- [OpenAI Help Center: Ads in ChatGPT](https://help.openai.com/en/articles/20001047-ads-in-chatgpt)
- OpenAI, ChatGPT Ads product update to advertisers, November 12, 2026
- [Search Engine Roundtable: ChatGPT ads while it creates your image](https://www.seroundtable.com/openai-chatgpt-ads-visual-ads-42493.html), November 10, 2026
- [Search Engine Land: ChatGPT ads vs. Google Ads, 6 key differences](https://searchengineland.com/chatgpt-ads-vs-google-ads-key-differences-501232), November 11, 2026
- [We Are Social & Meltwater, Digital 2027 Global Overview Report, via DataReportal](https://datareportal.com/reports/digital-2027-global-overview-report) (data: GWI, Q2 2026)
- [PPC Land: ChatGPT Ads Manager gets daily budgets, geo targeting and dynamic CTAs](https://ppc.land/chatgpt-ads-manager-gets-daily-budgets-geo-targeting-and-dynamic-ctas/), May 2026
