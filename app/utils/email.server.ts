import { Resend } from "resend";
import { renderEmailHtml } from "./welcomeEmail";
import { connectToDatabase } from "~/lib/db";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(to: string) {
  try {
    const db = await connectToDatabase();
    const email_list_collection = await db.collection("email_list");
    const addSubscriber = await email_list_collection.insertOne({ email: to });
    console.log("Subscriber Added", addSubscriber);
    const data = await resend.emails.send({
      from: "Next Frontier <insights@nextfrontierhub.com>",
      to,

      subject: "Welcome to the hub",
      html: await renderEmailHtml(),
    });

    console.log("Email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
