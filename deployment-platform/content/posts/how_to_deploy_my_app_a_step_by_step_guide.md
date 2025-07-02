---
title: "How to Deploy my App: A Step-by-Step Guide"
date: 2024-12-17
tags:
  - Tutorials
author: Cristi Miloiu
linkedIn: https://www.linkedin.com/in/cristi-miloiu-3a174a267/
thumbnail: /images/template-tutorials.webp
preview: Hello, I’m Cristi Miloiu and I will show you the process of deploying your app using DeployApps, a powerful platform designed to simplify app deployment.
# meta data start
description: Learn how to deploy your apps with DeployApps in this step-by-step guide. Perfect for frameworks like Flask, Django, FastAPI, Next.js, React, Angular, Vue, and more!
meta_og_url: "https://genezio.com/blog/how-to-deploy-my-app/"
meta_og_image: "https://genezio.com/images/template-tutorials.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 10
url: /blog/how-to-deploy-my-app/
---

Hello, I’m Cristi Miloiu and I will show you the process of deploying your app using DeployApps, a powerful platform designed to simplify app deployment.

Whether you’re working with frameworks like Flask, Django, FastAPI, Next.js, React, Angular, or Vue, this guide provides a step-by-step approach to getting your app live quickly and efficiently.

Discover advanced features like real-time logs, in-browser code editing, database provisioning and custom domains to take your deployment experience to the next level. Perfect for developers looking to streamline their workflow!

# Step-by-Step Guide

## Create a New Project on DeployApps

1.1. Visit the {{< external-link link="https://app.genez.io/new-project/">}}dashboard{{< /external-link >}}.

1.2. Click the **"Import from GitHub"** option to get started.

![alt_text](/posts/geneziotutorial1.webp)

## Authenticate with GitHub

2.1. Click **"Connect with GitHub"**

![alt_text](/posts/geneziotutorial2.webp)

2.2. Select the GitHub organization where your repository is located.

![alt_text](/posts/geneziotutorial3.webp)

2.3. Grant permissions by clicking **"Install & Authorize"**.

![alt_text](/posts/geneziotutorial4.webp)
This step ensures DeployApps can access your repository securely.

## Select and Import Your Repository

3.1. Browse your repositories and choose the one you want to deploy.

3.2. Click the **"Import"** button next to the selected repository.

![alt_text](/posts/geneziotutorial5.webp)

## Configuration Detection

After importing your repository, DeployApps will automatically identify your app's configuration.

This process involves analyzing files like `requirements.txt` or `package.json` to determine the framework in use.

If needed, you can customize the detected settings to better suit your deployment requirements.

![alt_text](/posts/geneziotutorial6.webp)

## Deploy Your Application

Click "Create" to initiate the deployment process. DeployApps will set up your environment, install dependencies, and prepare your app for production.

![alt_text](/posts/geneziotutorial7.webp)

## Access Your Application

![alt_text](/posts/geneziotutorial8.webp)

After deployment, click the **"Open App"** button. Your app will be live and accessible at a URL similar to `\*.cloud.genez.io.`

![alt_text](/posts/geneziotutorial9.webp)

# Advanced Features to Explore After Deployment

## Real-Time Logs

Use the **Logs Tab** to monitor your app’s performance in real-time. This is invaluable for debugging issues or optimizing your app’s efficiency.

![alt_text](/posts/geneziotutorial10.webp)

## In-Browser Code Editing

DeployApps lets you edit your application directly from the browser. Any changes you make can be deployed instantly with a single click.
![alt_text](/posts/geneziotutorial11.webp)

## Deployment History

Track every update to your app with the **Deploy History** feature. This provides insights into your deployment timeline and helps you manage rollbacks if needed.
![alt_text](/posts/geneziotutorial12.webp)

## Custom Domains

Take your app to the next level by adding a custom domain. This enhances branding and makes your application more accessible.
![alt_text](/posts/geneziotutorial13.webp)

## Database Provisioning

Quickly configure and manage databases for your app using the **Integrations Tab**, simplifying the connection and setup process.

![alt_text](/posts/geneziotutorial14.webp)

## Test Interface

Test your endpoints and verify your app's functionality in a controlled environment to ensure everything works smoothly before going live.
![alt_text](/posts/geneziotutorial15.webp)

# Pro Tips for a Smooth Deployment

- **Prepare a Clean Repository:** Ensure your app runs locally before importing it into DeployApps. If your app is built with Python, make sure you have a `requirements.txt` file for dependencies. For Node.js, ensure you have a `package.json` file.
- **Leverage Automatic Deployment:** Clone your project locally, and any changes pushed to your repository will trigger an automatic deployment.
- **Utilize Community Support:** Join the {{< external-link link="https://discord.com/invite/uc9H5YKjXv">}}DeployApps Discord Server{{< /external-link >}} for assistance, or email me at cristi@genezio.com for direct support.

# Conclusion

With DeployApps, deploying your app is hassle-free and efficient. From automatic configuration detection to seamless custom domain setup, it simplifies every step. Get your app live quickly and start focusing on what matters most—building amazing features!
