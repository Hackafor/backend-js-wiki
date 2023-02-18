import { Hono } from 'hono';
import { getQuestion, getQuestionsList } from './questions.controller.ts';

const questionsRouter = new Hono()

questionsRouter.get("/", (c) => getQuestionsList(c))

questionsRouter.get("/:question", (c) => getQuestion(c))

export default questionsRouter
