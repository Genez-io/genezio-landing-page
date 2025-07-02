---
title: How to scrape real-time data from websites using DeployApps
date: 2024-04-02
tags:
  - Tutorials
author: Tudor Anghelescu
linkedIn: https://www.linkedin.com/in/anghelescu-tudor-b73739193/
thumbnail: /images/web_scrape.webp
preview: In this article, I’ll show you how to track stars from a GitHub repository in under 10 minutes. However, this code can be easily adapted to track various other metrics like social media likes, followers numbers, or stock market prices.
# meta data start
description: "Build and deploy a web scraping app with DeployApps. Learn to extract real-time data from websites in our detailed guide."
meta_og_url: "https://genezio.com/blog/web-scraping-app/"
meta_og_image: "https://genezio.com/images/web_scrape.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 10
url: /blog/web-scraping-app/
---

Hey everyone! I’m Tudor, and recently, I found myself faced with a challenge: I needed to create a small React app to fetch data from GitHub, specifically the number of stars for our repository. With numerous solutions available, I started on finding the quickest and most efficient method.

In this article, I'll show you how to track stars from a GitHub repository in under 10 minutes. However, this code can be easily adapted to track various other metrics like social media likes, followers numbers, or stock market prices.

## Prerequisites

- {{< external-link link="https://nodejs.org/en/download/current" >}}Node.js{{< /external-link >}}
- {{< external-link link="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" >}}Npm{{< /external-link >}}
- {{< external-link link="https://www.npmjs.com/package/genezio" >}}DeployApps{{< /external-link >}}

## Handle web scraping logic

I embarked on developing a proof of concept for creating a concise function that retrieves star ratings from a GitHub repository. Ultimately, I successfully built a small Node.js application that runs locally and functions as intended.

```ts
const extractNumber = (str: string) => {
  const regex = /(\d+)(?=\susers\sstarred\sthis\srepository)/;
  const match = str.match(regex);
  return match ? match[1] : null;
};

const url = "https://github.com/Genez-io/genezio"; // Replace YOUR_URL_HERE with the actual URL

return axios
  .get(url)
  .then((response) => {
    const html = response.data;
    const numberX = extractNumber(html);
    return numberX;
  })
  .catch((error) => {
    console.error("Error fetching the page:", error.message);
  });
```

For this logic to function properly, it needs to be implemented on the backend side. Sending this request directly from our client would result in `CORS` blocking.

I also aim to deploy this in a production environment for our users' accessibility. Therefore, I'll utilize DeployApps for its creation and deployment.

## Getting Started

Initiate the installation of `DeployApps` via `npm` and execute it in your terminal. Later on, DeployApps comes in handy to deploy and host your web applications in the cloud.

To initiate a basic template for a full stack application, let's use the 'genezio create fullstack' command to start.

```bash
genezio create fullstack --frontend=onboarding-react --backend=onboarding-ts --name=genezio-web-scraper --region=us-east-1
cd ./genezio-web-scraper
```

On the backend, we are going to use `axios` to fetch the HTML of the website that we want to scrape. To install it, run the following command:

```bash
cd ./server
npm install axios
```

## Setting up your backend method

Next, create a new file called `webscraper.ts` in the `server` directory of your project. Open `webscraper.ts` in your IDE and add the following code:

```ts
{{< filePath >}}server/webscraper.ts{{< /filePath >}}
import { GenezioDeploy, GenezioMethod } from "@genezio/types";

@GenezioDeploy()
export class BackendService {
  @GenezioMethod()
  async GetGitHubStars() {}
}
```

## Integrating business logic on the backend side

We now possess a fully operational DeployApps method. It's time to integrate the logic from our small Node.js application to retrieve data from a website, which will then be invoked by our client. Let's incorporate this code.

```ts
{{< filePath >}}server/webscraper.ts{{< /filePath >}}
import { GenezioDeploy, GenezioMethod } from "@genezio/types";
import axios from "axios";

@GenezioDeploy()
export class BackendService {
  @GenezioMethod()
  async GetGitHubStars() {
    const extractStarsNumber = (str: string) => {
      const regex = /(\d+)(?=\susers\sstarred\sthis\srepository)/;
      const match = str.match(regex);
      return match ? match[1] : null;
    };

    const url = "https://github.com/Genez-io/genezio"; // Add your own github repo url
    // return scraped data
    return axios
      .get(url)
      .then((response) => {
        const html = response.data;
        const numberX = extractStarsNumber(html);
        return numberX;
      })
      .catch((error) => {
        console.error("Error fetching the page:", error.message);
      });
  }
}
```

With this method, we retrieve the HTML of the page and search within it using the regex expression to return the matching data. In our case, it's the number of GitHub stars. If you wish to extract different data from another website, feel free to modify the regex condition to suit your specific use case.

## Test your method

To test your backend on a local server, execute the `genezio local` command in the root folder.

```bash
genezio local
```

In the terminal output, you’ll discover the link to our test interface for code-testing purposes.

```
Import your classes like this:
import { BackendService } from "@genezio-sdk/genezio-web-scraper"


Test your code at http://localhost:8083/explore
```

## Handle frontend

It's time to navigate to our `client` folder and update our React app template to call the backend method for displaying our data.

```ts
{{< filePath >}}client/src/App.tsx{{< /filePath >}}
import { useState, useEffect } from "react";
import "./App.css";
import { BackendService } from "@genezio-sdk/genezio-web-scraper";

export default function App() {
  const [stars, setStars] = useState<number>(); // store website data ()

  const fetchGithubStars = async () =>
    setStars(await BackendService.getGitHubStars());

  useEffect(() => {
    const intervalId = setInterval(() => {
    fetchGithubStars();
  }, 3000); // Send this request every 3 seconds to get almost real-time results."
  return () => clearInterval(intervalId);
}, []);

return <>{stars && <h1>{stars}</h1>}</>;

}
```

## Deploy your project

Now that everything is configured, it’s time to deploy the application to the DeployApps cloud with just one straightforward command. Run this command in the root folder of your project:

```bash
genezio deploy
```

After the deployment process completes in your terminal, you'll find the URL for your frontend as well as a link to the dashboard where you can manage your project.

```
App Dashboard URL: https://app.genez.io/project/cc5086af-1320-43a4-94a1-fe5038aac775/26a17f24-b46f-492c-857f-0126d14b407b

Frontend URL: https://harlequin-private-booby.app.genez.io
```

## Conclusion

Congratulations! 🥳

You've just effortlessly built a small web app that scrapes data from other websites and deployed it without needing to contend with the complexities of setting up and hosting your own backend.

Keep in mind that we used GitHub stars as an example, and you can employ this logic to obtain any data. All you need to do is adjust the regex slightly to match your own use case.

I hope you enjoyed this tutorial and I encourage you to check out our other [tutorials](https://genezio.com/tags/tutorials/) for more tips and tricks on improving your software engineering skills. 🥷 💻

Also, I invite you to check our examples on {{< external-link link="https://github.com/Genez-io/genezio-examples/tree/master/" >}}GitHub{{< /external-link >}}.
