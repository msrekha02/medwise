import Chat from "../models/Chat.js";
import { v4 as uuidv4 } from "uuid";
import { generateGeminiResponse } from "../configs/ai.js";

// SEND MESSAGE
export const handleChat = async (req, res) => {
  try {
    const { message, conversationId } = req.body;

    const finalConversationId = conversationId || uuidv4();

    const reply = await generateGeminiResponse(message);

    await Chat.create({
      user: req.user, // 🔥 IMPORTANT
      conversationId: finalConversationId,
      userMessage: message,
      aiReply: reply,
    });

    res.json({ reply, conversationId: finalConversationId });
  } catch (error) {
    res.status(500).json({ error: "AI request failed" });
  }
};

// GET ALL CONVERSATIONS (Sidebar)
export const getConversations = async (req, res) => {
  try {
    const chats = await Chat.find({ user: req.user })
      .sort({ createdAt: -1 });

    const grouped = {};

    chats.forEach((chat) => {
      if (!grouped[chat.conversationId]) {
        grouped[chat.conversationId] = {
          conversationId: chat.conversationId,
          firstMessage: chat.userMessage,
          createdAt: chat.createdAt,
        };
      }
    });

    res.json(Object.values(grouped));
  } catch {
    res.status(500).json({ error: "Failed to load conversations" });
  }
};

// GET SINGLE CONVERSATION
export const getConversationMessages = async (req, res) => {
  try {
    const { id } = req.params;

    const chats = await Chat.find({
      conversationId: id,
      user: req.user, // 🔥 FILTER BY USER
    }).sort({ createdAt: 1 });

    res.json(chats);
  } catch {
    res.status(500).json({ error: "Failed to load messages" });
  }
};

// DELETE CONVERSATION
export const deleteConversation = async (req, res) => {
  try {
    const { id } = req.params;

    await Chat.deleteMany({
      conversationId: id,
      user: req.user, // 🔥 FILTER BY USER
    });

    res.json({ message: "Conversation deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete conversation" });
  }
};