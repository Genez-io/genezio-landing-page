---
title: "Now Available: Upstash Redis"
date: 2023-11-22
tags:
  - Tutorials
author: Andreia Ocanoaia
linkedIn: https://www.linkedin.com/in/andreia-irina-ocanoaia/
thumbnail: /images/announcing_upstash.webp
preview: Caching, session storage and much more with Upstash Redis.
description: "Learn to integrate Upstash Redis with DeployApps. Follow our guide for setting up and managing Redis databases in your projects"
meta_og_url: "https://genezio.com/blog/now-available-upstash-redis/"
meta_og_image: "https://genezio.com/images/announcing_upstash.webp"
customHeader: "White header"
customFooter: "White footer"
readTime: 15
---

Upstash Redis simplifies data storage and access, making it a natural fit for serverless web applications and cloud-native architectures.
Its key-value store functionality allows for rapid data access, making it ideal for caching frequently accessed data and improving overall application performance.
Redis also supports complex data structures such as lists, sets, and hashes, providing versatility in data modeling.

Today, we are excited to announce the integration with Upstash Redis, a serverless Redis provider, into the genezio platform.
The integration allows you to easily manage and connect Redis databases directly from the genezio dashboard.

# Use cases

## Out-of-the-box caching system

Redis is often used as a caching layer to store frequently accessed data in memory, reducing the need to fetch data from slower disk-based databases. This can significantly improve application performance.

Use genezio classes to implement a boilerplate-free caching system that stores data in Redis.

```typescript
{{< filePath >}}server/ecommerceService.ts{{< /filePath >}}
import { GenezioDeploy } from "@genezio/types";
import Redis from "ioredis";

@GenezioDeploy()
export class EcommerceCacheService {
  client: Redis;

  constructor() {
    this.client = new Redis(process.env.REDIS_URL);
  }

  cacheProductDetails(productId: string, productDetails: string): Promise<boolean> {
    const key = `product:${productId}`;
    await this.client.set(key, productDetails, "EX", expirationInSeconds);

    // the rest of the implementation goes here
  }

  getCachedProductDetails(productId: string): Promise<string | null> {
    const key = `product:${productId}`;
    const cachedProductDetails = await this.client.get(key);

    // the rest of the implementation goes here
  }
}
```

## Session storage

Storing session data in Redis is a common practice. Because of its speed, Redis is well-suited for managing user sessions in web applications. It allows for quick and efficient retrieval of user-specific information.

```typescript
{{< filePath >}}server/ecommerceService.ts{{< /filePath >}}
import { GenezioDeploy } from "@genezio/types";
import Redis from "ioredis";

@GenezioDeploy()
export class EcommerceSessionService {
  client: Redis;

  constructor() {
    this.client = new Redis(process.env.REDIS_URL);
  }

  storeSessionData(userId: string, sessionData: string): Promise<boolean> {
    await this.client.set(`user:${userId}:session`, sessionData);

    // the rest of the implementation goes here
  }

  getSessionData(userId: string): Promise<string | null> {
    const sessionData = await this.client.get(`user:${userId}:session`);

    // the rest of the implementation goes here
  }
}
```

## Pub/Sub Messaging

Redis has built-in support for publish/subscribe messaging patterns. It can be used as a message broker to facilitate communication between different components of a system in a decoupled manner.

## Rate limiting

Redis can be used to implement rate-limiting mechanisms. By tracking and controlling access rates for different operations, Redis helps prevent abuse and ensures the stability and performance of an application.

# Connect your backend to Upstash Redis

In this short guide, you will learn how to integrate a Redis database into your project.

## Step 1: Create a new genezio project

If you already have a genezio project deployed, you can skip to [Step 2: Initialize an Upstash Redis database](#step-2-initialize-an-upstash-redis-database).

Otherwise, you can create a new genezio project by running the following steps.

First, you have to install `genezio` from npmjs:

```bash
npm install genezio -g
```

Then, you can create a new genezio project by simply running `genezio` in your terminal:

```bash
genezio create backend --backend=ts --name=getting-started-with-upstash --region=us-east-1
```

The next step is to integrate this small project with a Redis database provided by Upstash. To do that, we first need to deploy the project. We can do that by running the following commands in the root directory of the project:

```bash
genezio deploy
```

## Step 2: Initialize an Upstash Redis database

Once the deployment is complete, open your {{< external-link link="https://app.genez.io/dashboard" >}}genezio dashboard{{< /external-link >}} and pick the project you created earlier.

Go to the `Integrations` tab and select to install the Upstash Redis integration:

![Alt text](/posts/integrations.webp)

Connect with an Upstash account using the preferred login method:

![Alt text](/posts/image.png)

Create a Redis database or select an already existing database:

![Alt text](/posts/image-1.png)

Hit the `Save` button to set the database credentials as environment variables in your genezio project:

![Alt text](/posts/image-2.png)

## Step 3: Connect your backend to the Redis database

To connect to the Redis database from your NodeJs backend, create a new file called `redis.ts` in the root folder of your project.

The following code snippet creates a new class that will be a minimal Redis service. In the constructor, we initialize the Redis client using the `UPSTASH_REDIS_URL` environment variable. This variable is already set remotely in your project by the Upstash Redis integration.

```ts
{{< filePath >}}server/shoppingCartService.ts{{< /filePath >}}
import { GenezioDeploy } from "@genezio/types";
import Redis from "ioredis";

@GenezioDeploy()
export class ShoppingCartService {
  client: Redis;
  constructor() {
    if (!process.env.UPSTASH_REDIS_URL) {
      throw new Error("UPSTASH_REDIS_URL is not set in the `.env` file.");
    }
    this.client = new Redis(process.env.UPSTASH_REDIS_URL);
  }
}
```

## Step 4: Store and retrieve data from Redis

Implement two methods to store and retrieve <key, value> pairs in the Redis database:

```ts
{{< filePath >}}server/shoppingCartService.ts{{< /filePath >}}
@GenezioDeploy()
export class ShoppingCartService {
  client: Redis;
  constructor() {
    if (!process.env.UPSTASH_REDIS_URL) {
      throw new Error("UPSTASH_REDIS_URL is not set in the `.env` file.");
    }
    this.client = new Redis(process.env.UPSTASH_REDIS_URL);
  }

  addItemToCart(cartId: string, productId: string, quantity: number): Promise<boolean> {
    const cartKey = `cart:${cartId}`;
    await this.client.set(`${cartKey}:${productId}`, quantity);

    // the rest of the implementation goes here
  }

  getCartContents(cartId: string): Promise<Map<string, number> | null> {
    const cartKey = `cart:${cartId}`;
    const cartItems = await this.client.keys(`${cartKey}:*`);

    // the rest of the implementation goes here
  }
}
```

## Step 5: Test your Redis service

To locally test your Redis service, you have to use the copy button to add the environment variables to your clipboard.
Using the copy button will disclose the sensitive information from the environment variables.
Paste them in a `.env` file in the root folder of your project.

You can find the environment variables in the `Integrations` tab of your project page in the {{< external-link link="https://app.genez.io" >}}dashboard{{< /external-link >}}.

The `.env` file should look similar to the following snippet:

```bash
{{< filePath >}}server/.env{{< /filePath >}}
UPSTASH_REDIS_URL="redis://default:sensitivepassword@cute-capybara-33897.upstash.io:33897"
UPSTASH_REDIS_REST_URL="https://cute-capybara-33897.upstash.io"
UPSTASH_REDIS_REST_TOKEN="sensitivetoken"
```

After setting the environment variables, you can test your Redis service by running the following command in your terminal:

```bash
genezio local
```

Open the testing page in your browser by navigating to {{< external-link link="http://localhost:8083/explore" >}}`localhost:8083/explore`{{< /external-link >}}.

Here you can create and send a request to your backend to test if it works as expected.

## Step 5: Deploy your application

After you tested your application, you can deploy it by running the following command in your terminal:

```bash
genezio deploy
```

# Now available in the genezio dashboard

The integration with Upstash Redis is available today in the genezio dashboard.

It might not be perfect yet, but we prefer bringing you new features sooner, rather than later.
Your feedback in the early stages of feature development is essential to us as it helps improve the product to better suit your needs.

We're thrilled about the amazing use cases the Upstash Redis integration will enable and we can't wait to see what you'll put together with it.

Check out our {{< external-link link="https://genez.io/docs" >}}documentation{{< /external-link >}} and try the Upstash Redis integration today!
Let us know your thoughts and feedback through our {{< external-link link="https://app.genez.io" >}}support chat{{< /external-link >}} or on our {{< external-link link="https://discord.gg/uc9H5YKjXv" >}}Discord server{{< /external-link >}}.
