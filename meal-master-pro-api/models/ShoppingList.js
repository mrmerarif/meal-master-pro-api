import mongoose from "mongoose";

const shoppingListSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    items: [
      {
        ingredient: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Ingredient"
        },
        quantity: {
          type: String,
          required: true
        },
        unit: {
          type: String,
          required: true
        }
      }
    ],
    createdBy: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const ShoppingList = mongoose.model("ShoppingList", shoppingListSchema);
export default ShoppingList;
