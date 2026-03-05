import React from "react";
import ChatWidget from "../components/chat/ChatWidget";
import { Bot, Shield, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#e6f2f2] pt-2 flex flex-col scroll-smooth">
      {/* Slim Section Header */}
      <div className="sticky top-0 z-20 backdrop-blur-md bg-[#e6f2f2]/70 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Left Section */}

          <div className="flex items-center">
            {/* Back Button */}
            <button
              onClick={() => navigate("/")}
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white hover:bg-[#2c5c5c]/10 transition"
            >
              <ArrowLeft className="w-4 h-4 text-[#1e3a3a]" />
            </button>

            {/* Increase spacing here */}
            <div className="flex items-center gap-4 ml-6">
              <div className="w-11 h-11 rounded-xl bg-[#2c5c5c] flex items-center justify-center shadow-[0_6px_18px_rgba(44,92,92,0.25)]">
                <Bot className="w-5 h-5 text-[#e6f2f2]" />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#1e3a3a] leading-tight">
                  Health Assistant
                </h2>
                <p className="text-sm text-[#2c5c5c]/80">
                  AI-powered medical information chatbot
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 bg-[#2c5c5c]/10 px-4 py-2 rounded-full">
            <Shield className="w-4 h-4 text-[#2c5c5c]" />
            <span className="text-sm font-medium text-[#1e3a3a]">
              Informational Only
            </span>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 px-6 py-4 flex">
        <div className="flex-1">
          <ChatWidget />
        </div>
      </div>
    </div>
  );
}
