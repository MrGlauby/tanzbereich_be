// src/api/auth/auth.routes.ts
import { Router } from 'express';
import { register, login } from './auth.controller'; // <-- IMPORTIEREN

const router = Router();

// Die Logik ist jetzt im Controller
router.post('/register', register);
router.post('/login', login);

export default router;