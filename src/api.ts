import { Context, Hono } from "hono";
import questionsRouter from '$/routes/questions/index.ts';

const apiRouter = new Hono()

apiRouter.get("/test", (c) => c.text('api test'))

apiRouter.route("/questions", questionsRouter)



export default apiRouter
