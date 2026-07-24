import { Mountain, Twitter, Linkedin, Github } from "lucide-react";

const footerLinks = {
  Studio: [
    { label: "Services", href: "#services" },
    { label: "Results", href: "#results" },
    { label: "Pricing", href: "#pricing" },
  ],
  Company: [
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#" },
    { label: "Case studies", href: "#results" },
  ],
};

const socials = [
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-base-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <a href="#top" className="flex items-center gap-2 text-base font-display font-semibold text-ink-100">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-peak-gradient shadow-glow">
                <Mountain className="h-5 w-5 text-white" aria-hidden="true" />
              </span>
              NorthPeak <span className="font-normal text-ink-400">Digital</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
              A digital product studio helping ambitious teams design and
              build websites that perform as well as they look.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ink-300 transition-colors hover:border-white/20 hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <nav key={heading} aria-label={heading}>
              <h3 className="text-sm font-semibold text-ink-100">{heading}</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-ink-600">
            &copy; {new Date().getFullYear()} NorthPeak Digital. All rights reserved.
          </p>
          <p className="text-xs text-ink-600">
            <a
              href="https://digitalheroesco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/20 underline-offset-4 transition-colors hover:text-ink-300"
            >
              Built for Digital Heroes Training Task
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
