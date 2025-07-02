---
title: "Run Python code for AI data analysis with LangGraph"
date: 2025-02-27
tags:
  - AI
author: Bogdan Vlad
linkedIn: https://www.linkedin.com/in/iulian-bogdan-vlad/
thumbnail: /images/langgraph.webp
preview: Today, we’re building a Data Analyst Agent—an AI-powered system that helps you make sense of your data. For example, it can generate visualizations from a CSV file or run complex analyses on structured datasets.
# meta data start
description: Learn how to deploy a secure AI-powered Data Analyst Agent using LangGraph and DeployApps, ensuring privacy and control over your data.
meta_og_url: "https://genezio.com/blog/data-analyst-agent-langgraph-genezio/"
meta_og_image: "https://genezio.com/images/langgraph.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 10
url: /blog/data-analyst-agent-langgraph-genezio/
---

## Introduction

Today, we’re building a **Data Analyst Agent**—an AI-powered system that helps you make sense of your data. For example, it can generate visualizations from a CSV file or run complex analyses on structured datasets.

Why does this matter? Large Language Models (LLMs) like ChatGPT already provide powerful data analysis capabilities by generating and executing Python scripts on their servers. While this is convenient, many users are often hesitant to share sensitive data with external platforms. Moreover, you might want to use your own self hosted LLM to reason about your data.

In this article, I’ll show you how you can instruct any LLM to generate and execute code in a secure, ephemeral environment. For this task we are going to use Claude for LLM and DeployApps Interpreter tool for running the code in a secured environment.

## Deploying an AI-powered data analyst: Key components and execution flow

Our Data Analyst Agent consists of four key components:

1. **Frontend:** A chat interface where users can upload data files and ask the LLM to analyze them.
2. **LangGraph Orchestrator:** The agent orchestrates the workflow, managing interactions between components.
3. **DeployApps Interpreter tool:** A LangGraph tool that informs the LLM that it can run Python code to achieve the task. If you want to learn more about Function Invocation and Tooling in the LLM World check {{< external-link link="https://huggingface.co/docs/hugs/en/guides/function-calling" >}}this{{< /external-link >}} out.
4. **Python Executor Environment:** Deployed as part of your application, it communicates with the DeployApps Interpreter tool to execute the generated code in a temporary, isolated environment to ensure security and privacy.

![aiagent](/posts/aiagent1.webp)

## Python Code Execution: How does it work?

When the AI agent generates Python code, it needs to be executed in a way that ensures **security, privacy, and flexibility**. Instead of running the code locally inside the LangGraph process, we use the `DeployAppsInterpreter` tool, which provides a secured execution environment.

Here’s what happens under the hood:

![aiagent](/posts/aiagent2.webp)

1. **Code Generation:** When a request is received, the LLM might decide that to achieve the task it needs to run Python code. It generates the code and passes it to LangGraph, specifying that it wants to use the `DeployAppsInterpreter` tool.
2. **Execution Request:** The `DeployAppsInterpreter` tool makes a request to the Python Executor environment deployed on DeployApps. All files that the user has uploaded are also passed in this request.
3. **Isolated Execution:** A short-lived virtual machine (VM) is created to run the code aka the **Python Executor**. The user’s data and generated code are securely passed to the VM and the code is executed.
4. **Result Handling:** Once execution is complete, the response is passed back to the `DeployAppsInterpreter` tool and the VM is immediately shut down, and all data is deleted.
5. **Response Delivery:** The `DeployAppsInterpreter` tool sends the response to the LLM.

This approach ensures that **no data persists beyond execution**, making it a great fit for **privacy-sensitive applications**.

Let’s see how it works.

{{< video src="/posts/demoagent.webm" width="100%" height="360" >}}

The LLM was able to answer questions related to the CSV file that I’ve uploaded. You can also play with it {{< external-link link="https://data-scientist-agent.app.genez.io/" >}}here{{< /external-link >}}.

**Make it your own**

It’s time to make this project your own. You can deploy this application in your own account by clicking this button. You will be asked to create a DeployApps account and you will also have to set an Anthropic API Key for the Claude LLM. After that you will have your application up and running.

The repository is {{< external-link link="https://github.com/vladiulianbogdan/data-scientist-agent" >}}here{{< /external-link >}}. It contains three modules:

- The React application in the `client/` folder.
- The Agent server in the `server/agent`
- The Python Executor in `server/genezio_python_executor`

**About LangGraph**

LangGraph is a library within the LangChain ecosystem designed to simplify the development of complex LLM applications. It provides a framework for defining, coordinating, and executing multiple LLM agents (or chains) in a structured manner. By enabling the creation of cyclical graphs, LangGraph facilitates the development of robust, scalable, and flexible multi-agent systems.

**About DeployApps**

DeployApps is a cloud platform that allows developers to deploy applications in secure, ephemeral environments. By creating short-lived virtual machines for code execution, DeployApps ensures that data remains private and is deleted immediately after execution. This makes it an ideal choice for applications that require secure and temporary code execution environments.

**About Claude**

Claude is a state-of-the-art Large Language Model (LLM) developed by Anthropic. Designed to generate human-like text, Claude is capable of understanding and generating natural language, making it suitable for a wide range of applications, including data analysis, content creation, and more. Its advanced capabilities enable it to perform complex tasks efficiently and accurately.
