import nodemailer from "nodemailer"

let transporter: nodemailer.Transporter | null = null

export function getMailer() {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })
  }
  return transporter
}

export interface EmailOptions {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendEmail(options: EmailOptions) {
  const mailer = getMailer()

  if (!process.env.EMAIL_USER) {
    throw new Error("EMAIL_USER environment variable is not set")
  }

  return mailer.sendMail({
    from: process.env.EMAIL_USER,
    ...options,
  })
}
