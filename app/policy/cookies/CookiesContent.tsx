'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/Layout';

export default function CookiesContent() {
  return (
    <>
      <Section id="cookies-hero">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-pink-400 via-white to-cyan-400 bg-clip-text text-transparent">
                쿠키 정책
              </span>
            </h1>
            <p className="mt-6 text-lg text-neutral-400">
              최종 수정일: {new Date().getFullYear()}년 {new Date().getMonth() + 1}월 {new Date().getDate()}일
            </p>
          </motion.div>
        </div>
      </Section>

      <Section id="cookies-content">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-invert max-w-none"
          >
            <div className="space-y-8 text-neutral-300">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">1. 쿠키란?</h2>
                <p className="text-neutral-400 leading-relaxed">
                  쿠키는 웹사이트를 방문할 때 브라우저에 저장되는 작은 텍스트 파일입니다.
                  쿠키를 통해 웹사이트는 귀하의 방문 기록, 로그인 상태, 선호 설정 등을 기억할 수 있습니다.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">2. 쿠키 사용 목적</h2>
                <p className="text-neutral-400 leading-relaxed">
                  강강박스는 다음과 같은 목적으로 쿠키를 사용합니다:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4 text-neutral-400">
                  <li>로그인 상태 유지 및 인증</li>
                  <li>사용자 설정 및 선호도 저장</li>
                  <li>웹사이트 사용 분석 및 성능 개선</li>
                  <li>보안 및 사기 방지</li>
                  <li>맞춤형 콘텐츠 및 광고 제공</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">3. 쿠키의 종류</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">필수 쿠키</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      웹사이트 기본 기능을 제공하기 위해 반드시 필요한 쿠키입니다. 이 쿠키 없이는 서비스를 제공할 수 없습니다.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">기능 쿠키</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      사용자의 선호 설정을 기억하여 향상된 기능을 제공하는 쿠키입니다.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">분석 쿠키</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      웹사이트 방문자 수와 사용 패턴을 분석하여 서비스를 개선하는 데 사용됩니다.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">마케팅 쿠키</h3>
                    <p className="text-neutral-400 leading-relaxed">
                      사용자의 관심사에 맞는 광고를 제공하기 위해 사용됩니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">4. 쿠키 관리</h2>
                <p className="text-neutral-400 leading-relaxed">
                  대부분의 웹 브라우저는 쿠키를 자동으로 수락하도록 설정되어 있습니다.
                  브라우저 설정을 통해 쿠키를 차단하거나 쿠키가 설정될 때 경고를 받을 수 있습니다.
                </p>
                <div className="mt-4 space-y-2 text-neutral-400">
                  <p><strong className="text-white">Chrome:</strong> 설정 &gt; 개인정보 및 보안 &gt; 쿠키 및 기타 사이트 데이터</p>
                  <p><strong className="text-white">Firefox:</strong> 설정 &gt; 개인정보 보호 및 보안 &gt; 쿠키 및 사이트 데이터</p>
                  <p><strong className="text-white">Safari:</strong> 환경설정 &gt; 개인정보 보호 &gt; 쿠키 및 웹사이트 데이터</p>
                  <p><strong className="text-white">Edge:</strong> 설정 &gt; 쿠키 및 사이트 권한 &gt; 쿠키 및 사이트 데이터</p>
                </div>
                <p className="text-neutral-400 leading-relaxed mt-4">
                  단, 쿠키를 차단하면 일부 서비스 기능이 제한될 수 있습니다.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">5. 제3자 쿠키</h2>
                <p className="text-neutral-400 leading-relaxed">
                  당사 웹사이트는 분석 및 광고를 위해 Google Analytics, Facebook Pixel 등의 제3자 서비스를 사용할 수 있습니다.
                  이러한 서비스는 자체 쿠키를 설정할 수 있으며, 해당 제3자의 개인정보 처리방침이 적용됩니다.
                </p>
              </div>

              <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8">
                <h2 className="text-2xl font-bold mb-4 text-white">6. 문의</h2>
                <p className="text-neutral-400 leading-relaxed">
                  쿠키 정책에 대한 문의사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다.
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
