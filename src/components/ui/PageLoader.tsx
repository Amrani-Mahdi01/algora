"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = ["A", "L", "G", "O", "R", "A"];

export default function PageLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let loaded = false;
    let timerDone = false;

    const tryHide = () => {
      if (loaded && timerDone) {
        setShow(false);
        document.body.style.overflow = "";
      }
    };

    if (document.readyState === "complete") {
      loaded = true;
    } else {
      window.addEventListener("load", () => { loaded = true; tryHide(); }, { once: true });
    }

    const t = setTimeout(() => { timerDone = true; tryHide(); }, 2400);

    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ backgroundColor: "#070707" }}
        >
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Ambient glow behind logo */}
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)",
              filter: "blur(60px)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          <div className="relative flex flex-col items-center gap-6">
            {/* SVG logo */}
            <motion.svg
              viewBox="0 0 32 32"
              fill="none"
              className="w-14 h-14"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              {/* Triangle outline draws in */}
              <motion.path
                d="M16 3L29 27H3L16 3Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
                fill="rgba(255,255,255,0.04)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              />
              {/* Horizontal bar draws in after triangle */}
              <motion.path
                d="M10 20H22"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeOut", delay: 0.9 }}
              />
            </motion.svg>

            {/* ALGORA letters stagger in */}
            <div className="flex items-center gap-[0.08em]">
              {LETTERS.map((letter, i) => (
                <motion.span
                  key={i}
                  className="font-display text-white text-[1.35rem] tracking-[0.22em] uppercase select-none"
                  style={{ fontWeight: 700 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.95 + i * 0.065,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Progress bar */}
            <motion.div
              className="relative w-16 h-px overflow-hidden"
              style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-y-0 left-0 h-full"
                style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
