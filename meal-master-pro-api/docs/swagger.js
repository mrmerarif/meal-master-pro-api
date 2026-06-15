import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Meal Master Pro API",
      version: "1.0.0",
      description:
        "API documentation for recipes, ingredients, meal plans, and shopping lists"
    },

    "x-tagGroups": [
      {
        name: "API Endpoints",
        tags: ["Recipes", "Ingredients", "MealPlans", "ShoppingLists"]
      }
    ],

    servers: [
      {
        url: "https://meal-master-pro-api.onrender.com",
        description: "Production server (Render)"
      },
      {
        url: "http://localhost:3000",
        description: "Local development server"
      }
    ],

    tags: [
      { name: "Recipes", description: "Endpoints for managing recipes" },
      { name: "Ingredients", description: "Endpoints for managing ingredients" },
      { name: "MealPlans", description: "Endpoints for managing meal plans" },
      { name: "ShoppingLists", description: "Endpoints for managing shopping lists" }
    ],

    components: {
      schemas: {
        Recipe: {
          type: "object",
          properties: {
            name: { type: "string" },
            description: { type: "string" },
            ingredients: {
              type: "array",
              items: { type: "string" }
            },
            steps: {
              type: "array",
              items: { type: "string" }
            },
            createdAt: { type: "string", format: "date-time" }
          }
        },
        Ingredient: {
          type: "object",
          properties: {
            name: { type: "string" },
            quantity: { type: "string" },
            unit: { type: "string" }
          }
        },
        MealPlan: {
          type: "object",
          properties: {
            title: { type: "string" },
            description: { type: "string" },
            recipes: {
              type: "array",
              items: { type: "string" } // recipe IDs
            },
            createdBy: { type: "string" }
          }
        },
        ShoppingList: {
          type: "object",
          properties: {
            name: { type: "string" },
            items: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  ingredient: { type: "string" },
                  quantity: { type: "string" },
                  unit: { type: "string" }
                }
              }
            },
            createdBy: { type: "string" }
          }
        }
      }
    }
  },
  apis: ["./routes/*.js"]
};

const specs = swaggerJsdoc(options);
export default specs;
