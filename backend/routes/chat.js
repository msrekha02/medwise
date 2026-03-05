import express from "express";
import {
  handleChat,
  getConversations,
  getConversationMessages,
  deleteConversation,
} from "../controllers/chatController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// 🔐 All routes protected
router.post("/", protect, handleChat);
router.get("/conversations", protect, getConversations);
router.get("/conversation/:id", protect, getConversationMessages);
router.delete("/conversation/:id", protect, deleteConversation);

export default router;