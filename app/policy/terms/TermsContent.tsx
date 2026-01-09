'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/Layout';

export default function TermsContent() {
  return (
    <>
      <Section id="terms-hero">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-pink-400 via-white to-cyan-400 bg-clip-text text-transparent">
                이용약관
              </span>
            </h1>
            <p className="mt-6 text-lg text-neutral-400">
              최종 수정일: {new Date().getFullYear()}년 {new Date().getMonth() + 1}월 {new Date().getDate()}일
            </p>
          </motion.div>
        </div>
      </Section>

      <Section id="terms-content">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none"
          >
            <div className="space-y-8 text-neutral-300">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">제1조 (목적)</h2>
                <p className="text-neutral-400 leading-relaxed">
                  본 약관은 강강박스(이하 "회사")가 제공하는 AI·IoT·소프트웨어 서비스(이하 "서비스")의 이용과 관련하여
                  회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">제2조 (정의)</h2>
                <ul className="list-disc list-inside space-y-2 text-neutral-400">
                  <li>"서비스"란 회사가 제공하는 모든 온라인 서비스를 의미합니다.</li>
                  <li>"이용자"란 본 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>
                  <li>"회원"이란 회사와 서비스 이용계약을 체결하고 이용자 아이디를 부여받은 자를 말합니다.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">제3조 (약관의 게시와 개정)</h2>
                <p className="text-neutral-400 leading-relaxed">
                  회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.
                  회사는 약관의 규제에 관한 법률, 전자거래기본법 등 관련법을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">제4조 (서비스의 제공 및 변경)</h2>
                <p className="text-neutral-400 leading-relaxed">
                  회사는 다음과 같은 서비스를 제공합니다:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-neutral-400">
                  <li>AI/ML 통합 서비스</li>
                  <li>IoT 플랫폼 서비스</li>
                  <li>클라우드 인프라 서비스</li>
                  <li>소프트웨어 개발 서비스</li>
                  <li>기타 회사가 추가 개발하거나 다른 회사와의 제휴 계약 등을 통해 제공하는 일체의 서비스</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">제5조 (이용자의 의무)</h2>
                <p className="text-neutral-400 leading-relaxed">
                  이용자는 다음 행위를 하여서는 안 됩니다:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-neutral-400">
                  <li>신청 또는 변경 시 허위 내용의 등록</li>
                  <li>타인의 정보 도용</li>
                  <li>회사가 게시한 정보의 변경</li>
                  <li>회사가 정한 정보 이외의 정보 등의 송신 또는 게시</li>
                  <li>회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                  <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">제6조 (면책조항)</h2>
                <p className="text-neutral-400 leading-relaxed">
                  회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
                  회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">제7조 (문의)</h2>
                <p className="text-neutral-400 leading-relaxed">
                  이용약관에 대한 문의사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다.
                </p>
                <p className="mt-4 text-pink-400">
                  이메일: box@kangkangparks.com
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
