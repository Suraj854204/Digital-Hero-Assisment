import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please enter your name.")
    .min(2, "Your name should be at least 2 characters.")
    .max(80, "Your name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address."),
  company: z.string().trim().max(120, "That's too long.").optional().or(z.literal("")),
  budget: z.string().optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(1, "Please tell us a little about your project.")
    .min(20, "A few more details will help us respond faster (min. 20 characters).")
    .max(2000, "Please keep your message under 2000 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
