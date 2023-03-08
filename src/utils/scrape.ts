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

export async function getCourses() {

  const fileRaw = await Deno.readTextFile(`${Deno.cwd()}/html/courses.html`)

  const $ = cheerio.load(fileRaw)

  const courses = []
  $('.course').each((idx, el) => {
    const title = $(el).children('.title').text()
    const id = $(el).children('.id').text()
    const author = $(el).children('.author').text()
    const avatar = $(el).children('.author-avatar').attr('src')
    const course = $(el).children('.link').text()

    courses.push({
      title,
      id,
      author,
      avatar,
      course
    })
  })

  Deno.writeTextFile(`${Deno.cwd()}/src/data/courses.json`, JSON.stringify(courses, null, `\t`))
}



export async function getLibraries() {

  const fileRaw = await Deno.readTextFile(`${Deno.cwd()}/html/libraries.html`)

  const $ = cheerio.load(fileRaw)

  const courses = []
  $('.course').each((idx, el) => {
    const title = $(el).children('.title').text()
    const id = $(el).children('.id').text()
    const author = $(el).children('.author').text()
    const avatar = $(el).children('.author-avatar').attr('src')
    const course = $(el).children('.link').text()

    courses.push({
      title,
      id,
      author,
      avatar,
      course
    })
  })

  Deno.writeTextFile(`${Deno.cwd()}/src/data/libraries.json`, JSON.stringify(courses, null, `\t`))
}
