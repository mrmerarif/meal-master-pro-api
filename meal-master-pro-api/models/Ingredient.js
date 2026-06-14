import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: String,
  unit: String
});

export default mongoose.model("Ingredient", ingredientSchema);
