import { Context } from 'hono';
import questionsData from '$/data/questions.json' assert { type: "json"};
import getList from './middlewares/listQuestions.ts';
import { Question } from './entities/question.ts';
import getQuestionJson from './middlewares/getQuestion.ts';
import { Environment } from 'https://deno.land/x/hono@v2.7.7/types.ts';

const getQuestionsList = (c: Context) => {
  const listQuestions = getList(questionsData)
  return c.json(listQuestions)
}

const getQuestion = (c: Context<"question", Environment, unknown>) => {
  const id = c.req.param('question')

  const question: Question | undefined = getQuestionJson(id, questionsData)

  if (!question) {
    c.status(404)
    return c.body("not found")
  }

  return c.json(question)
}


export {
  getQuestionsList,
  getQuestion
}
