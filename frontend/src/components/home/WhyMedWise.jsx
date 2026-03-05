import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Database, Lock } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Medical Data",
    description:
      "Information sourced from trusted medical references and verified databases.",
  },
  {
    icon: Database,
    title: "Transparent Price Comparison",
    description:
      "Clear comparison of brand and generic medicines with no hidden bias.",
  },
  {
    icon: Lock,
    title: "Privacy Focused",
    description:
      "We do not store personal health data. Your searches remain private.",
  },
];

export default function WhyMedWise() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">

      {/* Soft Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[600px] h-[300px] bg-[radial-gradient(circle,_#2c5c5c22_0%,_transparent_70%)] blur-[120px] opacity-60"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1e3a3a]">
            Why Trust MedWise?
          </h2>
          <p className="mt-4 text-[#1e3a3a]/70 text-lg">
            Built with accuracy, transparency, and user safety at the core.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#f4f9f9] rounded-2xl p-8 border border-[#e6f2f2] hover:shadow-lg hover:shadow-[#2c5c5c]/10 transition"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#e6f2f2] mb-6">
                <item.icon className="w-7 h-7 text-[#2c5c5c]" />
              </div>

              <h3 className="font-semibold text-[#1e3a3a] text-lg">
                {item.title}
              </h3>
              <p className="mt-3 text-[#1e3a3a]/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
