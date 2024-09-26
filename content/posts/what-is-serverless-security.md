---
title: "What is Serverless Security?"
date: 2024-08-19
tags:
  - Learning
author: Luis Minvielle
linkedIn: https://www.linkedin.com/in/luisminv/
thumbnail: /images/what_is_serverless_security.webp
preview: "Security in the cloud is still a headache for CTOs and solopreneurs alike. Almost 60% of organisations that detect a cyberattack respond to it only after the damage has already been done."
description: "Serverless security is a term to describe the implemention of a layer of security within the serverless application to protect the code from cyberattacks and bad actors."
meta_og_url: "https://genezio.com/blog/serverless-security/"
meta_og_image: "https://genez.io/images/what_is_serverless_security.webp"
customHeader: "White header"
customFooter: "White footer"
readTime: 10
url: /serverless-security/
---

Security in the cloud is still a headache for CTOs and solopreneurs alike. Almost 60% of organisations that detect a cyberattack respond to it only {{< external-link link="https://www.kaspersky.com/about/press-releases/2019_more-than-50-of-incident-response-requests-occur-after-damage" >}} after the damage{{< /external-link >}} has already been done. And damage can be irreversible. An attack or a mishandled security update can bring down a web app and derail a SaaS’ business model, which results in lost revenue, not to mention the {{< external-link link="https://www.wsj.com/livecoverage/stock-market-today-dow-sp500-nasdaq-live-07-19-2024/card/mVZUhTlDpQdDsx6NYdKP" >}}reputational damage{{< /external-link >}} or the {{< external-link link="https://www.axios.com/2024/08/06/crowdstrike-lawsuit-travel-disruption-outage" >}}potential{{< /external-link >}} lawsuits. Also, smaller companies might not have the budget to hire a full security team — which is separate from an IT team — to make sure their app is not torn down by cyberattackers. Outsourcing security, then, is a relief to SaaS companies, entrepreneurs, and big businesses alike.

Serverless security can be a catch-all solution to these struggles. Since serverless providers take care of infrastructure, server management, privacy and security, they can aid solopreneurs that can’t wrap their head around potential attacks, or that know they can’t handle the security side of things in an information security ecosystem that {{< external-link link="https://blogs.blackberry.com/en/2023/05/new-malware-born-every-minute" >}}faces new threats{{< /external-link >}} daily.

There are other ways to boost security in serverless models, such as with type safety. A typesafe programming model refers to a feature in the programming language that prevents type errors or unauthorised memory access, which could have {{< external-link link="https://twitter.com/Perpetualmaniac/status/1814376668095754753" >}}spared CrowdStrike and their clients{{< /external-link >}} from a bit of grief and more. If the serverless platform includes a typesafe feature and privacy guidelines, **developers, solopreneurs, and SaaS businesses** alike might be able to head-on deal with these complex, yet inevitable, issues.

## What is serverless security?

Serverless security refers to the measures that serverless applications take to stay sure that they are protected from cyberattacks and potential vulnerabilities. Contrary to typical monolith deployments, serverless security measures focus more on the code than on the endpoint or perimeter.

Traditionally, app security was centred on protecting servers and networks. Firewalls, intrusion detection systems, and other tools were used to guard against attacks on the perimeter or the endpoint. So, if serverless applications indeed lack traditional servers (hint: it’s more of a play on words than a real thing), then traditional security methods don't work as well. Even if this is disputable, it’s also a good reminder to explain how good serverless security works. When it comes to serverless security, the endpoint, the perimeter, and the privacy are concerns the provider handles. So the developers should just focus on **strong code security**.

In its simplest form, serverless security is about building security into the application from the start, rather than relying on external protections. That’s why a typesafe environment is so useful to enforce security into a serverless deployment.

### Serverless application security

It’s widespread that the weakest security link is the human link, and developing {{< external-link link="https://scribesecurity.com/blog/dont-be-the-weakest-link-the-role-of-developers-in-securing-the-software-supply-chain/" >}}software without security best practices{{< /external-link >}} comes closely after. Serverless application security refers to the layer of security that the developer using serverless actively participates in, and that should not hinge on what the provider offers in terms of security. For example, if the developer shares their credentials over the internet, or if the app is not safely typed (that the programming environment won’t accept if it has mistakes that could lead to security flaws or to crashes), then most of the serverless security advantages become meaningless.

### Serverless framework security

Serverless frameworks are platforms that are used to build and deploy serverless applications. They make it easier for full-stack developers to deploy code with cloud providers. Genezio, {{< external-link link="https://github.com/sst/sst" >}}SST{{< /external-link >}}, or {{< external-link link="https://github.com/hashicorp/terraform" >}}Terraform{{< /external-link >}} are all well-established examples of serverless frameworks. Serverless framework security refers to the measures these frameworks take to protect code or apps.

### Side with serverless frameworks that have addressed privacy

As we reported before, many companies are concerned with their data (or their customer data) and its safety. Some serverless frameworks have already taken measures to protect privacy and store information centrally. Some even allow developers or entrepreneurs to connect the newly-built serverless app with their existing databases. In any case, some providers also have functions that help in setting up an {{< external-link link="https://genezio.com/docs/features/databases/" >}}on-demand database{{< /external-link >}} in minutes.

So… when choosing a trusted partner to run a serverless application, developers should first make sure their provider checks certain security boxes, like a concern for privacy, an updated security stack, and compliance with measures like GDPR. If the framework also supports typesafe development, then that’s a winner. Security is not just about setting up an antivirus or {{< external-link link="https://www.washingtonpost.com/business/2024/07/24/crowdstrike-microsoft-crash-bug-report/" >}}rolling out an update{{< /external-link >}} on a Friday morning.

## How does serverless improve security? Why is serverless secure?

Serverless security focuses on three main points: making sure the code is safe, implementing tight access controls, and setting up runtime protection. Let's look at each one with a number of scenarios:

1. Type safety

Serverless programming puts a strong emphasis on code integrity. This includes reviewing both the code itself and the {{< external-link link="https://www.ibm.com/topics/infrastructure-as-code" >}}Infrastructure-as-Code{{< /external-link >}} templates. Certain providers’ emphasis on type safety comes because building apps on typesafe environments detects potential security issues like common coding errors early in development.

2. Access and permissions

Serverless computing's architecture — which breaks down applications into small, isolated functions — allows for granular security controls. Using the {{< external-link link="https://www.cyberark.com/what-is/least-privilege/" >}}principle of least privilege{{< /external-link >}} (PoLP), functions only need the minimum permissions to do their job. For example, an e-commerce payment processing function in a serverless platform might only need access to a specific database table holding order details, not the entire customer database. This granular control, easily configurable within the platform, downplays the attack surface and narrows the potential impact of a breach.

3. Runtime protection

Serverless frameworks usually feature {{< external-link link="https://www.sciencedirect.com/topics/computer-science/runtime-protection#:~:text=Runtime%20protection%20is%20an%20effective,code%20changes%20are%20not%20possible.&text=Web%20application%20firewalls%20can%20provide,SQL%20injection%20when%20properly%20tuned." >}}runtime protection mechanisms{{< /external-link >}}. This makes it significantly harder for attackers to exploit vulnerabilities like {{< external-link link="https://www.sciencedirect.com/topics/computer-science/runtime-protection#:~:text=Runtime%20protection%20is%20an%20effective,code%20changes%20are%20not%20possible.&text=Web%20application%20firewalls%20can%20provide,SQL%20injection%20when%20properly%20tuned." >}}SQL injection{{< /external-link >}} or {{< external-link link="https://portswigger.net/web-security/cross-site-scripting#:~:text=Cross%2Dsite%20scripting%20(also%20known,different%20websites%20from%20each%20other." >}}cross-site scripting{{< /external-link >}}. Just keep in mind — not all serverless frameworks feature this protection.

![alt_text](/posts/serverless_security1.webp)

Serverless environments also allow for always-on {{< external-link link="https://aws.plainenglish.io/serverless-monitoring-best-practices-fbcf14e3b624" >}}function behaviour monitoring{{< /external-link >}}. Keeping track of things like how long it takes to do something and how many resources are being used can help find and address problems that might indicate a cyberattack. Some providers have built-in monitoring tools that show how functions are working, but that’s more on the business side, since they’ll be the ones acting on a threat if that were the case for strange behaviour.

In any case, the level of security will depend on the provider you choose. It’s best to stock up on a serverless platform that can take care of security with regular updates. Better if they also follow industry conventions like {{< external-link link="https://gdpr.eu/" >}}GDPR{{< /external-link >}} and {{< external-link link="https://secureframe.com/hub/soc-2/what-is-soc-2" >}}SOC 2{{< /external-link >}}.

## What are the common serverless security threats?

Serverless computing makes security a lot simpler because developers don't have to worry about protecting servers and network infrastructure. Still, since developers need to pick out their best framework, they should know about the typical threats. Let's look at some of them:

1. Event data injection

Event data injection is one of the biggest concerns for serverless computing. Exploits are carried out when unsafe data is sent directly to a program, which can alter code execution or data manipulation. Serverless systems make this risk worse because they can be triggered by many factors, like changes in cloud storage, databases, or even code updates. {{< external-link link="https://genezio.com/blog/web3-authentication-add-metamask-login-to-your-app/" >}}Strong auth{{< /external-link >}} and type safety don’t directly block data injection, but they play a part in downplaying it.

2. Over-privileged functions

Another big risk is when serverless functions are given excessive permissions. Even though it’s possible to control access very tightly, many companies don’t do this well. If a function with too much power is attacked, it can access important data or resources, further beyond its intended purpose. And someone with that kind of access could exploit their privilege. When sticking to a serverless framework, it’d be better if they’re niche so that they don’t get bogged down in the mistakes of big-data providers and hand out excess privileges to their out-of-the-box functions.

3. “Poisoning the well”

Even though serverless functions are short-lived, hackers can still attack them by infiltrating shared libraries or dependencies. This is known as “poisoning the well”. When other functions use this contaminated code, they can be attacked too. So software developers who’re concerned about this threat to serverless applications should pick out a provider that has both runtime and full static type safety and that at least complies with security certifications. It’s not a catch-all solution, but it’s a start.

4. Broken authentication

Broken authentication is a typical problem in any full-stack web app (ask around for {{< external-link link="https://auth0.com/blog/what-is-broken-authentication/" >}}multimillion-dollar companies{{< /external-link >}} promising to solve it), including those on serverless designs. Weak or compromised login information can give unauthorised access to sensitive data. DoS attacks can still affect serverless applications by overwhelming function requests or using too many resources. So, the best way out of it is to side with a provider that offers out-of-the-box strong authentication systems.

![alt_text](/posts/serverless_security2.webp)

## Relying on leading serverless security with Genezio

Security in internet applications can be taken for granted — or sent to the “to-do” list — on plenty of occasions. For example, in any cloud platform, developers might make the mistake of sitting back and relaxing when designing their security measures because they're relying on the vendor — and we'll talk again about how that approach has fared so far.

If the development was made on premises for an MVP, it's likely any tech enthusiast would leave hardcore security measures, like installing a firewall or IPS, for later.

A third scenario: When expanding a certain SaaS business to Europe (which is just a click away — when a European user hits the “subscribe” button, then you're offering your services there), you might have forgotten to either comply with {{< external-link link="https://gdpr-info.eu/" >}}GDPR{{< /external-link >}} or to write a lengthy disclaimer explaining why you're not collecting user data.

These are all plausible possibilities because they're far removed from the business logic. They're occasions in which security needs to be added because there are people who know how to exploit these easy-to-score vulnerabilities. And if you were wondering, depending on a cloud vendor for security won't cut it — even {{< external-link link="https://www.sumologic.com/blog/aws-security-breaches-2017/" >}}Accenture got hacked{{< /external-link >}} and gave away gigabytes of information from their AWS S3 bucket.

Genezio is a type-safe serverless platform so that developers can build full-stack apps, and that means, of course, taking care of security also. Since the platform intends users to get their apps up and running quickly so they can focus on their business, it makes efforts to solve security starting from the code itself. Typesafe coding is associated with preventing bugs, but such a design might also turn out to sift out some vulnerabilities.

Genezio also throws the business logic to the backend so that accessing it becomes harder for attackers. And even the {{< external-link link="https://genezio.com/docs/cli-tool/#cli-environment-variables" >}}Analytics tool{{< /external-link >}} is anonymised. That's how Genezio solves security — it has brought it to the table by design, and, like a good serverless platform should do, it takes care of it so that developers can focus on building their business.

**Find out more about the benefits of serverless security and type-safe serverless development with multiple builds at {{< external-link link="https://Genezio.com" >}}Genezio.com{{< /external-link >}}.**
