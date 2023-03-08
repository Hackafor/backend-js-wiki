import { Hono } from 'hono';
import { getLibrariesList } from './libraries.controller.ts';

const librariesRouter = new Hono()

librariesRouter.get("/", (c) => getLibrariesList(c))

export default librariesRouter

