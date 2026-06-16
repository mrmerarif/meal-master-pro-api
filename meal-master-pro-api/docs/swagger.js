import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Meal Master Pro API",
      version: "1.0.0",
      description:
        "API documentation for recipes, ingredients, meal plans, shopping lists, and authentication"
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
    ],

    "x-tagGroups": [
      {
        name: "API Endpoints",
        tags: ["Recipes", "Ingredients", "MealPlans", "ShoppingLists", "Auth"]
      }
    ],

    tags: [
      { name: "Recipes", description: "Endpoints for managing recipes" },
      { name: "Ingredients", description: "Endpoints for managing ingredients" },
      { name: "MealPlans", description: "Endpoints for managing meal plans" },
      { name: "ShoppingLists", description: "Endpoints for managing shopping lists" },
      { name: "Auth", description: "Endpoints for authentication and login" }
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      },
      schemas: {
        Recipe: {
          type: "object",
          properties: {
            name: { type: "string" },
            description: { type: "string" },
            ingredients: { type: "array", items: { type: "string" } },
            steps: { type: "array", items: { type: "string" } },
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
            recipes: { type: "array", items: { type: "string" } },
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
    },

    
    paths: {
      "/auth/login": {
        get: {
          tags: ["Auth"],
          summary: "Start Google OAuth login",
          description: "Redirects user to Google OAuth 2.0 for authentication",
          responses: {
            302: {
              description: "Redirects to Google OAuth login page"
            }
          }
        }
      },
      "/auth/google/callback": {
        get: {
          tags: ["Auth"],
          summary: "Handle Google OAuth callback",
          description: "Exchanges authorization code for tokens and returns JWT",
          parameters: [
            {
              name: "code",
              in: "query",
              required: true,
              description: "Authorization code returned by Google"
            }
          ],
          responses: {
            200: {
              description: "Login successful, returns JWT token"
            },
            401: {
              description: "Unauthorized or invalid code"
            }
          }
        }
      },
      "/auth/logout": {
        get: {
          tags: ["Auth"],
          summary: "Logout",
          description: "Ends the user session",
          responses: {
            200: {
              description: "Logged out successfully"
            }
          }
        }
      }
    }
  },
  apis: ["./routes/*.js"]
};

const specs = swaggerJsdoc(options);
export default specs;
