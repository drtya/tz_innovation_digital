import { z } from 'zod';

export const formSchema = z.object({
    name: z.string().min(1, "Required field"),
    company: z.string().min(1, "Required field"),
    email: z.string().email("Invalid email address").min(1, "Required field"),
    phone: z.string().min(1, "Required field").regex(/^\+?\d*(\d{8,})$/, "Phone must be at least 8 numbers"),
    subject: z.string().min(1, "Required field"),
    message: z.string().min(1, "Required field"),
    terms: z.boolean().refine((val) => val === true, {
        message: "*Accept the terms and privacy policy",
    }),
});