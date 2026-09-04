"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Layers, Network } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Deep Reasoning",
    description:
      "Multi-step logical inference that mirrors human expert thought processes, but faster and more precise.",
  },
  {
    icon: Network,
    title: "Complex Planning",
    description:
      "Breaks down impossible problems into optimized action sequences, predicting outcomes with 99.7% confidence.",
  },
  {
    icon: Cpu,
    title: "Adaptive Learning",
    description:
      "Continuously improves from every interaction, building specialized knowledge that compounds over time.",
  },
  {
    icon: Layers,
    title: "Multi-Modal Integration",
    description:
      "Seamlessly combines text, code, math, and vision to solve problems that span multiple domains.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 px-6 bg-node-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-16 text-center"
        >
          Beyond prediction.
          <br />
          <span className="text-node-blue">Genuine understanding.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-node-blue/20 flex items-center justify-center mb-6 group-hover:bg-node-blue/30 transition-colors">
                <cap.icon className="w-6 h-6 text-node-blue" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{cap.title}</h3>
              <p className="text-white/60 leading-relaxed">{cap.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
