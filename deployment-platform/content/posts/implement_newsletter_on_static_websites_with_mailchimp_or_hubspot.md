---
title: "Implement a newsletter on static websites with Mailchimp or HubSpot"
date: 2024-03-21
tags:
  - Tutorials
author: Tudor Anghelescu
linkedIn: https://www.linkedin.com/in/anghelescu-tudor-b73739193/
thumbnail: /images/implementing_newsletter_section.webp
preview: "In this blog, I'll take you through a practical solution for effortlessly integrating newsletter sections into your website."
# meta data start
description: "In this blog, I'll take you through a practical solution for effortlessly integrating newsletter sections into your website."
meta_og_url: "https://genezio.com/blog/implement-newsletter-section/"
meta_og_image: "https://genezio.com/images/implementing_newsletter_section.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 10
url: /blog/implement-newsletter-section/
---

Hey everyone! I'm Tudor, and I'm part of the DeployApps development team. Lately, I've been on a mission to find the easiest way to add a newsletter section to The Bucharest Hackathon website – it's gonna be a cool {{< external-link link="https://thebucharesthackathon.com/" >}}hackathon{{< /external-link >}} taking place in Bucharest.

## Prerequisites

If you don’t already have them, you’ll need to install the following tools:

- {{< external-link link="https://nodejs.org/en/download/current" >}}Node.js{{< /external-link >}}
- {{< external-link link="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" >}}Npm{{< /external-link >}}

## Getting Started

Initiate the installation of `DeployApps` via `npm` and execute it in your terminal. Later on, DeployApps comes in handy to deploy and host your web applications in the cloud.

```bash
npm install -g genezio
```

After installing `genezio`, you can create a new DeployApps project by running the following command in an empty new folder:

```bash
genezio create backend --backend=ts --name=newsletter-app --region=us-east-1
cd ./newsletter-app
```

We are also going to use `axios` for sending the request from the DeployApps backend to the newsletter provider API.

```bash
npm install axios
```

## Setting up your newsletter endpoint

Next, create a new file called `newsletter.ts` in the root directory of your project.
Open `newsletter.ts` in your IDE and add the following code:

```ts
{{< filePath >}}newsletter.ts{{< /filePath >}}
import { GenezioDeploy, GenezioMethod } from "@genezio/types";
import { GenezioHttpRequest, GenezioHttpResponse } from "@genezio/types";
import axios, { AxiosResponse } from "axios";

@GenezioDeploy()
export class NewsLetterService {
  @GenezioMethod({ type: "http" })
  async addContact(request: GenezioHttpRequest) {}
}
```

In this example, we're creating a function and we expose an HTTP endpoint that we will later call from our static website. If you want to learn more about HTTP Calls with DeployApps check our {{< external-link link="https://genezio.com/docs/genezio-typesafe/http-methods-webhooks/" >}}docs{{< /external-link >}}.

## Handle Mailchimp API

In this section of the article, I will walk you through the process of incorporating newsletter functionality using Mailchimp.

To begin, you'll need to acquire an API key from Mailchimp as well as a list ID. You can obtain the API key by generating one {{< external-link link="https://us18.admin.mailchimp.com/account/api/manage/#create">}}here{{< /external-link >}}, and for the list ID, refer to the instructions provided in this {{< external-link link="https://mailchimp.com/help/find-audience-id/">}}tutorial{{< /external-link >}}.

After obtaining your own Mailchimp key, make sure to create a .env file in the root of your project and place the key inside it.

```env
{{< filePath >}}.env{{< /filePath >}}
MAILCHIMP_KEY=Bearer pat-eu1-2221****-613f-****-a6ed-********
```

Now, you've got to update your backend method.
Don't forget to swap out the URL for one with your list ID, too.

```ts
{{< filePath >}}newsletter.ts{{< /filePath >}}
@GenezioDeploy()
export class NewsLetterService {
  @GenezioMethod({ type: "http" })
  async addContact(request: GenezioHttpRequest) {
    const config = {
      method: "post",
      url: "https://us18.api.mailchimp.com/3.0/lists/<listId>/members",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.MAILCHIMP_KEY,
      },
      data: {
        email_address: request.body.email,
        status: "subscribed",
      },
    };

    const res: AxiosResponse = await axios.request(config);
    const genezioResponse: GenezioHttpResponse = {
      body: res.data,
      headers: { "content-type": "application/json" },
      statusCode: "200",
    };

    return genezioResponse;
  }
}
```

And that concludes the Mailchimp implementation. Now you have a working function that adds contacts from your request to the Mailchimp list.

## Handle HubSpot API

In this section of the article, I'll guide you through integrating newsletter functionality using HubSpot.

The initial step involves obtaining an API key from HubSpot. You can find a brief tutorial on acquiring it {{< external-link link="https://knowledge.hubspot.com/integrations/how-do-i-get-my-hubspot-api-key">}}here{{< /external-link >}}.

After obtaining your own HubSpot key, make sure to create a .env file in the root of your project and place the key inside it.

```env
{{< filePath >}}.env{{< /filePath >}}
HUBSPOT_KEY=Bearer pat-eu1-2221****-613f-****-a6ed-********
```

```ts
{{< filePath >}}newsletter.ts{{< /filePath >}}
@GenezioDeploy()
export class NewsLetterService {
  @GenezioMethod({ type: "http" })
  async addContact(request: GenezioHttpRequest) {
    const config = {
      method: "post",
      url: "https://api.hubapi.com/crm/v3/objects/contacts",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.HUBSPOT_KEY,
      },
      data: {
        properties: {
          email: request.body.email,
        },
      },
    };
    const res: AxiosResponse = await axios.request(config);
    const genezioResponse: GenezioHttpResponse = {
      body: res.data,
      headers: { "content-type": "application/json" },
      statusCode: "200",
    };

    return genezioResponse;
  }
}
```

And that concludes the HubSpot implementation. Now you have a working function that adds
contacts from your request to the HubSpot list.

## Test your Endpoint

To test your backend on a local server, execute the `genezio local` command in the root folder.

```bash
genezio local
```

In the terminal output, you'll discover the endpoint for adding a new contact to the list, along with a link to our test interface for code-testing purposes.

```
HTTP Methods Deployed:

- NewsLetterService.addContact: http://127.0.0.1:8083/NewsLetterService/addContact

Test your code at http://localhost:8083/explore
```

## Deploy your Backend

Now that everything is configured, it's time to deploy the application to the DeployApps cloud with just one straightforward command.
Run this command in the root folder of your project:

```bash
genezio deploy --env .env
```

After the deployment process completes in your terminal, you'll discover the URL for our 'addContact' method, which we'll utilize to send API requests from our static website. It might look similar to this:

```
HTTP Methods Deployed: - NewsLetterService.addContact:
 https://4eyuye4ixxiv2ia525dbilm6xa0ugvxq.lambda-url.us-east-1.on.aws/NewsLetterService/addContact
```

## Handle request in your website

Now, the final step is to send the request from your `client`. For testing purposes, I prepared this static website where I use my DeployApps URL to send the request. If you want to use this template, change the request. If you don't, feel free to use your own client.

```ts
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Newsletter Signup</title>
  </head>
  <body>
    <h2>Subscribe to Our Newsletter</h2>
    <form>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required /><br /><br />
      <button type="button" onclick="sendData()">Subscribe</button>
    </form>
  </body>

  <script>
    function sendData() {
      var email = document.getElementById("email").value;
      var data = { email: email };

      fetch("https://addYourOwnURL.lambda-url.us-east-1.on.aws/NewsLetterService/addContact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          alert("Subscription successful!");
          document.getElementById("email").value = ""; // Clear input field after successful submission
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    }
  </script>
</html>
```

## Conclusion

Congratulations! 🥳

You've just seamlessly integrated newsletter functionality without the need to grapple with the complexities of setting up and hosting your backend.

I hope you enjoyed this tutorial and I encourage you to check out our other [tutorials](https://genezio.com/tags/tutorials/) for more tips and tricks on improving your software engineering skills. 🥷 💻

Also, I invite you to check our examples on {{< external-link link="https://github.com/Genez-io/genezio-examples/tree/master/">}}GitHub{{< /external-link >}}.
