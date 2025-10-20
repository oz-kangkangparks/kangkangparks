import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request){
  try {
    const form = await req.formData()
    const data = Object.fromEntries(form.entries())
    
    console.log("CONTACT_FORM", data)

    // Nodemailer transporter 설정
    // 환경 변수로 SMTP 설정을 관리하는 것을 권장합니다
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // 발신 이메일
        pass: process.env.SMTP_PASS, // 앱 비밀번호
      },
    })

    // 이메일 내용 구성
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: "contact@kangkangparks.com",
      subject: `[강강박스] 새로운 문의 - ${data.name}`,
      html: `
        <h2>새로운 상담 문의가 접수되었습니다</h2>
        <hr/>
        <p><strong>이름:</strong> ${data.name}</p>
        <p><strong>이메일:</strong> ${data.email}</p>
        <p><strong>연락처:</strong> ${data.phone}</p>
        <p><strong>회사:</strong> ${data.company || "미기재"}</p>
        <p><strong>프로젝트 유형:</strong> ${data.type}</p>
        <p><strong>예상 예산:</strong> ${data.budget || "미기재"}</p>
        <hr/>
        <p><strong>요청 내용:</strong></p>
        <p>${String(data.message).replace(/\n/g, '<br/>')}</p>
      `,
      replyTo: String(data.email),
    }

    // 이메일 발송 (환경 변수가 설정되어 있을 때만)
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions)
      console.log("Email sent successfully to contact@kangkangparks.com")
    } else {
      console.warn("SMTP credentials not configured. Email not sent.")
      console.log("To enable email sending, set SMTP_USER and SMTP_PASS environment variables.")
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ ok: false, error: "Failed to send message" }, { status: 500 })
  }
}
