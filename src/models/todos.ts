
import { connectMongo } from "$/db/connection.ts";
import { ObjectId } from "sdk_mongo"

interface TodoSchema {
  _id: ObjectId;
  name: string;
  description: string;
}

const client = await connectMongo()
// Defining schema interface

const db = client.database("learn-data-api");
const todos = db.collection<TodoSchema>("todos");

export default todos;
