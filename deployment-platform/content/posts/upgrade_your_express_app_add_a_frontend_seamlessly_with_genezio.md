---
title: "Upgrade Your Express.js App: Add a Frontend Seamlessly with DeployApps"
date: 2024-09-27
tags:
  - Tutorials
author: Radu Dumitrescu
linkedIn: https://www.linkedin.com/in/radu-andrei-dumitrescu/
thumbnail: /images/express-frontend-genezio.webp
preview: In this short guide, you’ll learn how to add a frontend to your Express.js app with DeployApps Cloud in a few easy steps.
# meta data start
description: Learn how to seamlessly add a frontend to your Express.js app with DeployApps Cloud in a few easy steps, simplifying full-stack development and deployment
meta_og_url: "https://genezio.com/blog/add-frontend-express/"
meta_og_image: "https://genezio.com/images/express-frontend-genezio.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 20
url: /blog/add-frontend-express/
---

In this short guide, you’ll learn how to add a frontend to your Express.js app with DeployApps Cloud in a few easy steps.

**Express.js** is widely used by developers for building APIs and backend services due to its simplicity and flexibility. However, as applications grow, managing servers and scaling them efficiently becomes a challenge. This is where {{< external-link link="https://genezio.com/blog/serverless-computing-when-to-go-serverless/?deviceId=1422989e-eae9-44b0-88a7-39985fd9edde" >}}serverless architecture{{< /external-link >}} shines—by offloading server management to the cloud, it allows you to focus on building features while platforms like **DeployApps** handle scalability, performance, and costs automatically.

When it comes to adding a frontend, the traditional approach can be tricky. Setting up separate servers for backend and frontend, managing CORS policies, and coordinating deployment pipelines can slow you down. But with **DeployApps**, you can easily deploy both the frontend and backend as part of the same project. This seamless integration improves your development workflow, making it easier to focus on building features rather than managing infrastructure.

Alright, let’s get started.

## Prerequisites

To start this tutorial, make sure you’ve downloaded and installed the following tools:

- {{< external-link link="https://nodejs.org/en/download/current" >}}Node.js{{< /external-link >}}
- {{< external-link link="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">}}Npm{{< /external-link >}}

**Note:** we recommend you use NVM to manage NodeJs and NPM versions. After installing `nvm`, you can quickly get any node version by running `nvm install <node_version>`.

## Create a demo Express.js application

If you already have an Express.js application, you can skip this step.

First, let’s deploy an Express Getting Started template using this {{< external-link link="https://app.genez.io/auth/signup?redirect=express-getting-started">}}link{{< /external-link >}}. We recommend deploying it using your GitHub account so that DeployApps can create a repository for your project.

Once the application is deployed, clone it locally:

```bash
npm install genezio -g
git clone https://github.com/<your_id>/express-getting-started
cd ./express-getting-started
```

## Prepare the project folder structure

Create a new folder for the backend and move all the backend-related files into it.

Here’s how you can do this from the command line, though feel free to use your preferred IDE:

```bash
mkdir backend
mv index.mjs package.json package-lock.json ./backend
```

## Create the frontend application

For this tutorial, we’ll create a basic Rect Application with Vite. {{< external-link link="https://vitejs.dev/guide/">}}Learn more{{< /external-link >}}.

You can use the following command:

```bash
npm create -y vite@latest frontend -- --template react-ts
```

This will generate a TypeScript-based React `frontend` in a frontend directory.

## Update the `genezio.yaml` configuration file

We need to modify the `genezio.yaml` file - add the frontend application and update the path to the backend application.

{{< external-link link="https://genezio.com/docs/project-structure/genezio-configuration-file/">}}Learn more about the DeployApps Configuration File.{{< /external-link >}}

After the changes, your configuration should look like this:

```yaml
name: express-getting-started
region: us-east-1
yamlVersion: 2
backend:
  cloudProvider: genezio-cloud
  functions:
    - entry: index.mjs
      handler: handler
      name: express-getting-started-function
      path: ./
      type: aws
  language:
    name: js
    packageManager: npm
  path: ./backend # We changed the path to point to the backend folder
  scripts:
    deploy:
      - npm install
    local:
      - npm install
# We added the frontend configuration
frontend:
  # Environment variables for the frontend
  environment:
    # The URL of the backend API
    VITE_API_URL: ${{ backend.functions.express-getting-started-function.url }}
  path: ./frontend # path to the frontend folder
  publish: dist # Path to the build folder within the frontend folder
  # Scripts to build and deploy the frontend
  scripts:
    build: npm run build
    deploy:
      - npm install
    start:
      - npm install
      - npm run dev
```

- The backend path is set to `./backend`.
- The frontend path is set to `./frontend`.
- We also added a **VITE_API_URL** environment variable to connect the frontend to the backend.

## Test your full-stack project locally

With everything set up, you can now take advantage of DeployApps's smooth local development experience. Running both your frontend and backend simultaneously is as easy as one command:

```bash
genezio local
```

You should see the output with URLs like this:

- Backend URL: [http://localhost:8083/.functions/function-express-getting-started-function](http://localhost:8083/.functions/function-express-getting-started-function)
- Frontend URL: [http://localhost:5173/](http://localhost:5173/)

## Deploy your project

To deploy the full-stack project to DeployApps, simply push your changes to the GitHub repository:

```bash
git add .
git commit -m “Added frontend to my backend project”
```

DeployApps will automatically create a new deployment when you push the changes to the Github repository of the project. You can find the link to your deployed frontend in the {{< external-link link="https://app.genez.io/dashboard">}}DeployApps Dashboard{{< /external-link >}} once the deployment is finished.

## Next steps

Now that your full-stack project is up and running, you can start building awesome features. DeployApps also provides other useful services like user authentication, cron jobs, and database management, which you can integrate into your project seamlessly.

## Conclusion

By using DeployApps Cloud, you’ve not only added a frontend to your Express.js app effortlessly, but you’ve also unlocked a serverless platform that scales with your needs. From seamless integration to automatic deployment, DeployApps makes full-stack development faster and easier. So go ahead, push your code to the next level, and explore the endless possibilities with DeployApps.

**Happy coding, and good luck with your future projects!**
