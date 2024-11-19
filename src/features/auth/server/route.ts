import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import {
  loginSchema,
  registerSchema,
} from "@/features/auth/components/schemas";

const authRoute = new Hono()
  .post("/login", zValidator("json", loginSchema), async (c) => {
    const { email, password } = c.req.valid("json");
    console.log("login", { email, password });
    return c.json({ email, password });
  })
  .post("/register", zValidator("json", registerSchema), async (c) => {
    const { name, email, password } = c.req.valid("json");
    console.log("register", { email, password });
    return c.json({ name, email, password });
  });

export default authRoute;
