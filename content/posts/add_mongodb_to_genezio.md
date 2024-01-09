---
title: How to add a MongoDB to your genezio project
date: 2023-07-06
tags:
  - Tutorials
author: Radu Dumitrescu
linkedIn: https://www.linkedin.com/in/radu-andrei-dumitrescu/
thumbnail: /images/genezio_mongodb.webp

preview: In this tutorial, I will show you the steps of integrating a Mongo database into your genezio project.
# meta data start
description: "In this tutorial, I will show you the steps of integrating a Mongo database into your genezio Getting Started project."

meta_og_url: "https://genez.io/blog/how-to-add-a-mongodb-to-your-genezio-project"
meta_og_image: "https://genez.io/images/genezio_mongodb.webp"
# meta data end
---

In this tutorial, I will show you the steps of integrating a Mongo database into your genezio {{< external-link link="https://github.com/Genez-io/genezio-examples/tree/master/typescript/getting-started" >}}Getting Started project{{< /external-link >}}
.

Following this tutorial, you will be able to:

- Create a free-tier MongoDB Atlas cluster
- Connect to the MongoDB cluster using a MongoDB client
- Integrate the Mongo database into your project using `mongoose`

Any time you get stuck or have questions, please contact me on {{< external-link link="https://discord.gg/XmpKD9ytxS" >}}Discord{{< /external-link >}}
 or write me an email at radu@genez.io. I am more than happy to help you 😄

## **Contents**

- Introduction

  - Why MongoDB Atlas?

- Hands-on Tutorial

  - Create a MongoDB Atlas account
  - Create a free cluster
  - Integrate your newly created cluster into the project
  - Create a new DB connection into a class

- Check your DB with MongoDB Compass

- Insights

## **Pre-requisites**

- Have `npm` installed on your machine
- Have `mongoose` installed on your machine
- Create a free genezio account {{< external-link link="https://genez.io" >}}here{{< /external-link >}}

- Have `genezio` installed on your machine - you can install it with `npm install genezio -g`

## **Introduction**

### **Why MongoDB Atlas?**

As a cloud database service, MongoDB Atlas offers seamless scalability, high availability, and robust security. You can focus on building innovative applications while leaving the complexities of database management behind thanks to its intuitive interface and seamless integration with major cloud providers.

## **Hands-on Tutorial**

### **Create a MongoDB Atlas account**

Go to {{< external-link link="https://www.mongodb.com/cloud/atlas/register" >}}MongoDB Cloud Atlas{{< /external-link >}}
 and create an account. Personally, I recommend creating an account using Google Sign up.

### **Create a free cluster**

After you create your account, you will get to this wizard where you can create your cluster:

![alt_text](/posts/add-mongo-to-genezio1.webp)

Here you have the following configurations:

1. Select the free tier **M0**
2. Select the cloud provider - we recommend choosing **AWS**
3. Select the region of the cloud provider - this should be as close to you and your customers as possible
4. Give your cluster a name

Click the ‘Create’ button.

After, you have to create a user with a strong password. Make sure to store it somewhere safe as we will need it later on.

![alt_text](/posts/add-mongo-to-genezio2.webp)

Fill in the required information and click ‘Create User’.

Next, add an IP address to the whitelist. For testing purposes, you can add `0.0.0.0` - this means IPs are allowed. I highly discourage using this in a production environment.

Now click on ‘Add Entry’.

![alt_text](/posts/add-mongo-to-genezio3.webp)

You should now see your dashboard. Click on ‘Connect’ in the cluster.

![alt_text](/posts/add-mongo-to-genezio4.webp)

A pop-up with the MongoDB connection string will appear. Replace `<password>` with your password from the previous step and copy it.

### **Integrate your newly created cluster into the project**

Now you can go to your {{< external-link link="https://github.com/Genez-io/genezio-examples/tree/master/typescript/getting-started" >}}Getting Started project{{< /external-link >}}
 and open an IDE of your choice. I recommend VS Code.

In the ‘server’ folder, create a `.env` file and add a line with the `MONGO_DB_URI=<your_connection_string>` value. You can then use it all over your code using `process.env.MONGO_DB_URI`.

### **Create a new DB connection into a class**

Now that we have the connection string, you can integrate MongoDB into your classes.

First, you have to import `mongoose`:

```javascript
import mongoose from "mongoose";

export class TutorialClass {
  constructor() {
    this.#connect();
  }

  /**
   * Private method used to connect to the DB.
   */
  #connect() {
    mongoose.connect(process.env.MONGO_DB_URI).catch((error) => {
      console.log("Error connecting to the DB", error);
    });
  }
}
```

Into the class’s constructor, you need to establish the connection with the database. I recommend doing this in a separate private method as in the code shown above.

If you want your code to look cleaner, you can write the connection method in another file and just import and call it in your class.

After that, you can use all the functions provided by mongoose all over the functions from your class.

### **Check your DB with MongoDB Compass**

MongoDB Compass is one of the most powerful database clients for MongoDB. You can download it from {{< external-link link="https://www.mongodb.com/try/download/compass" >}}here{{< /external-link >}}
.

I highly recommend using it for GUI queries to your database, and also for debugging your application.

After you install it, you can simply open it, add your MongoDB Connection String, and then you will have full admin access to your database.

Be careful when handling a database that is used in a production environment because you can delete things from there.

## **Insights**

### **Database connection error**

You might encounter an issue when connecting to your database. One of the main reasons is that your IP might not be allowed to access the cluster. To change this, go to your cluster configuration, and on the tab ‘Network Access’ add your IP or `0.0.0.0` to give full IP access to the database.

### **Serverless database access**

With MongoDB Atlas, there are 2 main ways to query the database.

#### **Persistent Connection**

This is the most conventional method of establishing a connection to a database, but [IT] encounters certain issues in a serverless environment, particularly when the initial connection consumes a significant amount of time.

#### **Data API**

{{< external-link link="https://www.mongodb.com/docs/atlas/api/data-api/" >}}Mongo DB Atlas Data API{{< /external-link >}}
 offers a solution where you can directly access the database through an API, eliminating the requirement of establishing an initial connection and reducing serverless cold-start significantly.

&#x1F973; Congratulations on acquiring your own database that you can use to work on your projects!
