import request from "supertest";
import app from "../server.js";
import { jest } from "@jest/globals";   // ✅ import jest

jest.setTimeout(20000);

describe("Recipes API", () => {
  test("GET /api/recipes returns 200 and an array", async () => {
    const res = await request(app).get("/api/recipes");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("GET /api/recipes/:id returns 200, 400, or 404", async () => {
    const res = await request(app).get("/api/recipes/1234567890abcdef");
    expect([200, 400, 404]).toContain(res.statusCode);
  });
});
