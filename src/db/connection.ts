import { MongoClient } from "sdk_mongo"
import { load } from "dotenv/mod.ts";

export async function connectMongo() {
  try {
    const env = await load()
    const URI_MONGO = env.URI_MONGO ?? Deno.env.get("URI_MONGO")
    const CLUSTER = env.CLUSTER ?? Deno.env.get("CLUSTER")
    const MONGO_APIKEY = env.MONGO_APIKEY ?? Deno.env.get("MONGO_APIKEY")

    const client = new MongoClient({
      endpoint: URI_MONGO,
      dataSource: CLUSTER, // e.g. "Cluster0"
      auth: {
        apiKey: MONGO_APIKEY
      },
    });
    return client
  } catch (error) {
    throw new Error(error)
  }

}


