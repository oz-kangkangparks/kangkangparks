"use client";

import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function FluidGradient() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 60, stiffness: 100 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const transformX = useTransform(smoothMouseX, [-0.5, 0.5], [-100, 100]);
  const transformY = useTransform(smoothMouseY, [-0.5, 0.5], [-100, 100]);

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = event;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="absolute inset-0 overflow-hidden"
    >
      <motion.div
        className="w-[150%] h-[150%] absolute -left-[25%] -top-[25%]"
        style={{
          translateX: transformX,
          translateY: transformY,
        }}
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <filter
              id="fluid-filter"
              filterUnits="objectBoundingBox"
              x="0" y="0" width="100%" height="100%"
            >
              <motion.feTurbulence
                type="fractalNoise"
                baseFrequency="0.005"
                numOctaves="2"
                result="turbulence"
                animate={{
                  baseFrequency: [0.01, 0.005, 0.01],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
              <feGaussianBlur in="turbulence" stdDeviation="40" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="contrast"
              />
              <feBlend in="SourceGraphic" in2="contrast" />
            </filter>
            <linearGradient id="gradient" gradientTransform="rotate(45)">
              <stop offset="0%" stopColor="#ff00c3" />
              <stop offset="50%" stopColor="#00fff7" />
              <stop offset="100%" stopColor="#ff8a00" />
            </linearGradient>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#gradient)"
            filter="url(#fluid-filter)"
          />
        </svg>
      </motion.div>
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}