'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Code, ArrowRight } from 'lucide-react';
import { Container } from '@/components/Layout';

import apiClient from '@/lib/apiClient';

export default function ContactPage() {
  return (
    <div className="bg-neutral-950 text-white">
      <HeroSection />
      <ContactFormSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black via-neutral-900 to-black px-4 py-24 sm:px-6">
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-40 w-40 rounded-full bg-pink-500/20 blur-3xl" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-center"
      >
        <p className="text-xs uppercase tracking-[0.6em] text-neutral-400">
          contact us
        </p>
        <h1 className="mt-3 text-5xl font-bold leading-tight text-white md:text-7xl">
          어떤 프로젝트를 구상하고 계신가요?
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-300">
          당신의 아이디어가 현실이 되는 곳. 강강박스와 함께 시작해보세요.
        </p>
      </motion.div>
    </section>
  );
}

function ExampleBox() {
  const sample = `회사: (주)스타트업\n예상 예산: 3,000만 원\n요구사항: 신규 런칭하는 서비스의 랜딩 페이지와 관리자 페이지 개발을 의뢰합니다. 반응형 웹으로 제작을 원하며, 디자인은 내부에서 제공 가능합니다. 2개월 내 런칭을 목표로 하고 있습니다.`;
  const template = `회사: \n예상 예산: \n요구사항: `;
  
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 mb-8">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-semibold text-neutral-400">작성 예시</div>
        <button 
          type="button" 
          onClick={() => navigator.clipboard?.writeText(template)} 
          className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
        >
          <Code className="w-3 h-3" />
          예시 복사
        </button>
      </div>
      <pre className="whitespace-pre-wrap text-xs text-neutral-400 leading-relaxed font-mono bg-black/20 p-4 rounded-xl border border-neutral-800/50">{sample}</pre>
    </div>
  );
}

function ContactFormSection() {
  const [formState, setFormState] = React.useState({
    name: '',
    contact: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = React.useState({
    name: '',
    contact: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, contact, email, message } = formState;
    const newErrors = {
      name: '',
      contact: '',
      email: '',
      message: ''
    };
    let hasError = false;

    if (!name) {
      newErrors.name = '이름을 입력해주세요.';
      hasError = true;
    }

    if (!contact) {
      newErrors.contact = '연락처를 입력해주세요.';
      hasError = true;
    } else {
      const phoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
      if (!phoneRegex.test(contact)) {
        newErrors.contact = '올바른 휴대전화 번호 형식이 아닙니다. (예: 010-1234-5678)';
        hasError = true;
      }
    }

    if (!email) {
      newErrors.email = '이메일을 입력해주세요.';
      hasError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = '올바른 이메일 형식이 아닙니다.';
        hasError = true;
      }
    }

    if (!message) {
      newErrors.message = '프로젝트 내용을 입력해주세요.';
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await apiClient.post('/contact', {
        name,
        contact,
        email,
        message,
      });
      alert('문의가 성공적으로 접수되었습니다.');
      // Reset form
      setFormState({
        name: '',
        contact: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to submit contact form:', error);
      alert('문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-24">
      <div className="absolute top-1/2 left-0 h-96 w-96 -translate-y-1/2 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />
      
      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-xl p-8 md:p-12 shadow-2xl"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">프로젝트 문의</h2>
              <p className="text-neutral-400">
                구체적인 요구사항을 알려주시면 더 정확한 상담이 가능합니다.
              </p>
            </div>

            <ExampleBox />

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-400">이름</label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`w-full rounded-xl border bg-neutral-950/50 px-4 py-3 text-sm outline-none transition-all ${
                      errors.name 
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' 
                        : 'border-neutral-800 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20'
                    }`}
                    placeholder="홍길동"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 ml-1">{errors.name}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-400">연락처</label>
                  <input
                    type="text"
                    name="contact"
                    value={formState.contact}
                    onChange={handleChange}
                    className={`w-full rounded-xl border bg-neutral-950/50 px-4 py-3 text-sm outline-none transition-all ${
                      errors.contact 
                        ? 'border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' 
                        : 'border-neutral-800 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20'
                    }`}
                    placeholder="010-0000-0000"
                    disabled={isSubmitting}
                  />
                  {errors.contact && (
                    <p className="text-xs text-red-500 ml-1">{errors.contact}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400">이메일</label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  className={`w-full rounded-xl border bg-neutral-950/50 px-4 py-3 text-sm outline-none transition-all ${
                    errors.email 
                      ? 'border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' 
                      : 'border-neutral-800 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20'
                  }`}
                  placeholder="hello@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-xs text-red-500 ml-1">{errors.email}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-400">프로젝트 내용</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  className={`w-full rounded-xl border bg-neutral-950/50 px-4 py-4 text-sm outline-none transition-all min-h-[200px] resize-none ${
                    errors.message 
                      ? 'border-red-500/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' 
                      : 'border-neutral-800 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20'
                  }`}
                  placeholder="프로젝트의 목적, 일정, 예산 등 구체적인 내용을 적어주세요."
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-xs text-red-500 ml-1">{errors.message}</p>
                )}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-4 text-base font-bold text-white hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '전송 중...' : '문의하기'} <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}