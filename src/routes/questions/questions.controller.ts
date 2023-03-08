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

  const course: Question | undefined = getQuestionJson(id, questionsData)

  if (!course) {
    c.status(404)
    return c.body("not found")
  }

  return c.json(course)
}


const searchQuestion = (c: Context<"query", Environment, unknown>) => {
  const query = c.req.param('query')

  const courses: Question[] | undefined = questionsData.filter((q) => q.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))

  if (!courses) {
    c.status(404)
    return c.body("not found")
  }

  return c.json(courses)
}



export {
  getQuestionsList,
  getQuestion,
  searchQuestion
}
