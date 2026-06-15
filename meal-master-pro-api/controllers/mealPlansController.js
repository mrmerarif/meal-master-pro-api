import MealPlan from "../models/MealPlan.js";

// GET all meal plans
export const getMealPlans = async (req, res) => {
  try {
    const mealPlans = await MealPlan.find().populate("recipes");
    res.status(200).json(mealPlans);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch meal plans", error: err.message });
  }
};

// GET one meal plan by ID
export const getMealPlanById = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findById(req.params.id).populate("recipes");
    if (!mealPlan) return res.status(404).json({ message: "Meal plan not found" });
    res.status(200).json(mealPlan);
  } catch (err) {
    res.status(400).json({ message: "Invalid ID", error: err.message });
  }
};

// POST new meal plan
export const createMealPlan = async (req, res) => {
  try {
    if (!req.body.title || !req.body.description) {
      return res.status(400).json({ message: "Title and description are required" });
    }
    const mealPlan = new MealPlan(req.body);
    await mealPlan.save();
    res.status(201).json(mealPlan);
  } catch (err) {
    res.status(400).json({ message: "Failed to create meal plan", error: err.message });
  }
};

// PUT update meal plan
export const updateMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!mealPlan) return res.status(404).json({ message: "Meal plan not found" });
    res.status(200).json(mealPlan);
  } catch (err) {
    res.status(400).json({ message: "Failed to update meal plan", error: err.message });
  }
};

// DELETE meal plan
export const deleteMealPlan = async (req, res) => {
  try {
    const mealPlan = await MealPlan.findByIdAndDelete(req.params.id);
    if (!mealPlan) return res.status(404).json({ message: "Meal plan not found" });
    res.status(200).json({ message: "Meal plan deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete meal plan", error: err.message });
  }
};
