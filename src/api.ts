import { Hono } from "hono";
import questionsRouter from "$/routes/questions/index.ts";
import { ObjectId } from "sdk_mongo"
import todos from "$/models/todos.ts"
import coursesRouter from './routes/courses/index.ts';
import librariesRouter from './routes/libraries/index.ts';


const apiRouter = new Hono()

apiRouter.get("/test", async (c) => {


  const user1 = await todos.findOne({
    _id: new ObjectId("63f6bde2aa46b5d0531f7bb5"),
  });

  return c.json({
    user1
  })
})

apiRouter.route("/questions", questionsRouter)

apiRouter.route("/courses", coursesRouter)

apiRouter.route("/libraries", librariesRouter)


export default apiRouter
