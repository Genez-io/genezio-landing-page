---
title: "Deploy smarter, not harder: How DeployApps simplifies fast, scalable deployment for ML teams"
date: 2025-01-21
tags:
  - Tutorials
author: Rares Istoc
linkedIn: https://ro.linkedin.com/in/rares-istoc-9aa401123
thumbnail: /images/rag.webp
preview: Whether you’re an ML engineer, a DevOps professional, or a Project Manager looking to improve collaboration with clients, this article will provide insights and a clear understanding of how DeployApps can transform your deployment workflow.
# meta data start
description: Whether you’re an ML engineer, a DevOps professional, or a Project Manager looking to improve collaboration with clients, this article will provide insights and a clear understanding of how DeployApps can transform your deployment workflow.
meta_og_url: "https://genezio.com/blog//deploy-smarter-not-harder-how-genezio/"
meta_og_image: "https://genezio.com/images/rag.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 10
url: /blog//deploy-smarter-not-harder-how-genezio/
---

Whether you’re an **ML engineer**, a **DevOps professional**, or a **Project Manager** looking to improve collaboration with clients, this article will provide insights and a clear understanding of how {{< external-link link="https://genezio.com/" >}}DeployApps{{< /external-link >}} can transform your deployment workflow.

## What is DeployApps?

{{< external-link link="https://genezio.com/" >}}DeployApps{{< /external-link >}} is a serverless cloud platform that streamlines the deployment of applications and proofs-of-concept, offering a simpler alternative to traditional infrastructure management. It's built to help developers focus on creating innovative solutions without getting slowed down by complicated setups or infrastructure management.

With {{< external-link link="https://genezio.com/" >}}DeployApps{{< /external-link >}}, you don’t need to be a DevOps expert. You can deploy your code quickly and easily, cutting down on setup time, speeding up your launch, and making scalability simple. Its user-friendly interface is perfect for smaller teams or machine learning groups that don’t have a cloud engineer on hand. Just deploy your functions and applications straight to the cloud—no headaches, no fuss.

Check out 🔗 {{< external-link link="https://genezio.com/" >}}DeployApps’s{{< /external-link >}} Function-as-a-Service (FaaS) platform simplifies infrastructure management and accelerates development.

## How client collaboration drives successful AI projects

**Small feedback loops** in AI outsourcing are a game-changer. They keep clients in the loop about their projects, so it doesn't feel like they’re investing in a “black box.” Instead, clients can see visible progress, stay aligned with their goals, and build trust along the way. These loops also help catch issues early and ensure expectations are met, making project delivery smoother and clients happier.

That’s where {{< external-link link="https://genezio.com/" >}}DeployApps{{< /external-link >}} comes in. Think of it as a more user-friendly version of AWS Lambda. This Function-as-a-Service (FaaS) platform makes deploying AI applications a breeze. It takes care of the heavy lifting with infrastructure, so machine learning teams can focus on being creative and innovative. Plus, {{< external-link link="https://genezio.com/" >}}DeployApps{{< /external-link >}} supports real-time client interactions with proofs-of-concept and makes local testing easy, minimizing post-deployment headaches. The result? More efficient projects and happier teams.

## How to Deploy a RAG System with DeployApps: A Step-by-Step Guide

Deploying a Retrieval-Augmented Generation (RAG) system is no walk in the park. It often involves:

- **Dockerizing your application** to ensure portability.
- **Writing Infrastructure as Code (IaC)** to manage cloud resources.
- **Handling cloud configurations**, from networking to storage, which can quickly become overwhelming.

This is where **DeployApps** steps in. By simplifying deployment, DeployApps eliminates these pain points, taking you from **PoC to production-ready RAG infrastructure in record time** — all without needing deep DevOps expertise.

Explore the complete code and examples for deploying a RAG system on DeployApps in 🔗 {{< external-link link="https://github.com/mlvanguards/deploy-hybrid-rag-genezio" >}}deploy-hybrid-rag-genezio{{< /external-link >}} Github.

### An advanced RAG architecture: Indexing, Retrieval, Synthesizer

![alt_text](/posts/rag1.webp)

A well-designed Retrieval-Augmented Generation (RAG) architecture is the backbone of production-ready AI systems, ensuring efficient processing, accurate retrieval, and seamless information synthesis.

Let’s break down the key components of an advanced RAG pipeline:

**Indexing**

![alt_text](/posts/rag2.webp)

The QdrantIndexer class is designed to index documents using various embedding models and store them in a Qdrant database.

We use multiple embeddings are in the indexing process:

- **Dense Embeddings (sentence-transformers/all-MiniLM-L6-v2):** Captures semantic similarity in a compact vector space, ideal for meaning-focused queries.

- **Sparse Embeddings (Qdrant/bm42-all-minilm-l6-v2-attentions):** Encodes text with high weights for rare, significant terms, effective for keyword-based or technical queries.

- **Matryoshka Embeddings:** Provides multi-scale embeddings for varying levels of granularity, enabling precise or broad retrieval depending on context.

- **Late Interaction Embeddings (ColBERT) (colbert-ir/colbertv2.0):** Focuses on fine-grained token-level interactions during retrieval, optimized for late-stage re-ranking to enhance accuracy.

This hybrid approach maximizes both precision and recall, making retrieval robust and effective for diverse query intents.

![alt_text](/posts/rag3.webp)

The first step in the process is preparing your data for efficient retrieval. Documents are:

**Transformed** into nodes: Breaking documents into smaller, manageable pieces ensures better granularity and relevance during retrieval.

![alt_text](/posts/rag4.webp)

**Retrieval**

![alt_text](/posts/rag5.webp)

When a query is submitted, the system employs a hybrid search mechanism using **both dense and sparse embeddings** to ensure comprehensive retrieval.

- **Dense embeddings** provide contextually rich results by capturing nuanced semantic relationships.

- **Sparse embeddings** cater to high-dimensional search needs for broader coverage.

The results from these models are then fused using a **Reciprocal Rank Fusion (RRF)** strategy, which combines their strengths to prioritize relevance. This fusion balances semantic understanding with precise keyword matching, enhancing the system's ability to deliver accurate and contextually relevant responses to diverse user intents.

**Synthesizer**

The final stage of the pipeline is the synthesis of retrieved results into meaningful outputs.

![alt_text](/posts/rag6.webp)

The **synthesizer** transforms retrieved results into meaningful, query-specific outputs:

1. **Context Creation:** Combines retrieved documents into a structured context string.

2. **Prompt Generation:** Uses a tailored template to guide the AI assistant in crafting a response, ensuring clarity and relevance.

3. **LLM Processing:** This process passes the prompt to a language model (e.g., GPT-4o-mini) to generate a detailed response.

4. **Refinement:** A response synthesizer (e.g., TreeSummarize) ensures the output is coherent and concise.

5. **Delivery:** Provides actionable, query-aligned insights based on the retrieved data.

### Step-by-step guide to setting up RAG on DeployApps

And here comes DeployApps onto the battlefield.

For this setup, we needed a vector database. Our natural choice, considered the de-facto standard in the industry, was **QDrant**. While {{< external-link link="https://genezio.com/" >}}DeployApps{{< /external-link >}} currently integrates with PostgreSQL and MongoDB — excellent options that meet the needs of most solutions — we opted to stick with QDrant to maintain consistency with the RAG systems we’ve developed in the past. However, it’s worth noting that you can seamlessly integrate an external managed database with **DeployApps**, making it adaptable to a wide range of use cases without altering the core setup.

![alt_text](/posts/rag7.webp)

The system architecture consists of three main components:

1. **Web Client:** A user-friendly chat interface built with React and Next.js that serves as the entry point, enabling intuitive user interactions.

2. **Service Layer:** This combines generation, indexing, and retrieval functionalities within a single FastAPI service, suitable for proof of concept but recommended to be decoupled in more complex systems for flexibility and independent module evolution.

3. **Vector Database:** The backbone of the system, storing the vectors produced during the indexing process. This component ensures efficient retrieval of relevant data to support accurate and context-aware generation

By leveraging {{< external-link link="https://genezio.com/" >}}DeployApps's{{< /external-link >}} modularity, each major component of your system is deployed as a single function on the platform. Combined with **DeployApps’s out-of-the-box elastic scaling**, the system can seamlessly adapt to fluctuating user demands, whether you’re experiencing a surge in interactions or testing new features.

This robust, scalable architecture empowers teams to focus on building and innovating rather than being bogged down by infrastructure complexities. With DeployApps, you can accelerate development from concept to production while maintaining a clean and maintainable system architecture.

Here are all the steps required to spin up this infrastructure:

1. **Install DeployAppsn CLI**

```bash
npm install genezio -g
```

2. **Test on local**

This will start an local development environment, similar to sam local, for those who played with AWS Lambda.

```bash
genezio local
```

![alt_text](/posts/rag8.webp)

3. **Deploy on Cloud**

```bash
genezio deploy
```

And here you have it:

![alt_text](/posts/rag9.webp)

Your application will be hosted on a custom subdomain, such as https://your-app-name.app.genez.io.

From the **DeployApps** dashboard, you can seamlessly manage, test, update, and monitor your project, ensuring smooth operation and effortless maintenance.

**DeployApps** takes the headache out of application deployment, removing the complicated infrastructure setups that slow you down. No need to deal with tricky network configs, security groups, CDNs, or endless Infrastructure-as-Code (IaC) files. Instead, your team can focus on what really matters—building and improving your apps. It saves time, reduces stress, and frees up room for innovation. If speed, simplicity, and scalability are your priorities, **DeployApps**’s got you covered.

## Real-World Scenario

One of the best ways to use {{< external-link link="https://genezio.com/" >}}DeployApps's{{< /external-link >}} RAG deployment is by building a **Knowledge Intelligence Search Tool** — a smart system that turns internal or public data into a powerful, easy-to-use knowledge base.

Companies generate tons of information daily — internal documents, training manuals, reports, support tickets, and emails. But this data is often scattered across systems, making it hard for employees to find what they need. And let’s face it, traditional keyword searches often fail because they don’t understand context.

That’s where DeployApps shines. It helps companies create a smart search tool using **semantic search**. Employees can ask questions in plain language and get accurate, context-aware answers. No more wasting time digging through endless files.

**Benefits**

- **Efficiency:** Saves time by quickly surfacing needed information, reducing manual searches.

- **Improved decision-making:** Delivers timely, accurate insights for better strategic planning.

- **Scalability:** Adapts as new data is added, ensuring long-term value.

## Conclusion: Focus on Building, Not Infrastructure

If you’re looking to simplify deployments, accelerate your development process, and reduce the complexities of infrastructure management,

{{< external-link link="https://genezio.com/" >}}DeployApps{{< /external-link >}} is the ideal Function-as-a-Service (FaaS) platform for you. Designed with engineering teams, **DeployApps** enables rapid deployment of proofs-of-concept, scalable applications, and advanced RAG (Retrieval-Augmented Generation) systems with ease.

**Ready to get started?**
Explore the 🔗 {{< external-link link="https://github.com/mlvanguards/deploy-hybrid-rag-genezio" >}}deploy-hybrid-rag-genezio{{< /external-link >}} repository to access code samples, configuration files, and step-by-step guides to help you hit the ground running.

Discover how DeployApps’s features can transform your development workflow and simplify your deployments.
