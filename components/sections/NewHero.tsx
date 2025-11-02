'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    id: 1,
    title: '기업 · 기관\n웹사이트 제작',
    subtitle: 'Homepage',
    image: '/images/beonwh.webp',
    link: '/portfolio#beonwh'
  },
  {
    id: 2,
    title: '맞춤형\n웹 시스템 개발',
    subtitle: 'Web System',
    image: '/images/재고관리 (1).webp',
    link: '/portfolio#inventory'
  },
  {
    id: 3,
    title: 'AI 기반\nSaaS 플랫폼',
    subtitle: 'SaaS Platform',
    image: '/images/moapdf-main.webp',
    link: '/portfolio#moapdf'
  },
  {
    id: 4,
    title: '모바일 앱\n개발',
    subtitle: 'Mobile App',
    image: '/images/모아노벨 (1).webp',
    link: '/portfolio#moanovel'
  }
];

export default function NewHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-950">
      {/* Background Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content - Left Aligned */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                {/* Small label */}
                <p className="text-sm text-neutral-400 uppercase tracking-widest mb-6">
                  {heroSlides[currentSlide].subtitle}
                </p>

                {/* Main title */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-12 leading-tight whitespace-pre-line">
                  {heroSlides[currentSlide].title}
                </h1>

                {/* View Project Link */}
                <a
                  href={heroSlides[currentSlide].link}
                  className="inline-block group"
                >
                  <span className="text-lg text-white font-medium group-hover:text-neutral-300 transition-colors">
                    View Project
                  </span>
                  <div className="h-px bg-white w-0 group-hover:w-full transition-all duration-300 mt-1" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation - Right Side */}
      <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 z-20 flex flex-col items-end gap-8">
        {/* Slide Numbers */}
        <div className="flex flex-col items-end gap-6">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 font-bold ${
                currentSlide === index
                  ? 'text-white text-4xl'
                  : 'text-neutral-400 text-xl hover:text-neutral-300'
              }`}
            >
              {String(index + 1).padStart(2, '0')}
            </button>
          ))}
        </div>

        {/* Vertical Progress Bar */}
        <div className="w-0.5 h-40 bg-neutral-700 relative overflow-hidden">
          <motion.div
            key={currentSlide}
            className="absolute top-0 left-0 w-full bg-white"
            initial={{ height: '0%' }}
            animate={{ height: '100%' }}
            transition={{ duration: 5, ease: 'linear' }}
          />
        </div>

        {/* Navigation Arrows */}
        <div className="flex flex-col gap-3">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white transition-all"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
