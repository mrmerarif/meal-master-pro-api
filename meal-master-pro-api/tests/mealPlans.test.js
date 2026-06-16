import request from "supertest";
import app from "../server.js";
import { jest } from "@jest/globals";

jest.setTimeout(20000);

describe("MealPlans API", () => {
  test("GET /api/mealplans returns 200 and an array", async () => {
    const res = await request(app).get("/api/mealplans");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("GET /api/mealplans/:id returns 200, 400, or 404", async () => {
    const res = await request(app).get("/api/mealplans/1234567890abcdef");
    expect([200, 400, 404]).toContain(res.statusCode);
  });
});
