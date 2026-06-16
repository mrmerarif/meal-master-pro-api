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
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ingredient"
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
