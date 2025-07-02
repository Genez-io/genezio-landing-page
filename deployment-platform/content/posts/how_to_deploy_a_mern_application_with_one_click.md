---
title: "How to deploy a MERN Application with one click"
date: 2024-11-21
tags:
  - Tutorials
author: Bogdan Vlad
linkedIn: https://www.linkedin.com/in/iulian-bogdan-vlad/
thumbnail: /images/mern.webp
preview: Deploying a MERN (MongoDB, Express.js, React.js, Node.js) application can often feel complex and time-consuming, especially for developers looking for a streamlined solution. In this article, I present a solution for anyone who wants to quickly deploy a fully functional MERN app without diving into the intricacies of manual setup. With just one click, you can have your app live and ready to use—let’s get started!
# meta data start
description: The MERN stack is a very popular technology for full stack web applications because it uses very mature and battle tested technologies.
meta_og_url: "https://genezio.com/blog/mern/"
meta_og_image: "https://genezio.com/images/mern.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 10
url: /blog/deploy-mern-application
---

Deploying a MERN (MongoDB, Express.js, React.js, Node.js) application can often feel complex and time-consuming, especially for developers looking for a streamlined solution. In this article, I present a solution for anyone who wants to quickly deploy a fully functional MERN app without diving into the intricacies of manual setup. With just one click, you can have your app live and ready to use—let’s get started!
What is a MERN stack?

## What is a MERN stack?

The MERN stack is a very popular technology for full stack web applications because it uses very mature and battle tested technologies. These technologies are also quite popular themselves and easy to learn and use. A main advantage of this stack is that you can use Javascript or Typescript on both frontend and backend.

![alt_text](/posts/merndeploy.webp)

## Deploying a MERN application

Deploying a MERN stack is usually a challenging task since it consists of three components that need to be deployed in different ways:

1. **A Node.js server written with Express.js:** This must be deployed on a server, often considering the possibility of scaling horizontally in the future. There are multiple ways to achieve this: you can choose a hosting platform like Render, or you can create an AWS account and set up an EC2 instance.

2. **A React application:** This can be deployed as a static website, making it the easiest component to handle. You simply need to upload the files to a CDN provider. Options include GitHub Pages, CloudFront, and others.

3. **A MongoDB database:** Deploying this is more complex as it requires considerations for storage, backup, and replication. You can host it yourself, or use a managed solution like MongoDB Atlas.

Now, imagine deploying a fully functional MERN application from scratch—within minutes and with just a single click. Sounds too good to be true? Let me show you how it’s done.

## Deploy MERN Application Instantly

Click the button below to start the process of deploying a template application.

{{< external-link link="https://app.genez.io/auth/signup?redirect=mern-getting-started" >}}
![alt_text](/posts/deploy-button.svg)
{{< /external-link >}}

### Step 1

Login with either Google or Github.

### Step 2

In the next screen, you will be asked to choose between:

1. Deploy using Github meaning that your project will be integrated with Github and whenever you push a new commit a new deployment starts.
2. Deploy without Github if you want to manually deploy using DeployApps CLI.

Choose “Deploy on Github”.

### Step 3

If you have pressed “Deploy on Github”, a new repository will be created for you. You have to specify the name of the repository and the name of the project. Click “Create” when you are ready.

Congratulations! In under five minutes, you’ve successfully deployed a MERN application. Now, let’s dive into the project to uncover the “magic” behind it.

The platform powering this seamless experience is DeployApps, a full-stack deployment platform designed to handle all essential components: static web pages, scalable HTTP servers, and databases (including MongoDB and PostgreSQL). DeployApps simplifies deployment, offering an intuitive and efficient solution for modern development needs.

## Exploring the Project

One of the key files in your project is the `genezio.yaml`. This file outlines all the resources your project requires, and DeployApps automatically provisions them during deployment. No need to worry—you’ll rarely, if ever, need to modify this file.

Besides that, the project structure is very simple. There are two folders: one for the express.js server and one for the React application.

Continuing Your Development Journey

Explore your live app and dive into the code to customize it further. The real power of the MERN stack lies in its flexibility, so don’t hesitate to make it your own. To redeploy an updated version of your application, if you have chosen the Github flow, just push a new commit to the main branch and a new deployment will start.

You now have everything you need to start working on your application. If you encounter any issue, you can contact me at bogdan@genez.io. Happy coding!
