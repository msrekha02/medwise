import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
  name: String,
  manufacturer: String,
  price: Number,
  packSize: String,
  unitPrice: Number
});

const variantSchema = new mongoose.Schema({
  form: String,
  strength: String,
  route: String,
  pricing: {
    janAushadhi: {
      price: Number,
      packSize: String,
      unitPrice: Number
    },
    brands: [brandSchema]
  }
});

const medicineSchema = new mongoose.Schema({
  genericName: String,
  slug: String,
  category: String,
  prescriptionRequired: Boolean,
  description: String,
  indications: [String],
  precautions: [String],
  sideEffects: [String],
  variants: [variantSchema],
  alternatives: [
    {
      slug: String
    }
  ],
  searchTags: [String]
});

export default mongoose.model("Medicine", medicineSchema);