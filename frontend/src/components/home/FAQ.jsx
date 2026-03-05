import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is MedWise a replacement for a doctor?",
    answer:
      "No. MedWise provides general informational guidance and price comparison. Always consult a qualified healthcare professional for medical advice.",
  },
  {
    question: "How accurate is the medicine data?",
    answer:
      "Our data is sourced from verified medical references and continuously updated to ensure reliability.",
  },
  {
    question: "Do you store my health searches?",
    answer:
      "No. We prioritize user privacy and do not store personal health-related searches.",
  },
  {
    question: "Are medicine prices real-time?",
    answer:
      "Prices are aggregated from trusted sources and may vary slightly depending on pharmacy availability.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="pt-20 pb-12 bg-white">
      <div className="max-w-3xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1e3a3a]">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="divide-y divide-[#e6f2f2]">

          {faqs.map((faq, i) => (
            <div key={i} className="py-5">

              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left group"
              >
                <span className="font-medium text-[#1e3a3a] group-hover:text-[#2c5c5c] transition">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`w-5 h-5 text-[#2c5c5c] transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="mt-3 text-sm text-[#1e3a3a]/70 leading-relaxed pr-6">
                  {faq.answer}
                </p>
              </motion.div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
