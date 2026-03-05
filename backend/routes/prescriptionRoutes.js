import express from "express";
import upload from "../middleware/upload.js";
import { scanPrescription } from "../controllers/prescriptionController.js";

const router = express.Router();

router.post("/scan", upload.single("image"), scanPrescription);

export default router;