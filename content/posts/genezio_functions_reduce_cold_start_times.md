---
title: "Genezio Functions reduce cold start times by up to 4x compared to AWS Lambda"
date: 2024-07-08
tags:
  - News
author: Andreia Ocanoaia
linkedIn: https://www.linkedin.com/in/andreia-irina-ocanoaia/
thumbnail: /images/genezio-functions-reduce-cold-start-times-compared-to-Lambda.webp
preview: We are excited to announce that after two years of dedicated development, our team has launched Genezio Functions
# meta data start
description: "We are excited to announce that after two years of dedicated development, our team has launched Genezio Functions"
meta_og_url: "https://genezio.com/blog/genezio-functions-reduce-cold-start-times/"
meta_og_image: "https://genezio.com/images/genezio-functions-reduce-cold-start-times-compared-to-Lambda.webp"
meta_og_title: "Genezio Functions reduce cold start times by up to 4x compared to AWS Lambda"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 10
---

We are excited to announce that after two years of dedicated research and development, our team has launched {{< external-link link="https://genezio.com/" >}}Genezio Functions{{< /external-link >}} - a fast, secure, and robust next-generation Function-as-a-Service (FaaS) platform. With Genezio Functions, developers can deploy and run code effortlessly without the need to provision or manage servers. Compared with existing platforms, Genezio FaaS reduces cold start up times and improves throughput and compute density.

## Genezio Functions vs AWS Lambda vs GCP vs Vercel vs Netlify

Genezio Functions excel where it matters most for developers: reducing cold start times and enabling frictionless deployment. The cold start is the initial delay experienced when a function is invoked for the first time, a well-known drawback of serverless architectures.

Better cold start performance translates to a better user experience, as applications running on Genezio Functions provide a smoother and more responsive experience for end-users.

**Key takeaways:**

- For Genezio Functions, the cold start response times are significantly lower than those of other platforms. The distribution is tight, and the median is around 54ms, indicating very fast cold start times.

- Compared to GCP, Vercel, and Netlify, Genezio has a narrower distribution (the height of the box), indicating reliability and predictability.

![alt_text](/posts/genezioFunctions2.webp)

The following bar chart shows the median (p50) values for cold start response times in milliseconds. In contexts of performance metrics, such as response times, the p50 value clearly indicates the typical performance that can be expected from the FaaS platform.

**Key Takeaway:** Genezio Functions has the lowest median (p50) cold start response time, significantly lower than the other platforms.

![alt_text](/posts/genezioFunctions3.webp)

The bar chart below shows the p95 values for cold start response times in milliseconds. In response time analysis, the p95 value indicates that 95% of the response times are faster than this value, highlighting the performance experienced by most users.

**Key Takeaway:** Genezio Functions has the lowest p95 cold start response time.

![alt_text](/posts/genezioFunctions1.webp)

### Benchmark setup

To reproduce the experiment, check the {{< external-link link="https://github.com/Genez-io/genezio-benchmark" >}}publicly available repository{{< /external-link >}}.

To perform the benchmark, we deployed two functions hosted in the same geographical region on each Function-as-a-Service (FaaS) platform. The first function is designed to asynchronously invoke the second function a specific number of times, capturing and logging the response time for each invocation. The second function is a simple hello_world function, representing a minimal processing workload.
We used a script to trigger the first function in ten batches to assess both cold and warm start performance. We designated the first batch as a cold start scenario, with subsequent batches used to evaluate warm start behavior.

Our experimental design strategically positions both functions within the same geographic region on each FaaS platform, significantly reducing the impact of network latency. By invoking a simple "hello world" function from another function hosted in the same region, we effectively isolate the measurement of function initialization from network-related delays. This approach allows a more accurate assessment of the cold start times.

**Note:** Most platforms lack detailed metrics for each stage of processing a request, such as instance boot time, HTTPS unpacking, and request processing. As a result, the measurements discussed in this article represent the total round trip time from the calling function to the hello_world function.

## Key Benefits of Genezio Functions

- **Reduce cold start penalty** - Genezio Functions significantly reduces cold start times, ensuring faster application response times.

- **Autoscaling** - Genezio Functions dynamically scales your applications based on demand, ensuring optimal performance. Your application will adjust seamlessly to maintain peak efficiency regardless of the load.

- **Simplified Deployment** - Deploying applications with Genezio Functions is a breeze. With a single deploy command, your code can be up and running, ready to handle incoming requests.

## What is Function-as-a-Service (FaaS)?

Function-as-a-Service (FaaS) platforms have remarkable advantages, making them an excellent choice for modern development.

When using a FaaS platform, you no longer have to worry about setting up or managing servers, as FaaS abstracts away the underlying infrastructure. Furthermore, FaaS enables automatic scaling, allowing your applications to handle requests efficiently without engineer intervention. Lastly, FaaS provides cost-effective solutions by billing based on actual usage, meaning you only pay for the compute time your functions consume.

Genezio Functions take FaaS to the next level, reducing cold starts and providing an optimized and cost effective solution for your full stack application needs.

Genezio Functions leverage various VM and system level optimization techniques, to reduce the cold start overhead. In addition, VM level isolation provides a more secure cloud environment by design, as compared for instance with V8 isolates.

## Enhancing Developer Experience with Genezio

Deploying your Express or Next.js applications on Genezio is incredibly straightforward. Our platform supports automatic deployment and log monitoring, enabling you to develop, test and launch to production effortlessly.

Using our Pro license, multiple developers can collaborate with no additional cost, and get access to the project dashboard - logs, function calls, deployment, databases and other shared resources.

With Genezio, you can focus on building and optimizing your applications while we handle the infrastructure, ensuring a smooth and efficient deployment process.

## Get Started Today

We invite you to try {{< external-link link="https://genezio.com/" >}}Genezio Functions{{< /external-link >}} and experience the future of serverless deployment.

{{< external-link link="https://genezio.com" >}}Sign up on our platform{{< /external-link >}} and start building your first function today.
