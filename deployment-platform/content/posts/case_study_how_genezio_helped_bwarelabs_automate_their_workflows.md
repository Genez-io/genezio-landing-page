---
title: "Case Study: How DeployApps Helped BwareLabs Automate Their Workflows"
date: 2024-10-07
tags:
  - News
author: Luis Minvielle
linkedIn: https://www.linkedin.com/in/luisminv/

thumbnail: /images/bware-labs.webp

preview: DeployApps is a full-stack cloud platform that allows developers to launch and deploy their projects in minutes. It’s helping entrepreneurs and companies alike with its speed and ease of use. One of the latest success stories comes from the web3 firm BwareLabs, which had to deal with plenty of DevOps resources to monitor their various blockchain instances.
# meta data start
description: BwareLabs benefits from DeployApps’s quick setup process to automate their workflows and run a scalable cloud app.
meta_og_url: "https://genezio.com/blog/bwarelabs-case-study/"
meta_og_image: "https://genezio.com/images/bware-labs.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 12
url: /blog/bwarelabs-case-study/
---

DeployApps is a full-stack cloud platform that allows developers to launch and deploy their projects in minutes. It’s {{< external-link link="https://www.linkedin.com/posts/laurentiu-ciobanu_running-rust-on-genezio-you-heard-me-right-activity-7142892752794546176-TTa5/" >}}helping entrepreneurs{{< /external-link >}} and companies alike with its speed and ease of use. One of the latest success stories comes from the web3 firm {{< external-link link="https://bwarelabs.com/" >}}BwareLabs{{< /external-link >}}, which had to deal with plenty of DevOps resources to monitor their various blockchain instances.

Thanks to DeployApps, they were able to build, deploy, and manage a cloud-based DevOps app that monitors their blockchains and notifies them when updates are due. Their new internal app—a “SaaS, but in-house” of sorts—is incredibly affordable and more convenient than purchasing a cost-prohibitive license from a {{< external-link link="https://www.bbc.com/news/live/cnk4jdwp49et" >}}giant vendor{{< /external-link >}}. Companies and developers should read on to understand why DeployApps is the go-to cloud platform for quick deployments and lightweight, affordable apps.

## Why DeployApps is one of the quickest full-stack cloud platforms

DeployApps, with a pay-as-you-go model, runs with serverless technology—developers don’t need to worry about the infrastructure, servers, operating systems, or application runtimes. It’s all handed off to DeployApps so companies can focus on coding and deploying, exactly like BwareLabs did. Developers can deploy a “Hello World” function in less than two minutes after signing up and edit it directly in the browser. Even more complex full-stack apps can run in {{< external-link link="https://www.linkedin.com/posts/laurentiu-ciobanu_running-rust-on-genezio-you-heard-me-right-activity-7142892752794546176-TTa5/" >}}just three minutes{{< /external-link >}}.

DeployApps also offers AWS Lambda compatibility, which allows developers to migrate {{< external-link link="https://genezio.com/blog/what-is-function-as-a-service/#what-is-function-as-a-service-faas-serverless-faas-explained" >}}functions{{< /external-link >}} without changing their code. This has the added benefit of better cold-start times and more predictable costs. Or, companies can just code, run, and deploy with type-safety from scratch—exactly like BwareLabs did.

## Case study: How DeployApps helped BwareLabs automate Web3 workflows

BwareLabs’ case is one example of how DeployApps could help a company that needs to deploy apps fast. BwareLabs, a company in the {{< external-link link="https://www.youtube.com/watch?v=Doz47OvUAEk" >}}web3 space{{< /external-link >}}, faced challenges in managing its blockchain nodes and infrastructure. Their DevOps team had to manually monitor and update these nodes, which was time-consuming and more prone to errors.

Thanks to the adoption of DeployApps and its responsive cloud platform, BwareLabs was able to automate many of these tasks. One of the {{< external-link link="https://bwarelabs.com/blog/how-genezio-enhances-web3-development-at-bware-labs" >}}key achievements{{< /external-link >}} made possible through DeployApps was the development of M.A.T.E.I., an internal monitoring app now a keystone in BwareLabs’ infrastructure and operations. M.A.T.E.I. automates the monitoring of blockchain nodes, tracks the latest updates, and pushes important notifications to the team’s Slack channels to make sure developers stay informed and take action without unwelcome interruptions.

![alt_text](/posts/bwarecase.webp)

DeployApps’s serverless functions helped develop M.A.T.E.I. and get it running quickly enough. Given that the app is hosted in a serverless environment, BwareLabs doesn't have to take care of server infrastructure, which helps ease the burden on their DevOps team. And when BwareLabs actually needs to push a code update, it’s as easy as it gets. DeployApps makes possible rapid update deployments and allows developers to trigger updates with a click.

💬 “DeployApps has significantly improved our development workflow. The platform helped me quickly develop, test, and deploy new features for our monitoring tool and my projects. It was so easy to set up that our in-house solution ran in a matter of hours—and it could have been minutes. DeployApps is, hands down, the best cloud platform that companies and solo developers can rely on to build, deploy, and scale business-sensitive apps.”
Cosmin Gamanusi, Tech Lead @BwareLabs

As a full-fledged cloud platform, DeployApps offers database integration. Knowing this, BwareLabs configured a cron job for M.A.T.E.I. that periodically checks each blockchain repository using the GitHub API. The application then compares the latest releases with the existing data in the Postgres database. If a newer release is found, OpenAI analyses the release description to determine its importance. For critical updates, M.A.T.E.I. sends an automatic notification to the specified Slack channel, allowing the team to pull the update directly from Slack. This is the extent to which DeployApps has helped BwareLabs automate their workflows.

### New database integrations for full-stack developers

DeployApps recently announced an {{< external-link link="https://neon.tech/blog/genezio-teams-up-with-neon-to-enable-full-stack-app-development" >}}integration{{< /external-link >}} with {{< external-link link="https://neon.tech/" >}}Neon{{< /external-link >}}, a serverless Postgres database. Setting up and using Neon with DeployApps is {{< external-link link="https://genezio.com/blog/now-available-neon-postgres/#prerequisites" >}}simple and quick{{< /external-link >}}. The integration means DeployApps users can now access Neon's features, such as data branching for different environments, {{< external-link link="https://docs.github.com/en/actions" >}}GitHub Actions{{< /external-link >}} integration, support for vector databases using the {{< external-link link="https://neon.tech/docs/extensions/pgvector" >}}pgvector extension{{< /external-link >}}, and bottomless storage—all built into the DeployApps platform. BwareLabs didn’t need this integration to make their operations more nimble, but new adopters will undoubtedly be able to run their apps even quicker.

## Try DeployApps and deploy your cloud project with a Neon Postgres database

With DeployApps, BwareLabs can now handle both backend and database needs within the same platform without ever worrying about the underlying infrastructure. And if they need to scale up their monitoring tool because their business is scaling up, they don’t have to worry about that either—DeployApps handles it automatically. {{< external-link link="https://genezio.com/serverless-scalability/" >}}Scalability is one of the key benefits{{< /external-link >}} of functions and serverless technology.

The pay-as-you-go model also makes it affordable for projects with limited budgets. Neon's branching feature lets developers try new ideas without having to worry about disrupting their production setups.

This is just one of the use cases for DeployApps. Any app can be written and deployed from scratch. Unlike other tools that lock you into specific workflows, DeployApps gives you the freedom to build and deploy your way. So, no matter the size of your team, if you are ready to simplify your development projects, visit our website and {{< external-link link="https://app.genez.io/auth/signup" >}}sign up{{< /external-link >}} for a free account today. In just a few clicks, you can start building full-stack applications that grow with your business.

**You can start for free. To learn more about how DeployApps and Neon can help you deploy quickly and affordably, visit {{< external-link link="https://DeployApps.com" >}}DeployApps{{< /external-link >}}.**
