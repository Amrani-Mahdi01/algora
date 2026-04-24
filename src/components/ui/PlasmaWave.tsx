"use client";

import { useEffect, useRef } from "react";

interface PlasmaWaveProps {
  className?: string;
  speed?: number;
  opacity?: number;
}

export default function PlasmaWave({
  className = "",
  speed = 1,
  opacity = 1,
}: PlasmaWaveProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    // Brand green #01B673 = rgb(1,182,115)
    // Dark green  #02412C = rgb(2,65,44)
    const blobs = [
      { dx: 0.5,  dy: 0.35, px: 0.25, py: 0.30, r: 0.58, color: [1,  182, 115, 0.32] },
      { dx: -0.4, dy: 0.6,  px: 0.70, py: 0.65, r: 0.65, color: [2,  65,  44,  0.45] },
      { dx: 0.7,  dy: -0.5, px: 0.50, py: 0.75, r: 0.52, color: [0,  210, 130, 0.22] },
      { dx: -0.6, dy: -0.4, px: 0.80, py: 0.25, r: 0.60, color: [1,  182, 115, 0.28] },
      { dx: 0.3,  dy: 0.8,  px: 0.18, py: 0.55, r: 0.50, color: [5,  120, 80,  0.35] },
      { dx: -0.5, dy: 0.3,  px: 0.55, py: 0.20, r: 0.45, color: [0,  255, 160, 0.15] },
    ];

    const draw = () => {
      if (!canvas || !ctx) return;
      const { width: w, height: h } = canvas;

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#070707";
      ctx.fillRect(0, 0, w, h);

      blobs.forEach((b, i) => {
        const phase = t * speed + i * 1.05;
        const x = (b.px + Math.sin(phase * b.dx) * 0.32) * w;
        const y = (b.py + Math.cos(phase * b.dy) * 0.26) * h;
        const r = b.r * Math.min(w, h);

        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        const [cr, cg, cb, ca] = b.color;
        grad.addColorStop(0,    `rgba(${cr},${cg},${cb},${ca})`);
        grad.addColorStop(0.45, `rgba(${cr},${cg},${cb},${ca * 0.5})`);
        grad.addColorStop(1,    `rgba(${cr},${cg},${cb},0)`);

        ctx.globalCompositeOperation = "screen";
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      });

      ctx.globalCompositeOperation = "source-over";
      t += 0.0025;
      animId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ opacity, filter: "blur(48px)" }}
    />
  );
}
