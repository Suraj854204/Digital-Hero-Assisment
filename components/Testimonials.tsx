import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export default function Testimonials() {
  return (
    <section
      id="results"
      className="relative py-24 sm:py-32"
      aria-labelledby="results-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-peak-radial opacity-60" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Client results</span>
          <h2 id="results-heading" className="mt-6 text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
            Teams that climbed with us
          </h2>
          <p className="mt-4 text-base text-ink-400 sm:text-lg">
            A few of the outcomes clients have shared after launching with
            NorthPeak.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08} className="h-full">
              <figure className="glass-card flex h-full flex-col justify-between gap-6 p-8">
                <div>
                  <Quote className="h-8 w-8 text-accent-purple" aria-hidden="true" />
                  <blockquote className="mt-4 text-sm leading-relaxed text-ink-200 sm:text-base">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                </div>

                <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                  <div>
                    <p className="text-sm font-semibold text-ink-100">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-ink-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-xl font-bold text-transparent bg-peak-gradient bg-clip-text">
                      {testimonial.metric}
                    </p>
                    <p className="text-[11px] uppercase tracking-wide text-ink-400">
                      {testimonial.metricLabel}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
