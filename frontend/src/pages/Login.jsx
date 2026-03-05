import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User2 } from "lucide-react";

const AuthPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState("login");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (state === "login") {
        const res = await axios.post(
          "http://localhost:5000/api/users/login",
          {
            email: formData.email,
            password: formData.password,
          }
        );

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      } else {
        await axios.post(
          "http://localhost:5000/api/users/register",
          formData
        );

        const loginRes = await axios.post(
          "http://localhost:5000/api/users/login",
          {
            email: formData.email,
            password: formData.password,
          }
        );

        localStorage.setItem("token", loginRes.data.token);
        localStorage.setItem("user", JSON.stringify(loginRes.data.user));
      }

      navigate("/search");
      window.location.reload();
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">

      {/* 🔥 Soft Palette Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-[radial-gradient(circle,_#2c5c5c_0%,_#2c5c5c33_40%,_transparent_70%)] blur-[120px] opacity-30"></div>
      </div>

      {/*  Auth Card */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-sm bg-white border border-[#e6f2f2] rounded-2xl px-8 py-10 shadow-xl text-center"
      >
        <h1 className="text-[#1e3a3a] text-3xl font-semibold">
          {state === "login" ? "Login" : "Sign Up"}
        </h1>

        <p className="text-[#1e3a3a]/60 text-sm mt-2 mb-6">
          Please {state} to continue
        </p>

        {/* Name (Register Only) */}
        {state !== "login" && (
          <div className="flex items-center mt-4 w-full border border-[#e6f2f2] h-12 rounded-full overflow-hidden pl-6 gap-2">
            <User2 size={16} className="text-[#2c5c5c]" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="flex-1 bg-transparent outline-none text-[#1e3a3a]"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {/* Email */}
        <div className="flex items-center mt-4 w-full border border-[#e6f2f2] h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Mail size={16} className="text-[#2c5c5c]" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="flex-1 bg-transparent outline-none text-[#1e3a3a]"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="flex items-center mt-4 w-full border border-[#e6f2f2] h-12 rounded-full overflow-hidden pl-6 gap-2">
          <Lock size={16} className="text-[#2c5c5c]" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="flex-1 bg-transparent outline-none text-[#1e3a3a]"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-6 w-full h-11 rounded-full text-[#e6f2f2] bg-[#2c5c5c] hover:bg-[#1e3a3a] transition"
        >
          {state === "login" ? "Login" : "Sign Up"}
        </button>

        {/* Toggle */}
        <p className="text-[#1e3a3a]/60 text-sm mt-6">
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span
            onClick={() =>
              setState(state === "login" ? "register" : "login")
            }
            className="text-[#2c5c5c] cursor-pointer hover:underline"
          >
            Click here
          </span>
        </p>
      </motion.form>
    </div>
  );
};

export default AuthPage;