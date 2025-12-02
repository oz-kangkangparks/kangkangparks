import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { constants } from 'crypto';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, email, message } = body;

    // Basic validation
    if (!name || !contact || !email || !message) {
      return NextResponse.json(
        { error: '모든 항목을 입력해주세요.' },
        { status: 400 }
      );
    }

    // Nodemailer transporter setup
    // Support for both Gmail service and custom SMTP
    const transporter = nodemailer.createTransport({
      ...(process.env.EMAIL_SERVICE
        ? { service: process.env.EMAIL_SERVICE }
        : {
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT) || 587,
            secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
            tls: {
              rejectUnauthorized: false,
              minVersion: 'TLSv1',
              secureOptions: constants.SSL_OP_LEGACY_SERVER_CONNECT, // Allow legacy renegotiation
              ciphers: 'DEFAULT@SECLEVEL=0', // Allow legacy signature algorithms
            },
          }),
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    } as any);

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'box@kangkangparks.com',
      subject: `[프로젝트 문의] ${name}님`,
      text: `
        이름: ${name}
        연락처: ${contact}
        이메일: ${email}
        
        내용
        ${message}
      `,
    };

    // Send email
    // Only attempt to send if credentials are provided, otherwise log for dev
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions);
    } else {
      console.log('Email credentials not found. Logging email content:', mailOptions);
    }

    return NextResponse.json({ message: '문의가 성공적으로 접수되었습니다.' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: '메일 발송 중 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
