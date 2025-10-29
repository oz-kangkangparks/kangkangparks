'use client'

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function LogoConnected({ size = 28, amp = 3, period = 2.2 }) {
  const reduced = useReducedMotion();
  const boxes = [2, 18, 34];
  const wave = reduced ? [0] : [0, -amp, 0, amp, 0];
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-label="강강박스 로고" role="img">
      <defs>
        <linearGradient id="kkb-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <motion.path d="M14 24 H18" stroke="url(#kkb-grad)" strokeWidth="2" strokeLinecap="round"
        strokeDasharray="6 6" animate={{ strokeDashoffset: reduced ? 0 : [0, -12] }}
        transition={{ duration: reduced ? 0 : 2, repeat: Infinity, ease: 'linear' }} />
      <motion.path d="M30 24 H34" stroke="url(#kkb-grad)" strokeWidth="2" strokeLinecap="round"
        strokeDasharray="6 6" animate={{ strokeDashoffset: reduced ? 0 : [0, -12] }}
        transition={{ duration: reduced ? 0 : 2, repeat: Infinity, ease: 'linear', delay: reduced ? 0 : 0.15 }} />
      {boxes.map((x, i) => (
        <motion.rect key={x} x={x} y={18} width={12} height={12} rx={2} fill="url(#kkb-grad)"
          animate={{ y: wave }}
          transition={{ duration: reduced ? 0 : period, repeat: Infinity, ease: 'easeInOut', delay: reduced ? 0 : i * 0.15 }} />
      ))}
    </svg>
  );
}