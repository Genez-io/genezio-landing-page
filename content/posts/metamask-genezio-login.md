---
title: Seamless Web3 Authentication - A Deep Dive into Metamask Logins with Genezio
date: 2024-04-16
tags:
  - Tutorials
author: Bogdan Vlad
linkedIn: https://www.linkedin.com/in/iulian-bogdan-vlad
thumbnail: /images/express.webp
preview: Check ou how to integrate genezio in express for an easier and safer integration between backends and clients.
# meta data start
description: "Check ou how to integrate genezio in express for an easier and safer integration between backends and clients."
meta_og_url: "https://genez.io/blog/web_scraping_app"
meta_og_image: "https://genez.io/images/express.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 13
url: /blog/metamask-genezio-login/
---

Have you ever wondered what happens when you click that "Login with Metamask" button on a web app?
In today's world, where security and user control over data are critical, leveraging crypto wallets like Metamask for logins is becoming increasingly popular.
But what goes on behind the scenes to make this seamless experience possible? This article dives deep into the inner workings of logging in with Metamask on your web app.
We'll break down the four-step process involved and explore how Genezio's user-friendly authentication service handles the heavy lifting, allowing you to focus on building amazing features for your application.


## Metamask Login Explained

When the user clicks on 'Login with MetaMask', the flow goes like this:

1. The web app will pop up MetaMask and ask the user to connect their wallet.
2. The web app sends the public address of the wallet to the backend and asks for a nonce.
3. Upon receiving the request, the server checks if the public address belongs to an existing user. If it doesn't, it will create a new `user` row for that public address in the database.
Once the nonce is returned, the user will be prompted to sign the nonce to prove they have control over that public address.
4. The signature and the public address are sent back to the server, which checks if the signature is correct. If so, an auth token is generated and returned to the web app.
A new nonce will be generated for that user for the next time the user will want to login.

Don't worry, you don't have to handle all these things since genezio authentication service will do all the heavy lifting. Let's move forward with developing an app that features Metamask for signing in.

## Implementation

### Prerequisites

If you don't already have them, you'll need to install the following tools:

- {{< external-link link="https://nodejs.org/en/download/current" >}}Node.js{{< /external-link >}}
- {{< external-link link="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" >}}npm{{< /external-link >}}
- {{< external-link link="https://genez.io" >}}Genezio{{< /external-link >}}

Note: I recommend you to use {{< external-link link="https://github.com/nvm-sh/nvm#installing-and-updating" >}}nvm{{< /external-link >}} to manage NodeJs and npm versions.
After installing `nvm`, you can easily get any version of `node` by running `nvm install <node_version>`.
`nvm` will automatically install the corresponding `npm` version.

The command below will create a new directory with the name you provide and set up a full-stack project with the backend in TypeScript and the frontend in React.

```cli
genezio create fullstack --backend=ts --frontend=react-ts --name=genezio-login-metamask --region=us-east-1
```

Run `genezio deploy` to deploy the project.

Go to the Genezio Dashboard, select your project, and navigate to the Authentication section to enable the feature. You will be asked which database you want to use for storing user and session information.
Proceed to create a new Postgres database. Then, go to 'Providers' and enable the "Web3" provider. Now, you have an authentication service that can perform the "Login with Metamask" flow described in the previous section. We just have to implement the frontend.

![Enable auth genezio](/posts/demo-web3-article.webp)

Remember the "token" and "region" values as we are going to use them later.

### The frontend side

To keep things short and focused, we will not cover the boring React stuff. Instead, we'll jump straight to the point, explaining how to communicate with the Genezio Authentication Service.
Starting from the template, the only file we change on the frontend side is `App.tsx`, and you can check the full implementation [here](https://github.com/Genez-io/genezio-examples/tree/main/typescript/metamask-auth/client/src).

Let's start from the beginning. To interact with your authentication service, you need to install and import `@genezio/auth` and initialize the `AuthService` class.
Replace the `<token>` and `<region>` placeholders with the values from the Authentication section.

```
npm install @genezio/auth
```

```typescript
{{< filePath >}}client/src/App.tsx{{< /filePath >}}
import { AuthService } from "@genezio/auth";

AuthService.getInstance().setTokenAndRegion("<token>", "<region>");
```

When the component loads, the first check we perform is for the user's login status using the `AuthService.getInstance().userInfo()` function.
This function will check if a token is currently stored in the browser and it will send a request for the user details to the `AuthService`. 
If the user is logged in, we retrieve the user’s details. Otherwise, the function throws an error, prompting us to display the ‘Login with Metamask’ button.

```typescript
{{< filePath >}}client/src/App.tsx{{< /filePath >}}
useEffect(() => {
    AuthService.getInstance().userInfo().then((user) => {
        if (user.address) {
            getBalance(user.address)
        } else {
            throw new Error("No address")
        }
    }).catch((e: unknown) => {
        console.error("Not authenticated. Redirecting to login screen...", e)
        setData({
            address: null,
            balance: null,
        })
    })
}, [getBalance])
```

Let's see how we implement what happens when the user clicks the 'Login with Metamask' button.
This action initiates the flow we discussed at the beginning of the article.
A prerequisite step involves checking whether the user has the Metamask extension installed.
If the extension is present, it adds the 'ethereum' object to the window property, which we then use to communicate with the Metamask extension.

The first step is to request the wallet's public address using the `eth_requestAccounts` method.
Once we have it, we send it to the `AuthService` and request a nonce in return.
Next, we ask the user to sign the nonce to validate that they indeed have access to this public address, using the `personal_sign` method.
After sending the signature to the `AuthService`, if it is verified as correct, the user will be logged in. The user will remain logged into the web app until they choose to log out.

```typescript
{{< filePath >}}client/src/App.tsx{{< /filePath >}}
const loginWithMetamask = async () => {
    // Check if Metamask is installed
    if (window.ethereum) {
        // Fetch the accounts
        const addresses = await window.ethereum.request({ method: "eth_requestAccounts" })
        const address = addresses[0]

        // Retrieve a nonce for this address
        const nonce = await AuthService.getInstance().web3GetNonce(address)

        // Sign the nonce
        const signature = await window.ethereum.request({
            method: 'personal_sign',
            params: [nonce, address]
        })

        // Login with the signature
        await AuthService.getInstance().web3Login(address, signature)
        await getBalance(address)
    } else {
        alert("Install Metamask extension!");
	}
}
```

Our app also has a small backend with one function which can be invoked only by authenticated users. If the method is invoked by an authenticated users, it will throw an error and we redirect the user to the login screen.

```typescript
{{< filePath >}}client/src/App.tsx{{< /filePath >}}
BackendService.hello("Friend").then((res) => {
    setSecuredInfo(res)
}).catch((e) => {
    console.error(e)
    logout() 
})
```

Once again, you can explore the full code of the frontend [here](https://github.com/Genez-io/genezio-examples/tree/main/typescript/metamask-auth/client). It is straight forward React code and you can follow the comments for more information.

## The backend side

The backend side is composed of a genezio class called `BackendService` which has only one method `hello` that can be called only by authenticated users.
When a request is received, the `@GenezioAuth` middleware will check if the user is authenticated and if it is, it will populate the `context.user` property
with information about the user that initiated the request. If the client that performed the request is not authenticated, an error will be returned.

```typescript
{{< filePath >}}server/backend.ts{{< /filePath >}}
@GenezioDeploy()
export class BackendService {
  constructor() {}

  @GenezioAuth()
  async hello(context: GnzContext, name: string): Promise<string> {
    console.log("Request received from user with Public Address", context.user!.address);
    const ipLocation: SuccessResponse | ErrorResponse = await fetch(
      "http://ip-api.com/json/"
    )
      .then((res) => res.json() as Promise<SuccessResponse>)
      .catch(() => ({ status: "fail" }));

    if (ipLocation.status === "fail") {
      return `Hello ${name}! Failed to get the server location :(`;
    }

    const formattedTime = new Date().toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    return `Hello ${name}! Your address is ${context.user?.address}. This response was served from ${ipLocation.city}, ${ipLocation.country} (${ipLocation.lat}, ${ipLocation.lon}) at ${formattedTime}`;
  }
}
```

## Deploy your application

To deploy your application, run the following command in the root directory of your project:

```
genezio deploy
```

Your app will be available at `https://<custom-subdomain>.app.genez.io`. The custom subdomain is specified in the `genezio.yaml` file.
Access it and try to login. Metamask should pop out, asking you to sign the message. When the process finished, you should see your balance.

## Conclusion

Congratulations! You have a full stack application with Metamask! You can check the full working code [here](https://github.com/Genez-io/genezio-examples/tree/main/typescript/metamask-auth).

From here sky is the limit. You can change the backend to do more awesome stuff than just returning a string: build a wallet alert notification system, 
an application that shows the historical balance data or build an auction for NFTs. Upcoming articles will cover more advanced topics and use cases so subscribe
to our newsletter to not miss anything!



