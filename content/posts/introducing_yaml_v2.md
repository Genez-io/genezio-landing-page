---
title: Introducing a new configuration file for your projects
date: 2024-03-20
tags:
  - News
author: Costin Sin
linkedIn: https://www.linkedin.com/in/costin-sin/
thumbnail: /images/introducing_yaml_v2.webp
preview: Check out why we decide to revamp our YAML configuration format and what changes you should expect.
# meta data start
description: "Genezio introduces an updated YAML configuration file format. Discover how to migrate and set up your projects with our detailed guide."
meta_og_url: "https://genezio.com/blog/updated-config-file/"
meta_og_image: "https://genezio.com/images/introducing_yaml_v2.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 5
url: /blog/updated-config-file/
---

Greetings to all! We're thrilled to share our inaugural major release with you. This significant update brings with it some changes that may affect existing projects. You can find more details about these changes and how to update your projects {{< external-link link="https://genezio.com/docs/learn-more/upgrading-to-v1" >}}here{{< /external-link >}}.

A notable change in this release is the modification of our YAML configuration format.

## The Reason

We've been listening to your feedback and it became clear that the previous YAML format could be a bit perplexing. It lacked distinct separation between settings for backend, frontend, and upcoming (hint hint) database deployments. We believe our revamped design will simplify deployment settings for both current and future users.

Don’t worry, we’ll update existing projects semi-automatically. To aid in your transition, we've incorporated a tool in our CLI that will assist in migrating your configuration. While we've aimed to make the process as smooth as possible, the new format does contain more details than the old one, so the transition might not be flawless. We recommend checking the configuration file after using the tool to ensure everything is in order.

## The New Format

To give you a taste of the new format, here's a simple example that decales a project with a backend written in Go and a frontend written in TypeScript.

The backend contains two classes, located in `users.go` and `cron.go`, and the frontend is located in the `client` directory. The `SendEmail` method from the `cron.go` class is set to be deployed as a cron job that runs at 12:00 PM. The TypeScript SDK will be generated out of the deployed Go classes, and will be accessible in the `client` frontend.

```yaml
# The name of the project
name: my-project
# The region where the project will be deployed
region: us-east-1
# The version of the YAML configuration. Required since YAML v2
yamlVersion: 2
# The backend settings
backend:
  # Where the code is located
  path: server
  # Language options
  language:
    name: go
  # The classes that will be deployed
  classes:
    # Deploys the "exported genezio class" found in `server/users.go`
    - path: users.go
    # Deploys the "exported genezio class" found in `server/cron.go`
    - path: cron.go
      methods:
        # Sets the `SendEmail` method to be deployed as a cron job that runs at 12:00 PM
        - name: SendEmail
          type: cron
          cronString: 0 12 * * *
# The frontend settings
frontend:
  # Where the code is located
  path: client
  # The directory that will be deployed. Must contain an `index.html` file.
  publish: dist # resolves to `client/dist`
  # Settings for the SDK
  sdk:
    # A TypeScript SDK will be generated out of the deployed Go classes
    language: ts
```

## Conclusion

We hope you're as excited about this change as we are. We believe the new YAML format will make it easier for you to deploy your projects. We're looking forward to hearing your thoughts and feedback on the new format. If you have any questions or need assistance, please don't hesitate to reach out to us at [contact@genez.io](mailto:contact@genez.io)
