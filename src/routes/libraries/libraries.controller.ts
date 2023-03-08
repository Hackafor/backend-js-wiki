import { Context } from 'hono';
import librariesJson from '../../data/libraries.json' assert { type: "json" }

const getLibrariesList = (c: Context) => {
  return c.json(librariesJson)
}

export {
  getLibrariesList
}
