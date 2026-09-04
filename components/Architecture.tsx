"use client";

import { motion } from "framer-motion";

const layers = [
  {
    name: "Input Layer",
    description: "Multi-modal tokenizer",
    color: "#333333",
  },
  {
    name: "Contextual Embeddings",
    description: "768-dimensional rich representations",
    color: "#444444",
  },
  {
    name: "Deep Reasoning Core",
    description: "128 layers of self-attention with symbolic logic integration",
    color: "#0066FF",
  },
  {
    name: "Planning Module",
    description: "Monte Carlo tree search + reinforcement learning",
    color: "#0055CC",
  },
  {
    name: "Output Synthesis",
    description: "Coherent, verified, and formatted results",
    color: "#333333",
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 px-6 bg-node-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-16 text-center"
        >
          The most advanced AI architecture.
        </motion.h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: layer.color }}
              />
              <div>
                <h3 className="text-lg font-semibold text-white">{layer.name}</h3>
                <p className="text-white/50 text-sm">{layer.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
