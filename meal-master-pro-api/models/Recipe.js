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
    ingredients: [
      {
        name: { type: String, required: true },
        quantity: { type: String },
        unit: { type: String }
      }
    ],
    prepTime: {
      type: Number, // minutes
      required: true
    },
    cookTime: {
      type: Number, // minutes
      required: true
    },
    servings: {
      type: Number,
      required: true
    },
    difficulty: {
      type: String, // e.g. Easy, Medium, Hard
      required: true
    },
    category: {
      type: String, // e.g. Breakfast, Dinner
      required: true
    },
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
