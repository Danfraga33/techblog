import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(to: string) {
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>", // Replace with your verified domain email
      to,
      subject: "Welcome to Our Service",
      html: `<p>Hi ,</p><p>Thank you for contacting us! We will get back to you shortly.</p><p>Best regards,<br>Your Company</p>`,
    });

    console.log("Email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
