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

if (import.meta.main) await serve(app.fetch, { port: 8000 });

export default app;
