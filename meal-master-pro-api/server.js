import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";

import recipeRoutes from "./routes/recipes.js";
import ingredientRoutes from "./routes/ingredients.js";
import { connectDB } from "./config/db.js";
import specs from "./docs/swagger.js"; // central Swagger config

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/recipes", recipeRoutes);
app.use("/api/ingredients", ingredientRoutes);

// Swagger docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("/", (req, res) => {
  res.send("Meal Master Pro API is running...");
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();
