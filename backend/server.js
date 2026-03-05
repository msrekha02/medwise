import dotenv from "dotenv";
dotenv.config();   // MUST be first

import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.js";
import connectDB from "./configs/db.js";
import userRoutes from "./routes/userRoutes.js";
import prescriptionRoutes from "./routes/prescriptionRoutes.js";
import medicineRoutes from "./routes/medicineRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/chat", chatRoutes);
connectDB();

app.use("/api/users", userRoutes);
app.use("/api/prescription", prescriptionRoutes);
app.use("/api/medicines", medicineRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
