"use client";

import { motion } from "framer-motion";

const beams = [
  { x1: "0%",   y1: "0%",   x2: "55%",  y2: "100%", delay: 0 },
  { x1: "100%", y1: "0%",   x2: "45%",  y2: "100%", delay: 0.9 },
  { x1: "20%",  y1: "0%",   x2: "70%",  y2: "100%", delay: 1.8 },
  { x1: "80%",  y1: "0%",   x2: "30%",  y2: "100%", delay: 2.7 },
  { x1: "50%",  y1: "0%",   x2: "50%",  y2: "100%", delay: 3.6 },
  { x1: "10%",  y1: "0%",   x2: "90%",  y2: "100%", delay: 1.4 },
  { x1: "90%",  y1: "0%",   x2: "10%",  y2: "100%", delay: 2.2 },
];

export function BackgroundBeams({ className }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className ?? ""}`}
      aria-hidden
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {beams.map((_, i) => (
            <linearGradient
              key={i}
              id={`bg-beam-${i}`}
              x1={beams[i].x1}
              y1={beams[i].y1}
              x2={beams[i].x2}
              y2={beams[i].y2}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%"   stopColor="#01B673" stopOpacity="0" />
              <stop offset="40%"  stopColor="#01B673" stopOpacity="0.22" />
              <stop offset="60%"  stopColor="#02412C" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#02412C" stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>

        {beams.map((beam, i) => (
          <motion.line
            key={i}
            x1={beam.x1}
            y1={beam.y1}
            x2={beam.x2}
            y2={beam.y2}
            stroke={`url(#bg-beam-${i})`}
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.9, 0.9, 0],
            }}
            transition={{
              duration: 3.5,
              delay: beam.delay,
              repeat: Infinity,
              repeatDelay: beams.length * 0.9 - 3.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}
