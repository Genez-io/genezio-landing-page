---
title: "What Serverless Is - And Why You Should Care"
date: 2024-03-07
tags:
  - Learning
author: Kristopher Sandoval
linkedIn: https://www.linkedin.com/in/krsando/
thumbnail: /images/what-serverless-is-and-why-you-should-care.webp
preview: Serverless is an incredibly powerful option for many development situations. But what exactly is it? And how can you leverage it to great success today – with as little friction as possible?
# meta data start
description: "Learn about serverless computing and its benefits. Discover how DeployApps simplifies serverless deployment for efficient and scalable applications."
meta_og_url: "https://genezio.com/blog/what-serverless-is/"
meta_og_image: "https://genezio.com/images/what-serverless-is-and-why-you-should-care.webp"
url: "/blog/what-serverless-is/"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 4
url: /blog/what-serverless-is
---

Serverless is an incredibly powerful option for many development situations. But what exactly is it? And how can you leverage it to great success today – with as little friction as possible?

## What is serverless deployment?

In order to understand what serverless deployment actually is, we first need to take a little bit of a trip into the past. In the early days of computing, resources were generally centralized in mega-servers tucked away in university basements or giant corporate buildings. These servers contained cutting edge technology and data stores, and interacting with these resources necessitated the creation of APIs that could translate remote calls to local ones.

### Servers As Far as the Eye Can See

Suddenly, with the advent of technologies such as RPC (Remote Procedure Call), clients could make requests of servers half a world away to act upon data and leverage the incredible localized power of these mainframes and servers to do serious work.

Massive remote systems became common, and servers were often built for maximum load. While servers were not at 100% capacity 100% of the time, they nonetheless needed to be able to serve this traffic, and as such, they were often provisioned and left operational even if the average use load was relatively smaller than the maximum need.

Over time, however, the personal computing revolution would shift the power and storage paradigm. In the 1980s, data was largely stored in centralized mainframe and server clusters on cassette tapes – as technology progressed, personal computers throughout the 90s and 00s began to offer Gigabytes and Terabytes of local storage, not to mention Gigahertz (yes, Gigahertz - not Megahertz!) of power.

What is interesting, however, is that the paradigm for remote servers largely stayed the same for some time. Massive servers were provisioned and maintained, and even if you only needed a maximum throughput or capability 10% of its operational lifespan, you often had a system that was simply overbuilt, over expensive, and over complex for the rest of the 90%.

### Where We’re Going, We Don’t Need Servers!

Serverless computing, then, is an answer to one simple question – does it make sense to make the base specifications the maximum requirement? For adherents to serverless computing, the answer is a resounding no. As cloud computing developed and expanded, the idea of provisioning machine resources on-demand – that is, scaling resources according to real-world current demand rather than project demand – became possible.

A good way to think about this is to imagine a motel. The older model is the standard motel model – a building with a set number of rooms with hard costs and continuous operational demands. When you need more rooms, you need to build more rooms, and those rooms remain whether they’re filled or not.

Serverless, then, is more like a glamping campground with tents. If you have a hundred campers, well – set up a hundred tents! When that number goes down, take down some of those tents. By scaling with demand, you make the solution fit the reality of the problem rather than planning for the ultimate maximum situation.

## Benefits of Going Serverless

In simplest terms, serverless computing spins up additional servers when necessary, and reduces servers when they’re not needed. This has major benefits for clients and servers alike.

Firstly, this is a much more efficient use of resources, both economic and operational. The adoption of serverless can lead to reduced operational costs, but it can also allow you to scale your service and control ongoing operational needs to match the actual use case. The number of stories where providers have built a too-small system that dies due to the internet flooding it with new users is almost as high as the number of stories where developers have made a system that is so robust it collapses under the weight of maintenance cost. With serverless, you can scale to actual needs both in resource and cost terms.

Serverless is also a paradigm that lends itself to better visibility. Because it is fundamentally event-driven due to events being the trigger factor of new server provisioning, it creates a higher level of visibility into the systems at hand and provides for more opportunities and touch points to detect issues and secure functionality.

## Other Considerations

All of this said, there are some considerations in a serverless environment that should be kept in mind.

Firstly, there is the very real cost of cold starts and delay in provisioning. It is impossible for a server to spin up immediately from a cold start – even the best serverless implementations take a small amount of time to spin up. While this is often a negative well offset by cost and efficiency savings, it is a consideration.

There is also the loss of persistence. For instance, global values are often not persistent between serverless runs as each server is configured upon need. While this can be worked around, it does require additional planning.

Finally, there is the relative complexity of serverless. While serverless does typically save a substantial amount of complexity in terms of server maintenance, poorly planned serverless implementations can result in additional complexity. The easiest way to work around this is to partner with a trusted solution that has proven itself effective and efficient.

## DeployApps + Serverless

DeployApps is an incredibly powerful solution that can help you become serverless almost instantly. DeployApps provides tools and solutions to build full stack serverless applications using a single command line, skipping a lot of the over-complexity inherent in the process of adopting serverless.

With additional features such as DeployApps.Cloud, serverless automation, creation, and testing is made seamless and easy. Notably, DeployApps’s cloud solution provides for zero cold start penalty, erasing one of the largest negatives of adopting serverless, resulting in incredible cost and efficiency results.

To give you an idea of how effective the DeployApps solution is, we can look to real-world experiences with the tool. Laurentiu Ciobanu, Chief Technology Officer at Sessions, had the following to say about the DeployApps experience:

> It was a pleasant and frictionless experience: from my TypeScript code to the cloud in less than 3 minutes (including creating an account, installing the CLI, and logging in with the CLI).

That is simply an incredible – yet typical – experience with DeployApps.

If you’d like to get started with DeployApps today, all you have to do is navigate to the website and {{< external-link link="https://app.genez.io/auth/signup" >}}create your free account{{< /external-link >}} – you are mere clicks away from a highly efficient and scalable serverless implementation!
