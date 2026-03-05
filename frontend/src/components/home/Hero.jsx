import React from "react";
import { Zap, TrendingDown, Shield, Heart } from "lucide-react";
import { motion } from "framer-motion";
import medvideo from "../../assets/medvideo.mp4";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={medvideo} type="video/mp4" />
      </video>

      {/* 🌑 Dark Overlay using your palette */}
      <div className="absolute inset-0 bg-[#1e3a3a]/70"></div>

      {/* Soft Glow (still keeping your aesthetic) */}
      <div className="absolute inset-0 flex justify-center -z-0">
        <div className="w-[900px] h-[500px] bg-[radial-gradient(circle,_#2c5c5c_0%,_#2c5c5c33_40%,_transparent_70%)] blur-[140px] opacity-40"></div>
      </div>

      {/* 🚀 Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-4 md:px-16 lg:px-24 xl:px-40 text-[#e6f2f2]"
      >
        {/* Heading */}
        {/* <h1 className="mt-8 text-5xl md:text-6xl font-semibold max-w-5xl md:leading-[70px]">
          Find Affordable <br />
          <span className="bg-gradient-to-r from-[#e6f2f2] to-[#2c5c5c] bg-clip-text text-transparent">
            Medicine Alternatives
          </span>
        </h1> */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-8 text-5xl md:text-6xl font-semibold font-[Inter] max-w-5xl md:leading-[70px] tracking-tight text-[#e6f2f2] float-text"
        >
          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="block drop-shadow-[0_0_25px_rgba(230,242,242,0.15)]"
          >
            Find Smarter
          </motion.span>

          <motion.span
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="block relative"
          >
            <span className="relative z-10 bg-gradient-to-r from-[#e6f2f2] via-[#2c5c5c] to-[#e6f2f2] bg-[length:200%_100%] animate-gradient bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(44,92,92,0.35)]">
              Medicine Alternatives
            </span>
          </motion.span>
        </motion.h1>

        {/* Subtext */}
        <p className="max-w-md text-base my-7 text-[#e6f2f2]/80">
          Instantly search medicines, compare prices, and discover affordable
          alternatives to make affordable healthcare choices.
        </p>
        {/* <button
          onClick={() => navigate("/scanner")}
          className="mt-6 px-6 py-3 bg-[#2c5c5c] text-white rounded-xl hover:bg-[#1e3a3a]"
        >
          Scan Prescription
        </button> */}
      </motion.div>
    </div>
  );
};

export default Hero;
