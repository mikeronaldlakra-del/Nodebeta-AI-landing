"use client";

import { motion } from "framer-motion";
import AIBackground from "./AIBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AIBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="inline-block mb-8 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
            <span className="text-sm font-medium text-white/80">
              Introducing Deep Reasoning Engine v2
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-supertight leading-[1.1] text-white">
            Think deeper.
            <br />
            <span className="text-node-blue">Reason stronger.</span>
            <br />
            Solve anything.
          </h1>

          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed">
            NODEBETA is the world&apos;s most powerful deep-reasoning AI.
            It doesn&apos;t just predict—it understands, plans, and produces
            outcomes that surpass human expert benchmarks.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative bg-white text-black font-semibold px-8 py-4 rounded-full text-lg hover:bg-node-blue hover:text-white transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Start Reasoning</span>
              <div className="absolute inset-0 bg-node-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
            <button className="border border-white/20 text-white font-medium px-8 py-4 rounded-full text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
              View Benchmarks
            </button>
          </div>
        </motion.div>
      </div>

      {/* Subtle scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/40"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </motion.div>
    </section>
  );
}
