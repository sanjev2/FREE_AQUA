import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function validatePhoneNumber(phone: string): boolean {
  return phone.trim().length > 0 && /^[\d\s\-+()]+$/.test(phone)
}

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  contactNumber: string
  message?: string
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type")
    console.log("[v0] Content-Type:", contentType)

    if (!contentType || !contentType.includes("application/json")) {
      return NextResponse.json({ error: "Content-Type must be application/json" }, { status: 400 })
    }

    const body: ContactFormData = await request.json()
    console.log("[v0] Form data received:", body)

    if (!body.firstName?.trim()) {
      return NextResponse.json({ error: "First name is required" }, { status: 400 })
    }

    if (!body.lastName?.trim()) {
      return NextResponse.json({ error: "Last name is required" }, { status: 400 })
    }

    if (!body.email?.trim() || !validateEmail(body.email)) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    if (!body.contactNumber?.trim() || !validatePhoneNumber(body.contactNumber)) {
      return NextResponse.json({ error: "Valid contact number is required" }, { status: 400 })
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log(
        "[v0] Email config missing - EMAIL_USER:",
        !!process.env.EMAIL_USER,
        "EMAIL_PASS:",
        !!process.env.EMAIL_PASS,
      )
      return NextResponse.json(
        { error: "Email service is not configured. Please check environment variables." },
        { status: 500 },
      )
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const emailContent = `
      <h2>New Marketing Partnership Request</h2>
      <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Contact Number:</strong> ${body.contactNumber}</p>
      <p><strong>Message:</strong></p>
      <p>${body.message ? body.message.replace(/\n/g, "<br>") : "No message provided"}</p>
      <hr>
      <p><em>Submitted on ${new Date().toLocaleString()}</em></p>
    `

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Free Aqua Partnership Request - ${body.firstName} ${body.lastName}`,
      html: emailContent,
      replyTo: body.email,
    })

    console.log("[v0] Email sent successfully")
    return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Contact form error:", error)

    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: "Invalid JSON format" }, { status: 400 })
    }

    return NextResponse.json({ error: "Failed to send request. Please try again later." }, { status: 500 })
  }
}
