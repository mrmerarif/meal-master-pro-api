import express from "express";
import {
  getMealPlans,
  getMealPlanById,
  createMealPlan,
  updateMealPlan,
  deleteMealPlan
} from "../controllers/mealPlansController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: MealPlans
 *   description: Endpoints for managing meal plans
 */

/**
 * @swagger
 * /api/mealplans:
 *   get:
 *     summary: Get all meal plans
 *     tags: [MealPlans]
 *     responses:
 *       200:
 *         description: List of meal plans
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MealPlan'
 *   post:
 *     summary: Create a new meal plan
 *     tags: [MealPlans]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MealPlan'
 *     responses:
 *       201:
 *         description: Meal plan created successfully
 */

/**
 * @swagger
 * /api/mealplans/{id}:
 *   get:
 *     summary: Get a meal plan by ID
 *     tags: [MealPlans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Meal plan details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MealPlan'
 *   put:
 *     summary: Update a meal plan by ID
 *     tags: [MealPlans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MealPlan'
 *     responses:
 *       200:
 *         description: Meal plan updated successfully
 *   delete:
 *     summary: Delete a meal plan by ID
 *     tags: [MealPlans]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Meal plan deleted successfully
 */

router.get("/", getMealPlans);
router.get("/:id", getMealPlanById);
router.post("/", createMealPlan);
router.put("/:id", updateMealPlan);
router.delete("/:id", deleteMealPlan);

export default router;
