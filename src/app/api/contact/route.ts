import { NextResponse } from "next/server";
import { writeClient } from "../../../../sanity/lib/writeClient";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1️⃣ Save message to Sanity
    await writeClient.create({
      _type: "contactMessage",
      name,
      email,
      message,
      submittedAt: new Date().toISOString(),
    });

    // 2️⃣ Send admin notification email (FINANCIAL)
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,              // verified sender
      to: process.env.EMAIL_TO!,                  // info@1stcalluk.financial
      subject: `New Financial Enquiry from ${name}`,
      text: `
A new financial enquiry has been submitted on your website.

Name: ${name}
Email: ${email}

Message:
${message}

Received: ${new Date().toLocaleString()}
      `.trim(),
    });

    // 3️⃣ Auto-reply email to the user (FINANCIAL)
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: email,
      subject: "We have received your enquiry",
      text: `
Hi ${name},

Thank you for contacting 1st Call UK Financial Services.

We have received your enquiry and one of our financial advisers
will respond within two working days.

Your message:
${message}

Kind regards,
1st Call UK Financial Services
      `.trim(),
    });

    // 4️⃣ Respond to frontend
    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("❌ Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
