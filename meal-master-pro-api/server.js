import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

import recipeRoutes from "./routes/recipes.js";
import ingredientRoutes from "./routes/ingredients.js";
import { connectDB } from "./config/db.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/recipes", recipeRoutes);
app.use("/api/ingredients", ingredientRoutes);

// Swagger setup
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Meal Master Pro API",
      version: "1.0.0",
      description: "API documentation for recipes and ingredients"
    },
    servers: [
      {
        url: "https://meal-master-pro-api.onrender.com", 
        description: "Production server (Render)"
      },
      {
        url: "http://localhost:3000",
        description: "Local development server"
      }
    ]
  },
  apis: ["./routes/*.js"], // points to your route files
};

const specs = swaggerJsdoc(options);
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
