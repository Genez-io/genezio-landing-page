---
title: How to Access Google Sheets Data Using a Service Account
date: 2024-10-14
tags:
  - Tutorials
author: Bogdan Ripa
linkedIn: https://www.linkedin.com/in/bogdanripa
thumbnail: /images/google-sheets.webp
preview: "Expose data stored in google sheets as APIs to be used in your DeployApps projects."
description: "Learn how to use Google Sheets APIs to create API endpoints. Follow our detailed guide."
meta_og_url: "https://genezio.com/blog/google-sheets-as-apis/"
meta_og_image: "https://genezio.com/images/google-sheets.webp"
customHeader: "White header"
customFooter: "White footer"
readTime: 30
url: /blog/google-sheets-as-apis
---

Accessing Google Sheets data programmatically can be essential for server-side applications that need to read or manipulate spreadsheet data without human interaction. Whether you're automating reports, synchronizing data, or managing inventory systems, accessing Google Sheets through a Service Account provides a secure and efficient solution for backend environments.

This tutorial will guide you through accessing a Google Sheet's data from DeployApps using a Service Account, which is ideal for server environments.

## Prerequisites

Before you start, ensure you have the following:

- A **DeployApps** account.
- A **Google Account**: Access to the Google Cloud Console.
- An **Existing Google Spreadsheet**: A Google Sheet that you want to access.

## Step-by-Step Guide to Access Google Sheets Data

We'll cover the following steps:

1. **Enable the Google Sheets API** in your Google Cloud project.
2. **Create a Service Account** and generate a key file.
3. **Share the Spreadsheet** with the Service Account email.
4. **Create a DeployApps project** starting from an existing template.
5. **Update the project** with your personal data and credentials.
6. **Test the project** to verify everything works.

## Step 1: Enable the Google Sheets API

To access Google Sheets programmatically, you first need to enable the Google Sheets API in your Google Cloud project.

1. **Go to the [Google Cloud Console](https://console.cloud.google.com/).**

2. **Create a New Project** (if you don't have one):

   - Click the project dropdown at the top of the page.
   - Click **New Project**.
   - Enter a project name (e.g., "Google Sheets Node.js Access").
   - Click **Create**.

3. **Select Your Project**:

   - Ensure your new project is selected in the project dropdown.

4. **Enable the Google Sheets API**:

   - Navigate to **APIs & Services** > **Dashboard**.
   - Click **Enable APIs and Services**.
   - Search for **Google Sheets API**.
   - Click on **Google Sheets API** and then click **Enable**.

   With the API enabled, your project can now interact with Google Sheets data programmatically, preparing for the next steps.

## Step 2: Create a Service Account and Generate a Key File

A Service Account allows server-side applications to authenticate without user interaction.

1. **Navigate to Service Accounts**:

   - Go to **APIs & Services** > **Credentials**.
   - Click on **Create Credentials** and select **Service Account**.

2. **Create a Service Account**:

   - **Service Account Name**: Enter a name (e.g., "sheets-access-account").
   - **Service Account ID**: This will auto-populate based on the name.
   - **Description**: Optional.
   - Click **Create and Continue**.

3. **Set Service Account Permissions**:

   - For this tutorial, you don't need to grant any specific roles.
   - Click **Continue**.

4. **Grant Users Access to This Service Account**:

   - Skip this step by clicking **Done**.

5. **Generate a JSON Key File**:

   - You should now see your service account listed.
   - Click on the **Service Account** you just created.
   - Navigate to the **Keys** tab.
   - Click **Add Key** > **Create New Key**.
   - Choose **JSON** as the key type.
   - Click **Create**.
   - A JSON key file will be downloaded to your computer (e.g., `service-account-key.json`).

6. **Secure the Key File**:

**Important**: Do not commit this file to version control. It's sensitive information.

## Step 3: Share the Spreadsheet with the Service Account Email

The Service Account acts like a virtual user. You need to share the spreadsheet with the Service Account's email address.

1. **Get the Service Account Email**:

   - In the **Details** tab of your Service Account, locate the **Email** field.
   - It will look like: `your-service-account-name@your-project-id.iam.gserviceaccount.com`.

2. **Share the Spreadsheet**:

   - Open your Google Sheet in a browser.
   - Click the **Share** button.
   - Enter the Service Account email.
   - Set the permission to **Editor** (or **Viewer** if you only need read access).
   - Click **Send**.

## Step 4: Create a new DeployApps project

DeployApps simplifies server-side development by providing pre-built templates that can quickly be deployed to work with various services, including Google Sheets. This makes it a great option for developers looking to build scalable, serverless applications without dealing with complex configurations.

We have prepared a couple of templates for you, depending what technology you want to use. Pick one of them, then click on the "Deploy now" button from one of the following Github repositories:

- [Express.js - Google Spreadsheet App](https://github.com/Genez-io/google-sheets-as-apis-expressjs?tab=readme-ov-file#deploy)
- [DeployApps Typescript - Google Spreadsheet App](https://github.com/Genez-io/google-sheets-as-apis-typesafe?tab=readme-ov-file#deploy)

Pro tip: With DeployApps’s serverless infrastructure, you don’t need to worry about maintaining servers or scaling your backend, making it perfect for projects where you need to scale quickly.

## Step 5: Configure your project to access the spreadsheet data

With the project deployed, go in the **Edit Code** interface in the browser and open the `server/service-account-key.json` file, and paste the contents of the `service-account-key.json` file you downloaded at Step 2.5.

You will now need your Spreadsheet ID. Find it by:

- Open your Google Sheet.
- The URL will look like `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit#gid=0`.
- Copy the `SPREADSHEET_ID` part from the URL.

Open the `server/backend.ts` file in the **Edit Code** interface and set the `SPREADSHEET_ID` variable to your Spreadsheet ID that you just copied.

## Step 6: Test your project

You can now re-deploy your project from the same **Edit Code** interface. Once the project is deployed, click on the **View App URLs** button to see the URL of your application. Open it to see your spreadsheet data in your app.

## Step 7: See how this works

Explore the `server/` and the `client/` folders to see how the data is being read and exposed in the application.

## Conclusion

By following this guide, you can programmatically access Google Sheets data through DeployApps using a Service Account, a secure and scalable solution for server-side applications. Whether you’re working with Node.js, Express.js, or Typescript, these steps provide a straightforward way to connect your app to Google Sheets.

## References

- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
- [Google APIs Node.js Client](https://github.com/googleapis/google-api-nodejs-client)
- [Service Accounts in Google Cloud](https://cloud.google.com/iam/docs/service-accounts)
