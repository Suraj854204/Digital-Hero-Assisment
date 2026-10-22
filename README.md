# DigitalHeroes

A modern, subscription-based Web application where users record golf scores, enter monthly prize draws, and direct a share of their subscription payments directly to charitable causes. Built as part of the Digital Heroes Web Development Internship task.

---

## Table of Contents
- [Overview](#overview)
- [Website Sections & Highlights](#website-sections--highlights)
- [Features](#features)
- [Website Sections Table](#website-sections-table)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Responsive Design and Accessibility](#responsive-design-and-accessibility)
- [AI Usage Disclosure](#ai-usage-disclosure)
- [Acknowledgements](#acknowledgements)

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

## Website Sections & Highlights

### 1. Landing Page / Hero Section
The public-facing landing page introduces the project motto—*"Your scores, their future."* It clearly outlines how monthly subscription fees are split between prize draws and chosen charities, providing primary calls-to-action for joining and exploring supported causes.

### 2. User Dashboard
The core account dashboard displays personalized account activity, including subscription status (active/inactive renewal dates), total charity contributions recorded, submitted score counters, prize win totals, and immediate draw eligibility notices.

### 3. My Scores
The score tracking module allows users to enter new round details (Date played & Stableford points from 1–45). It displays a list of up to 5 of the user's most recent rounds with options to edit or delete existing entries.

### 4. My Charity
The charity configuration page features a dropdown selector to choose a cause (e.g., Green Roots) and an interactive slider to set the share of each payment allocated to charity (minimum 10%). A selection history log keeps track of past charity allocations.

### 5. Contributions Ledger
A transparent, audit-ready financial ledger section that breaks down every confirmed payment. It categorizes amounts directed into charities versus the main prize pool, complete with transaction dates, payment types, and exact percentage shares.

### 6. Billing & Subscription Management
Integrated directly with Stripe Billing, this section displays current active plans, monthly pricing details, renewal dates, and options to manage payment methods or cancel subscriptions, alongside recent transaction receipts.

### 7. User Profile
The account management section allows users to update their display name, inspect their registered primary email address, and view account terms acceptance timestamps.

### 8. Backend & Stripe Administration
Supported by a configured Stripe environment that tracks live active test subscriptions, customer details, tax calculations, and recurring billing cycles.

---

## Features
- **Authentication & Dashboard:** Secure user portal with active state tracking and draw eligibility notifications.
- **Dynamic Score Tracking:** Log, edit, and manage 5 active golf rounds with automatic history cycling.
- **Flexible Giving Controls:** Interactive custom slider to set and save charity donation percentages (≥10%).
- **Transparent Ledger:** Auditable records of all recorded payments, prize pool additions, and charity shares.
- **Stripe Billing Integration:** Live customer subscription status, plan cancellations, and billing portal access.
- **Responsive Layout & Navigation:** Clean side menu navigation designed for mobile, tablet, and desktop viewports.

---

## Website Sections Table

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
├── public/
│   ├── favicon.svg
│   └── site.webmanifest
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
