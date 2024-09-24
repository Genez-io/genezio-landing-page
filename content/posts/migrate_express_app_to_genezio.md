---
title: "Migrate Express App to Genezio"
date: 2024-09-09
tags:
  - Tutorials
author: Radu Dumitrescu
linkedIn: https://www.linkedin.com/in/radu-andrei-dumitrescu/
thumbnail: /images/express.webp
preview: "In this short guide, you’ll learn how to migrate your Express.js app to Genezio Cloud in a few simple steps. Before we get started with the tutorial, let’s briefly talk about why you should consider migrating your project to a FaaS platform like Genezio in the first place. "
description: "Learn how to migrate your Express.js app to Genezio Cloud, optimize costs, scale easily, and reduce maintenance with this simple step-by-step guide"
meta_og_url: "https://genezio.com/blog/migrate-express-app/"
meta_og_image: "https://genez.io/images/express.webp"
customHeader: "White header"
customFooter: "White footer"
readTime: 20
url: /blog/migrate-express-app/
---

In this short guide, you’ll learn how to migrate your Express.js app to Genezio Cloud in a few simple steps. Before we get started with the tutorial, let’s briefly talk about why you should consider migrating your project to a {{< external-link link="https://genezio.com/blog/what-is-function-as-a-service/" >}}FaaS{{< /external-link >}} platform like Genezio in the first place.

## Why Migrate to a FaaS Platform like Genezio?

Function-as-a-Service (FaaS) is a {{< external-link link="https://zod.dev/" >}}serverless model{{< /external-link >}} that allows developers to create and execute functions while outsourcing the cloud management aspect to a provider. Many people migrate their applications to reduce operational overhead, scale their applications with ease, and optimize costs. Let’s take a closer look at some of the main benefits of FaaS platforms:

1. **Cost Efficiency:** With Genezio’s pricing, you only pay for what you need and always know how much you'll pay. This lowers your costs significantly compared to traditional servers.

2. **Scalability:** Genezio automatically scales your application in response to incoming requests, handling any load without manual intervention.

3. **Reduced Maintenance:** Moving to Genezio eliminates the need to manage server infrastructure, allowing you to focus on writing code instead.

4. **Out-of-the-box Ecosystem:** Genezio is designed to respond to your needs, making it a natural fit for applications requiring Databases, Cron Jobs, Redis, Queues, Webhooks, etc.

Alright, with that out of the way, let’s get started.

## Prerequisites

To start this tutorial, make sure you’ve downloaded and installed the following tools:

- {{< external-link link="https://nodejs.org/en/download/current" >}}Node.js{{< /external-link >}}
- {{< external-link link="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" >}}Npm{{< /external-link >}}

**Note:** we recommend you use NVM to manage NodeJs and NPM versions. After installing nvm, you can quickly get any node version by running `nvm install <node_version>`.

## Adapt Your Express App for Genezio

Genezio Functions works differently than traditional servers. Instead of listening on a specific port, the functions respond to events. For the Express app, you need to modify the app to act as the entry point for HTTP requests to your function.

Your entire application will be deployed as one function.

**Install serverless-http:**

`serverless-http` is a library that wraps your Express app to make it compatible with Genezio Functions.

```bash
npm install serverless-http
```

**Modify the Application Entry Point:**

Update your main application file (e.g., app.js or index.js) to use `serverless-http`.
We recommend changing your file extension to `mjs if you use the ES Module`.

```ts
import express from "express";
import Serverless from "serverless-http";

const app = express();

// Your existing Express setup (routes, middleware, etc.)

export const handler = Serverless(app);
```

Here, the handler will be the entry point for your function.

## Configure Genezio Config File

There are multiple ways to deploy your app to Genezio. One of the most straightforward approaches is pushing your app to GitHub and activating the Genezio Github Automation.

You will need a configuration file for this.

```yaml
name: my-express-app
region: us-east-1
yamlVersion: 2
backend:
  path: ./
  language:
    name: js
    packageManager: npm
  functions:
    - name: express-function
      path: ./
      # change this if you have a different entry point
      entry: index.mjs
      handler: handler
  scripts:
    deploy:
      - npm install
```

One configuration you need to change is the entry file name of your app.

If you have an entry point tot the app that differs from the `index.mjs` change it in the configuration file.
If you are using TypeScript, add `tsc` build to the deploy scripts. Another article will provide more insights about this topic.

## Deploy Your App using Genezio’s Github Automation

Now that you have all the configuration needed, push your application to GitHub.

```bash
git add .
git commit -m “Configurations for Genezio Cloud”
git push
```

**Login to the Genezio Dashboard**

Simply go to {{< external-link link="https://app.genez.io/auth/login" >}}Genezio Dashboard{{< /external-link >}} and create an account.

**Import your project from GitHub**

Click **Import from GitHub** from the dashboard or go to {{< external-link link="https://app.genez.io/import" >}}this link{{< /external-link >}}.
Connect your Github account and give Genezio access to your repository.
Now click on **Import** and then press on **Deploy**.

## Deploy Your App using Genezio CLI

Another way to test and deploy your app is by using the Genezio CLI.
First, you have to install the CLI.

```bash
npm install genezio -g
```

Now, you can use `genezio local` in the root folder of your project to test your app locally.

If everything works fine, you are ready to deploy your project.

```bash
genezio deploy
```

You will be prompted to use a browser to login to the CLI with your Genezio account.

After the deployment, you will receive one link with your application and another for the dashboard.

## Test and Monitor Your App

Congratulations, you have successfully deployed your Express App on Genezio.

Now, you are ready to monitor your application in production.

## Next Steps

**Environment Variables**
If you have environment variables, you can add them from the project folder.

## Conclusion

Migrating an Express app to Genezio offers significant benefits, from cost savings to enhanced {{< external-link link="https://genezio.com/serverless-scalability/">}}scalability{{< /external-link >}}. While the process requires some adaptation, the payoff for reduced maintenance and operational efficiency can be substantial.

**Happy coding!**
