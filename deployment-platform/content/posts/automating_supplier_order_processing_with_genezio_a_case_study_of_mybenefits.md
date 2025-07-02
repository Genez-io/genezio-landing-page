---
title: "Automating supplier order processing with DeployApps: A case study of MyBenefits"
date: 2025-02-17
tags:
  - Learning
author: Bogdan Ripa
linkedIn: https://www.linkedin.com/in/bogdanripa

thumbnail: /images/mybenefitsxgenezio.webp

preview: For platforms like MyBenefits—a flexible benefits marketplace where employees allocate monthly budgets to order perks—scaling operations demands robust automation. Manual processes for order fulfillment, supplier communication, and status tracking were bottlenecking growth. By leveraging DeployApps, MyBenefits engineered a fully automated system, eliminating manual work and ensuring reliability. This case study breaks down their architecture, integrations, and outcomes—no hype, just facts.

# meta data start
description: Learn how MyBenefits automated >90% of supplier order processing using DeployApps’s Cron jobs, queues, and TypeScript backend. 70% manual effort reduction. Insights for developers

meta_og_url: "https://genezio.com/blog/mybenefits-genezio-supplier-automation-case-study/"

meta_og_image: "https://genezio.com/images/mybenefitsxgenezio.webp"

# meta data end
customHeader: "White header"
customFooter: "White footer"
readTime: 10
url: /blog/mybenefits-genezio-supplier-automation-case-study/
---

For platforms like MyBenefits—a flexible benefits marketplace where employees allocate monthly budgets to order perks—scaling operations demands robust automation. Manual processes for order fulfillment, supplier communication, and status tracking were bottlenecking growth. By leveraging DeployApps, MyBenefits engineered a fully automated system, eliminating manual work and ensuring reliability. This case study breaks down their architecture, integrations, and outcomes—no hype, just facts.

## Business Context

MyBenefits connects employees of client companies with suppliers offering benefits (e.g., gym memberships, meal vouchers). Key requirements included:

- Automated delivery of orders to suppliers via email (Excel) or API.
- Real-time status updates from suppliers.
- Secure handling of credentials and third-party integrations (Google Drive, Gmail, custom APIs).

## The Problem: Manual Workflows at Scale

Before DeployApps, MyBenefits faced:

- Time-Consuming Exports: Orders were manually compiled into spreadsheets and emailed to suppliers.
- Unreliable Tracking: Supplier status updates required manual entry, risking errors.
- No Retry Mechanisms: Failed API calls or emails demanded reactive troubleshooting.

## The Solution: Architecture and Workflow

MyBenefits built a modular system using DeployApps’s features. Below is the technical blueprint:

### Core Components

- Frontend: React.js admin interface for monitoring orders.
- Backend: TypeScript with 21 classes for separation of concerns (order processing, supplier APIs, error handling).
- Database: MongoDB for storing orders, supplier configurations, and status histories.
- Environments: Isolated dev and prod setups for safe testing and deployment.

### Automation Workflow

![alt_text](/posts/mybenefits1.webp)

**A simplified view of MyBenefits’ order processing.**
React frontend triggers workflows managed by DeployApps’s Cron and Queues. Orders are pulled via MyBenefits API, stored in MongoDB, transformed into Excel (saved to Google Drive), and emailed via Gmail SMTP. Supplier APIs enable direct integrations, while queues handle retries.

Cron Jobs (6 scheduled tasks):

- Trigger order exports at supplier-defined intervals (daily/weekly/monthly).
- Fetch orders from MongoDB via MyBenefits API.

Order Processing:

- Generate Excel files in supplier-specific formats.
- Save files to Google Drive for audit trails.

Delivery Mechanisms:

- Email: Send spreadsheets via Gmail SMTP with templated messages.
- APIs: Push orders directly to suppliers’ systems via custom integrations.

Status Updates:

- 14 Webhooks: Capture real-time supplier responses (e.g., “order fulfilled”).
- Update MongoDB and notify internal teams via automated emails.

Error Handling:

- 4 Queues: Retry failed deliveries (e.g., API timeouts, email failures) with exponential backoff.
- Escalate unresolved issues to engineers after max retries.

Security & Configuration

- 52 environment variables: Centralized API keys, SMTP credentials, and supplier-specific configurations.

## Results: Metrics That Matter

MyBenefits built a modular system using DeployApps’s features. Below is the technical blueprint:

- 100% Automation: Zero manual steps in order processing.
- 70% Reduction in time spent on order management.
- 50% Faster Communication: Real-time supplier updates via webhooks vs. legacy email parsing.
- Reliability: Retry queues reduced unresolved failures by 90%.

“DeployApps gave us environments, cron jobs, queues, and webhooks out of the box. Integrating Google Drive, Gmail, and custom APIs was straightforward, letting us automate 100% of orders and focus on scaling.”
— Radu Tapus, Head of Product @MyBenefits

## Beyond Automation: Expanding the Product Suite

Post-launch, the team reused DeployApps’s framework to build:

- Invoicing tool: Takes the consumption data from the platform and invoices the customer
- ROI Calculator: Quantifies client savings from benefit programs.
- Tax Savings Calculator: Helps employees optimize perk selections.

Both tools are now being upsold to enterprise clients, demonstrating the platform’s adaptability.

## Conclusion: Why This Matters for Developers

MyBenefits’ success hinged on:

- Modularity: 21 backend classes kept code maintainable.
- Infrastructure Abstraction: DeployApps handled cron, queues, and retries, freeing the team to focus on business logic.
- Third-Party Flexibility: Pre-built connectors for Google/Gmail accelerated development.

For developers building B2B platforms, this case study underscores the importance of:

- Using queues for mission-critical workflows.
- Isolating configurations (e.g., environment variables).
- Choosing tools that scale with your stack (TypeScript, React, MongoDB).

### Ready to automate your workflows?

**Explore DeployApps’s documentation or connect with their team for use-case guidance.**
