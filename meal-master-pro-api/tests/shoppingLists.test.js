import request from "supertest";
import app from "../server.js";
import { jest } from "@jest/globals";

jest.setTimeout(20000);

describe("ShoppingLists API", () => {
  test("GET /api/shoppinglists returns 200 and an array", async () => {
    const res = await request(app).get("/api/shoppinglists");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("GET /api/shoppinglists/:id returns 200, 400, or 404", async () => {
    const res = await request(app).get("/api/shoppinglists/1234567890abcdef");
    expect([200, 400, 404]).toContain(res.statusCode);
  });
});
