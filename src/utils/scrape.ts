import { cheerio } from "https://deno.land/x/cheerio@1.0.6/mod.ts";

export async function getQuestions() {

  const fileRaw = await Deno.readTextFile(`${Deno.cwd()}/html/questions.html`)

  const $ = cheerio.load(fileRaw)

  const questions = []
  $('.question').each((idx, el) => {
    const title = $(el).children('.title').text()
    const id = $(el).children('.id').text()
    const code = $(el).children('.code').text()
    const content = $(el).children('.content').text()
    const url = `/api/questions/${id}`

    questions.push({
      title,
      id,
      code,
			content,
			url
    })
  })

  Deno.writeTextFile(`${Deno.cwd()}/src/data/questions.json`, JSON.stringify(questions, null, `\t`))
}

getQuestions();
