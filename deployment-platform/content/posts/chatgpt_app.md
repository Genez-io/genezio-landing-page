---
title: Create your first app using ChatGPT
date: 2023-02-17
tags:
  - Tutorials
author: Radu Dumitrescu
linkedIn: https://www.linkedin.com/in/radu-andrei-dumitrescu/
thumbnail: /images/chatgptapp.webp
preview: In this tutorial, I will show you how to create an app called the Rephrasing App.
# meta data start
description: "Learn how to build your first ChatGPT app in this step-by-step tutorial. Rephrase text and improve your writing with React and genezio. Get started now!"
meta_og_url: "https://genezio.com/blog/create-your-first-app-using-chatgpt/"
meta_og_image: "https://genezio.com/images/chatgptapp.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 15
---

<!-----

You have some errors, warnings, or alerts. If you are using reckless mode, turn it off to see inline alerts.
* ERRORs: 0
* WARNINGs: 0
* ALERTS: 3

Conversion time: 1.222 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β34
* Fri Feb 17 2023 07:02:14 GMT-0800 (PST)
* Source doc: Untitled document
* This document has images: check for >>>>>  gd2md-html alert:  inline image link in generated source and store images to your server. NOTE: Images in exported zip file from Google Docs may not appear in  the same order as they do in your doc. Please check the images!

----->

<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 0; ALERTS: 3.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p><a href="#gdcalert1">alert1</a>
<a href="#gdcalert2">alert2</a>
<a href="#gdcalert3">alert3</a>

<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>

In this tutorial, I will show you how to create an app called the Rephrasing App. The app that you are going to build has a simple UI written in React, uses the ChatGPT API and is deployed on genezio.

It will have two main components: the frontend which will consist of a simple chat-like interface, and the backend which exposes a function meant to rephrase your input text. Once implemented, the Rephrasing App can be used to rephrase text, write better articles or even upgrade your CV.

## Prerequisites:

- Install {{< external-link link="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" >}}npm{{< /external-link >}}

- Have an IDE installed, I personally recommend {{< external-link link="https://code.visualstudio.com/download" >}}Visual Studio Code{{< /external-link >}}

- Create a free account on {{< external-link link="https://openai.com/" >}}OpenAI{{< /external-link >}}

## Introduction

### **ChatGPT and genezio**

Since you are reading this, I assume you already know what ChatGPT is and how it works at its core. But how do you actually use it to build a working and useful app? Is it enough to call the API directly, or do you need to write other functions as well? How and where do you host it? I will work alongside you towards finding out the answers to most of these questions until the end of this article.

When deciding where to make the calls from, you have to keep in mind how secure you want this to be. So, as it is smart not to do them from the frontend, you are going to use genezio to host the backend and to call the OpenAPI from the genezio functions. For you to create a clearer idea about how this works, take a look at this illustration:

![Street Art Image](/posts/react-gen-chat.webp)

Now, let’s dive in! You can find the complete project {{< external-link link="https://github.com/Genez-io/genezio-examples/tree/master/javascript/chatgpt-project" >}}here{{< /external-link >}}.

## Configuration

### **Get the API Key from OpenAI**

1. Go to the {{< external-link link="https://platform.openai.com/signup/" >}}OpenAI website{{< /external-link >}} and create an account.

![Street Art Image](/posts/create-account.webp)

2. Go to{{< external-link link="https://platform.openai.com/account/api-keys" >}} platform.openai.com/account/api-keys{{< /external-link >}}

3. Click on the "Create new secret key" button.

![Street Art Image](/posts/api-keys.webp)

**Note**: Remember to keep your API key secure and do not share it with anyone.

4. To be able to use this API Key, you will need to have funds in your OpenAI account. Go to {{< external-link link="https://platform.openai.com/account/billing/overview/" >}}platform.openai.com/account/billing/overview{{< /external-link >}} and add some funds to your account.

### **Set Up genezio**

First, install genezio using npm:

```bash
npm install genezio -g
```

Then, use this command to log in:

```bash
genezio login
```

Create a new project:

```bash
genezio create fullstack --backend=ts --frontend=react-ts --name=chatgpt-project --region=us-east-1
```

### **The Server-side Project**

Change into the newly created `server` folder:

```cli
cd ./chatgpt-project/server
```

Now, you’re ready to install `openai`:

```bash
npm install openai
```

**Note:** This npm package provides a convenient way to access OpenAI API from any JavaScript application.

### **Implement the Backend Class**

You will implement a class containing a function that you will deploy and then call it from the frontend application.

Create the `.env` file in the server directory and add the following variable that will store your OpenAI secret key from your OpenAI account:

```env
OPENAI_SECRET_KEY=<your_secret_key>
```

Create a new file called `gptCaller.ts` in the server directory.

Open the newly created `gptCaller.ts` file and start by adding the dependencies:

```javascript
{{< filePath >}}server/gptCaller.ts{{< /filePath >}}
import OpenAI from "openai";
import { GenezioDeploy } from "@genezio/types";
```

In the constructor of the class, instantiate the `openai` object:

```javascript
{{< filePath >}}server/gptCaller.ts{{< /filePath >}}
@GenezioDeploy()
export class GptCaller {
  openai: OpenAI | null = null;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_SECRET_KEY,
    });
  }
}
```

Now you can create the class and the async method that will receive the input text from the frontend app. It will call ChatGPT, and then send the response back to the frontend.

Take a look at the complete file code:

```javascript
{{< filePath >}}server/gptCaller.ts{{< /filePath >}}
import OpenAI from "openai";
import { GenezioDeploy } from "@genezio/types";

@GenezioDeploy()
export class GptCaller {
  openai: OpenAI | null = null;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_SECRET_KEY,
    });
  }
  // send a request to the ChatGPT API to get the requestText
  async askChatGPT(requestText: string) {
    const completion = await this.openai?.chat.completions.create({
      // the used model at the moment of writing this article
      model: "gpt-3.5-turbo",
      // tells ChatGPT to rephrase the requestText
      messages: [{ role: "user", content: "rephrase this:" + requestText }],
    });

    console.log(
      `DEBUG: request: ${requestText}, response: ${completion?.choices[0].message}`
    );
    return completion?.choices[0].message.content;
  }
}
```

**Note**: Please make sure to check out the OpenAI API {{< external-link link="https://platform.openai.com/docs/api-reference/completions" >}}Official Documentation{{< /external-link >}} for more information.

Now run the following command in the root directory to test your backend locally:

```bash
genezio local
```

### **The Client-side React Project**

Go to the `client` folder in a **new terminal** and install the necessary dependencies:

```bash
cd ./client
npm install
```

### **Implement the User Interface**

In this part of the article, you will create the UI for chatting with the backend. This is in the `src/App.tsx` file.
Delete what is inside the `App.tsx` file so we can start from scratch and better explain our approach.

First, import the dependencies from `react`, `SDK`, and `CSS`:

```javascript
{{< filePath >}}client/src/App.tsx{{< /filePath >}}
import { useState } from "react";
import { GptCaller } from "@genezio-sdk/chatgpt-project";
import "./App.css";
```

In the `App` component you will need 3 `useState` objects for the messages, requestText, and a boolean variable for the request - `isRequesting`:

```typescript
{{< filePath >}}client/src/App.tsx{{< /filePath >}}
// each mesage format: {text: "message", isUser: true/false}
const [messages, setMessages] = useState<Array<any>>([]);
const [requestText, setRequestText] = useState<string>("");
const [isRequesting, setIsRequesting] = useState<boolean>(false);
```

You will also need to write a method for sending the request:

```typescript
{{< filePath >}}client/src/App.tsx{{< /filePath >}}
function sendRequest(e: any) {
  e.preventDefault();
  setIsRequesting(true);
  GptCaller.askChatGPT(requestText)
    .then((response) => {
      setMessages([
        {
          text: requestText,
          isUser: true,
        },
        {
          text: response,
          isUser: false,
        },
      ]);
      setRequestText("");
      setIsRequesting(false);
    })
    .catch((err) => {
      console.log(err);
      setIsRequesting(false);
    });
}
```

For displaying the user’s input text and the response generated by ChatGPT, you need 2 elements. On the left side of the screen text generated by ChatGPT will be displayed, and on the right, there will be the user text.

This will be done in a `map` of the messages:

```tsx
{{< filePath >}}client/src/App.tsx{{< /filePath >}}
{
  messages.map((message, index) => {
    if (message.isUser) {
      return (
        <div className="msg right-msg" key={index}>
          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">You</div>
            </div>

            <div className="msg-text">{message.text}</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="msg left-msg" key={index}>
          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">ChatGPT</div>
            </div>

            <div className="msg-text">{message.text}</div>
          </div>
        </div>
      );
    }
  });
}
```

To finish, you need a form with an input text box where the user can enter the text:

```tsx
{{< filePath >}}client/src/App.tsx{{< /filePath >}}
<form className="msger-inputarea" onSubmit={(e) => sendRequest(e)}>
  <input
    type="text"
    className="msger-input"
    placeholder="Enter your message..."
    value={requestText}
    onChange={(e) => setRequestText(e.target.value)}
  />
  <button type="submit" className="msger-send-btn" onClick={(e) => sendRequest(e)}>
    {isRequesting ? "Sending..." : "Send"}
  </button>
</form>
```

Complete code file:

```tsx
{{< filePath >}}client/src/App.tsx{{< /filePath >}}
import { useState } from "react";
import { GptCaller } from "@genezio-sdk/chatgpt-project";
import "./App.css";

function App() {
  // each mesage format: {text: "message", isUser: true/false}
  const [messages, setMessages] = useState<Array<any>>([]);
  const [requestText, setRequestText] = useState<string>("");
  const [isRequesting, setIsRequesting] = useState<boolean>(false);

  function sendRequest(e: any) {
    e.preventDefault();
    setIsRequesting(true);
    GptCaller.askChatGPT(requestText)
      .then((response) => {
        setMessages([
          {
            text: requestText,
            isUser: true,
          },
          {
            text: response,
            isUser: false,
          },
        ]);
        setRequestText("");
        setIsRequesting(false);
      })
      .catch((err) => {
        console.log(err);
        setIsRequesting(false);
      });
  }

  return (
    <div className="App">
      <section className="msger">
        <header className="msger-header">
          <h4>Rephrasing app using ChatGPT, genezio and React</h4>
        </header>

        <main className="msger-chat">
          {messages.map((message, index) => {
            if (message.isUser) {
              return (
                <div className="msg right-msg" key={index}>
                  <div className="msg-bubble">
                    <div className="msg-info">
                      <div className="msg-info-name">You</div>
                    </div>

                    <div className="msg-text">{message.text}</div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="msg left-msg" key={index}>
                  <div className="msg-bubble">
                    <div className="msg-info">
                      <div className="msg-info-name">ChatGPT</div>
                    </div>

                    <div className="msg-text">{message.text}</div>
                  </div>
                </div>
              );
            }
          })}
        </main>

        <form className="msger-inputarea" onSubmit={(e) => sendRequest(e)}>
          <input
            type="text"
            className="msger-input"
            placeholder="Enter your message..."
            value={requestText}
            onChange={(e) => setRequestText(e.target.value)}
          />
          <button type="submit" className="msger-send-btn" onClick={(e) => sendRequest(e)}>
            {isRequesting ? "Sending..." : "Send"}
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
```

**Note:** We provide you with the complete CSS for this project in `src/App.css`.

### Test your code

On the `client` folder start the frontend:

```bash
npm run dev
```

Open your browser and go to `http://localhost:5173/` to see the app in action.

### Deploy your project

Go to the **root** folder of your project and run the following command:

```bash
genezio deploy
```

#### This is it!

You can find the complete project on our {{< external-link link="https://github.com/Genez-io/genezio-examples/tree/master/javascript/chatgpt-project" >}}Github{{< /external-link >}}

I hope that you found this tutorial informative and helpful, and I encourage you to check out our {{< external-link link="https://genez.io/blog/" >}}other articles{{< /external-link >}} for more tips and tricks on mastering your craft.

Let me know if you need help by contacting me on {{< external-link link="https://discord.gg/XmpKD9ytxS" >}}Discord{{< /external-link >}}
or write me an email at contact@genez.io.
