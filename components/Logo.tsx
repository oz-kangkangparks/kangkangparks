"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export function LogoConnected({ size = 28, amp = 3, period = 2.2 }) {
    const reduced = useReducedMotion();
    const boxes = [2, 18, 34];
    const wave = reduced ? [0] : [0, -amp, 0, amp, 0];
    return <img src="/images/logo.png" className="w-[7rem]"></img>;
}
