"use client";

import React, { useRef, useEffect } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  radius: number;
  color: string;
}

interface ShootingStar {
    x: number;
    y: number;
    len: number;
    speed: number;
    angle: number;
    life: number;
    maxLife: number;
}

interface StarfieldProps {
  starCount?: number;
  starColor?: string;
}

const Starfield: React.FC<StarfieldProps> = ({ starCount = 1000, starColor = 'white' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const animationFrameId = useRef<number>();

  const initStars = (canvas: HTMLCanvasElement) => {
    const newStars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * canvas.width,
        radius: Math.random() * 1.2,
        color: starColor,
      });
    }
    starsRef.current = newStars;
  };

  const animate = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const stars = starsRef.current;
    const starSpeed = 0.2;

    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];
      star.z -= starSpeed;

      if (star.z <= 0) {
        star.z = canvas.width;
        star.x = Math.random() * canvas.width - canvas.width / 2;
        star.y = Math.random() * canvas.height - canvas.height / 2;
      }

      const k = 128.0 / star.z;
      const px = star.x * k + canvas.width / 2;
      const py = star.y * k + canvas.height / 2;

      if (px >= 0 && px < canvas.width && py >= 0 && py < canvas.height) {
        const radius = star.radius * k;
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    if (Math.random() < 0.004 && shootingStarsRef.current.length < 5) {
        const angle = Math.random() * (Math.PI / 4) + (Math.PI / 8);
        shootingStarsRef.current.push({
            x: Math.random() * canvas.width * 0.6,
            y: Math.random() * canvas.height * 0.2,
            len: Math.random() * 60 + 20,
            speed: Math.random() * 8 + 7,
            angle: angle,
            life: 120,
            maxLife: 120,
        });
    }

    const shootingStars = shootingStarsRef.current;
    for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += s.speed * Math.cos(s.angle);
        s.y += s.speed * Math.sin(s.angle);
        s.life--;

        if (s.life <= 0 || s.x > canvas.width || s.y > canvas.height) {
            shootingStars.splice(i, 1);
            continue;
        }

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.len * Math.cos(s.angle), s.y - s.len * Math.sin(s.angle));
        ctx.strokeStyle = `rgba(255, 255, 255, ${s.life / s.maxLife})`;
        ctx.lineWidth = 2;
        ctx.stroke();
    }

    animationFrameId.current = requestAnimationFrame(() => animate(canvas, ctx));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
            const { width, height } = entry.contentRect;
            canvas.width = width;
            canvas.height = height;
            initStars(canvas);
        }
    });
    resizeObserver.observe(canvas);
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    initStars(canvas);
    animate(canvas, ctx);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      resizeObserver.disconnect();
    };
  }, [starCount, starColor]);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />;
};

export default Starfield;