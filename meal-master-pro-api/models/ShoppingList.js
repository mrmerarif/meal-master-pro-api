import mongoose from "mongoose";

const shoppingListSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    // ✅ Allow embedded ingredient objects instead of ObjectIds
    items: [
      {
        ingredient: { type: String, required: true },
        quantity: { type: String },
        unit: { type: String }
      }
    ],
    createdBy: {
      type: String,
      required: true
    }
  },
  { timestamps: true, collection: "shoppinglists" }
);

const ShoppingList = mongoose.model("ShoppingList", shoppingListSchema);
export default ShoppingList;
