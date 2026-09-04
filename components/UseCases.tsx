"use client";

import { motion } from "framer-motion";
import { Code2, FlaskConical, Briefcase, Globe, Shield, HeartPulse } from "lucide-react";

const useCases = [
  {
    icon: Code2,
    title: "Software Engineering",
    description: "Architect complex systems, debug at scale, and generate production-ready code.",
  },
  {
    icon: FlaskConical,
    title: "Scientific Research",
    description: "Formulate hypotheses, design experiments, and interpret results with unprecedented rigor.",
  },
  {
    icon: Briefcase,
    title: "Business Strategy",
    description: "Analyze markets, predict trends, and devise optimal strategic plans.",
  },
  {
    icon: Globe,
    title: "Global Logistics",
    description: "Optimize supply chains, route planning, and resource allocation in real time.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Detect threats, simulate attacks, and design defense systems that stay ahead.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Assist in diagnosis, drug discovery, and personalized treatment planning.",
  },
];

export default function UseCases() {
  return (
    <section className="py-24 px-6 bg-node-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-16 text-center"
        >
          Built for the hardest problems.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-node-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <useCase.icon className="w-10 h-10 text-node-blue mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
              <p className="text-white/60">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
