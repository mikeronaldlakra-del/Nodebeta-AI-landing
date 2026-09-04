"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-node-black/70 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-supertight text-white">
            NODE<span className="text-node-blue">BETA</span>
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-white/50 border border-white/20 rounded-full px-2 py-0.5">
            AI
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#capabilities">Capabilities</NavLink>
          <NavLink href="#benchmarks">Benchmarks</NavLink>
          <NavLink href="#architecture">Architecture</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
        </div>

        <button className="bg-white text-black font-medium px-5 py-2 rounded-full hover:bg-node-blue hover:text-white transition-colors duration-300 text-sm">
          Try NODEBETA
        </button>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm text-white/70 hover:text-white transition-colors duration-200"
    >
      {children}
    </Link>
  );
}
