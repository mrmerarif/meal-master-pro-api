import Recipe from "../models/Recipe.js";

// GET all recipes
export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("ingredients");
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch recipes", error: err.message });
  }
};

// GET one recipe by ID
export const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate("ingredients");
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json(recipe);
  } catch (err) {
    res.status(400).json({ message: "Invalid ID", error: err.message });
  }
};

// POST new recipe
export const createRecipe = async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (err) {
    res.status(400).json({ message: "Failed to create recipe", error: err.message });
  }
};

// PUT update recipe
export const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json(recipe);
  } catch (err) {
    res.status(400).json({ message: "Failed to update recipe", error: err.message });
  }
};

// DELETE recipe
export const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete recipe", error: err.message });
  }
};
