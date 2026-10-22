# NorthPeak Digital

**A Modern Digital Product Studio Landing Page**

A responsive, polished, one-page marketing website for **NorthPeak Digital**, a fictional digital product studio. Built as a training task for the Digital Heroes Web Development Internship, with a focus on premium UI/UX, accessible interactions, responsive layouts, and maintainable component architecture.

<p align="center">
  <img src="image/img1.png" alt="NorthPeak Digital — Main website preview" width="100%" />
</p>

<p align="center">
  <strong>Modern Design · Responsive Layout · Accessible UI · Smooth Animations</strong>
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

NorthPeak Digital presents a fictional digital product studio through a clean, conversion-focused landing page. The website combines strong typography, structured content, service cards, client results, pricing plans, and a validated contact form.

The project emphasizes:

- Clear visual hierarchy and consistent spacing.
- Reusable React components and organized application structure.
- Responsive layouts for mobile, tablet, and desktop.
- Accessible navigation, form feedback, and keyboard focus states.
- Subtle animations that support the experience without distracting from the content.
- Maintainable TypeScript and reusable styling utilities.

## Website Preview

### 1. Hero Section

The first impression of NorthPeak Digital, featuring the primary headline, calls to action, supporting content, and visual identity.

<p align="center">
  <img src="image/img1.png" alt="Screenshot 1 — Hero section" width="100%" />
</p>

### 2. Services Section

A structured services grid highlighting the studio's core digital capabilities.

<p align="center">
  <img src="image/img2.png" alt="Screenshot 2 — Services section" width="100%" />
</p>

### 3. Client Results and Testimonials

A section presenting client feedback, outcomes, and credibility-focused content.

<p align="center">
  <img src="image/img3.png" alt="Screenshot 3 — Client results and testimonials" width="100%" />
</p>

### 4. Pricing Section

Three pricing tiers—Basecamp, Ascent, and Summit—designed to communicate service options clearly.

<p align="center">
  <img src="image/img4.png" alt="Screenshot 4 — Pricing plans" width="100%" />
</p>

### 5. Contact Section

A contact form with schema-based validation and clear input feedback.

<p align="center">
  <img src="image/img5.png" alt="Screenshot 5 — Contact form" width="100%" />
</p>

### 6. Footer and Site Navigation

The footer provides supporting navigation, useful links, and the required Digital Heroes attribution.

<p align="center">
  <img src="image/img6.png" alt="Screenshot 6 — Website footer" width="100%" />
</p>

### 7. Responsive Layout

A visual reference for the website's responsive presentation across smaller and larger screens.

<p align="center">
  <img src="image/img7.png" alt="Screenshot 7 — Responsive website layout" width="100%" />
</p>

### 8. Additional UI Detail

An additional project screenshot showcasing another part of the interface and its visual styling.

<p align="center">
  <img src="image/img8.png" alt="Screenshot 8 — Additional website interface detail" width="100%" />
</p>

> **Screenshot note:** The captions above describe the intended order. If your screenshots show different sections, update the captions to match the actual images.

---

## Features

- **Responsive navigation:** Navigation layout with an accessible mobile menu.
- **Hero section:** Prominent headline, supporting copy, calls to action, and visual accents.
- **Services grid:** Six service cards with reusable content-driven components.
- **Client testimonials:** Client-result content presented in a structured layout.
- **Pricing plans:** Three tiers—Basecamp, Ascent, and Summit.
- **Validated contact form:** React Hook Form and Zod integration.
- **Motion effects:** Subtle scroll-triggered animations using Framer Motion.
- **Custom visual identity:** Topographic SVG illustration and consistent design tokens.
- **Typography system:** Inter, Space Grotesk, and JetBrains Mono through `next/font/google`.
- **Accessibility support:** Semantic structure, visible focus states, and reduced-motion styling.
- **SEO foundations:** Page metadata, favicon, robots file, and web manifest.

## Website Sections

| Section | Description |
|---|---|
| Hero | Primary message and calls to action |
| Services | Six-card services grid |
| Client Results | Testimonials and credibility-focused content |
| Pricing | Basecamp, Ascent, and Summit plans |
| Contact | Validated contact form |
| Footer | Sitemap and Digital Heroes attribution |

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 — App Router |
| UI Library | React 19 |
| Language | TypeScript with strict mode |
| Styling | Tailwind CSS 3 with custom design tokens |
| Icons | Lucide React |
| Animations | Framer Motion |
| Form Management | React Hook Form |
| Validation | Zod |
| Fonts | Inter, Space Grotesk, JetBrains Mono |
| Font Optimization | Next.js `next/font/google` |

## Project Structure

```text
northpeak-digital/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Testimonials.tsx
│   ├── Pricing.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── icons/
│   │   └── TopoContours.tsx
│   └── ui/
│       └── Reveal.tsx
├── lib/
│   ├── data.ts
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
│   ├── robots.txt
│   └── site.webmanifest
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

### Key Directories

- `app/` — Application routes, root layout, and global CSS.
- `components/` — Reusable website sections and UI elements.
- `components/icons/` — Custom SVG illustrations.
- `components/ui/` — Shared UI utilities, including scroll-reveal behavior.
- `lib/` — Shared data, validation schemas, and helper functions.
- `image/` — Project screenshots used in this README.
- `public/` — Static assets served by the application.

## Getting Started

### Prerequisites

Install the following before running the project:

- Node.js compatible with the Next.js 15 requirements.
- npm, pnpm, or yarn.
- Git.

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd northpeak-digital
```

Replace `<YOUR_REPOSITORY_URL>` with your actual GitHub repository URL.

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Create a production build

```bash
npm run build
```

### 5. Run the production server

```bash
npm run start
```

## Available Scripts

The exact scripts depend on `package.json`. A typical Next.js setup includes:

| Command | Purpose |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the production application |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs linting if configured |

Check `package.json` before using `npm run lint`; the script may not be configured in every Next.js version.

## Responsive Design and Accessibility

The project aims to provide a consistent experience across mobile, tablet, and desktop.

- Responsive navigation and content layouts.
- Semantic HTML for meaningful page structure.
- Keyboard-visible focus states.
- Accessible labels and validation feedback for form fields.
- Reduced-motion CSS support.
- Consistent typography, spacing, and component styling.

These are implementation goals; test the rendered website and keyboard interactions to confirm accessibility behavior.

## AI Usage Disclosure

AI tools, including ChatGPT and Claude, were used to brainstorm project structure, refine marketing copy, and review accessibility and performance considerations.

The implementation was reviewed and customized as part of the project work. This disclosure is intended to describe the actual workflow; adjust it if your use of AI differed.

## Acknowledgements

- **Digital Heroes** — Web Development Internship training task.
- **Next.js** — React framework.
- **Tailwind CSS** — Utility-first styling.
- **Lucide** — Icon library.
- **Framer Motion** — Animation library.
- **React Hook Form and Zod** — Form handling and validation.

---

<p align="center">
  Built with care as part of the Digital Heroes Web Development Internship task.
</p>

<p align="center">
  <strong>NorthPeak Digital</strong> · Digital Product Studio Concept
</p>
