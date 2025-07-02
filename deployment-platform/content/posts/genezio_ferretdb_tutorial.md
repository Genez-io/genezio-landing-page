---
title: "FerretDB + DeployApps: Use MongoDB Drivers with PostgreSQL"
date: 2024-10-01
tags:
  - Tutorials
author: Costin Sin
linkedIn: https://www.linkedin.com/in/costin-sin/
thumbnail: /images/ferretdb-genezio.webp
preview: Discover how you can use FerretDB inside DeployApps Functions as a proxy that understands the MongoDB wire protocol and translates the requests to SQL queries executed on a PostgreSQL database provided by DeployApps.
# meta data start
description: Learn how to set up FerretDB with DeployApps Functions and connect to a PostgreSQL database provided by DeployApps.
meta_og_url: "https://genezio.com/blog/use-ferretdb-with-genezio/"
meta_og_image: "https://genezio.com/images/ferretdb-genezio.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 14
url: /blog/use-ferretdb-with-genezio/
---

**FerretDB** is an **open-source alternative** to **MongoDB** that allows you to **use MongoDB drivers seamlessly** with a **PostgreSQL** as the database backend. It acts like a proxy that understands **the MongoDB wire protocol** and translates the requests to **SQL queries** that are executed on the **PostgreSQL** database.

This tutorial will guide you through setting up **FerretDB** with **DeployApps Functions** and connecting to a **PostgreSQL database** provided by **DeployApps**.

**_TL;DR_**

You’ll deploy FerretDB on DeployApps, connect it to a PostgreSQL database, and interact with it using MongoDB drivers—no code changes needed!

## Prerequisites

- A DeployApps account. Follow this link to [sign up](https://app.genez.io/auth/signup?utm_source=genezio&utm_medium=blog&utm_campaign=ferretdb).
- Access to the [FerretDB example repository](https://github.com/Genez-io/ferretdb-example)

It is important to **open the example code** in either **the browser** or a **code editor** because this tutorial will reference the code in the repository. The example is **ready to be deployed to DeployApps**, so no additional code changes from your side will be necessary.

## Deployment

There are two ways to deploy the FerretDB example:

- **Automatic deployment** \
  Deploy the code directly from browser with our [one-click deployment button](https://app.genez.io/start/deploy?repository=https://github.com/Genez-io/ferretdb-example&utm_source=genezio&utm_medium=blog&utm_campaign=ferretdb).

- **Manual deployment** \
  Clone the repository, install the genezio CLI and then run `genezio deploy` in the repository root.

  ```bash
  git clone https://github.com/Genez-io/ferretdb-example.git && cd ferretdb-example
  npm install -g genezio
  genezio deploy
  ```

## Project architecture explanation

The example contains a simple **DeployApps serverless function** that opens a **FerretDB proxy**, connects to the proxy using **MongoDB drivers**, inserts a new document into a collection, and queries the collection for all documents. The function returns **the list of documents** as a response.

### Packing the FerretDB executable alongside your functions

The FerretDB proxy is released as a single executable file build from Golang sources. At the moment of writing this article, the DeployApps serverless functions run on a Linux environment using an x86-64 architecture.

To pack the FerretDB executable alongside your functions, we have downloaded the latest `ferretdb-linux-amd64` binary from the [FerretDB releases page](https://github.com/FerretDB/FerretDB/releases) and placed it in the root of the example repository with the name `ferretdb`.

### Setting up the PostgreSQL database

We provision a PostgreSQL database through DeployApps using the database services configuration inside the `genezio.yaml` file. The database is created with the following configuration:

```yaml
services:
  databases:
    - name: my-postgres
      type: postgres-neon
```

We intentionally omit the `region` field of the database configuration and let the database be created in the same region as the project region. This way, we reduce the latency between the database and the functions.

### Starting the FerretDB proxy

The FerretDB proxy will be started only once per function instance as a separate process that listens on a local port. The proxy will forward the MongoDB requests to the PostgreSQL database. To start the proxy, the following code was added to the `ferret.mjs` file:

```js
import { exec } from "child_process";
import util from "util";
import path from "path";

/**
 * Start the FerretDB proxy in the background.
 */
function startFerretDB() {
  const execAsync = util.promisify(exec);

  console.log("Starting FerretDB...");

  execAsync(path.resolve("./ferretdb"), {
    cwd: "/tmp",
    env: {
      FERRETDB_POSTGRESQL_URL: process.env.FERRET_DATABASE_URL,
      FERRETDB_TELEMETRY: "disable",
      FERRETDB_LISTEN_ADDR: "127.0.0.1:27017"
    }
  }).catch((err) => {
    console.error(err);
  });
}

// Start the FerretDB proxy only once during the cold start of the function
startFerretDB();
```

By calling the `startFerretDB` function outside of the exported `handler` function, we make sure that the FerretDB process will only start once, during the cold start of the function. Subsequent requests will reuse the already running FerretDB process, so the time overhead of starting the proxy is minimized.

### Generating the MongoDB connection string from the PostgreSQL connection string

The MongoDB connection string needs to contain the username, the password, and the database name from the PostgreSQL connection string. The following function converts a PostgreSQL URL to a MongoDB URL using the FerretDB conventions:

```js
/**
 * Convert a PostgreSQL URL to a MongoDB URL using the FerretDB conventions.
 *
 * @param {string} postgresUrl The PostgreSQL URL to convert.
 * @returns {string} The MongoDB URL.
 */
function postgresUrlToMongoUrl(postgresUrl) {
  const [, user, password, , , database] = postgresUrl.match(
    /^postgresql:\/\/(.+):(.+)@(.+?)(:.+)?\/(.+?)(\?.*)?$/
  );

  return `mongodb://${user}:${password}@127.0.0.1/${database}?authMechanism=PLAIN`;
}
```

### Connecting to the FerretDB proxy using the generated MongoDB connection string

The PostgreSQL connection string is automatically added to the environment by DeployApps IaC. Because we named the database `my-postgres`, the connection string is available in the `MY_POSTGRES_DATABASE_URL` environment variable. The following code uses the `mongoose` library to connect to the MongoDB database using the generated connection string:

```js
import mongoose from "mongoose";

// Connect to the MongoDB database
mongoose.connect(postgresUrlToMongoUrl(process.env.MY_POSTGRES_DATABASE_URL));
```

### Create a Mongoose model for the MongoDB collection

It is important to define your Mongoose models outside of the exported `handler` function to avoid redefining them on each request. Redefining a Mongoose model will result in a runtime error.

```js
import mongoose from "mongoose";

// Define a Person model
let Person = mongoose.model("Person", { name: String, age: Number });

export const handler = async (_event) => {
  // Your function code that uses the Person model here
};
```

## Downsides of using this approach

- The FerretDB proxy runs as a separate process and **won’t restart automatically** if it crashes, requiring you to implement monitoring and restart mechanisms.
- Since the proxy runs inside the function instance, it’s **inaccessible externally**, preventing connections from local machines or other environments. This limits the use of database clients like **MongoDB Compass**, **DBeaver**, or **TablePlus** for database inspection.

## Benefits of Using FerretDB with PostgreSQL

While MongoDB is a powerful database, there are several reasons why developers might prefer FerretDB, especially when working with PostgreSQL:

- **Open-Source Flexibility**: FerretDB is fully open-source, avoiding the licensing restrictions tied to proprietary MongoDB versions.
- **Familiar MongoDB Ecosystem**: FerretDB allows you to keep using MongoDB drivers and tools, meaning existing codebases can be easily migrated with minimal changes.
- **PostgreSQL Stability**: FerretDB leverages PostgreSQL’s stability, reliability, and powerful relational database features like ACID compliance, mature tools, and excellent performance.
- **No Vendor Lock-In**: With FerretDB, you’re not tied to MongoDB-specific infrastructure, giving you greater flexibility. PostgreSQL is widely supported across platforms and cloud providers.
- **Cost Efficiency**: PostgreSQL’s open-source nature makes it cost-effective for long-term projects, and using FerretDB helps you benefit from MongoDB’s API without the associated costs.
- **Lower Latency in Some Setups**: By hosting both the application and database in the same region through DeployApps, you reduce latency, leading to faster query times and improved performance.

FerretDB offers the best of both worlds by combining the flexibility of MongoDB drivers with the power of PostgreSQL, making it a powerful option for teams that want the performance and reliability of relational databases without giving up MongoDB’s document model.

## Conclusion

With this setup, you can **run MongoDB** drivers on top of a **PostgreSQL backend** using **FerretDB** and **DeployApps Functions**—without any heavy lifting. This solution lets you combine the **scalability** of DeployApps with the **flexibility** of MongoDB drivers and **the power** of PostgreSQL.

If you have any questions or need help with the example code, feel free to reach out to us on the [DeployApps Discord server](https://discord.gg/uc9H5YKjXv).

Happy coding!
