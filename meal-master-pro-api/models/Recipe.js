import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    // ✅ Allow embedded ingredient names instead of ObjectIds
    ingredients: [
      {
        name: { type: String, required: true },
        quantity: { type: String },
        unit: { type: String }
      }
    ],
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "recipes"
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;
