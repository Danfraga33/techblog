import { GridFSBucket, ObjectId } from "mongodb";
import { connectToDatabase } from "~/lib/db";

export async function loader({ params }: { params: { id: string } }) {
  const { id } = params;

  // Validate ObjectId
  if (!ObjectId.isValid(id)) {
    return new Response("Invalid file ID", { status: 400 });
  }

  const objectId = new ObjectId(id);
  const db = await connectToDatabase();
  console.log("Connected to database:", db.databaseName);

  const bucket = new GridFSBucket(db, { bucketName: "fs" });

  try {
    // Check if the file exists
    const file = await db.collection("fs.files").findOne({ _id: objectId });
    console.log("File found:", file);

    if (!file) {
      return new Response("File not found", { status: 404 });
    }

    // Create a download stream
    const downloadStream = bucket.openDownloadStream(objectId);

    // Convert GridFS stream to ReadableStream
    const readableStream = new ReadableStream({
      start(controller) {
        downloadStream.on("data", (chunk) => controller.enqueue(chunk));
        downloadStream.on("end", () => controller.close());
        downloadStream.on("error", (error) => controller.error(error));
      },
    });

    // Return the response
    return new Response(readableStream, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${file.filename}"`,
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response("Internal server error", { status: 500 });
  }
}
