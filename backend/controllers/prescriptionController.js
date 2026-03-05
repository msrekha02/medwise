import Tesseract from "tesseract.js";

export const scanPrescription = async (req, res) => {
  try {

    const imagePath = req.file.path;

    const result = await Tesseract.recognize(imagePath, "eng");

    const extractedText = result.data.text;

    res.json({
      success: true,
      text: extractedText
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "OCR failed"
    });

  }
};