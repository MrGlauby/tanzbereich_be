"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("./api/auth/auth.routes")); // <-- IMPORTIEREN
const app = (0, express_1.default)();
// Middleware, um JSON aus dem Body der Anfrage zu lesen
app.use(express_1.default.json());
// Alle Routen aus der auth.routes.ts unter dem Pfad /api/auth verwenden
app.use("/api/auth", auth_routes_1.default); // <-- VERWENDEN
app.listen(3000, () => {
    console.log("Server läuft auf Port 3000");
});
