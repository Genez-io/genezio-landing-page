---
title: "What is Serverless Scalability and How Does it Work?"
date: 2024-08-13
tags:
  - Learning
author: Luis Minvielle
linkedIn: https://www.linkedin.com/in/luisminv/
thumbnail: /images/what_is_serverless_scalability_and_how_does_it_work.webp
preview: "Serverless computing is a system of a cloud model that is used by more than 20,000 companies across every industry imaginable, including Netflix, Coca-Cola, and Nordstrom."
description: "Serverless scalability is the ability of a serverless system to automatically adjust its size to match the workload."
meta_og_url: "https://genezio.com/blog/serverless-scalability/"
meta_og_image: "https://genez.io/images/what_is_serverless_scalability_and_how_does_it_work.webp"
customHeader: "White header"
customFooter: "White footer"
readTime: 10
url: /serverless-scalability/
---

Serverless computing is a system of a cloud model that is used by more than {{< external-link link="https://theirstack.com/en/technology/serverless" >}}20,000 companies{{< /external-link >}} across every industry imaginable, including Netflix, Coca-Cola, and Nordstrom. The serverless computing model offers a practical solution to meet sudden spikes in demand (scaling computing power) and scale down when usage is low. Since a variable cost is generally applied to serverless it can be more cost effective for some companies. This built-in functionality meant to scale apps up or down quickly is referred to as **serverless scalability**.

To make the most out of serverless scalability, it’s a good idea to understand how it works. The market has plenty of players, some of which might scale up quickly — but turn out to be expensive or slow (or expensive). This article explains what serverless scaling is, how it works, and what some benchmarks are, so that developers, SaaS companies or tech workers can pick a serverless provider that meets their demands and costs.

### What is serverless and — why does it feature servers?

{{< external-link link="https://genezio.com/blog/serverless-computing-when-to-go-serverless/" >}}Serverless computing{{< /external-link >}} **is a cloud model that outsources the responsibility of managing servers and infrastructure from developers or IT specialists to cloud providers.** Instead of provisioning, scaling, and maintaining servers, developers can focus their efforts towards building their application.

The serverless model generally operates on a pay-per-use basis, meaning you only pay when your code is actively running. So the cost is going to vary depending on how many people are using your application. While the name might suggest there are no servers involved, it’s a misconception. Servers still very much exist but instead of them being on premise (at your office, for example), you rent the use of a server from a third party who manages the infrastructure and the server maintenance. You are essentially using the third-party cloud system to host and run your application. Since developers have no direct interaction or management responsibilities over them, the industry calls it “serverless.”

## What is serverless scalability?

**Serverless scalability** is the ability of a serverless platform to automatically adjust its computing power proportionally to the workload demand (whether a surge in traffic or a steady growth). Imagine an application has a steady average number of users per day. Suddenly, they gain a massive surge of traffic, more traffic than their server capacity (which is only scaled to their immediate needs). What happens? Their applications crash, and their website goes down or becomes unusable because the servers are overloaded and cannot process the huge number of tasks. We can address this common problem with serverless scalability.

Serverless scalability is like having a restaurant ({{< external-link link="https://www.goodreads.com/quotes/622508-numbers-written-on-restaurant-bills-within-the-confines-of-restaurants" >}}Bistromathics{{< /external-link >}} come to mind) that can magically create and remove tables based on the number of people wanting to eat. (We use the word “magically” because, as we are talking about “serverless,” all this happens without the owner of the restaurant being aware of it — in other words, automagically). So, unlike traditional systems where you need to manually add or remove servers (or processing power if you're running on the cloud) depending on the rise or fall of the demand, serverless platforms do this automatically, which is equivalent to saying that serverless systems are inherently scalable—provided you choose the right partner who can help you set up the environment so that it doesn’t crash or leave you with an unexpected bill.

{{< external-link link="https://genezio.com/blog/effortless-scaling-genezio-handles-growth/#understanding-scalability" >}}Auto Scaling — Genezio Handles Growth →{{< /external-link >}}

Let's take another example. You've programmed by yourself a ticket-selling web app that has gone viral overnight, particularly because you cut a deal with an up-and-coming act that's doing {{< external-link link="https://www.nytimes.com/2024/06/21/business/taylor-swift-eras-tour-inflation-europe.html" >}}their first show{{< /external-link >}} in your town. With a normal server setup, your web app might probably crash because too many people are trying to use it at once. Even if you've set up your server to automatically add more power when it's necessary (called autoscaling in traditional setups), this doesn't happen instantly. It takes time for these extra servers to start up. Not to mention the bill — that also goes up.

Serverless apps are different. They can grow and shrink super quickly to match how many people are using them. So, if your app usually has 5,000 users a day but, seconds after ticket sales for a popular event starts, it jumps to 50,000 visitors who want to score their tickets, your serverless system will instantly add extra computing power to handle the increased traffic. You don't need to do anything, and your app won't slow down, crash, or get angry rants from fans who were left out of the show.

Usually, we talk about “scaling up” to deal with more users — when you need to handle increased demand, you “scale up” by adding more servers to your infrastructure. This means you're paying for those servers even when demand is low. But serverless can also “scale down” to zero. This means that when there's no incoming work or requests for your app, the underlying infrastructure is essentially turned off, so you are not charged for resources that aren't being used. Serverless scalability keeps you from having to keep servers running just in case work comes in.

## How does serverless scalability work?

Serverless scalability is automatic. So, as a tech worker who needs to have a solution that scales up and down whenever necessary… that's all you need to know. If you partner up with a provider that has an all-around serverless platform to build full-stack apps in minutes, then you're good to go.

Now, you might want to learn how these platforms do it. And regarding that — understanding how a serverless platform scales isn't always straightforward. It often involves considering multiple factors at once. The two major elements to consider are the amount of work the system must handle **(load metric)** and the timeframe in which it has to do it **(time)**.

### Questions that troubleshoot issues based on system load

1. **Number of requests per second.** Can a serverless API endpoint handle a sudden surge of 10,000 requests per second during a flash sale without experiencing significant latency or errors?

2. **Data volume transferred.** How can a serverless data processing pipeline efficiently handle a 50% increase in incoming data volume without compromising processing speed or incurring excessive costs?

3. **Number of concurrent users.** Can a serverless gaming platform support a simultaneous increase of 10,000 concurrent players during a peak gaming hour without affecting gameplay experience or causing system instability?

To understand load metrics, we will focus on how to define load, how to handle load, and how you measure it.

## How to define load

Effective scaling begins with understanding what “load” means for your system. It's the same as knowing how much weight a bridge can hold before it breaks.

“What is load?”: {{< external-link link="https://www.youtube.com/watch?v=4QZXS74fBJE" >}}Load{{< /external-link >}} is a measure of the demand placed on a system. It's different for every system. For a website, it might be the number of people looking at pages (page views) per second. For a database, it could be the number of questions it's asked (queries) at the same time.

How you describe load depends on how your system is built. Let's think of a video streaming service. It might be designed for 50,000 concurrent users who're hate-binging a show about an American girl in Paris. But what if a highly anticipated new series launch suddenly attracts 80% of the user base? This is when things can get tricky. You need to think about how people will actually use your system, not just how you expect them to use it.

## How to handle load

Once you understand the kind of load your system will face, you need to figure out how to manage it. This is like planning how to build a bridge that can handle different amounts of traffic.

The better you can predict how much load your system will handle, the better it will work. You have to think about how much demand there will be, how quickly it can change, and what resources you'll need.

There are two primary ways to handle an increased load: **Scale-up** (vertical scaling), which involves upgrading a single computer (with a faster processor or more memory, for instance), and **scale-out** (horizontal scaling), which means adding more computers or servers to share the workload. Often, a combination of both approaches is the best option. (If you're running serverless, you don't even have to think about going horizontal or vertical — the provider handles that decision for you).

![alt_text](/posts/serverless-scalability2.webp)

Using serverless technology helps a lot with handling load. The system automatically adds or removes computers as required, so you don't have to worry about it as much. This also means you can focus on building your application instead of managing servers, crashes, and timeout errors.

## How to measure load

Once you've figured out how to handle load, you need to keep an eye on how your system is performing. This is like checking the rush-hour flow on your bridge and making sure it holds up.

### Figuring out the useful load metrics

To properly measure load, you need to identify the key factors that impact your app's performance. This might include:

| **Metric's name** | **What it means according to developers**                                                                                                                                                                                                           |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Response time     | Time taken for a system to respond to a request                                                                                                                                                                                                     |
| Throughput        | Number of requests handled in a given time                                                                                                                                                                                                          |
| Error rate        | Percentage of requests resulting in errors                                                                                                                                                                                                          |
| Latency           | Time taken for data to travel between system components. This is tied to the “cold starts” many cloud providers struggle with. Some serverless solutions have above-standard latency times that are even four times faster than AWS's, for example. |
| CPU usage\*       | Percentage of processor capacity used                                                                                                                                                                                                               |
| Memory usage\*    | Amount of memory taken up                                                                                                                                                                                                                           |
| Disk I/O\*        | Rate of data read/write to disk                                                                                                                                                                                                                     |
| Network traffic\* | Amount of data transmitted over the network                                                                                                                                                                                                         |

\*These metrics don't measure load directly, but they can be linked to load and explain how system resources respond to demand.

### Quantifying load

Once you've identified your load metrics, you have to quantify them. This involves setting benchmarks. For example, you might define a “peak load” as a 50% increase in traffic compared to normal levels. Keep an eye on these numbers to see how things are going and make changes if needed.

It's important to look at the right numbers when measuring performance. While tech developers and infrastructure managers can rely on averages, those typically provide a misleading representation of the overall situation. For instance, consider five servers processing a batch of tasks. Their completion times were 150ms, 220ms, 180ms, 300ms, and 10ms. The average would be 172ms, which does not accurately reflect the performance of most servers, especially for the slowest one.

Percentiles offer a more precise representation of system performance. A **percentile** indicates the percentage of data points falling below a specific value. Commonly used percentiles include the 95th, 99th, and 99.9th percentiles (p95, p99, and p999). A typical p99 value for server response time might range from 15 to 70 milliseconds. But you might not need the same p99 value for an instant messaging app than for an enterprise solution you built so that your company can start offering benefits through a dashboard. Your colleagues are likely to be more patient, considering they're about to cop some corporate swag.

![alt_text](/posts/serverless-scalability1.webp)

## Serverless scalability in practice with Genezio

Serverless technology allows software to become a lot simpler to scale up. For instance, if your website — a page that reports highway traffic near the central business district — receives high volumes of visitors during standard business hours (Monday to Friday, 8am to 5pm) but sees a considerable drop-off on the weekend, serverless will adapt for you (and will adapt to your operating costs too).

Also, if you don't have to do things like restarting servers, fixing problems with storage, or installing updates, your team can spend more time building and improving your application. This is true for solopreneurs, big business owners, hobbyist developers, or IT technicians who need to build an app outside a legacy system alike.

{{< external-link link="https://genezio.com" >}}Genezio{{< /external-link >}}, a serverless platform that can run as a FaaS provider as well, is a practical example of serverless scalability. It automatically scales applications based on the volume of traffic. Applications running on Genezio can handle sudden increases in users without issues. Developers have deployed their full-stack web apps **on Genezio in minutes**. And the serverless scalability of these typesafe web apps occurs in an instant.

**To learn more about serverless scalability and its benefits, visit** {{< external-link link="https://genezio.com" >}} Genezio.com{{< /external-link >}}.
