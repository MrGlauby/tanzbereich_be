"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/api/auth/auth.routes.ts
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller"); // <-- IMPORTIEREN
const router = (0, express_1.Router)();
// Die Logik ist jetzt im Controller
router.post('/register', auth_controller_1.register);
router.post('/login', auth_controller_1.login);
exports.default = router;
