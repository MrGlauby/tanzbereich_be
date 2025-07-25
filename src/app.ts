// src/app.ts
import express from "express";
import authRoutes from "./api/auth/auth.routes";

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

// HIER FEHLT DIE ROUTE - füge sie hier ein:
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server ist online!' });
});

app.listen(3000, () => {
  console.log("Server läuft auf Port 3000");
});