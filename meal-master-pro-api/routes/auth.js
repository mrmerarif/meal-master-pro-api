import express from "express";
import { login, googleCallback, logout } from "../controllers/auth.js";

const router = express.Router();

// Start Google OAuth login
router.get("/login", login);

// Handle Google OAuth callback
router.get("/google/callback", googleCallback);

// Logout route
router.get("/logout", logout);

export default router;
