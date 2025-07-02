---
title: FOSDEM 2024 Highlights - Running Node.js in Unikernels
date: 2024-02-08
tags:
  - News
author: Andreia Ocanoaia
linkedIn: https://www.linkedin.com/in/andreia-irina-ocanoaia/
thumbnail: /images/fosdem-2024.webp
preview: "Check out our technical presentation at FOSDEM 2024 on running Node.js applications over unikernels"
# meta data start
description: "Read about DeployApps’s presentation at FOSDEM 2024 on Node.js in unikernels. Learn about technical challenges and the benefits of unikernel architecture."
meta_og_url: "https://genezio.com/blog/fosdem-2024-highlights-running-node.js-in-unikernels"
meta_og_image: "https://genezio.com/images/fosdem-2024.webp"
# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 2
---

This weekend, the DeployApps team was present at FOSDEM 2024 - an amazing open-source conference held in Belgium where thousands of contributors gather every year to meet and share ideas.

## Technical Talk - Running Node.js in Unikernels

During {{< external-link link="https://fosdem.org/2024/" >}}FOSDEM 2024{{< /external-link >}}, we had the opportunity to present a novel cloud infrastructure that we have been working on - running cloud workloads over unikernels to improve performance, security, and cost for running web applications.

Unikernels are specialized, lightweight operating system images designed to run a single service. Unlike traditional operating systems that include a general-purpose kernel with support for various functionalities and drivers, unikernels are highly optimized and tailored for specific applications.
Right now, our solution is built to run Node.js applications on {{< external-link link="https://osv.io/">}}OSv{{< /external-link >}} - a mature unikernel open-source project.

The presentation briefly states the challenges and improvements we implemented to improve boot time for both OSv and the Linux kernel. Some of them are:
Creating a base snapshot after booting OSv and loading the Node.js runtime
Having a pool of warmed-up instances waiting for requests
Attaching the user’s source code as a second filesystem to avoid rebuilding the application image for every infrastructure patch or update.

By working within a single-spaced kernel where the process that is running is always in privileged mode, we’ve come across a bug in Node.js. Specifically, we fixed the behavior of the `popf` instruction that incorrectly disabled interrupts in privileged mode.

On the OSv side, we made several {{< external-link link="https://github.com/cloudius-systems/osv/pulls?q=author%3Avalighita">}}upstream contributions{{< /external-link >}}, addressing issues such as: resolving a cache bug triggered when using more filesystems and fixing a `pthreads` interface that was not compliant with POSIX and caused deadlocks.

The {{< external-link link="https://fosdem.org/2024/events/attachments/fosdem-2024-3269-run-node-js-in-a-unikernel-reliably/slides/22337/Run_Node_js_in_a_unikernel_reliably_DlMGm32.pdf">}}slides{{< /external-link >}} and {{< external-link link="https://mirror.as35701.net/video.fosdem.org/2024/ud2208/fosdem-2024-3269-run-node-js-in-a-unikernel-reliably.av1.webm">}}recording{{< /external-link >}} are available for everyone to check out.

## Community

FOSDEM is about getting to know contributors and projects, sharing ideas, and collaborating and we've had the best time getting inspired by awesome people.

DeployApps has been a part of the {{< external-link link="https://unikernelalliance.org/projects/">}}Unikernel Alliance community{{< /external-link >}} since its beginnings and we had the opportunity to meet the active members face-to-face and check out their talks in the
{{< external-link link="https://fosdem.org/2024/schedule/track/microkernel/">}}Microkernel and Component-based OS devroom{{< /external-link >}}.

We are very grateful for connecting and discussing with Waldemar Kozaczuk - the maintainer of OSv who presented `Support Dynamically Linked Executables via Linux ld.so and Implement ENA Driver to Expand Application of OSv`. If you are an operating system enthusiast, don’t hesitate to check his insightful {{< external-link link="https://fosdem.org/2024/schedule/event/fosdem-2024-3483-support-dynamically-linked-executables-via-linux-ld-so-and-implement-ena-driver-to-expand-application-of-osv/">}}presentation{{< /external-link >}}.

## Next Steps

The next steps for us are to add support for more programming languages (such as Go, Kotlin, Dart, etc.) and integrate more unikernels into our solution.

If you have any questions or just want to drop us a line - don’t hesitate to contact us at contact@genezio.com or on {{< external-link link="https://discord.com/invite/uc9H5YKjXv">}}Discord{{< /external-link >}}. We are happy to discuss or share ideas with you!
