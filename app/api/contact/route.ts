import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const smtpUser =
      process.env.SMTP_USER || process.env.GMAIL_USER || "rudrasapavat@gmail.com";
    const rawPass =
      process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || "";
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || smtpUser;

    if (!smtpUser || !rawPass) {
      return NextResponse.json(
        { success: false, error: "Email service credentials are missing in environment variables." },
        { status: 500 }
      );
    }

    // Try password as provided, and stripped of whitespace if needed
    const passOptions = [rawPass, rawPass.replace(/\s+/g, "")];
    let transporter: nodemailer.Transporter | null = null;
    let authError: Error | null = null;

    for (const pass of passOptions) {
      try {
        const testTransporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || "smtp.gmail.com",
          port: Number(process.env.SMTP_PORT) || 465,
          secure: process.env.SMTP_SECURE !== "false",
          auth: {
            user: smtpUser,
            pass,
          },
        });
        await testTransporter.verify();
        transporter = testTransporter;
        break;
      } catch (err) {
        authError = err as Error;
      }
    }

    if (!transporter) {
      console.error("Nodemailer transport error:", authError);
      return NextResponse.json(
        {
          success: false,
          error:
            "Gmail authentication failed. Please check the App Password in your .env file and ensure 2-Step Verification is enabled for your Google account.",
        },
        { status: 500 }
      );
    }

    const formattedDate = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f5f7; margin: 0; padding: 20px; color: #333; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1px solid #e5e7eb; }
            .header { background-color: #000000; color: #ffffff; padding: 28px 32px; text-align: left; }
            .header h1 { margin: 0; font-size: 22px; font-weight: 600; letter-spacing: -0.5px; }
            .header p { margin: 4px 0 0 0; font-size: 13px; color: #ff5e00; }
            .content { padding: 32px; }
            .field-group { margin-bottom: 20px; }
            .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #6b7280; font-weight: 700; margin-bottom: 4px; }
            .value { font-size: 16px; color: #111827; font-weight: 500; }
            .value-box { background: #f9fafb; padding: 16px; border-radius: 8px; border-left: 4px solid #ff5e00; margin-top: 6px; font-size: 15px; line-height: 1.6; white-space: pre-wrap; }
            .footer { background: #f9fafb; padding: 16px 32px; border-top: 1px solid #f3f4f6; text-align: center; font-size: 12px; color: #9ca3af; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Inquiry</h1>
              <p>Origami Studio Web Form</p>
            </div>
            <div class="content">
              <div class="field-group">
                <div class="label">Sender Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field-group">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}" style="color: #ff5e00; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field-group">
                <div class="label">Phone Number</div>
                <div class="value">${phone || "Not provided"}</div>
              </div>
              <div class="field-group">
                <div class="label">Message</div>
                <div class="value-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              Received on ${formattedDate} IST &bull; Origami Studio Contact System
            </div>
          </div>
        </body>
      </html>
    `;

    const textContent = `
New Contact Inquiry - Origami Studio

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Received: ${formattedDate} IST

Message:
${message}
    `;

    await transporter.sendMail({
      from: `"Origami Studio Contact" <${smtpUser}>`,
      to: receiverEmail,
      replyTo: `"${name}" <${email}>`,
      subject: `New Inquiry from ${name} via Origami Studio`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error: unknown) {
    console.error("Error sending contact email:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Failed to send email.";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
