"use client";

import React, { useEffect, useRef } from "react";

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export function PhysicsNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -2000, y: -2000, isHovered: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const onResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", onResize);

    const count = 56;
    const nodes: NodePoint[] = [];

    for (let i = 0; i < count; i++) {
      const x = width * 0.35 + (Math.random() - 0.1) * (width * 0.65);
      const y = height * 0.08 + Math.random() * (height * 0.85);
      nodes.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 0.9,
      });
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.isHovered = true;
    };

    const onMouseLeave = () => {
      mouseRef.current.isHovered = false;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const targetLogoX = () => width * 0.78;
    const targetLogoY = () => height * 0.34;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const tX = targetLogoX();
      const tY = targetLogoY();

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Gravitational attraction toward Logo Coordinates
        const ldx = tX - n.x;
        const ldy = tY - n.y;
        const lDist = Math.hypot(ldx, ldy) + 40;
        n.vx += (ldx / lDist) * 0.045;
        n.vy += (ldy / lDist) * 0.045;

        // Cursor repulsion & vortex swirl
        if (mouseRef.current.isHovered) {
          const mdx = n.x - mouseRef.current.x;
          const mdy = n.y - mouseRef.current.y;
          const mDist = Math.hypot(mdx, mdy);
          if (mDist < 170) {
            const force = (1 - mDist / 170) * 1.6;
            n.vx += (mdx / mDist) * force * 1.5;
            n.vy += (mdy / mDist) * force * 1.5;
            n.vx += (-mdy / mDist) * force * 0.6;
            n.vy += (mdx / mDist) * force * 0.6;
          }
        }

        n.vx *= 0.965;
        n.vy *= 0.965;
        n.x += n.vx;
        n.y += n.vy;

        // Particle core rendering
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.fill();

        // Connect beam to logo
        const distToLogo = Math.hypot(n.x - tX, n.y - tY);
        if (distToLogo < 250) {
          const alpha = (1 - distToLogo / 250) * 0.24;
          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(tX, tY);
          ctx.strokeStyle = `rgba(200, 225, 255, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }

        // Neighbor connectivity
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (dist < 110) {
            const alpha = (1 - dist / 110) * 0.16;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-[2]" />;
}
