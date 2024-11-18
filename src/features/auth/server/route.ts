import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { loginSchema } from "@/features/auth/components/schemas";

const authRoute = new Hono().post(
  "/login",
  zValidator("json", loginSchema),
  (req) => {
    return req.json({ success: "ok" });
  }
);

export default authRoute;
