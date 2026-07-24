import type { LucideIcon } from "lucide-react";
import {
  Compass,
  PenTool,
  Code2,
  Rocket,
  LineChart,
  ShieldCheck,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};


//i used fake data.

export const services: Service[] = [
  {
    icon: Compass,
    title: "Product & Brand Strategy",
    description:
      "We map your audience, positioning, and business goals before a single pixel is drawn, so every design decision has a reason behind it.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    description:
      "Wireframes, prototypes, and polished interfaces built in Figma, tested with real users, and handed off with a component-level design system.",
  },
  {
    icon: Code2,
    title: "Web & Product Engineering",
    description:
      "Production-grade front ends in Next.js and TypeScript, wired to the CMS, APIs, or backend your team already relies on.",
  },
  {
    icon: Rocket,
    title: "Launch & Migration",
    description:
      "From domain cutovers to staged rollouts, we plan launches so they happen on a Tuesday afternoon, not a Sunday night at 2am.",
  },
  {
    icon: LineChart,
    title: "Conversion & Analytics",
    description:
      "Funnel tracking, A/B tests, and heatmaps so you can see exactly where visitors hesitate and fix it with evidence, not guesswork.",
  },
  {
    icon: ShieldCheck,
    title: "Performance & Accessibility Audits",
    description:
      "Lighthouse, WCAG, and Core Web Vitals reviews with a prioritized fix list — most clients see a 90+ performance score within one sprint.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  metric: string;
  metricLabel: string;
};

  export const testimonials: Testimonial[] = [
   {
     quote:
      "NorthPeak rebuilt our marketing site in six weeks and our demo requests nearly doubled the following quarter. They actually explained the reasoning behind every layout decision.",
    name: "Priya Nair",
    role: "Head of Growth",
    company: "Ledgerline",
    metric: "+87%",
    metricLabel: "demo requests",
  },
  {
    quote:
      "We came in expecting a template refresh and left with a genuine design system. Engineering has shipped new pages in days instead of weeks ever since.",
    name: "Marcus Webb",
    role: "Co-founder",
    company: "Fieldnote",
    metric: "3.2x",
    metricLabel: "faster page builds",
  },
  {
    quote:
      "Our Lighthouse performance score went from 41 to 96. More importantly, our support tickets about the site being 'slow' just stopped.",
    name: "Sofia Herrera",
    role: "VP of Product",
    company: "Cascade Health",
    metric: "96/100",
    metricLabel: "Lighthouse score",
  },
];

export type PricingTier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Basecamp",
    price: "$3,200",
    cadence: "one-time",
    description: "A focused landing page or small marketing site, live in two to three weeks.",
    features: [
      "Up to 5 pages",
      "Custom UI design in Figma",
      "Next.js build with CMS handoff",
      "Basic on-page SEO setup",
      "2 weeks of post-launch support",
    ],
    cta: "Start with Basecamp",
  },
  {
    name: "Ascent",
    price: "$7,800",
    cadence: "one-time",
    description: "Our most-booked package — a full site rebuild with a proper design system.",
    features: [
      "Up to 12 pages + design system",
      "UX research & prototype testing",
      "Full Next.js/TypeScript build",
      "Performance & accessibility audit",
      "Analytics + conversion tracking setup",
      "6 weeks of post-launch support",
    ],
    highlighted: true,
    cta: "Book the Ascent package",
  },
  {
    name: "Summit",
    price: "Custom",
    cadence: "retainer",
    description: "An embedded product team for ongoing design, engineering, and experimentation.",
    features: [
      "Dedicated design + engineering pair",
      "Continuous discovery & user testing",
      "Sprint-based delivery with weekly demos",
      "A/B testing & growth experiments",
      "Priority Slack support",
    ],
    cta: "Talk to our team",
  },
];
