import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, AlertCircle, Plus } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function ChatWidget() {
  const initialBotMessage = {
    role: "bot",
    content:
      "Hello! I'm your MedWise Health Assistant.\n\n**Note:** Always consult a qualified healthcare professional for personal medical advice.",
  };

  const [conversationId, setConversationId] = useState(null);
  const [messages, setMessages] = useState([initialBotMessage]);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef(null);

  // Scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Load sidebar conversations
  const fetchConversations = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return; // no login → no history

      const res = await fetch("http://localhost:5000/api/chat/conversations", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setHistory(data);
    } catch (err) {
      console.error("Failed to load conversations");
    }
  };

  useEffect(() => {
    fetchConversations();
  }, []);

  // New Chat
  const handleNewChat = () => {
    setConversationId(null);
    setMessages([initialBotMessage]);
  };

  // Send Message
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          message: userMsg,
          conversationId,
        }),
      });

      const data = await res.json();

      setConversationId(data.conversationId);

      setMessages((prev) => [...prev, { role: "bot", content: data.reply }]);

      // 🔥 Refresh sidebar after new message
      await fetchConversations();
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "Something went wrong. Please try again." },
      ]);
    }

    setIsLoading(false);
  };

  // Load specific conversation
  const loadConversation = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/chat/conversation/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      const data = await res.json();

      const formattedMessages = [];

      data.forEach((chat) => {
        formattedMessages.push({
          role: "user",
          content: chat.userMessage,
        });
        formattedMessages.push({
          role: "bot",
          content: chat.aiReply,
        });
      });

      setConversationId(id);
      setMessages(
        formattedMessages.length > 0 ? formattedMessages : [initialBotMessage],
      );
    } catch (err) {
      console.error("Failed to load conversation");
    }
  };

  const deleteConversation = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/chat/conversation/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      // refresh sidebar
      await fetchConversations();

      // if deleted conversation is currently open
      if (conversationId === id) {
        setConversationId(null);
        setMessages([initialBotMessage]);
      }
    } catch (err) {
      console.error("Failed to delete conversation");
    }
  };

  return (
    <div className="flex h-full w-full bg-white rounded-[32px] shadow-lg overflow-hidden transition-all duration-300">
      {/* LEFT SIDEBAR */}
      <div className="w-72 bg-[#2c5c5c] text-white flex flex-col p-5">
        <button
          onClick={handleNewChat}
          className="flex items-center justify-center gap-2 bg-[#244b4b] hover:bg-[#2c5c5c] transition p-3 rounded-xl mb-8 text-sm font-medium"
        >
          <Plus className="w-4 h-4" />
          New Chat
        </button>

        <p className="text-xs uppercase tracking-wider text-[#e6f2f2] mb-4 opacity-80">
          History
        </p>

        <div className="flex-1 overflow-y-auto space-y-2">
          {history.length === 0 && (
            <p className="text-xs text-[#e6f2f2] opacity-60">
              No conversations yet
            </p>
          )}

          {history.map((item) => (
            <div
              key={item.conversationId}
              className="flex items-center justify-between p-2 text-sm rounded-lg hover:bg-[#2c5c5c] transition group"
            >
              <span
                onClick={() => loadConversation(item.conversationId)}
                className="truncate cursor-pointer flex-1"
              >
                {item.firstMessage.slice(0, 25)}...
              </span>

              <button
                onClick={() => deleteConversation(item.conversationId)}
                className="opacity-0 group-hover:opacity-100 text-xs text-white/70 hover:text-white transition"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CHAT SECTION */}
      <div className="flex flex-col flex-1 bg-[#e6f2f2]">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-10 py-8 space-y-6">
          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[60%] rounded-2xl px-5 py-3 text-sm leading-relaxed shadow ${
                    msg.role === "user"
                      ? "bg-[#2c5c5c] text-white rounded-br-none"
                      : "bg-white text-[#1e3a3a] rounded-bl-none"
                  }`}
                >
                  {msg.role === "user" ? (
                    <p>{msg.content}</p>
                  ) : (
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isLoading && (
            <div className="flex">
              <div className="bg-white rounded-xl px-4 py-3 shadow">
                <Loader2 className="w-4 h-4 text-[#2c5c5c] animate-spin" />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* INPUT */}
        <div className="px-8 pb-6">
          <div className="bg-white rounded-2xl shadow-lg p-4">
            <div className="flex items-center gap-2 text-xs text-[#2c5c5c] mb-3">
              <AlertCircle className="w-3 h-3" />
              For informational purposes only.
            </div>

            <form onSubmit={sendMessage} className="flex gap-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about symptoms, medicines..."
                className="flex-1 rounded-xl px-4 py-3 text-sm bg-[#e6f2f2] text-[#1e3a3a] focus:outline-none focus:ring-2 focus:ring-[#2c5c5c]"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-[#2c5c5c] hover:bg-[#1e3a3a] transition rounded-xl px-5 flex items-center justify-center"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
