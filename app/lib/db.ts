import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_CONNECTION_STRING as string;
export const client = new MongoClient(uri);
if (!uri) {
  throw new Error("MONGODB_URI is not defined in .env");
}
let cachedDb: any = null;

export async function connectToDatabase() {
  if (cachedDb) return cachedDb;

  await client.connect();
  const db = client.db("report-pdf");
  cachedDb = db;
  return db;
}
