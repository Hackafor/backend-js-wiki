import { Hono } from "hono";
import { logger } from "hono_middleware"
import { serve } from "std/http/server.ts";
import apiRouter from '$/api.ts';


const app = new Hono()

app.use("*", logger());

app.get("/", (c) => c.json({
  hello: 'world'
}));

app.route("/api", apiRouter);

if (import.meta.main) await serve(app.fetch, { port: 3000 });

export default app;
