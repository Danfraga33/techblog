import { GridFSBucket, ObjectId } from "mongodb";
import { connectToDatabase } from "~/lib/db";

export async function loader({ params }: { params: { id: string } }) {
  const { id } = params; // Get PDF ID from URL
  const db = await connectToDatabase();
  const bucket = new GridFSBucket(db, { bucketName: "fs" });

  try {
    const objectId = new ObjectId(id);
    const file = await db.collection("fs.files").findOne({ _id: objectId });

    if (!file) {
      throw new Response("File not found", { status: 404 });
    }

    // Create a stream to read the file from GridFS
    const downloadStream = bucket.openDownloadStream(objectId);

    return new Response(downloadStream as any, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${file.filename}"`,
      },
    });
  } catch (error) {
    return new Response("Invalid file ID", { status: 400 });
  }
}
