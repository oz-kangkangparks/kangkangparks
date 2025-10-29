import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json()

    // 입력 검증
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: '필수 항목을 모두 입력해주세요.' },
        { status: 400 }
      )
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: '올바른 이메일 형식이 아닙니다.' },
        { status: 400 }
      )
    }

    // SMTP 설정
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // 이메일 내용
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'box@kangkangparks.com',
      subject: `[강강박스] ${name}님의 문의`,
      html: `
        <h2>새로운 문의가 접수되었습니다</h2>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        ${company ? `<p><strong>회사:</strong> ${company}</p>` : ''}
        <p><strong>메시지:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
      text: `
        새로운 문의가 접수되었습니다

        이름: ${name}
        이메일: ${email}
        ${company ? `회사: ${company}` : ''}
        메시지:
        ${message}
      `,
    }

    // 이메일 전송
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json(
      { error: '이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.' },
      { status: 500 }
    )
  }
}
