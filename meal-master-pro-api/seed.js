import dotenv from "dotenv";
import mongoose from "mongoose";
import Recipe from "./models/Recipe.js";
import Ingredient from "./models/Ingredient.js";
import MealPlan from "./models/MealPlan.js";
import ShoppingList from "./models/ShoppingList.js";

dotenv.config();

const seedData = async () => {
  try {
    // Use the same variable name as in your .env file
    await mongoose.connect(process.env.MONGODB_URI);

    // Clear existing data
    await Recipe.deleteMany({});
    await Ingredient.deleteMany({});
    await MealPlan.deleteMany({});
    await ShoppingList.deleteMany({});

    // Insert sample recipes
    const recipes = await Recipe.insertMany([
      { name: "Spaghetti Bolognese", description: "Classic Italian pasta dish" },
      { name: "Chicken Curry", description: "Spicy and flavorful curry" }
    ]);

    // Insert sample ingredients
    const ingredients = await Ingredient.insertMany([
      { name: "Tomato", quantity: "2" },
      { name: "Onion", quantity: "1" }
    ]);

    // Insert sample meal plans (with required fields)
    await MealPlan.insertMany([
      {
        title: "Weekly Plan",
        description: "Plan for the week with two recipes",
        recipes: [recipes[0]._id, recipes[1]._id],
        createdBy: "SeederScript"
      }
    ]);

    // Insert sample shopping lists (with required fields)
    await ShoppingList.insertMany([
      {
        name: "Weekly Groceries",
        items: [
          { ingredient: ingredients[0]._id, quantity: "2", unit: "pcs" },
          { ingredient: ingredients[1]._id, quantity: "1", unit: "pcs" }
        ],
        createdBy: "SeederScript"
      }
    ]);

    console.log("✅ Database seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding failed:", err.message);
    process.exit(1);
  }
};

seedData();

