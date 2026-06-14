// docs/swagger.js
import swaggerJsdoc from "swagger-jsdoc";

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
        url: "https://meal-master-pro-api.onrender.com/", 
        description: "Production server (Render)"
      },
      {
        url: "http://localhost:3000",
        description: "Local development server"
      }
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
        }
      }
    }
  },
  apis: ["./routes/*.js"], // points to all route files
};

const specs = swaggerJsdoc(options);
export default specs;
