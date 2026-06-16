import express from "express";
import {
  getIngredients,
  createIngredient,
  updateIngredient,
  deleteIngredient
} from "../controllers/ingredientsController.js";
import { verifyGoogleToken } from "../middleware/auth.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Ingredients
 *   description: Ingredient management endpoints
 */

/**
 * @swagger
 * /api/ingredients:
 *   get:
 *     summary: Get all ingredients
 *     tags: [Ingredients]
 *     responses:
 *       200:
 *         description: Successfully retrieved all ingredients
 *   post:
 *     summary: Create a new ingredient
 *     tags: [Ingredients]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ingredient'
 *     responses:
 *       201:
 *         description: Ingredient created successfully
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/ingredients/{id}:
 *   put:
 *     summary: Update an ingredient by ID
 *     tags: [Ingredients]
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
 *             $ref: '#/components/schemas/Ingredient'
 *     responses:
 *       200:
 *         description: Ingredient updated successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Ingredient not found
 *   delete:
 *     summary: Delete an ingredient by ID
 *     tags: [Ingredients]
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
 *         description: Ingredient deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Ingredient not found
 */

router.get("/", getIngredients);
router.post("/", verifyGoogleToken, createIngredient);
router.put("/:id", verifyGoogleToken, updateIngredient);
router.delete("/:id", verifyGoogleToken, deleteIngredient);

export default router;
