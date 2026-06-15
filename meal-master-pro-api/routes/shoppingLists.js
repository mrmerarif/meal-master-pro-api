import express from "express";
import {
  getShoppingLists,
  getShoppingListById,
  createShoppingList,
  updateShoppingList,
  deleteShoppingList
} from "../controllers/shoppingListsController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: ShoppingLists
 *   description: Endpoints for managing shopping lists
 */

/**
 * @swagger
 * /api/shoppinglists:
 *   get:
 *     summary: Get all shopping lists
 *     tags: [ShoppingLists]
 *     responses:
 *       200:
 *         description: List of shopping lists
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ShoppingList'
 *   post:
 *     summary: Create a new shopping list
 *     tags: [ShoppingLists]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ShoppingList'
 *     responses:
 *       201:
 *         description: Shopping list created successfully
 */

/**
 * @swagger
 * /api/shoppinglists/{id}:
 *   get:
 *     summary: Get a shopping list by ID
 *     tags: [ShoppingLists]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Shopping list details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ShoppingList'
 *   put:
 *     summary: Update a shopping list by ID
 *     tags: [ShoppingLists]
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
 *             $ref: '#/components/schemas/ShoppingList'
 *     responses:
 *       200:
 *         description: Shopping list updated successfully
 *   delete:
 *     summary: Delete a shopping list by ID
 *     tags: [ShoppingLists]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Shopping list deleted successfully
 */

router.get("/", getShoppingLists);
router.get("/:id", getShoppingListById);
router.post("/", createShoppingList);
router.put("/:id", updateShoppingList);
router.delete("/:id", deleteShoppingList);

export default router;
