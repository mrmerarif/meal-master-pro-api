import mongoose from "mongoose";

const mealPlanSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    // ✅ Allow embedded recipe objects instead of ObjectIds
    recipes: [
      {
        name: { type: String, required: true },
        description: { type: String },
        ingredients: [
          {
            name: { type: String },
            quantity: { type: String },
            unit: { type: String }
          }
        ],
        steps: [{ type: String }]
      }
    ],
    createdBy: {
      type: String,
      required: true
    }
  },
  { timestamps: true, collection: "mealplans" }
);

const MealPlan = mongoose.model("MealPlan", mealPlanSchema);
export default MealPlan;
