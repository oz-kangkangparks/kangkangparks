import { NextResponse } from "next/server"

export async function POST(req: Request){
  const form = await req.formData()
  // TODO: 이메일 발송 또는 DB 저장 로직 연동 (SendGrid, SES, Supabase 등)
  console.log("CONTACT_FORM", Object.fromEntries(form.entries()))
  return NextResponse.json({ ok:true })
}
