"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const benchmarks = [
  { name: "Math Olympiad", score: 98.7, color: "#0066FF" },
  { name: "Logical Reasoning", score: 97.2, color: "#0066FF" },
  { name: "Code Generation", score: 95.4, color: "#0066FF" },
  { name: "Scientific Understanding", score: 96.8, color: "#0066FF" },
  { name: "Strategic Planning", score: 99.1, color: "#0066FF" },
];

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toFixed(1);
      }
    });
    return unsubscribe;
  }, [spring]);

  return <span ref={ref}>0.0</span>;
}

export default function Benchmarks() {
  return (
    <section id="benchmarks" className="py-24 px-6 bg-node-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-16 text-center"
        >
          Outperforms human experts.
          <br />
          <span className="text-white/50">On every metric that matters.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benchmarks.map((bench, i) => (
            <motion.div
              key={bench.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-white font-medium">{bench.name}</span>
                <span className="text-2xl font-bold text-white">
                  <AnimatedNumber value={bench.score} />
                  <span className="text-node-blue">%</span>
                </span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${bench.score}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: bench.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/40 mt-10 text-sm">
          * Evaluated against average human expert performance on standardized benchmarks.
        </p>
      </div>
    </section>
  );
}
