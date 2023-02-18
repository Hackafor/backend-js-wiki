import { Question } from '../entities/question.ts';

const getQuestionJson = (id: string, questions: Question[]) => {
  return questions.find((q) => q.id === id)
}

export default getQuestionJson;
