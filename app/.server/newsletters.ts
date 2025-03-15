import { GridFSBucket } from "mongodb";
import { connectToDatabase } from "~/lib/db";

export async function getAllNewsletters() {
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

  const file = await db.collection("fs.files").findOne({ _id: id });
  if (!file) {
    throw new Error("File not found");
  }

  const downloadStream = bucket.openDownloadStream(file._id);

  let content = "";
  for await (const chunk of downloadStream) {
    content += chunk.toString();
  }

  return content;
}
