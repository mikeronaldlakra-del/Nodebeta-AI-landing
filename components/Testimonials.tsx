"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "NODEBETA solved a mathematical proof that had stumped our research team for months. It's not just a tool; it's a collaborator.",
    author: "Dr. Elena Vasquez",
    role: "Professor of Mathematics, MIT",
  },
  {
    quote:
      "We replaced three internal AI systems with NODEBETA. The reasoning quality is on another level—it actually explains its thought process.",
    author: "Marcus Chen",
    role: "CTO, Fortune 500 Tech Company",
  },
  {
    quote:
      "The planning capabilities are unreal. It generated a supply chain optimization that saved us $40M annually. No other model came close.",
    author: "Sarah Johnson",
    role: "VP of Operations, Global Logistics",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-node-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-16 text-center"
        >
          Trusted by those who demand certainty.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.figure
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
            >
              <blockquote className="text-white/80 text-lg leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption>
                <div className="text-white font-semibold">{testimonial.author}</div>
                <div className="text-white/50 text-sm">{testimonial.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
