import { Context } from 'hono';
import coursesData from '$/data/courses.json' assert { type: "json"};
import getList from './middlewares/listCourses.ts';
import { Environment } from 'https://deno.land/x/hono@v2.7.7/types.ts';
import getCourseJson from './middlewares/getCourse.ts';
import { Course } from './entities/course.ts';

const getCoursesList = (c: Context) => {
  const listQuestions = getList(coursesData)
  return c.json(listQuestions)
}

const getCourse = (c: Context<"course", Environment, unknown>) => {
  const id = c.req.param('course')

  const question: Course | undefined = getCourseJson(id, coursesData)

  if (!question) {
    c.status(404)
    return c.body("not found")
  }

  return c.json(question)
}


export {
  getCoursesList,
  getCourse
}
