import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    quantity: { type: String },
    unit: { type: String }
  },
  {
    collection: "ingredients"
  }
);

const Ingredient = mongoose.model("Ingredient", ingredientSchema);
export default Ingredient;
