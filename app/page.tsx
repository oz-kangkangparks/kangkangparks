'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Shield, Zap, TerminalSquare, Globe, ExternalLink, ArrowRight } from 'lucide-react';
import { Section } from '@/components/Layout';
import Hero from '@/components/sections/Hero';

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntegrateSection />
      <DeveloperExperienceSection />
      <FeaturesGridSection />
      <TestimonialsSection />
    </>
  );
}

// Integrate Section - Code Editor Style
function IntegrateSection() {
  const [activeTab, setActiveTab] = useState<'nodejs' | 'react' | 'python' | 'rest'>('nodejs');

  const tabs: Array<{ id: 'nodejs' | 'react' | 'python' | 'rest'; label: string }> = [
    { id: 'nodejs', label: 'Node.js' },
    { id: 'react', label: 'React' },
    { id: 'python', label: 'Python' },
    { id: 'rest', label: 'REST API' },
  ];

  const codeExamples = {
    nodejs: `import { KangKangBox } from '@kangkangparks/sdk';

const kkb = new KangKangparks('kkb_xxxxxxxxx');

async function deployAIModel() {
  const { data, error } = await kkb.ai.deploy({
    model: 'gpt-4',
    endpoint: '/api/chat',
    config: {
      temperature: 0.7,
      maxTokens: 2000
    }
  });

  if (error) {
    return console.log(error);
  }

  console.log('Model deployed:', data);
}

deployAIModel();`,
    react: `import { useKangKangparks '@kangkangparks/react';

function AIChat() {
  const { sendMessage, messages, loading } = useKangKangparks();

  const handleSubmit = async (prompt) => {
    await sendMessage({
      model: 'gpt-4',
      prompt: prompt,
      stream: true
    });
  };

  return (
    <div>
      {messages.map((msg, i) => (
        <div key={i}>{msg.content}</div>
      ))}
    </div>
  );
}`,
    python: `from kangkangparks import KangKangparks

kkb = KangKangparks('kkb_xxxxxxxxx')

def analyze_data(data):
    result = kkb.ai.analyze(
        model='gpt-4',
        data=data,
        task='sentiment-analysis'
    )
    
    if result.error:
        print(result.error)
        return
    
    print(result.data)

analyze_data(sensor_data)`,
    rest: `curl -X POST https://api.kangkangparks.com/v1/ai/chat \\
  -H "Authorization: Bearer kkb_xxxxxxxxx" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4",
    "messages": [
      {
        "role": "user",
        "content": "Hello World"
      }
    ]
  }'`
  };

  return (
    <Section id="integrate">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            통합<span className="text-pink-400">하세요</span>
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            간단하고 우아한 인터페이스로 몇 분 안에 시작할 수 있습니다.
            <br />
            좋아하는 프로그래밍 언어의 SDK로 바로 코드에 적용하세요.
          </p>
        </motion.div>

        {/* Code Editor Style Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur overflow-hidden"
        >
          {/* Tabs */}
          <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900/80 px-4 py-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-neutral-800 text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Code Display */}
          <div className="p-6 font-mono text-sm overflow-x-auto">
            <pre className="text-neutral-300 leading-relaxed">
              {codeExamples[activeTab]}
            </pre>
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 flex items-center justify-center gap-6 text-sm"
        >
        </motion.div>
      </div>
    </Section>
  );
}

// Developer Experience Section
function DeveloperExperienceSection() {
  return (
    <Section id="developer-experience" band>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              First-class
            </span>{' '}
            <br className="sm:hidden" />
            developer experience
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto">
            우리는 다른 엔지니어를 위한 도구를 만드는 것을 좋아하는 엔지니어 팀입니다.
            <br />
            우리의 목표는 우리가 항상 원했던 플랫폼을 만드는 것입니다.
          </p>
        </motion.div>

        {/* Visual Animation Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-pink-500 to-cyan-500 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">빠른 통합</h3>
                  <p className="text-sm text-neutral-400">5분 안에 시작하세요</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-800/50">
                  <span className="text-neutral-400">설치</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-800/50">
                  <span className="text-neutral-400">설정</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-neutral-800/50">
                  <span className="text-neutral-400">배포</span>
                  <span className="text-green-400">✓</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">안전한 인프라</h3>
                  <p className="text-sm text-neutral-400">엔터프라이즈급 보안</p>
                </div>
              </div>
              <p className="text-sm text-neutral-400">
                SOC 2 Type II 인증, GDPR 준수, 전용 IP 및 도메인 모니터링으로 안전하게 구축하세요.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8"
          >
            <div className="space-y-4">
              <div className="text-2xl font-bold">Send</div>
              {[
                { id: '26abdd24', status: 200 },
                { id: 'cc3817db', status: 200 },
                { id: '4ea2f827', status: 200 },
                { id: '8e1d73b4', status: 200 },
              ].map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-4 rounded-xl bg-neutral-800/50 border border-neutral-700"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-green-400" />
                    <span className="font-mono text-sm text-neutral-400">HTTP {item.status}:</span>
                  </div>
                  <span className="font-mono text-xs text-neutral-500">id: {item.id.slice(0, 8)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

// Features Grid Section
function FeaturesGridSection() {
  const features = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: 'AI/ML 통합',
      description: 'LLM API, 음성 처리, 데이터 분석을 쉽게 통합하세요.'
    },
    {
      icon: <TerminalSquare className="h-5 w-5" />,
      title: 'IoT 플랫폼',
      description: '디바이스부터 클라우드까지 완벽한 IoT 솔루션을 제공합니다.'
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: '멀티 리전',
      description: '사용자와 가장 가까운 지역에서 빠르게 응답합니다.'
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: '엔터프라이즈 보안',
      description: 'SOC 2, GDPR 준수 및 전용 인프라로 안전하게.'
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: '개발자 친화적',
      description: '직관적인 API와 SDK로 빠른 개발이 가능합니다.'
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: '실시간 모니터링',
      description: '웹훅과 대시보드로 실시간 시스템 상태를 확인하세요.'
    },
  ];

  return (
    <Section id="features">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            스팸이 아닌 <span className="text-pink-400">실제 사용자</span>에게 도달하세요
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 hover:border-neutral-700 transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-cyan-500/20 flex items-center justify-center mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "강강박스는 놀라운 제품입니다. 전환하기가 너무 쉬웠습니다. 우리의 중요한 시스템이 강강박스와 함께라는 것을 알고 자신감을 느낍니다.",
      author: "김민수",
      role: "CEO at TechCorp",
      company: "TechCorp"
    },
    {
      quote: "Mailgun, Sendgrid를 사용해봤지만 강강박스의 개발자 경험 품질에는 미치지 못합니다.",
      author: "이지은",
      role: "CTO at StartupLab",
      company: "StartupLab"
    },
    {
      quote: "제품 통합 속도와 용이성이 놀라웠습니다. 주야를 불문하고 전문적인 지식과 끊임없는 지원이 정말 돋보였습니다.",
      author: "박준호",
      role: "Lead Developer at AI Solutions",
      company: "AI Solutions"
    },
  ];

  return (
    <Section id="testimonials" band>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            개발자들이 <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">사랑하는</span> 이유
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 flex flex-col"
            >
              <p className="text-sm text-neutral-300 leading-relaxed mb-6 flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-pink-500 to-cyan-500 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-neutral-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}