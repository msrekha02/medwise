import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function HealthCTA() {
  const navigate = useNavigate();
  return (
    <section className="relative py-28 bg-[#e6f2f2] overflow-hidden">

      {/* Soft Glow Background */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[700px] h-[300px] bg-[radial-gradient(circle,_#2c5c5c33_0%,_transparent_70%)] blur-[120px] opacity-50"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1e3a3a]">
            Have a Health Question?
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-lg text-[#1e3a3a]/80 leading-relaxed">
            Our AI-powered medical chatbot can help answer your general health queries,
            explain medication details, and provide wellness guidance.
          </p>

          {/* Button */}
          <div className="mt-10">
            <button onClick={() => navigate("/chat")} className="inline-flex items-center gap-3 bg-[#2c5c5c] hover:bg-[#1e3a3a] text-white font-medium px-8 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <MessageCircle size={18} />
              Talk to Health Assistant
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
