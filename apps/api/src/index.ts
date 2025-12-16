import type { Request, Response } from "express";

import express from "express";

import { PORT } from "./config";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (_: Request, res: Response) => {
  res.json({ message: "Welcome to typerX API" });
});

app.get("/health", (_: Request, res: Response) => {
  res.json({ status: "ok" });
});

// Start server
app.listen(PORT, () => {
  console.warn(`Server is running on http://localhost:${PORT}`);
});
