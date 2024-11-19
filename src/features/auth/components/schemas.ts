import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(1, "Required")
    .max(256, "Password must contain at most 256 character(s)"),
});

export const registerSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().email().min(1, "Email is required"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must contain at least 8 character(s)")
    .max(256, "Password must contain at most 256 character(s)"),
});
