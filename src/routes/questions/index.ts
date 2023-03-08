import { Hono } from 'hono';
import { getQuestion, getQuestionsList, searchQuestion } from './questions.controller.ts';

const questionsRouter = new Hono()

questionsRouter.get("/", (c) => getQuestionsList(c))

questionsRouter.get("/:question", (c) => getQuestion(c))

questionsRouter.get("/search/:query", (c) => searchQuestion(c))

export default questionsRouter
