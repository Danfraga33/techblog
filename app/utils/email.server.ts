import { Resend } from "resend";
import { emailHtml } from "./welcomeEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(to: string) {
  try {
    const data = await resend.emails.send({
      from: "Next Frontier <insights@nextfrontierhub.com>", // Replace with your verified domain email
      to,

      subject: "Welcome to Our Service",
      html: emailHtml,
    });

    console.log("Email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
