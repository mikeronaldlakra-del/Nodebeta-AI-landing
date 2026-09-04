"use client";

import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  glow?: boolean;
}

export function NodeBetaLogo({ className = "", size = 32, glow = false }: LogoProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: size, height: size }}
    >
      {glow && (
        <div
          className="absolute inset-0 rounded-full bg-white/20 blur-2xl pointer-events-none scale-150 animate-pulse"
          style={{ filter: "drop-shadow(0 0 32px rgba(255,255,255,0.8))" }}
        />
      )}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 transition-transform duration-500 group-hover:scale-105"
      >
        {/* Outer Isometric Hexagonal Shell */}
        <path
          d="M50 7 L88 28.5 L88 71.5 L50 93 L12 71.5 L12 28.5 Z"
          fill="#050608"
          stroke="#FFFFFF"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Top Facet */}
        <path
          d="M50 13 L81 30.5 L56 45 L50 41.5 L44 45 L19 30.5 Z"
          fill="#121318"
          stroke="rgba(255, 255, 255, 0.22)"
          strokeWidth="1"
        />

        {/* Left Facet */}
        <path
          d="M16 35 L43 50.5 L43 83 L16 67.5 Z"
          fill="#090A0D"
          stroke="rgba(255, 255, 255, 0.22)"
          strokeWidth="1"
        />

        {/* Right Facet */}
        <path
          d="M84 35 L57 50.5 L57 83 L84 67.5 Z"
          fill="#0D0E13"
          stroke="rgba(255, 255, 255, 0.22)"
          strokeWidth="1"
        />

        {/* Central Star-Axis Channels */}
        <path
          d="M50 15 V85"
          stroke="#FFFFFF"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M22 34 L78 66"
          stroke="#FFFFFF"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M78 34 L22 66"
          stroke="#FFFFFF"
          strokeWidth="7"
          strokeLinecap="round"
        />

        {/* Central Geometric Hub */}
        <circle cx="50" cy="50" r="5" fill="#FFFFFF" />
      </svg>
    </div>
  );
}
