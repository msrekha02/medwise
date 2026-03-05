import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const generateGeminiResponse = async (message) => {
  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
      {
        model: "gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content:
              "You are a health assistant. Provide general health information only. Do not diagnose diseases. Always suggest consulting a qualified doctor.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;

  } catch (error) {
    console.error("FULL GEMINI ERROR:", error.response?.data || error.message);
    throw new Error("AI request failed");
  }
};
