import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Search } from "lucide-react";
import medpic2 from "../../assets/medpic2.jpeg";
import medpic3 from "../../assets/medpic3.jpeg";

const Features = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <section id="features" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1e3a3a]">
            Smarter Medicine Experience
          </h2>
          <p className="mt-4 text-base text-[#1e3a3a]/70 max-w-xl mx-auto">
            Explore verified drug data, intelligent AI insights, and seamless
            search — all designed to simplify health decisions.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE — IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex justify-center group"
          >
            {/* Back Image */}
            <img
              src={medpic2}
              alt="Medical"
              className="w-[260px] md:w-[300px] rounded-3xl
              transition duration-500 ease-in-out
              shadow-[0_0_35px_rgba(44,92,92,0.25)]
              group-hover:shadow-[0_0_70px_rgba(44,92,92,0.6)]"
            />

            {/* Front Image */}
            <img
              src={medpic3}
              alt="Doctor"
              className="absolute -bottom-8 right-4
              w-[210px] md:w-[240px]
              rounded-3xl border-4 border-[#e6f2f2]
              transition duration-500 ease-in-out
              shadow-[0_0_40px_rgba(44,92,92,0.3)]
              group-hover:shadow-[0_0_85px_rgba(44,92,92,0.75)]"
            />
          </motion.div>

          {/* RIGHT SIDE — FEATURES */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-md"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >

            {/* Feature 1 */}
            <div className="group cursor-pointer">
              <div
                className={`p-5 rounded-xl border transition-all duration-300 flex gap-5
                ${
                  !isHover
                    ? "border-[#2c5c5c]/40 bg-[#2c5c5c]/10"
                    : "border-transparent group-hover:border-[#2c5c5c]/40 group-hover:bg-[#2c5c5c]/10"
                }`}
              >
                <ShieldCheck className="w-6 h-6 text-[#2c5c5c]" />
                <div>
                  <h3 className="text-lg font-semibold text-[#1e3a3a]">
                    Verified Medicine Data
                  </h3>
                  <p className="text-sm text-[#1e3a3a]/70 mt-2">
                    Structured and reliable drug information for safe
                    understanding.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group cursor-pointer">
              <div className="p-5 rounded-xl border border-transparent group-hover:border-[#2c5c5c]/40 group-hover:bg-[#2c5c5c]/10 transition-all duration-300 flex gap-5">
                <Zap className="w-6 h-6 text-[#2c5c5c]" />
                <div>
                  <h3 className="text-lg font-semibold text-[#1e3a3a]">
                    AI Health Assistant
                  </h3>
                  <p className="text-sm text-[#1e3a3a]/70 mt-2">
                    Intelligent explanations to support better health awareness.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group cursor-pointer">
              <div className="p-5 rounded-xl border border-transparent group-hover:border-[#2c5c5c]/40 group-hover:bg-[#2c5c5c]/10 transition-all duration-300 flex gap-5">
                <Search className="w-6 h-6 text-[#2c5c5c]" />
                <div>
                  <h3 className="text-lg font-semibold text-[#1e3a3a]">
                    Smart Search System
                  </h3>
                  <p className="text-sm text-[#1e3a3a]/70 mt-2">
                    Quickly locate medicines by brand or generic name.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;