---
title: "Business Logic in the Backend - The Why and How"
date: 2024-04-09
tags:
  - Learning
author: Kristopher Sandoval
linkedIn: https://www.linkedin.com/in/krsando/
thumbnail: /images/business-logic-in-the-backend-the-why-and-how.webp
preview: Business logic drives business success – but for some reason, it’s a vital component that is often second fiddle to the more technical side of API development and implementation.
# meta data start
description: "Learn the importance of implementing business logic in the backend. Discover best practices and strategies for effective deployment."
meta_og_url: "https://genezio.com/blog/business-logic-in-the-backend-the-why-and-how/"
meta_og_image: "https://genezio.com/images/business-logic-in-the-backend-the-why-and-how.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 7
# url: /blog/business-logic
---

Business logic drives business success – but for some reason, it’s a vital component that is often second fiddle to the more technical side of API development and implementation. This is a shame, as **proper implementation of business logic is perhaps the largest driver of business success in the online marketplace.** Effectively implementation of well-thought out and designed business logic can deliver massive benefits at scale.

Today, we’re going to look at business logic and how it’s implemented, as well as offer a solution to get you started today.

## Defining Business Logic

It’s often easy to forget that APIs in the business sense are as much technology driven as they are business driven. Businesses use APIs to fulfill very specific needs and functions, and often, these are defined by the business case and product fit rather than the technology that is being utilized. The specific rules around creating, modifying, and transforming data are collectively referred to as the business rules, and the implementation of these rules is referred to as the business logic.

Business logic is best thought of as the system a business uses to facilitate their business – the logic underpins everything, and provides a foundation by which the business can engage in product development and delivery. This logic is so fundamental to the business use of the API that they are often referred to as the backbone of data-driven operations.

## Backend Business Logic

Where this topic gets a little more complicated is when we start talking about where this business logic is developed and implemented.

> The nexus of control and concern over business logic should always be focused on the developer implementing it, not on the vendor assisting.

### Nexus of Control and Concern

It’s important to remember that business logic exists both in the sense of a business making its processes as well as in the service development provided by partners – that is to say an offering that promises to help you develop your business logic itself has a sort of business logic that you must be aware of.
A good example of this is database service providers. While business logic may have a multitude of places where it can live (and several very good arguments for where it should live), it is obviously in the best interest of a database service provider to argue that this logic should exist on the database side – that’s their core business.

Unfortunately, this is a prioritization of business logic for your partner rather than business logic for your own service and product – it displaces the needs a business may have for the needs of the partner they are utilizing. **The nexus of control and concern over business logic should always be focused on the developer implementing it, not on the vendor assisting.**

### Breaking Limitations

The reality is that many solutions that propose a specific location or control vector for your business logic are doing so through the use of very specific product solutions. While this can often be quick to implement, the long-term effects of adopting a solution that exerts so much control over your business logic is that you introduce a significant amount of limitation.

In essence, jumping into a magical world of “quick deployed business logic” and “easy to understand implementations” can actually lock you into a vendor solution in the long-term.

Accordingly, when you are adopting a solution for business logic implementation, you should look for an option that gives you substantial control over the when, where, and how. Business logic is ultimately representative of your data and your service, so having a partner that you can trust that ensures you actually own the process of implementing your business logic in a low-friction way is absolutely vital.

### Native Development and Implementation

Business logic is the lifeblood of your service, and for that reason, you should keep your logic as close to the core system as possible. Business logic requires high efficiency and thoughtful application, so any additional steps between the implementation of the business logic and the data it works upon is going to introduce complexity and issues.

For this reason, it is advisable to target a solution that deploys business logic to the backend. There’s a few reasons for focusing on deploying to the backend. First and foremost, it brings the logic closest to what it works upon, reducing friction and complexity while ensuring that the flow and utilization of this logic is clear and straightforward. It also introduces greater security than business logic deployed at the frontend, allowing your business to deploy its logic behind layers of security. Finally, it enables native development and implementation – when your business logic is set by a new rule, there is no additional step within a native deployment than to write the path or function and deploy.

## Finding the Solution

For all of these reasons, developers should look for two fundamental values within their chosen solution:

- Business logic should be within the control of the business – solutions should avoid replacing the business control with their own;
- Business logic should be located on the backend, providing better stability and security.

To add onto these considerations, developers should also consider the following:

- Target a solution that is typesafe – this will ensure your logic is structured and ensure that it is appropriately iterated upon by enforcing data creation, manipulation, and utilization standards.
- Adopt a solution that is framework agnostic – getting stuck with a specific framework or approach generates vendor lock-in and ultimately limits your ability to respond to market changes. Avoid this and utilize a framework agnostic solution.
- Utilize a solution that provides ample scalability and extensibility – no business solution is a one-and-done thing. Business requires constant iteration and development, so adopt a solution that provides ample systems for scaling and extension. Even better, adopt a solution that allows for auto-scalability to reduce your resource allocation and time to market.

## Genezio and Business Logic

Thankfully, you don’t have to look too far for a strong solution that is type-safe, framework agnostic, scalable, and designed to put your business logic in the backend. Genezio is a strong contender for this role, and can be rapidly implemented in moments with a low-friction onboarding process and easy-to-use integration.

Genezio has a whole host of features that make it a wonderful solution:

- A fully typesafe fullstack application with an RPC backend.
- Production ready for TypeScript BE/FE with beta support for Kotlin, Swift, and Dart. Mobile support for Fluitter and React Native!
- Plugs into a Genezio provisioned database - or you can bring your own! Table creation and CRUD boilerplate is generated through LLM, getting you quick iteration and easy deployment!
- Framework agnostic and easy deployment - feel free to use React, Vue, Angular, Svelte, Flutter, and any other new shiny frontend framework!
- Rapid and automatic scaling makes it a breeze to grow your offering rapidly.
- A powerful open-source community and world-class collaborative tools makes it easy to use – and easier to iterate!

### A Practical Example

Let’s look at a practical example in Genezio. In this case, we are implementing a secret process that we want hidden within the backend. Let’s look at how the backend might utilize this logic in a way that is secure:

```ts
import { GenezioDeploy, GenezioAuth, GnzContext } from "@genezio/types";

@GenezioDeploy()
export class BackendService {
  readonly secret = "Capybaras are AWESOME! Shhh... don't tell the cats!";

  @GenezioAuth()
  async getSecret(context: GnzContext) {
    console.log(context.user);
    return this.secret;
  }
}
```

There’s a few things happening here that should be noted. Firstly, there is the readonly secret that is provided as part of the backend service. This method is used to define the element of the process that is returned upon proper auth flow. In order to use this flow, however, a context must be generated – this context, in the form of context.user.

What is happening here is something special to Genezio – the GenezioAuth decorator. In essence, this system utilizes a system of token verification to capture and pass the user token into the context parameter, acting as a sort of middleman between the user and the secret logic and functionality that is locked to the backend.

While this is a rather simple implementation, it does show a way in which this logic can be kept secure to the backend but accessible to the user – in essence, this type of function temporarily surfaces the logic where it is needed while keeping the underlying systems secure and hidden within the backend where it belongs.

## Conclusion

Getting started with Genezio has never been easier, and it takes just minutes to get started – {{< external-link link="https://app.genez.io/auth/signup" >}}sign up for your free account today and get building your business logic{{< /external-link >}}!
