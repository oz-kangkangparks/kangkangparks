'use client'

import React, { useRef, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';
import {
  makeParticles,
  drawGradient,
  drawGradientBlack,
  drawBlob,
  drawBlobMono,
  drawParticles,
  drawParticlesMono,
  drawScanlines,
} from './HeroDrawing';

export function Canvas2DHeroScene({ variant = 'color' }: { variant?: 'color' | 'black' }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLCanvasElement | null>(null);
  
  useEffect(() => {
    const canvas = ref.current; 
    if (!canvas) return;
    
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    const ctx = canvas.getContext('2d'); 
    if (!ctx) return;
    
    let raf = 0, width = 0, height = 0;
    const particles = makeParticles(900, 6);
    
    function handleResize() {
      if (!canvas || !ctx) return;
      const { clientWidth, clientHeight } = canvas.parentElement || document.body;
      width = clientWidth;
      height = clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function frame(t: number) {
      if (!ctx) return;
      const time = t / 1000;
      ctx.clearRect(0, 0, width, height);
      const isBlack = variant === 'black';
      
      if (isBlack) {
        drawGradientBlack(ctx, width, height, time);
      } else {
        drawGradient(ctx, width, height, time);
      }
      
      const cx = width / 2, cy = height / 2;
      const baseR = Math.min(width, height) * 0.22;
      const rot = time * (reduced ? 0 : 0.35);
      
      if (isBlack) {
        drawBlobMono(ctx, cx, cy, baseR, rot);
      } else {
        drawBlob(ctx, cx, cy, baseR, rot, { 
          hue: 320, 
          sat: 0.8, 
          light: 0.65, 
          alpha: 0.9, 
          wobbleAmp: 0.18, 
          wobbleFreq: 3.2 
        });
      }
      
      if (isBlack) {
        drawParticlesMono(ctx, particles, cx, cy, time, reduced ? 0 : 0.22);
      } else {
        drawParticles(ctx, particles, cx, cy, time, reduced ? 0 : 0.25);
      }
      
      if (isBlack) {
        drawScanlines(ctx, width, height, time);
      }
      
      raf = requestAnimationFrame(frame);
    }
    
    const ro = new ResizeObserver(handleResize);
    ro.observe(canvas.parentElement || canvas);
    handleResize();
    raf = requestAnimationFrame(frame);
    
    return () => { 
      cancelAnimationFrame(raf); 
      ro.disconnect(); 
    };
  }, [reduced, variant]);
  
  return <canvas ref={ref} className="h-full w-full" />;
}

