import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/hello", (req) => {
  return req.json({ hello: "world" });
});

export const GET = handle(app);
