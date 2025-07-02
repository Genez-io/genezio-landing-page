---
title: "Boost Your Productivity: Single-click Deployments with DeployApps’s Enhanced YAML"
date: 2024-09-24
tags:
  - Tutorials
author: Andreia Ocanoaia
linkedIn: https://www.linkedin.com/in/andreia-irina-ocanoaia/
thumbnail: /images/boost_your_productivity.webp
preview: "Discover how DeployApps's enhanced YAML configuration simplifies deployments with dynamic expressions and one-click resource creation."
description: "DeployApps introduces powerful new features in YAML configuration, allowing developers to streamline their workflow with single-click deployments and dynamic resource management."
meta_og_url: "https://genezio.com/blog/genezio-single-click-deployments/"
meta_og_image: "https://genezio.com/images/boost_your_productivity.webp"
customHeader: "White header"
customFooter: "White footer"
readTime: 10
url: /blog/genezio-single-click-deployments/
---

# Streamline Your Development with DeployApps’s Enhanced YAML Configuration

We’re excited to announce a major update to DeployApps - the ability to configure and create all your resources using a single `genezio.yaml` file. This new feature aims to simplify the deployment process, allowing developers to define functions settings, create databases, set up frontends and enable authentication. In this article, we’ll walk you through the new features and provide practical examples to enable single-click deployments for your projects.

## Key Features

### Database and Authentication

Seamlessly configure database services, including authentication providers, and connect these services to other parts of the application. In this example, we define a Postgres database and enable email, web3, and Google authentication providers:

```yaml
services:
  databases:
    - name: my-postgres
      region: us-east-1
  authentication:
    database:
      name: my-postgres
    providers:
      email: true
      web3: true
      google:
        clientId: ${{ env.GOOGLE_CLIENT_ID }}
        clientSecret: ${{ env.GOOGLE_CLIENT_SECRET }}
```

### Support for Expressions

One of the powerful new features of the `genezio.yaml` configuration file is the ability to use expressions for dynamically linking different parts of your application. This allows you to reference values from other sections of your configuration file, making it easier to maintain consistency across your project.

For example, in the frontend section, you can dynamically reference backend functions and services using expressions:

```yaml
frontend:
  environment:
    VITE_API_URL: ${{ backend.functions.express.url }}
    VITE_AUTH_TOKEN: ${{ services.authentication.token }}
    VITE_AUTH_REGION: ${{ services.authentication.region }}
  scripts:
    deploy: npm install
    build: npm run build
```

### Support for Environment Variables

In addition to referencing internal configuration values, `genezio.yaml` also supports referencing external environment variables, allowing you to securely integrate third-party services like OpenAI.

```yaml
backend:
  environment:
    OPENAI_API_KEY: ${{ env.OPENAI_API_KEY }}
```

In this example, the `OPENAI_API_KEY` environment variable in your backend is dynamically set remotely when deploying your application.

## Example Workflow

After your `genezio.yaml` is configured, simply run:

```bash
genezio deploy
```

## Documentation

For a complete list of configuration options and examples, refer to the [DeployApps documentation](https://genezio.com/docs/project-structure/genezio-configuration-file/).

DeployApps will automatically provide the necessary resources, deploy your backend and frontend, and set up databases and authentication as defined in the configuration file.

## Conclusion

The `genezio.yaml` feature is here to streamline your development process, making it easier to manage all aspects of your app from one place. Whether you’re deploying backend functions, setting up frontend environments, or configuring databases and authentication, this new update brings more power and simplicity to your workflow.

Ready to kickstart your next project? Explore our ready-to-deploy templates and deploy with ease on the [DeployApps dashboard](https://app.genez.io/new-project/).
