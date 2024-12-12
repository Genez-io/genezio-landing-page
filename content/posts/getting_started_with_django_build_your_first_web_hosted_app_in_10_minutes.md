---
title: "Getting Started with Django: Build Your First Web Hosted App in 10 Minutes"
date: 2024-12-12
tags:
  - Tutorials
author: Cristi Miloiu
linkedIn: https://www.linkedin.com/in/cristi-miloiu-3a174a267/
thumbnail: /images/django-genezio.webp
preview: Hi, I’m Cristi Miloiu, and in this tutorial, I’ll guide you through building your first web application using Django, one of the most popular Python web frameworks. By the end of this article, you’ll have a simple, fully functional web app running on your local machine.
# meta data start
description: Learn how to build your first web app with Django in just 10 minutes. Follow this beginner-friendly guide to kickstart your journey into web development.
meta_og_url: "https://genezio.com/blog/getting-started-django-web-app/"
meta_og_image: "https://genezio.com/images/django-genezio.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 12
url: /blog/getting-started-django-web-app/
---

## Introduction

Hi, I’m Cristi Miloiu, and in this tutorial, I’ll guide you through building your first web application using Django, one of the most popular Python web frameworks. By the end of this article, you’ll have a simple, fully functional web app running on your local machine.

## What is Django?

Django is a high-level Python web framework that simplifies web development by automating complex backend tasks. It enables developers to focus on building features instead of reinventing the wheel. With built-in tools like an authentication system, database integration, and support for CRUD operations, Django is designed to promote reusability and follows the DRY (Don’t Repeat Yourself) principle.

Built on an MVT (Model-View-Template) architecture, Django separates concerns such as data, logic, and user interface, ensuring clean, maintainable code. It's particularly suited for database-driven websites and is known for its ability to scale as your project grows.

Django is an excellent choice for beginners due to its robust features and ease of use. Ready? Let’s get started!

Want to skip the setup and jump straight to the code? {{< external-link link="https://app.genez.io/auth/signup?redirect=django-getting-started" >}}click here{{< /external-link >}}.

## What You’ll Learn

1. Setting up a Python environment.
2. Installing Django and creating your first project and app.
3. Running your app locally.
4. Deploying your app to the cloud.

## Step-by-Step Guide

Before you begin, make sure you have `Python` and `pip` installed on your machine.

### Step 1: Create Your Project Directory

Run the following commands to initialize a new project directory:

```bash
mkdir django-app
cd django-app
```

### Step 2: Install Django and Required Libraries

First, let’s set up a virtual environment and install the necessary dependencies:

```bash
python3 -m venv venv
source venv/bin/activate # On Windows: venv\Scripts\activate
pip3 install Django
pip3 freeze > requirements.txt
```

**Explanation:**

- `venv` creates an isolated Python environment for the project.
- `requirements.txt` ensures consistent dependencies when deploying the app.

### Step 3: Create Your Django Project

Initialize a new Django project:

```bash
django-admin startproject myproject .
```

This will create the `myproject` directory with all the necessary configuration files.

### Step 4: Create a Django App

Create a new app inside your project:

```bash
python manage.py startapp myapp
```

### Step 5: Configure URLs

Update the `myproject/urls.py` file to include your app's URLs:

```python
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('myapp.urls')),
]
```

Next, create a `myapp/urls.py` file

```python
from django.urls import path
from .views import index

urlpatterns = [
    path('', index, name='index'),
]
```

### Step 6: Create Your First View

Add the following code to the `myapp/views.py` file.

```python
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, World!")
```

### Step 7: Run the Development Server

Run the server using the following command:

```bash
python manage.py runserver
```

Open a browser and navigate to `http://localhost:8000`. You should see "Hello, World!" displayed on the screen.

## Deployment Guide

### Step 1: Configure Allowed Hosts

Add the Genezio domain .genez.io to the ALLOWED_HOSTS list in your settings.py file:

```python
ALLOWED_HOSTS = [
   '127.0.0.1',
   '.genez.io',
   'localhost',
]
```

### Step 2: Install the Genezio CLI

Install Genezio for deployment:

```bash
npm install -g genezio
```

### Step 3: Analyze Your Project

Run the following command to generate the genezio.yaml configuration file:

```bash
genezio analyze
```

You’ll be prompted to provide the project name and region.

### Step 4: Test Locally

Test your app locally with Genezio:

```bash
genezio local
```

### Step 5: Deploy Your App

Deploy your app to the cloud with a single command:

```bash
genezio deploy
```

Your app will be live at a custom subdomain, such as `https://your-app-name.app.genez.io`.

## Known limitations​

Genezio does not support SQLite databases, because SQLite is not suitable for serverless applications. You need to use a different database like PostgreSQL or MongoDB. You can create it at this {{< external-link link="https://app.genez.io/databases" >}}link{{< /external-link >}} in the Genezio dashboard.

## Conclusion

Congratulations! 🎉 You’ve built and deployed your first web app using Django in just 10 minutes.

If you have any questions or feedback, feel free to reach out to me at cristi@genezio.com. The codebase for this tutorial is open-source and available on {{< external-link link="https://github.com/Genez-io/django-getting-started" >}}GitHub{{< /external-link >}}.

Happy coding! 🚀
