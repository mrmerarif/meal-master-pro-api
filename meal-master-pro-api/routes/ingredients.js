import express from "express";
import {
  getIngredients,
  createIngredient,
  updateIngredient,
  deleteIngredient
} from "../controllers/ingredientsController.js";

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
 *         description: List of ingredients
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Ingredient'
 *   post:
 *     summary: Create a new ingredient
 *     tags: [Ingredients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Ingredient'
 *           example:
 *             name: "Tomato"
 *             quantity: "2"
 *             unit: "pieces"
 *     responses:
 *       201:
 *         description: Ingredient created successfully
 */

/**
 * @swagger
 * /api/ingredients/{id}:
 *   put:
 *     summary: Update an ingredient by ID
 *     tags: [Ingredients]
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
 *           example:
 *             name: "Onion"
 *             quantity: "1"
 *             unit: "piece"
 *     responses:
 *       200:
 *         description: Ingredient updated successfully
 *       404:
 *         description: Ingredient not found
 *   delete:
 *     summary: Delete an ingredient by ID
 *     tags: [Ingredients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Ingredient deleted successfully
 *       404:
 *         description: Ingredient not found
 */

router.get("/", getIngredients);
router.post("/", createIngredient);
router.put("/:id", updateIngredient);
router.delete("/:id", deleteIngredient);

export default router;
