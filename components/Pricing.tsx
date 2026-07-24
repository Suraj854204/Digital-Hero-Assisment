import { Check } from "lucide-react";
import { pricingTiers } from "@/lib/data";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Pricing</span>
          <h2 id="pricing-heading" className="mt-6 text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
            Pick your route up the mountain
          </h2>
          <p className="mt-4 text-base text-ink-400 sm:text-lg">
            Fixed-scope packages for a clear finish line, or a retainer if you
            want us embedded long-term. No hidden fees, ever.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start">
          {pricingTiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.08} className="h-full">
              <div
                className={cn(
                  "glass-card relative flex h-full flex-col gap-6 p-8 transition-transform duration-300",
                  tier.highlighted
                    ? "border-accent-purple/50 shadow-glow lg:-translate-y-4"
                    : "hover:-translate-y-1"
                )}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-peak-gradient px-4 py-1 text-xs font-semibold text-white shadow-glow">
                    Most booked
                  </span>
                )}

                <div>
                  <h3 className="font-display text-xl font-semibold text-ink-100">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-sm text-ink-400">{tier.description}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold text-ink-100">
                    {tier.price}
                  </span>
                  <span className="text-sm text-ink-400">/ {tier.cadence}</span>
                </div>

                <ul className="flex flex-1 flex-col gap-3" role="list">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-ink-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-cyan" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    "mt-2 w-full text-center",
                    tier.highlighted ? "btn-primary" : "btn-secondary"
                  )}
                >
                  {tier.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
