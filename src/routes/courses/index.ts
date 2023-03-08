import { Hono } from 'hono';
import { getCourse, getCoursesList } from './courses.controller.ts';

const questionsRouter = new Hono()

questionsRouter.get("/", (c) => getCoursesList(c))

questionsRouter.get("/:course", (c) => getCourse(c))

export default questionsRouter
