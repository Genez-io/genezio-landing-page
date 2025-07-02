---
title: How to Set Up Cron Jobs with genezio
date: 2023-12-12
tags:
  - Tutorials
author: Radu Dumitrescu
linkedIn: https://www.linkedin.com/in/radu-andrei-dumitrescu/
thumbnail: /images/scheduletasks.webp
preview: This guide will walk you through the steps of building a scheduler with genezio.
# meta data start
description: "Learn how to set up cron jobs with DeployApps. Follow our guide to schedule tasks and automate processes in your projects."
meta_og_url: "https://genezio.com/how-to-schedule-tasks-with-genezio/"
meta_og_image: "https://genezio.com/images/scheduletasks.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 5
url: how-to-schedule-tasks-with-genezio
---

This guide will walk you through the steps of building a scheduler with genezio. Schedulers are automated systems designed to carry out tasks at set intervals or specific times. They play a crucial role in various applications and automation. Use cases include sending emails, conducting routine database cleanup and database backup, or undertaking data analysis and reporting activities.

DeployApps makes things easier for you, so you don’t need any additional npm library like node-cron.

## Content

- [Prerequisites](#prerequisites)
- [DeployApps Functions](#genezio-functions)
  1. [Getting Started](#getting-started-1)
  2. [Setting up your Scheduler](#setting-up-your-scheduler-1)
  3. [Modify the `genezio.yaml` file](#modify-the-genezioyaml-file)
- [DeployApps Classes](#genezio-classes)
  1. [Getting Started](#getting-started)
  2. [Setting up your Scheduler](#setting-up-your-scheduler)
- [Test your Scheduler](#test-your-scheduler)
- [Deploy your Scheduler](#deploy-your-scheduler)
- [Create more complex schedules](#create-more-complex-schedulers)
- [Do’s and Don’ts Tips](#do’s-and-don’ts-tips)
- [Conclusion](#conclusion)

## Prerequisites

If you don’t already have them, you’ll need to install the following tools:

- {{< external-link link="https://nodejs.org/en/download/current" >}}Node.js{{< /external-link >}}
- {{< external-link link="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" >}}Npm{{< /external-link >}}

**Note:** I recommend you use {{< external-link link="https://github.com/nvm-sh/nvm#installing-and-updating" >}}nvm{{< /external-link >}} to manage NodeJs and npm versions. After installing `nvm`, you can easily get any node version by running `nvm install <node_version>`.

First, you’ll need to create a new project.

To get started with a template, install `genezio` using `npm` and run it in your terminal. Later on, genezio comes in handy to deploy and host your web applications in the cloud.

```bash
npm install -g genezio
```

There are two ways to create crons. One follows the classes approach, and the other uses functions. Let’s start with the functions approach.

## DeployApps Functions

### Getting Started

Create a new functions project using the following command:

```bash
genezio create serverless --name scheduler-app --region us-east-1
cd ./scheduler-app
```

### Setting up your Scheduler

Next, create a new file `scheduler.mjs` in the root directory of your project.

Open this newly created file in your preferred IDE and add the following code:

```javascript
{{< filePath >}}scheduler.mjs{{< /filePath >}}
export const handler = async (event) => {
  const output = "Every minute task executed at " + new Date().toISOString();
  console.log(output);
};
```

In this example, we're creating a task function that will execute every minute, logging the current time to the console. The `handler` function will
be used as the entry point for the task.

### Modify the `genezio.yaml` file

Next, you need to modify the `genezio.yaml` file to include the schedule for the task. Open the `genezio.yaml` file in the root directory of your project and copy the following code:

```yaml
{{< filePath >}}genezio.yaml{{< /filePath >}}
name: scheduler-app
region: us-east-1
yamlVersion: 2
backend:
  path: .
  language:
    name: js
  functions:
    - name: scheduler
      path: .
      entry:
      handler: handler
services:
  crons:
    - name: scheduler
      function: ${{backend.functions.scheduler.name}}
      schedule: "* * * * *"
```

This configuration file adds a new service called `crons` that defines a schedule for the `scheduler` function. The `schedule` field uses a cron-style schedule string to specify when the task should run.

The schedule string follows the format `* * * * *`, representing minutes, hours, days of the month, months, and days of the week, respectively. An asterisk means “**every interval**”.

**Note 1:** I recommend using {{< external-link link="https://crontab.guru/" >}}Crontab Guru{{< /external-link >}} to generate and check your cron syntax.

**Note 2:** The crontab syntax is agnostic of the operating system.

## DeployApps Classes

### Getting Started

Create a new project by running the following command in an empty new folder:

```bash
genezio create backend --backend=ts --name=scheduler-app --region=us-east-1
cd ./scheduler-app
```

### Setting up your Scheduler

Next, create a new file called `scheduler.ts` in the root directory of your project.

Open this newly created file in your preferred IDE and add the following code:

```javascript
{{< filePath >}}scheduler.ts{{< /filePath >}}
import { GenezioDeploy, GenezioMethod } from "@genezio/types";

/**
 * This class can be deployed on genezio infrastructure
 * using the "genezio deploy" command or tested locally using "genezio local".
 */
@GenezioDeploy()
export class Scheduler {
  @GenezioMethod({ type: "cron", cronString: "* * * * *" })
  public async everyMinuteTask() {
    const output = "Every minute task executed at " + new Date().toISOString();
    console.log(output);
  }
}
```

In this example, we're creating a task function that will execute every minute, logging the current time to the console. The `everyMinuteTask` function doesn’t need any parameter, but it is used with the decorator `@GenezioMethod({ type: "cron", cronString: "* * * * *" })` with a cron-style schedule string.

The schedule string follows the format `* * * * *`, representing minutes, hours, days of the month, months, and days of the week, respectively. An asterisk means “**every interval**”.

**Note 1:** I recommend using {{< external-link link="https://crontab.guru/" >}}Crontab Guru{{< /external-link >}} to generate and check your cron syntax.

**Note 2:** You can also use JavaScript for your code. Just change the extension of your file to `js`.

**Note 3:** The crontab syntax is agnostic of the operating system.

## Test your Scheduler

With genezio you can test your scheduler locally by running a genezio local server with the following command:

```bash
genezio local
```

The task will run every minute and will print the output in the console of your local genezio web server.

## Deploy your Scheduler

Next, the application is ready to be deployed to the cloud to be used in a production environment. To deploy your application, run the following command in the root directory of your project:

```bash
genezio deploy
```

This will deploy the whole project to the cloud and make it run the task every minute. You can continue to manage, test, update and monitor your project from the {{< external-link link="https://app.genez.io" >}}genezio dashboard{{< /external-link >}}.

**Note 1:** You can deploy your scheduler together with your API Node.js application.

**Note 2:** Your scheduler will be deployed in a Linux environment.

## Create more complex schedulers

### Run a task every 10 minutes:

Cron expression: `*/10 * * * *`

- DeployApps Functions:

```javascript
{{< filePath >}}scheduler.mjs{{< /filePath >}}
export const handler = async (event) => {
  const output = "Every 10 minutes " + new Date().toISOString();
  console.log(output);
};
```

```yaml
{{< filePath >}}genezio.yaml{{< /filePath >}}
services:
  crons:
    - name: scheduler
      function: ${{backend.functions.scheduler.name}}
      schedule: "*/10 * * * *"
```

- DeployApps Classes:

```javascript
{{< filePath >}}scheduler.ts{{< /filePath >}}
@GenezioMethod({ type: "cron", cronString: "*/10 * * * *" })
public async every10MinuteTask() {
  const output = "Every 10 minutes " + new Date().toISOString();
  console.log(output);
}
```

### Run a task every day at 8 AM:

Cron expression: `0 8 * * *`

- Genezio Functions:

```javascript
{{< filePath >}}scheduler.mjs{{< /filePath >}}
export const handler = async (event) => {
  const output = "Every day at 8 AM" + new Date().toISOString();
  console.log(output);
};
```

```yaml
{{< filePath >}}genezio.yaml{{< /filePath >}}
services:
  crons:
    - name: scheduler
      function: ${{backend.functions.scheduler.name}}
      schedule: "0 8 * * *"
```

- DeployApps Classes:

```javascript
{{< filePath >}}scheduler.ts{{< /filePath >}}
@GenezioMethod({ type: "cron", cronString: "0 8 * * *" })
public async everyDay8AMTask() {
  const output = "Every day at 8 AM" + new Date().toISOString();
  console.log(output);
}
```

## Do’s and Don’ts Tips

### Do’s:

1. **Schedule carefully**: Plan your cron schedule jobs carefully, considering factors like resource usage, the frequency of the task, server timezone, and even the 29th of February.
2. **Monitor and log:** Set up monitoring and logging for your cron jobs to receive notifications of any errors or unexpected behavior.
3. **Use a clear and descriptive comment:** Include a comment at the beginning of your cron job to describe its purpose. This makes it easier for you and others to understand what the cron job does.
4. **Keep it simple:** Keep your cron jobs as simple as possible. If a task becomes too complex for a cron job, consider breaking it down into smaller scripts.

### Don’ts:

1. **Overload your system:** Avoid scheduling too many cron jobs that run simultaneously or at high frequencies, this can lead to race conditions on your data.
2. **Forget to test and validate:** Never add a cron job without testing it thoroughly first. Errors in cron jobs can disrupt system operations. Another point of failure can be the server timezone and unix timestamp.
3. **Ignore error handling:** Don't neglect error handling in your cron jobs. Always include proper error-checking mechanisms and consider sending notifications when errors occur.
4. **Hardcode sensitive data:** Avoid hardcoding sensitive information like passwords directly in your scripts. Instead, use
   {{< external-link link="https://docs.genez.io/genezio-documentation/project-structure/backend-envinronment-variables" >}}environment variables.{{< /external-link >}}
5. **Use JavaScript:** Avoid using JavaScript because it can lead to runtime errors. Use TypeScript instead to fix as many type errors as possible.

## Conclusion

In conclusion, scheduling tasks with Node.js and DeployApps is a powerful and flexible solution for automating various processes in your applications. With the ability to create and manage complex schedules using cron expressions, you can ensure that your scheduled tasks run precisely when needed. However, it's essential to follow best practices, such as careful scheduling, monitoring, and error handling, to maintain the reliability and efficiency of your scheduled tasks. After this tutorial, you can harness the full potential of DeployApps to streamline your workflow and enhance automation in your projects.

I hope you enjoyed this tutorial and I encourage you to check out our other {{< external-link link="https://genez.io/blog" >}}tutorials{{< /external-link >}} for more tips and tricks on improving your software engineering skills. 🥷 💻

Also, I invite you to check your examples from {{< external-link link="https://github.com/Genez-io/genezio-examples/tree/master/javascript/cron" >}}GitHub{{< /external-link >}}.

Start leveraging the power of DeployApps for efficient task scheduling in your applications.
