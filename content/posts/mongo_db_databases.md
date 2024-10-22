---
title: "Genezio Partners with MongoDB Atlas: Effortless NoSQL Database Creation"
date: 2024-10-22
tags:
  - News
author: Costin Sin
linkedIn: https://www.linkedin.com/in/costin-sin/
thumbnail: /images/mongodb-genezio.webp
preview: Genezio users can now set up MongoDB databases! You can now easily manage your MongoDB databases alongside your serverless functions. Learn how to deploy scalable, secure NoSQL databases effortlessly!
# meta data start
description: Learn about the new MongoDB database feature in Genezio. Easily set up and manage MongoDB databases alongside your serverless functions.
meta_og_url: "https://genezio.com/blog/mongo_db_databases/"
meta_og_image: "https://genezio.com/images/ferretdb-genezio.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 10
url: /blog/mongo_db_databases/
---

Hey developers! We’ve got some exciting news—Genezio now supports MongoDB Atlas databases! As a developer, I know how important it is to have a reliable, scalable database, and now you can easily set up and manage NoSQL databases right from the Genezio platform.

## What Does This Mean for You?

If you’re a Genezio user, you already know how simple it is to deploy serverless functions with just a few clicks. Now, with MongoDB hosting built into our platform, you can also quickly set up a NoSQL database to support your microservices, APIs, and apps. Here’s how this feature can improve your workflow:

1. **Easy Integration**: With Genezio and MongoDB Atlas working together, you won’t have to deal with the hassle of setting up and managing a database. Whether your project is small or large, you can deploy MongoDB databases right from Genezio’s interface with just a few clicks.

2. **Secure and Reliable**: Security is a top priority, especially when handling important data. MongoDB Atlas protects your information with top-notch security features like encryption, fine-grained access controls, and built-in backups. This keeps your data safe and always available.

## How to Get Started

Ready to give it a try? Here’s how to get started:

1. **Log in to your Genezio account**: Head over to the [Databases section](https://app.genez.io/databases?utm_source=genezio&utm_medium=blog&utm_campaign=mongodb), where you can now create and manage your MongoDB databases.
2. **Create a new MongoDB instance**: Just click to create a new MongoDB database. Once it’s set up, you’ll get a connection string that you can use to link your database to your app.
3. **Integrate with your project**: Use the connection string to start querying your database from your app or API. You can also add your database details to your YAML configuration file if you prefer managing things via code.

The MongoDB database feature is also available in our YAML configuration file. You can now specify the database settings in your project’s YAML file, making it easy to manage your database alongside your serverless functions.

```yaml
databases:
  - name: my-mongodb
    type: mongo-atlas
    region: us-east-1
```

By following these steps, you’ll have a fully operational, scalable, and secure NoSQL database powering your serverless apps, without any complex setup or manual configurations.

Explore more about the database feature in our [documentation](https://genezio.com/docs/features/databases/) and get started today.

## Need an API? We’ve Got You Covered

We’ve created an Express.js with MongoDB template that lets you spin up a REST API backed by MongoDB in no time. This template is ideal for building scalable services. Best of all, you can deploy it instantly with a single click by using the [deploy link](https://app.genez.io/start/deploy?repository=https://github.com/Genez-io/express-mongo-starter&utm_source=genezio&utm_medium=blog&utm_campaign=mongodb).

You can find the source code for the template in our [GitHub repository](https://github.com/Genez-io/express-mongo-starter).

## Conclusion: Start Using Genezio's MongoDB Integration Today

This new integration between Genezio and MongoDB Atlas is a game changer for developers like us. Now, you can manage your serverless functions and your NoSQL databases all from one unified platform. Whether you’re building small projects or scaling enterprise-level systems, you’ll have the tools you need to deploy secure, scalable, and reliable databases with ease.

Start using Genezio’s MongoDB integration today, and see how it can simplify your development process. With seamless database management, auto-scaling, and security features built-in, you can focus on delivering value to your users.

Keep an eye out for more updates, and happy coding!
