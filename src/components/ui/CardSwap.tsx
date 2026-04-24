"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

export interface CardItem {
  id: string | number;
}

interface CardSwapProps<T extends CardItem> {
  cards: T[];
  renderCard: (card: T, isActive: boolean) => React.ReactNode;
  cardHeight?: number;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

const MAX_VISIBLE = 3;

export function CardSwap<T extends CardItem>({
  cards,
  renderCard,
  cardHeight = 260,
  autoPlay = true,
  interval = 4000,
  className = "",
}: CardSwapProps<T>) {
  const [front, setFront] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => {
    setFront(n => (n + 1) % cards.length);
  }, [cards.length]);

  useEffect(() => {
    if (!autoPlay || cards.length < 2) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [autoPlay, interval, next, cards.length]);

  const peek = (MAX_VISIBLE - 1) * 18;

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none ${className}`}
      style={{ height: cardHeight + peek }}
      onClick={next}
    >
      {cards.map((card, i) => {
        const depth = (i - front + cards.length) % cards.length;
        if (depth >= MAX_VISIBLE) return null;
        return (
          <motion.div
            key={card.id}
            className="absolute inset-x-0 cursor-pointer"
            style={{ height: cardHeight, top: 0 }}
            animate={{
              scale: 1 - depth * 0.04,
              y: depth * 18,
              opacity: depth === 0 ? 1 : depth === 1 ? 0.5 : 0.22,
              zIndex: MAX_VISIBLE - depth,
            }}
            transition={{ duration: 0.52, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderCard(card, depth === 0)}
          </motion.div>
        );
      })}
    </div>
  );
}
