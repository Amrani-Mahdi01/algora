"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface InfiniteMovingCardsProps {
  children: ReactNode[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}

const speedMap = { slow: "60s", normal: "35s", fast: "20s" };

export function InfiniteMovingCards({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLUListElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !innerRef.current) return;
    // Clone children for seamless loop
    const items = Array.from(innerRef.current.children);
    items.forEach((item) => {
      const clone = item.cloneNode(true);
      innerRef.current?.appendChild(clone);
    });
    containerRef.current.style.setProperty("--duration", speedMap[speed]);
    containerRef.current.style.setProperty(
      "--direction",
      direction === "left" ? "normal" : "reverse"
    );
    setReady(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={innerRef}
        className={cn(
          "flex gap-5 py-2 w-max",
          ready && "animate-[scroll_var(--duration)_linear_infinite_var(--direction)]",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children.map((child, i) => (
          <li key={i} className="flex-shrink-0">
            {child}
          </li>
        ))}
      </ul>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
