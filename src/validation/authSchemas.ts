import { z } from 'zod';

export const loginSchema = z.object({
   email: z.email('Invalid email address'),
   password: z.string().min(6, 'Password must be at least 6 characters')
});

export type LoginFormValues = z.infer<typeof loginSchema>;

export const signupSchema = z.object({
   fullName: z.string().min(2, 'Name is required'),
   email: z.email('Invalid email address'),
   password: z.string().min(6, 'Password must be at least 6 characters')
});

export type SignupFormValues = z.infer<typeof signupSchema>;
