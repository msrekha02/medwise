import React from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, BadgeCheck, ShoppingCart } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search Medicine",
    description:
      "Enter any brand or generic medicine name to find it in our database",
  },
  {
    icon: ArrowRight,
    title: "Compare Alternatives",
    description:
      "View cheaper generic alternatives side-by-side with full price comparison",
  },
  {
    icon: BadgeCheck,
    title: "Check Safety Info",
    description:
      "Review uses, side effects, precautions, and safety warnings",
  },
  {
    icon: ShoppingCart,
    title: "Buy Confidently",
    description:
      "Use verified external links to purchase your preferred option",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 bg-[#f4f9f9] relative overflow-hidden">

      {/* Soft Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[700px] h-[300px] bg-[radial-gradient(circle,_#2c5c5c33_0%,_transparent_70%)] blur-[120px] opacity-50"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1e3a3a]">
            How It Works
          </h2>
          <p className="mt-4 text-[#1e3a3a]/70 text-lg">
            Four simple steps to smarter medicine choices
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative text-center group"
            >
              {/* Connecting Line (Desktop Only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[65%] w-[75%] h-[2px] bg-gradient-to-r from-[#cfe6e6] to-transparent" />
              )}

              {/* Icon Box */}
              <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#e6f2f2] border border-[#cfe6e6] mb-6 group-hover:scale-105 transition">
                <step.icon className="w-8 h-8 text-[#2c5c5c]" />
              </div>

              {/* Step Number */}
              <div className="absolute -top-3 -right-3 md:left-[55%] md:-top-2 w-7 h-7 rounded-full bg-[#2c5c5c] text-white text-xs font-semibold flex items-center justify-center shadow-md">
                {i + 1}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-[#1e3a3a] text-lg">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[#1e3a3a]/70 text-sm leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
