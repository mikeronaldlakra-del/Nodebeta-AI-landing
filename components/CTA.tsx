"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="py-24 px-6 bg-node-black">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Ready to think beyond?
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Join the organizations already using NODEBETA to solve their
            most complex challenges.
          </p>
          <button className="group relative inline-flex items-center gap-2 bg-node-blue text-white font-semibold px-10 py-5 rounded-full text-lg hover:bg-blue-600 transition-colors duration-300 overflow-hidden">
            <span>Start Reasoning Now</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <p className="mt-6 text-sm text-white/40">No credit card required. Free 14-day trial.</p>
        </motion.div>
      </div>
    </section>
  );
}
