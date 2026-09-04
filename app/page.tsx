"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { NodeBetaLogo } from "@/components/NodeBetaLogo";
import { PhysicsNetworkCanvas } from "@/components/PhysicsNetworkCanvas";

export default function NodeBetaPage() {
  const [activeProofTab, setActiveProofTab] = useState<"formal" | "advanced">("formal");
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "NodeBeta solved our distributed compiler race condition in under 12 minutes.",
      author: "Jean Leclerc",
      role: "Lead Systems Engineer",
    },
    {
      quote: "The deepest multi-hypothesis model we have ever subjected to production verification.",
      author: "Jason Vance",
      role: "Quantitative Principal",
    },
    {
      quote: "Zero hallucinations observed across 40,000 continuous formal theorem passes.",
      author: "Sarah Chen",
      role: "Research Director",
    },
  ];

  return (
    <div className="min-h-screen bg-[#060709] text-[#E5E7EB] font-sans antialiased p-3 sm:p-6 lg:p-10 selection:bg-white selection:text-black">
      {/* Outer Viewport Poster Frame */}
      <div className="max-w-[1520px] mx-auto rounded-[24px] sm:rounded-[36px] border border-white/[0.09] bg-[#090A0D] shadow-[0_0_90px_rgba(0,0,0,0.85)] overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative">
        
        {/* LEFT COLUMN: HERO & SCIENTIFIC REASONING SUITE */}
        <div className="lg:col-span-8 p-6 sm:p-10 lg:p-14 border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col justify-between relative overflow-hidden">
          {/* Gravitational Physics Mesh */}
          <PhysicsNetworkCanvas />

          {/* Poster Internal Header */}
          <header className="flex items-center justify-between relative z-10 pb-8 sm:pb-12">
            <div className="flex items-center gap-3.5 group cursor-pointer">
              <NodeBetaLogo size={34} />
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-white">
                NODEBETA AI
              </span>
            </div>
            <button className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.08] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </header>

          {/* Hero Headline & Interactive Attractor Core */}
          <section className="relative z-10 my-4 sm:my-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-7">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-[-0.04em] text-white leading-[1.05]">
                DEEPER THINKING,<br />
                STRONGER REASONING,<br />
                SUPERIOR PROBLEM-SOLVING,<br />
                <span className="text-neutral-400">OUTSTANDING OUTPUTS.</span>
              </h1>

              <div>
                <button className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm tracking-tight hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_35px_rgba(255,255,255,0.4)] active:scale-95">
                  <span>REQUEST DEEP REASONING SESSION</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-0.5 transition-transform">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Glowing Hero Logo Emblem */}
            <div className="md:col-span-4 flex justify-center items-center relative py-4">
              <div className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.1] backdrop-blur-2xl shadow-[0_0_70px_rgba(255,255,255,0.1)]">
                <NodeBetaLogo size={130} glow={true} />
              </div>
            </div>
          </section>

          {/* LOWER GRID MODULES */}
          <div className="relative z-10 space-y-4 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Card: Animated Benchmarks */}
              <div className="md:col-span-5 rounded-2xl border border-white/[0.08] bg-[#0D0F14]/90 backdrop-blur-xl p-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
                    Animated Benchmarks
                  </h3>
                  <p className="text-[11px] text-neutral-400 mt-0.5">Empirical deduction velocity</p>

                  <div className="mt-4 space-y-3 font-mono text-[11px]">
                    <div className="flex items-center justify-between text-neutral-400">
                      <span>Start</span>
                      <div className="w-28 sm:w-36 h-1.5 bg-neutral-800/80 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "20%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                          className="h-full bg-white shadow-[0_0_8px_white]"
                        />
                      </div>
                      <span className="text-white font-medium">100%</span>
                    </div>

                    <div className="flex items-center justify-between text-neutral-400">
                      <span>Proof</span>
                      <div className="w-28 sm:w-36 h-1.5 bg-neutral-800/80 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "10%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 2 }}
                          className="h-full bg-white shadow-[0_0_8px_white]"
                        />
                      </div>
                      <span className="text-white font-medium">100%</span>
                    </div>

                    <div className="flex items-center justify-between text-neutral-400">
                      <span>Eval</span>
                      <div className="w-28 sm:w-36 h-1.5 bg-neutral-800/80 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: "30%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 2 }}
                          className="h-full bg-neutral-300"
                        />
                      </div>
                      <span className="text-white font-medium">100%</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.05]">
                  <span className="inline-block px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-neutral-400">
                    proof of reason: continuous
                  </span>
                </div>
              </div>

              {/* Card: Multi-Hypothesis Proof */}
              <div className="md:col-span-7 rounded-2xl border border-white/[0.08] bg-[#0D0F14]/90 backdrop-blur-xl p-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
                    Multi-Hypothesis Proof
                  </h3>
                  <p className="text-[11px] text-neutral-400 mt-0.5">
                    Animate hypothesis balance areas and verification interpretation.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {/* Live Probability Distribution Bars */}
                    <div className="space-y-2.5 font-mono text-[10px] text-neutral-400">
                      <div className="flex justify-between items-center">
                        <span>Hypothesis α</span>
                        <div className="w-24 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                          <div className="w-[84%] h-full bg-neutral-400" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Hypothesis β</span>
                        <div className="w-24 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                          <div className="w-[62%] h-full bg-neutral-400" />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Hypothesis γ</span>
                        <div className="w-24 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                          <div className="w-[94%] h-full bg-white shadow-[0_0_8px_white]" />
                        </div>
                      </div>
                    </div>

                    {/* Interactive Tab Selectors */}
                    <div className="space-y-2">
                      <div
                        onClick={() => setActiveProofTab("formal")}
                        className={`p-2 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                          activeProofTab === "formal"
                            ? "bg-white/[0.08] border-white/30 text-white"
                            : "bg-black/30 border-white/[0.06] text-neutral-400 hover:border-white/20"
                        }`}
                      >
                        <div>
                          <div className="text-[11px] font-mono font-semibold">FORMAL</div>
                          <div className="text-[9px] text-neutral-400">FORMAL VERIFICATION</div>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                      </div>

                      <div
                        onClick={() => setActiveProofTab("advanced")}
                        className={`p-2 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                          activeProofTab === "advanced"
                            ? "bg-white/[0.08] border-white/30 text-white"
                            : "bg-black/30 border-white/[0.06] text-neutral-400 hover:border-white/20"
                        }`}
                      >
                        <div>
                          <div className="text-[11px] font-mono font-semibold">ADVANCED</div>
                          <div className="text-[9px] text-neutral-400">ADVANCED LOGISTICS</div>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row Modules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/[0.08] bg-[#0D0F14]/90 backdrop-blur-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span className="font-mono text-xs font-semibold text-white tracking-wider">
                      FORMAL VERIFICATION
                    </span>
                  </div>
                  <span className="text-xs text-emerald-400 font-mono">0 ERR</span>
                </div>
                <ul className="text-xs text-neutral-400 space-y-2 pl-1 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" /> Lean4 proof assertion validations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" /> Combinatorial verification pipelines
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" /> Low-level compiler acceleration
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-[#0D0F14]/90 backdrop-blur-xl p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-400">
                      <rect x="1" y="3" width="15" height="13" />
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                    <span className="font-mono text-xs font-semibold text-white tracking-wider">
                      ADVANCED LOGISTICS
                    </span>
                  </div>
                  <span className="text-xs text-cyan-400 font-mono">STABLE</span>
                </div>
                <ul className="text-xs text-neutral-400 space-y-2 pl-1 font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" /> Global combinatorial supply routing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" /> Real-time constraint equilibrium
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full" /> Automated bottleneck detection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: CAPABILITY TERMINAL & ISOMETRIC ARCHITECTURE */}
        <div className="lg:col-span-4 bg-[#07080B] p-6 sm:p-8 flex flex-col justify-between space-y-8">
          {/* Capability Terminal */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] tracking-widest text-neutral-400 uppercase">
                Capability
              </span>
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-neutral-800" />
                <span className="w-2 h-2 rounded-full bg-neutral-800" />
                <span className="w-2 h-2 rounded-full bg-neutral-800" />
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-black/70 p-4 font-mono text-[11px] text-neutral-300 relative overflow-hidden shadow-inner">
              <div className="absolute top-2 right-2 opacity-20">
                <NodeBetaLogo size={36} />
              </div>
              <div className="text-neutral-500 mb-2">// INFERENCE MONITOR</div>
              <p className="text-neutral-400">report trace &gt; nodebeta.typeCheck(axiom_set)</p>
              <div className="mt-3 text-neutral-300">
                <span className="text-cyan-400">export const</span> verifyState = async () =&gt; &#123;
                <div className="pl-3 text-neutral-400">
                  await kernel.enforce(&quot;axiomatic_closure&quot;);
                  <br />
                  <span className="text-emerald-400 font-semibold">&#10003; 0 contradictions found</span>
                </div>
                &#125;;
              </div>
            </div>
          </div>

          {/* Interactive Customer Testimonials Carousel */}
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-2">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all text-[10px] space-y-2 ${
                    activeTestimonial === idx
                      ? "bg-white/[0.06] border-white/30"
                      : "bg-white/[0.01] border-white/[0.05] opacity-60 hover:opacity-100"
                  }`}
                >
                  <span className="text-neutral-500 font-serif text-base leading-none">&ldquo;</span>
                  <p className="text-neutral-300 leading-snug line-clamp-3">
                    {t.quote}
                  </p>
                  <div className="font-mono text-[9px] text-neutral-400 pt-1 border-t border-white/[0.05] truncate">
                    {t.author}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-1.5 pt-1">
              {testimonials.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    activeTestimonial === idx ? "bg-white w-3" : "bg-neutral-800"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* 3D Stacked Model Intelligence Architecture */}
          <div className="relative pt-2">
            <div className="text-center mb-4">
              <span className="font-mono text-xs font-medium uppercase tracking-widest text-neutral-300">
                Model Intelligence Architecture
              </span>
            </div>

            <div className="relative h-56 flex items-center justify-center">
              <div className="relative w-44 h-44 flex items-center justify-center [perspective:1000px]">
                {/* Lower Plate */}
                <div
                  className="absolute w-36 h-36 rounded-2xl border border-white/10 bg-white/[0.01] shadow-2xl transition-transform duration-700"
                  style={{ transform: "rotateX(60deg) rotateZ(-45deg) translateZ(-40px)" }}
                />
                {/* Middle Plate */}
                <div
                  className="absolute w-36 h-36 rounded-2xl border border-white/20 bg-white/[0.02] shadow-2xl transition-transform duration-700"
                  style={{ transform: "rotateX(60deg) rotateZ(-45deg) translateZ(0px)" }}
                />
                {/* Upper Plate */}
                <div
                  className="absolute w-36 h-36 rounded-2xl border border-white/30 bg-white/[0.04] backdrop-blur-md shadow-2xl transition-transform duration-700"
                  style={{ transform: "rotateX(60deg) rotateZ(-45deg) translateZ(40px)" }}
                />

                {/* Floating Central Hex-Star Logo */}
                <div
                  className="absolute z-20 transition-transform duration-700 flex items-center justify-center"
                  style={{ transform: "translateY(-16px)" }}
                >
                  <div className="p-3.5 rounded-2xl bg-[#08090C]/95 border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                    <NodeBetaLogo size={48} glow={true} />
                  </div>
                </div>
              </div>
            </div>

            {/* Column CTA */}
            <div className="mt-4">
              <button className="w-full py-3.5 px-4 rounded-xl bg-white text-black font-semibold text-xs tracking-tight hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.25)] active:scale-98">
                EMBED NODEBETA CORE IN YOUR WORKFLOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
