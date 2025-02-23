import { GridFSBucket, MongoClient } from "mongodb";

const uri = process.env.MONGODB_CONNECTION_STRING as string; // Add your MongoDB connection string to .env
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

export async function getAllPdfs() {
  const db = await connectToDatabase();
  const bucket = new GridFSBucket(db, { bucketName: "fs" });

  const file = await bucket.find().toArray();
  if (!file) {
    throw new Response("File not found", { status: 404 });
  }
  const files = await db.collection("fs.files").find().toArray();

  return files;
}

export async function getPdfContentById(id: string) {
  const db = await connectToDatabase();
  const bucket = new GridFSBucket(db, { bucketName: "fs" });

  // Find the file metadata
  const file = await db.collection("fs.files").findOne({ _id: id });
  if (!file) {
    throw new Error("File not found");
  }

  // Create a stream to read the file from GridFS
  const downloadStream = bucket.openDownloadStream(file._id);

  // Convert the stream to a string
  let content = "";
  for await (const chunk of downloadStream) {
    content += chunk.toString();
  }

  return content;
}
