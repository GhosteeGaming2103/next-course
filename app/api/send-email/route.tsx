import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const ressend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  ressend.emails.send({
    from: "...",
    to: "test@gmail.com",
    subject: "Welcome!",
    react: <WelcomeTemplate name="Josh" />,
  });
  return NextResponse.json({});
}
