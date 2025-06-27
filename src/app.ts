// src/app.ts
import express from "express";
import authRoutes from "./api/auth/auth.routes"; // <-- IMPORTIEREN

const app = express();

// Middleware, um JSON aus dem Body der Anfrage zu lesen
app.use(express.json());

// Alle Routen aus der auth.routes.ts unter dem Pfad /api/auth verwenden
app.use("/api/auth", authRoutes); // <-- VERWENDEN

app.listen(3000, () => {
  console.log("Server läuft auf Port 3000");
});
