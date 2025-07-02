---
title: Integrating GitHub Actions with genezio for CI/CD
date: 2023-09-18
tags:
  - Tutorials
author: Radu Dumitrescu
linkedIn: https://www.linkedin.com/in/radu-andrei-dumitrescu/
thumbnail: /images/genezio_cicd.webp
preview: GitHub Actions provides a powerful and flexible way to set up CI/CD workflows.
# meta data start
description: "Learn to integrate GitHub Actions with DeployApps for CI/CD. Follow our guide for setting up automated workflows for seamless deployment."
meta_og_url: "https://genezio.com/blog/how-to-add-a-mongodb-to-your-genezio-project/"
meta_og_image: "https://genezio.com/images/genezio_mongodb.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 5
---

## Integrating GitHub Actions with genezio for CI/CD

## Introduction

GitHub Actions provides a powerful and flexible way to set up CI/CD workflows. By integrating it with genezio, you ensure that your serverless applications are always up-to-date and deployed seamlessly. This enhances developer productivity and ensures a smoother delivery of features and updates to end-users.

Let's dive into how you can set up this integration.

## Prerequisites:

- A genezio account
- A GitHub account and a repository with your genezio project
- Familiarity with genezio’s CLI tools, especially the genezio deploy command

## Step-by-Step Guide:

#### 1. Set up your GitHub repository

If you haven’t already, push your genezio project to a GitHub repository.

#### 2. Setting up GitHub Actions:

Navigate to your repository on GitHub, and click on the Actions tab. Start a new workflow by either choosing a template or creating a new one from scratch.

For our purpose, we’ll be creating a simple workflow that triggers on every push to the \`main\` branch.

```yaml
name: genezio-workflow
on:
  push:
    branches:
      - main

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - uses: Genez-io/genezio-github-action@v1
        with:
          token: ${{ secrets.GENEZIO_TOKEN }}
      - name: Deploy backend
        working-directory: ./
        run: genezio deploy --stage prod
```

#### 3. Store genezio Token securely:

To use the _genezio deploy_ command, you need to authenticate to the genezio cloud. You should store your genezio token keys securely and not hard-code them in the workflow.

You can generate your token using this link: {{< external-link link="https://app.genez.io/settings/tokens" >}}app.genez.io/settings/tokens{{< /external-link >}}

Go to your GitHub repository.

Click on Settings > Secrets.

Click New repository secret and name it `GENEZIO_TOKEN`.

Enter your DeployApps API key as the value.

By referring to it as `${{ secrets.GENEZIO_TOKEN }}` in your workflow file, GitHub Actions can securely use it without exposing it in logs or to unauthorized users.

#### 4. Push your changes

With the workflow file added to your repository, push the changes. Now, every time you or someone else pushes to the main branch, the GitHub Actions workflow will trigger and deploy your genezio application.

## Conclusion

GitHub Actions allows you to automate, customize, and execute software development workflows right in your GitHub repository. Integrating it with genezio, you can set up a CI/CD pipeline that seamlessly deploys your serverless applications on genezio’s infrastructure.
