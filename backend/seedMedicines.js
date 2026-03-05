import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import Medicine from "./models/Medicine.js";

dotenv.config();

// read JSON file
const medicines = JSON.parse(
  fs.readFileSync("./data/medicines.json", "utf-8")
);

const seedData = async () => {

  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Medicine.deleteMany();

    await Medicine.insertMany(medicines);

    console.log("Medicines inserted successfully");

    process.exit();

  } catch (error) {

    console.error(error);
    process.exit(1);

  }

};

seedData();