'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/Layout';

export default function PrivacyPage() {
  return (
    <>
      <Section id="privacy-hero">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-pink-400 via-white to-cyan-400 bg-clip-text text-transparent">
                개인정보처리방침
              </span>
            </h1>
            <p className="mt-6 text-lg text-neutral-400">
              최종 수정일: {new Date().getFullYear()}년 {new Date().getMonth() + 1}월 {new Date().getDate()}일
            </p>
          </motion.div>
        </div>
      </Section>

      <Section id="privacy-content">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none"
          >
            <div className="space-y-8 text-neutral-300">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">1. 수집하는 개인정보 항목</h2>
                <p className="text-neutral-400 leading-relaxed">
                  강강박스는 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-neutral-400">
                  <li>필수항목: 이름, 이메일 주소, 연락처</li>
                  <li>선택항목: 회사명, 부서, 직책</li>
                  <li>서비스 이용 과정에서 자동으로 생성되는 정보: IP 주소, 쿠키, 접속 로그</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">2. 개인정보의 수집 및 이용 목적</h2>
                <p className="text-neutral-400 leading-relaxed">
                  수집한 개인정보는 다음의 목적을 위해 활용됩니다:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-neutral-400">
                  <li>서비스 제공 및 계약 이행</li>
                  <li>회원 관리 및 본인 확인</li>
                  <li>고객 문의 및 불만 처리</li>
                  <li>신규 서비스 개발 및 마케팅 활용</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">3. 개인정보의 보유 및 이용 기간</h2>
                <p className="text-neutral-400 leading-relaxed">
                  회사는 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                  단, 관련 법령에 의해 보존할 필요가 있는 경우 일정 기간 보관합니다.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">4. 개인정보의 제3자 제공</h2>
                <p className="text-neutral-400 leading-relaxed">
                  회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.
                  다만, 아래의 경우에는 예외로 합니다:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-neutral-400">
                  <li>이용자가 사전에 동의한 경우</li>
                  <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">5. 이용자의 권리</h2>
                <p className="text-neutral-400 leading-relaxed">
                  이용자는 언제든지 자신의 개인정보를 조회하거나 수정할 수 있으며, 수집·이용에 대한 동의 철회(회원 탈퇴)를 요청할 수 있습니다.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">6. 문의</h2>
                <p className="text-neutral-400 leading-relaxed">
                  개인정보 처리방침에 대한 문의사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다.
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
