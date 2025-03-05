---
title: "Build your First Flask Web App in 10 Minutes: Step-by-step"
date: 2025-02-24
tags:
  - Tutorials
author: Cristi Miloiu
linkedIn: https://www.linkedin.com/in/cristi-miloiu-3a174a267/
thumbnail: /images/flask.webp
preview: Flask is one of the most popular Python web frameworks, known for its simplicity and flexibility. Whether you're a beginner or an experienced developer, Flask makes web development straightforward.
# meta data start
description: Learn how to build and deploy your first Flask web app in just 10 minutes. Follow this step-by-step tutorial for beginners and get your project online fast.
meta_og_url: "https://genezio.com/blog/getting-started-flask-web-app/"
meta_og_image: "https://genezio.com/images/flask.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 5
url: /blog/getting-started-flask-web-app/
---

## Introduction

Flask is one of the most popular Python web frameworks, known for its simplicity and flexibility. Whether you're a beginner or an experienced developer, Flask makes web development straightforward.

In this tutorial, you’ll learn how to:

- Set up a Python environment for Flask.
- Install Flask and create your first web route.
- Run your app locally.
- Deploy your Flask web app to the cloud.

By the end of this guide, you’ll have a fully functional web application running live online. 🚀

**Want to skip the setup and jump straight to the code? {{< external-link link="https://app.genez.io/auth/signup?redirect=flask-getting-started" >}}Click here{{< /external-link >}}.**

## Step-by-Step Guide

Before you begin, choose one of the following deployment options, both equally visible:

1. **Deploy using the dashboard** – Start with a template created by our team. {{< external-link link="https://app.genez.io/auth/signup?redirect=flask-getting-started" >}}Deploy the template{{< /external-link >}}.
2. **Deploy using your CLI** – Follow the step-by-step guide below for manual deployment.

Before you begin, make sure you have Python and pip installed on your machine.

### Step 1: Install Flask and Required Libraries

First, let’s set up a virtual environment and install the necessary dependencies:

```python
python3 -m venv venv
source venv/bin/activate # On Windows: venv\Scripts\activate
pip3 install flask
pip3 freeze > requirements.txt
```

**Explanation:**

`venv` creates an isolated Python environment for the project.
`Flask` is the web framework.
`requirements.txt` ensures consistent dependencies when deploying the app.

### Step 2: Create Your Flask Application

Create a file named `app.py` and add the following code:

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True)
```

**Explanation:**

- `Flask` initializes the web application.
- `@app.route('/')` defines the route for the homepage.
- `app.run(debug=True)` starts the development server with debugging enabled.

### Step 3: Run Your Flask Application

Run the app locally:

```bash
python app.py
```

Open a browser and navigate to http://127.0.0.1:5000.

You should see "Hello, World!" displayed.

## Deployment Guide

### Step 1: Install genezio CLI

Run the following command:

```bash
npm install -g genezio
```

### Step 2: Create the configuration file

Run the following command:

```bash
genezio analyze
```

Explanation:

- Genezio scans your project to create a configuration file, genezio.yaml.
- During this process, you’ll be prompted to enter the project name and region in the terminal.

### Step 3: Test Locally

Run your app locally using Genezio:

```bash
genezio local
```

This command runs your app in a local development environment.

### Step 4: Deploy your app with Genezio

Finally, deploy your app to the cloud with a single command:

```bash
genezio deploy
```

Your app will be live at a custom subdomain, such as
`https://your-app-name.app.genez.io`.

You can continue to manage, test, update and monitor your project from the genezio dashboard.

## Conclusion

You’ve successfully built and deployed your first Flask web app in just 10 minutes.

**Join Our Community!**

Need help or want to connect with fellow developers? Join us on the {{< external-link link="https://discord.com/invite/uc9H5YKjXv" >}}Genezio Discord server{{< /external-link >}}.

For questions, feel free to contact me at cristi@genezio.com.

The code for this tutorial is open-source and available on {{< external-link link="https://github.com/Genez-io/flask-getting-started" >}}GitHub{{< /external-link >}}.

Happy coding! 🚀
