import request from "supertest";
import { app, server } from "./app.js";
import mongoose from "mongoose";

describe("First Test", () => {

  afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  });
  it("should return api", async () => {
    const result = await request(app).get("/api/get-user");
    expect(result.statusCode).toBe(200);
    expect(result.body).toBeDefined();
    expect(Array.isArray(result.body)).toBe(true);
  });



});
