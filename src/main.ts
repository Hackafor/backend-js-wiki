import { Hono } from "hono";
import { logger, cors } from "hono_middleware"
import { serve } from "std/http/server.ts";
import apiRouter from '$/api.ts';

const app = new Hono()

app.use("*", logger());

app.use("*", cors());

app.get("/", (c) => c.json({
  hello: 'world'
}));

app.route("/api", apiRouter);

// 404 route
app.notFound((c) => {
  const { pathname } = new URL(c.req.url);

  if (c.req.url.at(-1) === "/") {
    return c.redirect(pathname.slice(0, -1));
  }

  return c.json({
    msg: "404 not found",
    suggestion: "try go to /api",
  }, 404);
});

if (import.meta.main) await serve(app.fetch, { port: 8000 });

export default app;
