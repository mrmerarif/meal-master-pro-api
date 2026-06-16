import express from "express";
import {
  getShoppingLists,
  getShoppingListById,
  createShoppingList,
  updateShoppingList,
  deleteShoppingList
} from "../controllers/shoppingListsController.js";
import { verifyGoogleToken } from "../middleware/auth.js";

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
 *         description: Successfully retrieved all shopping lists
 *   post:
 *     summary: Create a new shopping list
 *     tags: [ShoppingLists]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ShoppingList'
 *     responses:
 *       201:
 *         description: Shopping list created successfully
 *       401:
 *         description: Unauthorized
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
 *         description: Successfully retrieved shopping list
 *       404:
 *         description: Shopping list not found
 *   put:
 *     summary: Update a shopping list by ID
 *     tags: [ShoppingLists]
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
 *             $ref: '#/components/schemas/ShoppingList'
 *     responses:
 *       200:
 *         description: Shopping list updated successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Shopping list not found
 *   delete:
 *     summary: Delete a shopping list by ID
 *     tags: [ShoppingLists]
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
 *         description: Shopping list deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Shopping list not found
 */

router.get("/", getShoppingLists);
router.get("/:id", getShoppingListById);
router.post("/", verifyGoogleToken, createShoppingList);
router.put("/:id", verifyGoogleToken, updateShoppingList);
router.delete("/:id", verifyGoogleToken, deleteShoppingList);

export default router;
