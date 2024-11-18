import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must contain at least 8 character(s)")
    .max(256, "Password must contain at most 256 character(s)"),
});
