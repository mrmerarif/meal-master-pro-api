import Ingredient from "../models/Ingredient.js";

// GET all ingredients
export const getIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.status(200).json(ingredients);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch ingredients", error: err.message });
  }
};

// POST new ingredient
export const createIngredient = async (req, res) => {
  try {
    const ingredient = new Ingredient(req.body);
    await ingredient.save();
    res.status(201).json(ingredient);
  } catch (err) {
    res.status(400).json({ message: "Failed to create ingredient", error: err.message });
  }
};

// PUT update ingredient
export const updateIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ingredient) return res.status(404).json({ message: "Ingredient not found" });
    res.status(200).json(ingredient);
  } catch (err) {
    res.status(400).json({ message: "Failed to update ingredient", error: err.message });
  }
};

// DELETE ingredient
export const deleteIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.findByIdAndDelete(req.params.id);
    if (!ingredient) return res.status(404).json({ message: "Ingredient not found" });
    res.status(200).json({ message: "Ingredient deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete ingredient", error: err.message });
  }
};
