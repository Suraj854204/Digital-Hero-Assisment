import { ArrowRight, PlayCircle } from "lucide-react";
import TopoContours from "@/components/icons/TopoContours";

const stats = [
  { value: "96", label: "avg. Lighthouse score" },
  { value: "42", label: "products shipped" },
  { value: "4.9/5", label: "client satisfaction" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-base-950 pt-32 pb-24 sm:pt-40 sm:pb-32"
      aria-label="Introduction"
    >
   
      <div className="pointer-events-none absolute inset-0 -z-10 bg-peak-radial" />

      
      <TopoContours className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[420px] w-full opacity-70 sm:h-[560px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow animate-fade-up [animation-delay:0ms]">
            Digital product studio
          </span>

          <h1 className="mt-6 animate-fade-up text-4xl font-bold leading-[1.1] tracking-tight text-ink-100 [animation-delay:80ms] sm:text-5xl lg:text-6xl">
            Websites and products built to reach the{" "}
            <span className="bg-peak-gradient bg-clip-text text-transparent">
              summit of their category
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl animate-fade-up text-balance text-base text-ink-400 [animation-delay:160ms] sm:text-lg">
            NorthPeak Digital pairs strategists, designers, and engineers into
            one team so your site doesn&apos;t just look premium — it loads
            fast, converts visitors, and scales with your business.
          </p>

          <div className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-4 [animation-delay:240ms] sm:flex-row">
            <a href="#contact" className="btn-primary w-full sm:w-auto">
              Start a project
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#results" className="btn-secondary w-full sm:w-auto">
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
              See client results
            </a>
          </div>
        </div>

        
        <div className="relative mx-auto mt-20 max-w-4xl animate-fade-up [animation-delay:320ms]">
          <div className="glass-card grid grid-cols-1 gap-8 px-8 py-10 sm:grid-cols-3 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-bold text-ink-100 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-ink-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
