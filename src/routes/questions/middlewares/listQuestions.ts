import { Question } from '../entities/question.ts';

const getList = (questions: Question[]) => {
  return questions.map((q) => {
    const { url, title, id } = q
    return {
      url,
      title,
			id
    }
  })
}

export default getList
