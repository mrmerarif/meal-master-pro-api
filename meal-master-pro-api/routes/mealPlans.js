import express from "express";
import {
  getMealPlans,
  getMealPlanById,
  createMealPlan,
  updateMealPlan,
  deleteMealPlan
} from "../controllers/mealPlansController.js";

const router = express.Router();

// GET all meal plans
router.get("/", getMealPlans);

// GET one meal plan by ID
router.get("/:id", getMealPlanById);

// POST new meal plan
router.post("/", createMealPlan);

// PUT update meal plan
router.put("/:id", updateMealPlan);

// DELETE meal plan
router.delete("/:id", deleteMealPlan);

export default router;
