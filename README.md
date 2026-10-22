# DigitalHeroes

A modern, subscription-based Web application where users record golf scores, enter monthly prize draws, and direct a share of their subscription payments directly to charitable causes. Built as part of the Digital Heroes Web Development Internship task.

<p align="center">
  <img src="image/img1.png" alt="Digital Heroes — Main Landing Page" width="100%" />
</p>

<p align="center">
  <strong>Subscription Platform · Monthly Draw · Real Giving · Clean UI</strong>
</p>

---

## Table of Contents
- [Overview](#overview)
- [Website Preview](#website-preview)
- [Features](#features)
- [Website Sections](#website-sections)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Responsive Design and Accessibility](#responsive-design-and-accessibility)
- [AI Usage Disclosure](#ai-usage-disclosure)
- [Acknowledgements](#acknowledgements)
- [License](#license)

---

## Overview
**DigitalHeroes** is a web platform designed to combine personal score tracking with charitable giving and monthly prize draws. Subscribers submit their recent golf scores, choose a charity to support, and track how their payments are split between charitable donations and prize pools.

### Core Architecture & Objectives
- **User Dashboard:** High-level view of account status, subscription renewal dates, score counts, total charity contributions, and draw eligibility.
- **Score Management System:** Records and updates up to 5 of the user's most recent rounds (Stableford points), automatically keeping the latest entries.
- **Charity Allocation & Customization:** Interactive range slider enabling users to adjust their giving percentage (minimum 10%) per payment.
- **Transparent Ledger:** Transaction logs tracking every payment and confirming allocated funds toward designated charities.
- **Stripe Billing Integration:** Real-time integration with Stripe for subscription handling, payment management, and invoice history.

---

## Website Preview

### 1. Landing Page / Hero Section
The public landing page featuring the core brand message (*"Your scores, their future."*), explaining the model of turning recurring subscriptions into charity donations and draw entries.
<p align="center">
  <img src="image/img1.png" alt="Screenshot 1 — Landing Page" width="100%" />
</p>

### 2. User Dashboard
The central dashboard displaying account status, active subscription renewals, recorded scores summary, total charity contributions, and draw eligibility notices.
<p align="center">
  <img src="image/img2.png" alt="Screenshot 2 — Dashboard Overview" width="100%" />
</p>

### 3. My Scores
The score management interface allowing users to log new Stableford points (1–45) with date selection, alongside an editable list of the 5 most recent scores.
<p align="center">
  <img src="image/img3.png" alt="Screenshot 3 — My Scores Page" width="100%" />
</p>

### 4. My Charity
Charity customization interface featuring a dropdown for selecting demo charities and an interactive slider to set the donation percentage (min 10%).
<p align="center">
  <img src="image/img4.png" alt="Screenshot 4 — Charity Selection" width="100%" />
</p>

### 5. Contributions Ledger
A transparent, table-based ledger displaying every confirmed payment, date, payment type, designated charity, total payment, allocated donation amount, and percentage share.
<p align="center">
  <img src="image/img5.png" alt="Screenshot 5 — Contributions Ledger" width="100%" />
</p>

### 6. Billing & Subscription Management
Stripe-powered billing interface displaying monthly subscription details (price, next renewal date, status), options to manage payment methods, and invoice history.
<p align="center">
  <img src="image/img6.png" alt="Screenshot 6 — Billing Page" width="100%" />
</p>

### 7. User Profile
Account settings page where users can view and update their display name, registered email address, and terms acceptance history.
<p align="center">
  <img src="image/img7.png" alt="Screenshot 7 — Profile Settings" width="100%" />
</p>

### 8. Backend & Stripe Administration
Backend integration preview displaying live customer subscriptions, collection methods, and transaction status within the Stripe Dashboard.
<p align="center">
  <img src="image/img8.png" alt="Screenshot 8 — Stripe Backend Integration" width="100%" />
</p>

---

## Features
- **Authentication & Dashboard:** Secure user portal with active state tracking and draw eligibility notifications.
- **Dynamic Score Tracking:** Log, edit, and manage 5 active golf rounds with automatic history cycling.
- **Flexible Giving Controls:** Interactive custom slider to set and save charity donation percentages (≥10%).
- **Transparent Ledger:** Auditable records of all recorded payments, prize pool additions, and charity shares.
- **Stripe Billing Integration:** Live customer subscription status, plan cancellations, and billing portal access.
- **Responsive Layout & Navigation:** Clean side menu navigation designed for mobile, tablet, and desktop viewports.

---

## Website Sections

| Section | Description |
| :--- | :--- |
| **Landing Page** | Public hero section with subscription info, charity highlights, and prize draw explainers. |
| **Dashboard** | Overview of subscription status, recent scores, total charity contributions, and draw alerts. |
| **My Scores** | Form and list manager for keeping up to 5 recent golf rounds (1–45 Stableford points). |
| **My Charity** | Charity dropdown selector and donation percentage range slider. |
| **Contributions** | Detailed transaction ledger showing exact payment allocations to charities and prize pools. |
| **Billing** | Stripe plan details, status badges, payment history, and Stripe portal redirect. |
| **Profile** | User details editor for display names, email records, and terms acceptance. |

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router) |
| **UI Library** | React 19 |
| **Language** | TypeScript (Strict Mode) |
| **Styling** | Tailwind CSS 3 |
| **Icons** | Lucide React |
| **Forms & Validation** | React Hook Form & Zod |
| **Payments** | Stripe API & Stripe Customer Portal |

---

## Project Structure

```text
digital-heroes/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   ├── scores/
│   │   ├── charity/
│   │   ├── contributions/
│   │   ├── billing/
│   │   └── profile/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Sidebar.tsx
│   ├── ScoreCard.tsx
│   ├── CharitySlider.tsx
│   └── ui/
├── lib/
│   ├── stripe.ts
│   ├── validation.ts
│   └── utils.ts
├── image/
│   ├── img1.png
│   ├── img2.png
│   ├── img3.png
│   ├── img4.png
│   ├── img5.png
│   ├── img6.png
│   ├── img7.png
│   └── img8.png
├── public/
│   ├── favicon.svg
│   └── site.webmanifest
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
