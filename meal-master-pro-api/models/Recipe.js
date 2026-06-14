import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }],
  steps: [String],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Recipe", recipeSchema);
