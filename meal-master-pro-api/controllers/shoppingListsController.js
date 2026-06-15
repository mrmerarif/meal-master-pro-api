import ShoppingList from "../models/ShoppingList.js";

// GET all shopping lists
export const getShoppingLists = async (req, res) => {
  try {
    const lists = await ShoppingList.find().populate("items.ingredient");
    res.status(200).json(lists);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch shopping lists", error: err.message });
  }
};

// GET one shopping list by ID
export const getShoppingListById = async (req, res) => {
  try {
    const list = await ShoppingList.findById(req.params.id).populate("items.ingredient");
    if (!list) return res.status(404).json({ message: "Shopping list not found" });
    res.status(200).json(list);
  } catch (err) {
    res.status(400).json({ message: "Invalid ID", error: err.message });
  }
};

// POST new shopping list
export const createShoppingList = async (req, res) => {
  try {
    if (!req.body.name || !req.body.items) {
      return res.status(400).json({ message: "Name and items are required" });
    }
    const list = new ShoppingList(req.body);
    await list.save();
    res.status(201).json(list);
  } catch (err) {
    res.status(400).json({ message: "Failed to create shopping list", error: err.message });
  }
};

// PUT update shopping list
export const updateShoppingList = async (req, res) => {
  try {
    const list = await ShoppingList.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!list) return res.status(404).json({ message: "Shopping list not found" });
    res.status(200).json(list);
  } catch (err) {
    res.status(400).json({ message: "Failed to update shopping list", error: err.message });
  }
};

// DELETE shopping list
export const deleteShoppingList = async (req, res) => {
  try {
    const list = await ShoppingList.findByIdAndDelete(req.params.id);
    if (!list) return res.status(404).json({ message: "Shopping list not found" });
    res.status(200).json({ message: "Shopping list deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: "Failed to delete shopping list", error: err.message });
  }
};
