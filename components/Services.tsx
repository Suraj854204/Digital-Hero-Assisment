import { services } from "@/lib/data";
import Reveal from "@/components/ui/Reveal";

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">What we do</span>
          <h2 id="services-heading" className="mt-6 text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
            One team, from strategy to shipped product
          </h2>
          <p className="mt-4 text-base text-ink-400 sm:text-lg">
            Every engagement moves through the same six disciplines — you can
            hire us for one, or hand us the whole climb.
          </p>
        </Reveal>

        <ul className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <li key={service.title}>
                <Reveal delay={index * 0.06} className="h-full">
                  <div className="glass-card group flex h-full flex-col gap-4 p-8 transition-transform duration-300 hover:-translate-y-1">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-peak-gradient shadow-glow transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-ink-100">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-400">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
