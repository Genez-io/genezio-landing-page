---
title: Build a custom-data LLM application with Genezio, Langchain and LanceDB
date: 2024-04-01
tags:
  - Tutorial
author: Andreia Ocanoaia
linkedIn: https://www.linkedin.com/in/andreia-irina-ocanoaia/
thumbnail: /images/kubecon.webp
preview: "Build a custom-data LLM application that will answer questions based on your custom data using Langchain and LanceDB."
description: "This tutorial will guide you through building a simple LLM-based application using Genezio, Langchain and LanceDB.
The ultimate goal is to be able to feed custom data to an OpenAI model and generate responses based on the custom data."
meta_og_url: "https://genez.io/blog/langchain_starter"
meta_og_image: "https://genez.io/images/kubecon.webp"
customHeader: "White header"
customFooter: "White footer"
readTime: 30
url: /blog/custom-data-llm-application
---

This tutorial will guide you through building a simple LLM-based application using Genezio, Langchain and LanceDB.
The ultimate goal is to be able to feed custom data to an OpenAI model and generate responses based on the custom data.

You can use this project as a starting point to build more complex applications such as:
- FAQ bots for customer support
- Q&A bots for educational purposes
- AI-powered documentation search engines

If you want to directly jump to a working project, you can clone the {{< external-link link="https://github.com/Genez-io/genezio-examples/tree/main/typescript/langchain-starter" >}}following repository{{< /external-link >}} and paste your custom data in `server/data`.
Follow the instructions in the `README` to deploy your project and you'll have a working application that can generate responses based on your custom data.

## Prerequisites

If you don't already have them, you'll need to install the following tools:

- {{< external-link link="https://nodejs.org/en/download/current" >}}Node.js{{< /external-link >}}
- {{< external-link link="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" >}}npm{{< /external-link >}}
- {{< external-link link="https://genez.io" >}}Genezio{{< /external-link >}}

Note: I recommend you to use {{< external-link link="https://github.com/nvm-sh/nvm#installing-and-updating" >}}nvm{{< /external-link >}} to manage NodeJs and npm versions.
After installing `nvm`, you can easily get any version of `node` by running `nvm install <node_version>`.
`nvm` will automatically install the corresponding `npm` version.

## Setup your project

### Start from a template

The command below will create a new directory with the name you provide and set up a fullstack project with the backend in TypeScript and the frontend in React.

```bash
genezio create fullstack --backend=ts --frontend=react-ts --name=custom-data-llm --region=us-east-1`
```

The file structure will look similar to this:
```bash
├── server/
│   ├── backend.ts
│   ├── package.json
│   └── tsconfig.json
├── client/
│   ├── src/
│   │   ├── App.tsx
│   ├── package.json
|   └── tsconfig.json
├── genezio.yaml
├── .genezioignore
├── README.md
```

### Get an OpenAI API key

Go to {{< external-link link="https://platform.openai.com/api-keys" >}}the OpenAI Dashboard{{< /external-link >}} and create an OpenAI API key.
This key will be used to interact with the OpenAI API to create embeddings and generate responses.

Paste the key in the `.env` file in the `server` directory.
```
{{< filePath >}}server/.env{{< /filePath >}}
OPENAI_API_KEY=<your_openai_api_key>
```

### Get your custom data

For the purpose of this tutorial, we will use a simple dataset with a few sentences.
You can use your own dataset provided either in local markdown files, S3 buckets, as a webpage or GitHub repository.

Create a directory named `data` and a file named `data.txt` and fill it with custom data.
The one I used for this tutorial can be found in the [project's repository]().

```
├── server/
    ├── .env
    ├── data/
    │   ├── data.txt
    ├── backend.ts
    ├── package.json
    └── tsconfig.json
```

{{< details "Expand this section to copy dummy data for this tutorial" >}}

Feel free to copy the following piece of text to `server/data/data.txt`.
You can also add your own data to the file to test the application with your custom data.

```txt
Genezio is a powerful cloud platform designed for full-stack developers, offering auto-scalable backends and seamlessly connected frontends through a type-safe interface. Whether you're a seasoned developer or just getting started, Genezio has you covered.

Genezio supports various programming languages, including Typescript, Go, and more. You can write your backend code in your preferred language, making it accessible and versatile for developers of all backgrounds.

Make Type-Safe Calls from Any Frontend Frameworks

Genezio offers the flexibility to connect to frontends across various platforms, both web and mobile. You can create powerful applications while maintaining a type-safe interface to ensure robust and reliable interactions.

What Can You Build with Genezio?

Genezio empowers you to bring your ideas to life. Here are some of the exciting possibilities:

Websites: Create responsive websites with Genezio's scalable infrastructure.
Web Applications: Develop feature-rich web applications with ease, leveraging Genezio's powerful backend services.
Applications with Multiple Frontends: Build applications that serve multiple front-ends, including APIs, web, and mobile interfaces, all while maintaining a type-safe interface for seamless interactions.
Web3 Applications: Dive into the world of Web3 and build decentralized applications on Genezio's secure and scalable platform.
Backends for Mobile Apps: Power your mobile applications with robust and scalable backends, ensuring a smooth user experience.
Full-Code Enterprise Process Automation: Streamline your enterprise processes with Genezio's automation capabilities, offering full control and customization.
LLM-Backed Apps: Create applications backed by the latest technology and best practices, making your projects future-proof.
Start your journey with Genezio today and unlock the potential to build, deploy, and scale your applications like never before. Whether you're a solo developer or part of a team, Genezio is your trusted partner for turning your ideas into reality.
```
{{< /details >}}

## Create and populate the vector database

We will use LanceDB to store the data in a vector database.
The advantage of using LanceDB is that it's an embedded vector database - meaning it will be bundled alongside your source code and the code can access it directly without needing to connect to a separate server.
This approach makes the querying process faster for large amounts of data.

Initially, you need to create and populate the vector database with your data.
Create a new file named `createVectorDatabase.ts` in the `server` directory and paste the following code snippet there.
All of the following code snippets will be added to this file in `createVectorDatabase()` function.

```typescript
{{< filePath >}}server/createVectorDatabase.ts{{< /filePath >}}
import * as fs from "fs";
import dotenv from "dotenv";
dotenv.config();

export async function createVectorDatabase() {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  if (!OPENAI_API_KEY) {
    throw new Error(
      "You need to provide an OpenAI API key. Go to https://platform.openai.com/account/api-keys to get one.",
    );
  }
  const embeddings = new OpenAIEmbeddings({ openAIApiKey: OPENAI_API_KEY });

  // Paste the following code snippets here
}
```

Create a directory to store the database and connect to it:

```typescript
{{< filePath >}}server/createVectorDatabase.ts{{< /filePath >}}
  const databasePath = "./lancedb";
  // Create the database directory if it doesn't exist
  if (!fs.existsSync(databasePath)) {
      fs.mkdirSync(databasePath);
  }

  // Connect to the database
  const database = await lancedb.connect(databasePath);
```

Create a table in the database to store the vectors.
To create a table, you need to provide the table name and the schema.
The schema is usually based on the type of data loader you are using.
For this tutorial, we are keeping it simple and use the `TextLoader` with it's corresponding schema.

```typescript
{{< filePath >}}server/createVectorDatabase.ts{{< /filePath >}}
  const table = await db.createTable(
    "vectors",
    [{ vector: Array(1536), text: "text-sample", id: 1 }],
    { writeMode: lancedb.WriteMode.Overwrite }
  );
```

Note: By default, LanceDB gives an error if the database already exists.
To overwrite the database contents, you can set the `writeMode` to `Overwrite`.
This will allow you to run `createVectorDatabase` multiple times to append new data to the database.


Now, we are ready to read and load the data into the database:

```typescript
{{< filePath >}}server/createVectorDatabase.ts{{< /filePath >}}
  const loader = new TextLoader("./data/data.txt");
  const documents = await loader.load();
  const vectorStore = await LanceDB.fromDocuments(
    documents,
    embeddings,
    {table},
  );
```

To test that the database has been populated with the data, you can run the following code:

```typescript
{{< filePath >}}server/createVectorDatabase.ts{{< /filePath >}}
  const result = await vectorStore.similaritySearch("genezio", 1);
  console.log(result);
```

This will output all the documents that are similar to the word `genezio` from `data/data.txt`.

Before getting to the next step of the tutorial, you have to run the `createVectorDatabase` nodejs script.

Append this code snippet at the end of the file:

```typescript
{{< filePath >}}server/createVectorDatabase.ts{{< /filePath >}}
(async () => {
  console.log("Creating the LanceDB vector table.");
  await createVectorDatabase();
  console.log("Successfully created the LanceDB vector table.");
})();
```

And run the script with:
```bash
cd server && npx tsx createVectorDatabase.ts
```

The vector database is now populated with the data from `data/data.txt` and can be used to create a custom-data LLM-based application.

## Implement the custom-data application

To implement the bot itself, remove the `hello` method from the `BackendService` class in `server/backend.ts` and replace it with the following code snippets:

``` typescript
{{< filePath >}}server/backend.ts{{< /filePath >}}
import { GenezioDeploy } from "@genezio/types";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { OpenAI, OpenAIEmbeddings } from "@langchain/openai";

@GenezioDeploy()
export class BackendService {
  constructor() {}

  async askBot(question: string): Promise<string> {
    const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
    if (!OPENAI_API_KEY) {
			throw new Error("You need to provide an OpenAI API key. Go to https://platform.openai.com/account/api-keys to get one.");
		}

    const model = new OpenAI({
			modelName: "gpt-4",
			openAIApiKey: OPENAI_API_KEY,
      temperature: 0.5,
			verbose: true
		});

    const prompt = ChatPromptTemplate.fromMessages([
      [
        "ai",
        `Answer the question based on only the following context.
If the information is not in the context, use your previous knowledge to answer the question.

{context}`,
      ],
      ["human", "{question}"],
    ]);

    // Paste the following code snippets here

    return "";
  }
}
```

Open and connect to the database you've previously created:
```typescript
{{< filePath >}}server/backend.ts{{< /filePath >}}
    const database = "./lancedb";
    const db = await connect(database);
    const table = await db.openTable('vectors')
```

Now, you need to create a retriever that will query the database for the most similar document to the input question.

```typescript
{{< filePath >}}server/backend.ts{{< /filePath >}}
    const vectorStore = new LanceDB(new OpenAIEmbeddings, { table })
    const retriever = vectorStore.asRetriever(1);
    const outputParser = new StringOutputParser();

    const setupAndRetrieval = RunnableMap.from({
      context: new RunnableLambda({
        func: (input: string) =>
          retriever.invoke(input).then((response) => response[0].pageContent),
      }).withConfig({ runName: "contextRetriever" }),
      question: new RunnablePassthrough(),
    });
```

Next, it will feed into the OpenAI model the input question and the database retrieved context:
```typescript
{{< filePath >}}server/backend.ts{{< /filePath >}}
    const chain = setupAndRetrieval.pipe(prompt).pipe(model).pipe(outputParser)
    const response = await chain.invoke(question);
    console.log("Answer:", response)
    return response;
```


You can test the application locally by running the following command in the project's root directory:
```bash
genezio local
```

Your terminal should look similar to this:
```
✔ Running backend local scripts
| Change detected, reloading...
| Server listening on port 8083
| Your local server is running and the SDK was successfully generated!

| Test your code at http://localhost:8083/explore
```

You can navigate to `http://localhost:8083/explore` to test the API:

![Test Interface Screenshot](posts/langchain_starter/langchain_starter_test_interface.webp)

## Create a simple frontend to interact with your application

Open the `client/src/App.tsx` file and replace the content with the following code snippet:
This will simply create an input box where you can ask your question and a button to get the answer from the bot.

```typescript
{{< filePath >}}client/src/App.tsx{{< /filePath >}}
import { useState } from "react";
import { BackendService } from "@genezio-sdk/custom-data-llm";
import "./App.css";

export default function App() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  async function askOpenAI() {
    setTimeout(async () => {
      setResponse(await BackendService.askBot(question));
    }, 10000);
  }

  return (
    <>
      <h1>Genezio + OpenAI = ❤️</h1>
      <div className="card">
        <input
          type="text"
          className="input-box"
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="What's your question?"
        />
        <br />
        <br />

        <div>
          <button onClick={askOpenAI}>Get your answer</button>
          <p className="read-the-docs">{response}</p>
        </div>
      </div>
    </>
  );
}

```
## Deploy your application

To deploy your application, run the following command in the root directory of your project:

```bash
genezio deploy
```
Your app will be available at `https://<custom-subdomain>.app.genez.io`. The custom subdomain is specified in the `genezio.yaml` file.

You can continue to manage, test, update and monitor your project from the genezio dashboard.

## Conclusions

Congratulations! 🥳 You've implemented and deployed your own custom-data bot.

The codebase for this tutorial is open-source, and you can find it in this {{< external-link link="https://github.com/genez-io/genezio-examples/tree/main/typescript/langchain-starter" >}}GitHub repository{{< /external-link >}}.

Upcoming tutorials and articles about LLM, Langchain, LanceDB, and Genezio will cover more advanced topics and use cases such as creating a chatbot with memory, scraping custom data from GitHub, and keeping your vector database in sync with your data.

Subscribe to our newsletter to stay in the loop with the latest updates and tutorials.
## Resources

This article contains a lot of new concepts and information. If you want a more in-depth understanding of the topics covered, I recommend the following resources:

- {{< external-link link="https://github.com/microsoft/generative-ai-for-beginners" >}}https://github.com/microsoft/generative-ai-for-beginners{{< /external-link >}}
- {{< external-link link="https://learn.deeplearning.ai/courses/langchain-chat-with-your-data" >}}https://learn.deeplearning.ai/courses/langchain-chat-with-your-data{{< /external-link >}}
- {{< external-link link="https://medium.com/@onkarmishra/using-langchain-for-question-answering-on-own-data-3af0a82789ed" >}}https://medium.com/@onkarmishra/using-langchain-for-question-answering-on-own-data-3af0a82789ed{{< /external-link >}}
