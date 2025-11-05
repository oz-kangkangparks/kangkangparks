"use client";

import React, { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';

const STAR_COUNT = 600;
const INTERACTIVE_PARTICLE_COUNT = 300;
const CONNECTION_RADIUS = 120;
const MOUSE_RADIUS = 180;

interface Particle {
  type: 'star' | 'interactive';
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseVx: number;
  baseVy: number;
  radius: number;
  targetRadius?: number;
  color?: string;
  alpha?: number;
  twinkleSpeed?: number;
  twinklePhase?: number;
}

export interface ParticleConstellationHandle {
    triggerWhoosh: (direction: 'left' | 'right') => void;
}

const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t;

const ParticleConstellation = forwardRef<ParticleConstellationHandle, {}>((props, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useImperativeHandle(ref, () => ({
    triggerWhoosh(direction) {
        const boost = direction === 'right' ? 20 : -20;
        particlesRef.current.forEach(p => {
            if (p.type === 'star') {
                p.vx += boost;
            }
        });
    }
  }));

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      particlesRef.current = [];
      const colors = ["#00c3ff", "#ff00c3", "#00ff8a"];

      for (let i = 0; i < STAR_COUNT; i++) {
        const vx = (Math.random() - 0.5) * 0.4;
        const vy = (Math.random() - 0.5) * 0.4;
        particlesRef.current.push({
          type: 'star',
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: vx, baseVx: vx,
          vy: vy, baseVy: vy,
          radius: Math.random() * 2.2 + 0.3,
          twinkleSpeed: Math.random() * 0.01 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
        });
      }

      for (let i = 0; i < INTERACTIVE_PARTICLE_COUNT; i++) {
        const vx = (Math.random() - 0.5) * 0.3;
        const vy = (Math.random() - 0.5) * 0.3;
        const baseRadius = 0.1;
        particlesRef.current.push({
          type: 'interactive',
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: vx, baseVx: vx,
          vy: vy, baseVy: vy,
          radius: baseRadius,
          targetRadius: baseRadius,
          color: colors[i % colors.length],
          alpha: 0,
        });
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(p => {
        if (p.type === 'star') {
            p.vx = lerp(p.vx, p.baseVx, 0.025);
            p.vy = lerp(p.vy, p.baseVy, 0.05);
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        if (p.type === 'star') {
          const twinkleValue = (Math.sin(p.twinklePhase! += p.twinkleSpeed!) + 1) / 2;
          const alpha = lerp(0.2, 0.7, twinkleValue);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fill();
        } else { // interactive
          const distToMouse = Math.hypot(p.x - mouseRef.current.x, p.y - mouseRef.current.y);
          const intensity = 1 - Math.min(distToMouse / MOUSE_RADIUS, 1);
          
          p.targetRadius = lerp(0.1, 4.0, intensity);
          p.radius = lerp(p.radius, p.targetRadius, 0.08);
          p.alpha = lerp(0, 0.9, intensity);

          if (p.alpha! > 0.01) {
            ctx.beginPath();
            const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
            gradient.addColorStop(0, `rgba(255, 255, 255, ${p.alpha})`);
            gradient.addColorStop(0.5, `rgba(${parseInt(p.color!.slice(1,3),16)}, ${parseInt(p.color!.slice(3,5),16)}, ${parseInt(p.color!.slice(5,7),16)}, ${p.alpha! * 0.7})`);
            gradient.addColorStop(1, `rgba(${parseInt(p.color!.slice(1,3),16)}, ${parseInt(p.color!.slice(3,5),16)}, ${parseInt(p.color!.slice(5,7),16)}, 0)`);
            ctx.fillStyle = gradient;
            ctx.arc(p.x, p.y, p.radius * 2.0, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      const interactiveParticles = particlesRef.current.filter(p => p.type === 'interactive');
      for (let i = 0; i < interactiveParticles.length; i++) {
        for (let j = i + 1; j < interactiveParticles.length; j++) {
          const p1 = interactiveParticles[i];
          const p2 = interactiveParticles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (dist < CONNECTION_RADIUS) {
            const lineIntensity = Math.max(p1.alpha!, p2.alpha!);
            if (lineIntensity > 0.1) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${lineIntensity * (1 - dist / CONNECTION_RADIUS) * 0.7})`;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full bg-black" />;
});

ParticleConstellation.displayName = "ParticleConstellation";
export default ParticleConstellation;