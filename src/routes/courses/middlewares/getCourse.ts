import { Course } from "../entities/course.ts";

const getCourseJson = (id: string, questions: Course[]) => {
  return questions.find((q) => q.id === id)
}

export default getCourseJson;
