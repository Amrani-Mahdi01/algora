"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface MovingBorderProps {
  children: ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  glowColor?: string;
}

export function MovingBorder({
  children,
  duration = 3000,
  className,
  containerClassName,
  glowColor = "#01B673",
}: MovingBorderProps) {
  const pathRef = useRef<SVGRectElement | null>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMs = length / duration;
      progress.set((time * pxPerMs) % length);
    }
  });

  const x = useTransform(
    progress,
    (v) => pathRef.current?.getPointAtLength(v).x ?? 0
  );
  const y = useTransform(
    progress,
    (v) => pathRef.current?.getPointAtLength(v).y ?? 0
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <div className={cn("relative overflow-hidden p-[1px]", containerClassName)}>
      {/* Path tracker — invisible */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" fill="none">
          <rect ref={pathRef} rx="0" width="100%" height="100%" />
        </svg>
        {/* Orbiting glow dot */}
        <motion.div
          className="absolute top-0 left-0 h-24 w-24"
          style={{
            transform,
            background: `radial-gradient(ellipse at center, ${glowColor} 0%, rgba(1,182,115,0.3) 40%, transparent 65%)`,
            opacity: 0.55,
          }}
        />
      </div>

      {/* Very faint border underneath */}
      <div
        className="absolute inset-0"
        style={{ border: "1px solid rgba(1,182,115,0.15)" }}
      />

      {/* Actual card content */}
      <div className={cn("relative", className)}>
        {children}
      </div>
    </div>
  );
}
