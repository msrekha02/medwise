import Medicine from "../models/Medicine.js";

export const getMedicines = async (req, res) => {

  try {

    const medicines = await Medicine.find();

    res.json(medicines);

  } catch (error) {

    res.status(500).json({ message: "Server error" });

  }

};