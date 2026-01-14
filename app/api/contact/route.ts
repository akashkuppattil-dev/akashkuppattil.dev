import SibApiV3Sdk from "@getbrevo/brevo"
import { NextResponse } from "next/server"

const SENDER_EMAIL = "tombogy52@gmail.com"
const SENDER_NAME = "Akash"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const name = body.name?.trim()
    const email = body.email?.trim()
    const message = body.message?.trim()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()
    apiInstance.setApiKey(0, process.env.BREVO_API_KEY!)

    // 1. Send enquiry to you
    await apiInstance.sendTransacEmail({
      to: [{ email: SENDER_EMAIL }],
      sender: { email: SENDER_EMAIL, name: "Website Enquiry" },
      replyTo: { email, name },
      subject: "New Freelance Enquiry",
      htmlContent: `
        <h3>New Enquiry</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    })

    // 2. Auto-reply to client
    await apiInstance.sendTransacEmail({
      to: [{ email, name }],
      sender: { email: SENDER_EMAIL, name: "Akash" },
      subject: "Thanks for reaching out — I've received your enquiry",
      htmlContent: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out. I’ve received your message.</p>
        <p>I personally handle all projects and will get back to you within <strong>24 hours</strong>.</p>
        <p>Best regards,<br/><strong>Akash</strong></p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
