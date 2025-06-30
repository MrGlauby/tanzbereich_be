// src/api/auth/auth.routes.ts
import { Router } from 'express';
import { register, login } from './auth.controller';

const router = Router();

// Test-Route
router.get('/', (req, res) => {
  res.json({ message: 'Auth routes are working!' });
});

// Auth-Routes
router.post('/register', register);
router.post('/login', login);

export default router;