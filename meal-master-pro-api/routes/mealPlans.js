import express from "express";
import {
  getMealPlans,
  getMealPlanById,
  createMealPlan,
  updateMealPlan,
  deleteMealPlan
} from "../controllers/mealPlansController.js";
import { verifyGoogleToken } from "../middleware/auth.js";

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
 *         description: Successfully retrieved all meal plans
 *   post:
 *     summary: Create a new meal plan
 *     tags: [MealPlans]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MealPlan'
 *     responses:
 *       201:
 *         description: Meal plan created successfully
 *       401:
 *         description: Unauthorized
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
 *         description: Successfully retrieved meal plan
 *       404:
 *         description: Meal plan not found
 *   put:
 *     summary: Update a meal plan by ID
 *     tags: [MealPlans]
 *     security:
 *       - bearerAuth: []
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
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Meal plan not found
 *   delete:
 *     summary: Delete a meal plan by ID
 *     tags: [MealPlans]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Meal plan deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Meal plan not found
 */

router.get("/", getMealPlans);
router.get("/:id", getMealPlanById);
router.post("/", verifyGoogleToken, createMealPlan);
router.put("/:id", verifyGoogleToken, updateMealPlan);
router.delete("/:id", verifyGoogleToken, deleteMealPlan);

export default router;
