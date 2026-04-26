"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export interface ParallaxProduct {
  title: string;
  category: string;
  accent: string;
  image: string;
  tags?: string[];
}

interface HeroParallaxProps {
  products: ParallaxProduct[];
  header: React.ReactNode;
  isRTL?: boolean;
}

export function HeroParallax({ products, header, isRTL = false }: HeroParallaxProps) {
  const firstRow  = products.slice(0, 5);
  const secondRow = products.slice(5, 10);

  const [dims, setDims] = React.useState({ mobile: false, tablet: false });

  React.useEffect(() => {
    const update = () => setDims({ mobile: window.innerWidth < 640, tablet: window.innerWidth < 1024 });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const yStart = dims.mobile ? -180 : dims.tablet ? -400 : -700;
  const yEnd   = dims.mobile ?  80  : dims.tablet ?  200 :  500;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX        = useSpring(useTransform(scrollYProgress, [0, 1], [0, isRTL ? -1000 :  1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, isRTL ?  1000 : -1000]), springConfig);
  const rotateX           = useSpring(useTransform(scrollYProgress, [0, 0.2], [15,    0]), springConfig);
  const opacity           = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2,   1]), springConfig);
  const rotateZ           = useSpring(useTransform(scrollYProgress, [0, 0.2], [20,    0]), springConfig);
  const translateY        = useSpring(useTransform(scrollYProgress, [0, 0.2], [yStart, yEnd]), springConfig);

  return (
    <div
      ref={ref}
      className="overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] h-[800px] sm:h-[1200px] md:h-[1800px]"
    >
      {/* Header */}
      <div className="max-w-7xl relative mx-auto py-14 px-6 w-full">
        {header}
      </div>

      {/* 2 scrolling rows */}
      <motion.div style={{ rotateX, rotateZ, translateY, opacity }}>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 sm:space-x-14 md:space-x-20 mb-20">
          {firstRow.map((p, i) => (
            <ProductCard key={`r1-${i}`} product={p} translate={translateX} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-8 sm:space-x-14 md:space-x-20">
          {secondRow.map((p, i) => (
            <ProductCard key={`r2-${i}`} product={p} translate={translateXReverse} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

function ProductCard({
  product,
  translate,
}: {
  product: ParallaxProduct;
  translate: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{ x: translate }}
      className="flex-shrink-0 relative overflow-hidden group cursor-pointer w-48 h-32 sm:w-72 sm:h-52 md:w-[36rem] md:h-[26rem]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.image}
        alt=""
        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Dark vignette overlay on hover */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500" />

      {/* Bottom gradient + text reveal */}
      <div
        className="absolute bottom-0 left-0 right-0 flex flex-col justify-end px-6 py-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)", paddingTop: "4rem" }}
      >
        <p className="font-display text-white font-semibold text-base leading-snug mb-0.5">
          {product.title}
        </p>
        <p className="font-mono text-[0.58rem] tracking-[0.15em] uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>
          {product.category}
        </p>
      </div>

    </motion.div>
  );
}
