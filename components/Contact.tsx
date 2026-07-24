"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

const contactDetails = [
  { icon: Mail, label: "hello@northpeak.digital" },
  { icon: MapPin, label: "Remote-first, HQ in Austin, TX" },
  { icon: Clock, label: "Replies within 1 business day" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onBlur",
    defaultValues: { name: "", email: "", company: "", budget: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    
    await new Promise((resolve) => setTimeout(resolve, 900));
    console.log("Contact form submission:", data);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <span className="section-eyebrow">Get in touch</span>
            <h2 id="contact-heading" className="mt-6 text-3xl font-bold tracking-tight text-ink-100 sm:text-4xl">
              Tell us about your project
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-400">
              Share a few details and we&apos;ll come back with next steps,
              typically a scoped estimate and a couple of relevant case
              studies, within one business day.
            </p>

            <ul className="mt-8 flex flex-col gap-4" role="list">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                return (
                  <li key={detail.label} className="flex items-center gap-3 text-sm text-ink-300">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Icon className="h-4 w-4 text-accent-cyan" aria-hidden="true" />
                    </span>
                    {detail.label}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="glass-card p-6 sm:p-10">
              {submitted ? (
                <div
                  role="status"
                  className="flex flex-col items-center gap-4 py-12 text-center"
                >
                  <CheckCircle2 className="h-12 w-12 text-accent-cyan" aria-hidden="true" />
                  <h3 className="font-display text-xl font-semibold text-ink-100">
                    Message sent
                  </h3>
                  <p className="max-w-sm text-sm text-ink-400">
                    Thanks for reaching out — a member of our team will reply
                    within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-ink-200">
                        Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        autoComplete="name"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        {...register("name")}
                        className={cn(
                          "rounded-xl border bg-white/5 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-600 outline-none transition-colors",
                          errors.name
                            ? "border-red-400/60 focus:border-red-400"
                            : "border-white/10 focus:border-accent-cyan/70"
                        )}
                        placeholder="Jordan Lee"
                      />
                      {errors.name && (
                        <p id="name-error" role="alert" className="text-xs text-red-400">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-ink-200">
                        Email <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        {...register("email")}
                        className={cn(
                          "rounded-xl border bg-white/5 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-600 outline-none transition-colors",
                          errors.email
                            ? "border-red-400/60 focus:border-red-400"
                            : "border-white/10 focus:border-accent-cyan/70"
                        )}
                        placeholder="jordan@company.com"
                      />
                      {errors.email && (
                        <p id="email-error" role="alert" className="text-xs text-red-400">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-sm font-medium text-ink-200">
                        Company{" "}
                        <span className="font-normal text-ink-400">(optional)</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        autoComplete="organization"
                        {...register("company")}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-600 outline-none transition-colors focus:border-accent-cyan/70"
                        placeholder="Acme Inc."
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="budget" className="text-sm font-medium text-ink-200">
                        Budget range{" "}
                        <span className="font-normal text-ink-400">(optional)</span>
                      </label>
                      <select
                        id="budget"
                        {...register("budget")}
                        defaultValue=""
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink-100 outline-none transition-colors focus:border-accent-cyan/70"
                      >
                        <option value="" className="bg-base-900">Select a range</option>
                        <option value="under-5k" className="bg-base-900">Under $5,000</option>
                        <option value="5k-10k" className="bg-base-900">$5,000 – $10,000</option>
                        <option value="10k-plus" className="bg-base-900">$10,000+</option>
                        <option value="retainer" className="bg-base-900">Ongoing retainer</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-ink-200">
                      Project details <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      {...register("message")}
                      className={cn(
                        "resize-none rounded-xl border bg-white/5 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-600 outline-none transition-colors",
                        errors.message
                          ? "border-red-400/60 focus:border-red-400"
                          : "border-white/10 focus:border-accent-cyan/70"
                      )}
                      placeholder="Tell us what you're building, your timeline, and what success looks like."
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="text-xs text-red-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit"
                  >
                    {isSubmitting ? "Sending…" : "Send message"}
                    {!isSubmitting && <Send className="h-4 w-4" aria-hidden="true" />}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
