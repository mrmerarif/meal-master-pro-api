import express from "express";
import {
  getShoppingLists,
  getShoppingListById,
  createShoppingList,
  updateShoppingList,
  deleteShoppingList
} from "../controllers/shoppingListsController.js";

const router = express.Router();

// GET all shopping lists
router.get("/", getShoppingLists);

// GET one shopping list by ID
router.get("/:id", getShoppingListById);

// POST new shopping list
router.post("/", createShoppingList);

// PUT update shopping list
router.put("/:id", updateShoppingList);

// DELETE shopping list
router.delete("/:id", deleteShoppingList);

export default router;
