---
title: "How to implement the first middleware in a DeployApps project"
date: 2024-06-10
tags:
  - Tutorials
author: Virgil Turcu
linkedIn: https://www.linkedin.com/in/virgil-turcu-797172255/
thumbnail: /images/genezio_middleware.webp
preview: Middleware is software that acts as an intermediary layer between different applications or between an application and the underlying operating system, network, or database.
# meta data start
description: "Middleware is software that acts as an intermediary layer between different applications or between an application and the underlying operating system, network, or database."
meta_og_url: "https://genezio.com/blog/how_to_implement_the_first_middleware_in_a_genezio_project"
meta_og_image: "https://genezio.com/images/genezio_middleware.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 15
---

Hello, everyone. Today, we are talking about middleware integration in DeployApps projects. So you created your first DeployApps project and are wondering, “How can I add middleware like parameter validation, rate limiting and logging to my project?” Well, in this tutorial, you will learn exactly how to do that.

## What is middleware?

Middleware is software that acts as an intermediary layer between different applications or between an application and the underlying operating system, network, or database. The term ‘middleware’ is very broad and can be applied to a lot of different specific software components such as logging, security, data validation and many more. The classic web architecture is usually composed of three major components, the frontend, the backend and the database. Between these components is where the middleware integration works its magic. For our {{< external-link link="https://genezio.com/" >}}DeployApps{{< /external-link >}} projects, we want to implement the middleware between the frontend and the backend.

![alt_text](/posts/middlewareexplication.webp)

Some common examples of middleware are {{< external-link link="https://genezio.com/docs/features/authentication/" >}}authentication{{< /external-link >}}, type validation, connection management, {{< external-link link="https://genezio.com/docs/genezio-typesafe/rate-limiter/" >}}rate limiting{{< /external-link >}} etc. The importance of middleware integration is paramount in any software development process to ensure that any cross-integration problems are solved seamlessly.

## DeployApps is designed for full-stack developers

{{< external-link link="https://genezio.com/" >}}DeployApps{{< /external-link >}} is a serverless platform for full-stack developers who want to build quickly and scale their apps automatically. As you probably know, it can be a pain trying to set up the right middleware between the frontend and the backend. That’s why we recommend building your app with DeployApps. It comes with-out-of-the-box middleware for authentication and rate limiting. You’ll also have full control over your middleware and can easily customize the middleware to suit your application needs. Let’s have a look at some of the common use cases of middleware for your existing DeployApps project. (If you’d like to use DeployApps for your next project, you can get started with this {{< external-link link="https://genezio.com/docs/" >}}documentation here{{< /external-link >}})

## Middleware in DeployApps projects

We will look at how DeployApps projects written in typescript support middleware. Decorators such as `@GenezioDeploy` and `@GenezioMethod` already work as a sort of middleware integrated with the genezio infrastructure. As such, custom-made middleware will also take advantage of typescript decorators.

Let’s look at a simple example of a typescript decorator that just logs something before and after the execution of a function:

```ts
/* eslint-disable */
export function LogBeforeAndAfter(target: Function, context: any) {
  return function (...args: any[]) {
    console.log(`Before call on method ${context.name}`);
    // @ts-expect-error
    const result = target.apply(this, args);
    console.log(`After call on method ${context.name}`);
    return result;
  };
}
```

Let’s go through this function and explain each part of it. First and foremost, `target` represents the function the decorator is attached to. The other parameter `context` represents the metadata of the function. Inside, we return a function which contains the `args` array. This is the array of arguments that are used on the invoked function. When we call `target.apply(this, args)` we invoke the function. As such, before and after this call, we log our messages.

This can be called in a simple DeployApps class and tested using `genezio local` and the test interface:

```ts
import { GenezioDeploy } from "@genezio/types";
import { LogBeforeAndAfter } from "./loggingMiddleware";

@GenezioDeploy()
export class BackendService {
  constructor() {}

  @LogBeforeAndAfter
  async hello(name: string): Promise<string> {
    console.log(`Hello from backend service ${name}`);

    return `Hello from backend service ${name}`;
  }
}
```

Terminal output:

```
| Before call on method hello
| Hello from backend service name-var
| After call on method hello
```

We can also add parameters to the decorators. For example, let’s say we want to modify our LogBeforeAndAfter decorator so that it takes a parameter and logs the date based on it:

```ts
/* eslint-disable */
export function LogBeforeAndAfter(logDate: boolean) {
  return function (target: Function, context: any) {
    return function (...args: any[]) {
      const date = new Date();
      console.log(
        `Before call on method ${context.name} with date: ${
          logDate ? date : "no date"
        }`
      );
      // @ts-expect-error
      const result = target.apply(this, args);
      console.log(
        `After call on method ${context.name} with date: ${
          logDate ? date : "no date"
        }`
      );
      return result;
    };
  };
}
```

Here we just wrap the former function and add the parameter at the highest level. Here is the updated class that calls this decorator:

```ts
import { GenezioDeploy } from "@genezio/types";
import { LogBeforeAndAfter } from "./loggingMiddleware";

@GenezioDeploy()
export class BackendService {
  constructor() {}

  @LogBeforeAndAfter(true)
  async hello(name: string): Promise<string> {
    console.log(`Hello from backend service ${name}`);

    return `Hello from backend service ${name}`;
  }
}
```

Terminal output:

```
| Before call on method hello with date: Thu May 16 2024 14:34:13 GMT+0300 (Eastern European Summer Time)
| Hello from backend service John
| After call on method hello with date: Thu May 16 2024 14:34:13 GMT+0300 (Eastern European Summer Time)
```

If you want to learn more about typescript decorators, you can check out their official documentation.

## Create more complex middleware

### Parameter validation

Now that we have seen how decorators work, we can implement a complex middleware that checks if the incoming calls to the DeployApps methods have valid parameters. For the purpose of this example, we will use Zod which is a schema validation library in typescript. If you want to learn more about Zod check out their {{< external-link link="https://zod.dev/" >}}documentation{{< /external-link >}}.

The decorator definition is as follows:

```ts
/* eslint-disable */
import { ZodObject } from "zod";
export function ParameterCheckerMiddleware(_dict: ZodObject<any>[] = []) {
  return function (value: Function, _context: any) {
    return function (...args: any[]) {
      for (let i = 0; i < args.length; i++) {
        _dict[i].parse(args[i]);
      }

      // @ts-expect-error this is a valid call
      const func = value.bind(this);
      const result = func(...args);
      return result;
    };
  };
}
```

Here we give the decorator one parameter which is an array of ZodObjects that can be used to parse objects and check if their structure is valid. ZodObject.parse will throw an error if one of the objects doesn’t match the ZodSchema.
The class that uses this decorator will look something like this:

```ts
import { GenezioDeploy } from "@genezio/types";
import { ParameterCheckerMiddleware } from "./parameterChecker";
import { z } from "zod";

type Person = {
  name: string;
  details: PersonDetails;
};

type PersonDetails = {
  age: number;
  address: string;
  email: string;
};
@GenezioDeploy()
export class BackendService {
  constructor() {}

  @ParameterCheckerMiddleware([
    z.object({
      name: z.string()
    })
  ])
  async hello(props: { name: string }): Promise<string> {
    console.log(`Hello from backend service ${props.name}`);

    return `Hello from backend service ${props.name}`;
  }

  @ParameterCheckerMiddleware([
    z.object({
      name: z.string(),
      details: z.object({
        age: z.number(),
        address: z.string(),
        email: z.string()
      })
    })
  ])
  async helloPerson(props: Person): Promise<string> {
    console.log(
      `Hello from backend service ${props.name} with address ${props.details.address}, age ${props.details.age} and email ${props.details.email}`
    );

    return `Hello from backend service ${props.name} with address ${props.details.address}, age ${props.details.age} and email ${props.details.email}`;
  }
}
```

Here, we defined the `Person` and the `PersonDetails` objects that are used as parameters in the `helloPerson` function. If we run genezio local and go to the test interface, we should be able to see a placeholder for this object. If we run the function with the placeholder, everything will work as intended and we will get the desired output. However, if we replace the placeholder with an empty object we should get the following error:

```
`Error: [ { "code": "invalid_type", "expected": "string", "received": "undefined", "path": [ "name" ], "message": "Required" }, { "code": "invalid_type", "expected": "object", "received": "undefined", "path": [ "person" ], "message": "Required" } ]`
```

This error was thrown by our decorator, and more specifically by the Zod validator. As such, any incoming request with a parameter which does not have the required type will be dropped and the function will not run. In our case, this is the desired outcome.

### Using the GnzContext object

Parameter validation is just one of the many middleware which you can implement that does not require any network information. However, what happens when you need to process information regarding the network request? Well, we can use the GnzContext object. The GnzContext object provided by the `@genezio/types` library is used by our own middleware integration to handle certain incoming requests. As such, if you set the first parameter of your function as a GnzContext object, then we will populate that parameter with all the necessary information about the request. The context object usually has the following structure:

```ts
export type GnzContext = {
  token: string | undefined;
  user:
    | {
        email: string;
        userId: string;
        authProvider: string;
        createdAt: Date;
        verified: boolean;
        name?: string;
        address?: string;
        profilePictureUrl?: string;
        customInfo?: {
          [key: string]: string;
        };
      }
    | undefined;
  requestContext: any | undefined;
  headers: any | undefined;
  isGnzContext: boolean | undefined;
};
```

For the purpose of this use case, we don’t need to worry about the `token` and the `user` attributes as they are used by `@GenezioAuth`. What is important for us is the `requestContext` and the `headers`. Here is what a GnzContext object might look like

```
{
  token: 'deprimo',
  user: {
    email: 'aureus',
    userId: 'aggero',
    authProvider: 'trans',
    createdAt: {},
    verified: false,
    name: 'chirographum',
    address: 'alias',
    profilePictureUrl: 'ocer',
    customInfo: { '': '' }
  },
  requestContext: {
    http: {
      method: 'POST',
      path: '/',
      protocol: 'HTTP/1.1',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
      sourceIp: '78.96.207.59'
    },
    url: URL {
      href: 'http://localhost/',
      origin: 'http://localhost',
      protocol: 'http:',
      username: '',
      password: '',
      host: 'localhost',
      hostname: 'localhost',
      port: '',
      pathname: '/',
      search: '',
      searchParams: URLSearchParams {},
      hash: ''
    }
  },
  headers: {
    Host: 'a752d3e0-937e-4939-9734-fda0670168db.dev-fkt.cloud.genez.io',
    Accept: '*/*',
    'Accept-Encoding': 'gzip, deflate, br, zstd',
    'Accept-Language': 'en-US,en;q=0.9',
    'Content-Length': '336',
    'Content-Type': 'application/json',
    Origin: 'https://dev.app.genez.io',
    Priority: 'u=1, i',
    Referer: 'https://dev.app.genez.io/',
    'Sec-Ch-Ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    'Sec-Ch-Ua-Mobile': '?0',
    'Sec-Ch-Ua-Platform': '"Windows"',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    'X-Forwarded-For': '78.96.207.59'
  },
  isGnzContext: true
}
```

This is just an example of what information is transmitted in the GnzContext object. Now let’s implement a decorator that uses the GnzContext object to block any IP that is in the list provided as a parameter.

```ts
/* eslint-disable */
// A function that blocks the request if the sourceIp is in the block list.
export function IpBlockListMiddleware(blockList: string[] = []) {
  return function (value: Function, _context: any) {
    return async function (...args: any[]) {
      if (args.length === 0 || !args[0].isGnzContext) {
        console.log(
          "Warning: the IpBlockListMiddleware decorator must be used with the first parameter being a GnzContext object"
        );
        throw new Error("Invalid context");
      } else {
        if (blockList.includes(args[0].requestContext.http.sourceIp)) {
          throw new Error("This Ip is blocked");
        }
      }

      // @ts-expect-error
      const func = value.bind(this);
      const result = func(...args);
      return result;
    };
  };
}
```

The first thing we check is if the first parameter of the function is a GnzContext object. If it is not a GnzContext object, then we drop the request. If it is a GnzContext object, then we check if the source IP is in the block list provided as a parameter to the decorator, if it is, then we also drop the request. You can use this decorator like we used the ones in the previous examples:

```ts
import { GenezioDeploy, GnzContext } from "@genezio/types";
import { IpBlockListMiddleware } from "./blockListMiddleware";

@GenezioDeploy()
export class BackendService {
  constructor() {}

  @IpBlockListMiddleware(["127.0.0.1"])
  async hello(ctx: GnzContext, props: { name: string }): Promise<string> {
    console.log(`Hello from backend service ${props.name}`);

    return `Hello from backend service ${props.name}`;
  }
}
```

Here, we block every request that comes from localhost. Now we can run `genezio local` and try to call this function. After this, we can try to call the function but our IP will be blocked because we are calling from localhost:

Terminal output

```
Error: This Ip is blocked
```

## Conclusion

We are constantly working on providing out of the box solutions for most types of middleware. However, we know we will not be able to cover all use cases. This tutorial aims to show you how to implement your own middleware and improve your cross-environment integrations.

That’s everything you need to know about middleware integration for DeployApps projects! Now, you can find the best way to integrate these decorators into your own project. If you have any questions or need any help, don’t hesitate to contact me at virgil@genez.io or message me directly on {{< external-link link="https://discord.gg/XmpKD9ytxS" >}}Discord{{< /external-link >}}.
