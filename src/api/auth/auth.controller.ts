// src/api/auth/auth.controller.ts
import { Request, Response } from 'express';
import * as authService from './auth.service'; // <-- SERVICE IMPORTIEREN

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, name } = req.body;
    
    // Input-Validierung
    if (!email || !password || !name) {
      res.status(400).json({ error: 'Email, password and name are required' });
      return;
    }
    
    if (password.length < 6) {
      res.status(400).json({ error: 'Password must be at least 6 characters long' });
      return;
    }
    
    const result = await authService.registerUser(email, password, name);
    res.status(201).json(result);
  } catch (error) {
    if (error instanceof Error) {
      // Spezifische Fehler basierend auf der Fehlermeldung
      if (error.message.includes('already exists')) {
        res.status(409).json({ error: error.message }); // Conflict
        return;
      }
    }
    res.status(400).json({ error: error instanceof Error ? error.message : 'Registration failed' });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    
    // Input-Validierung
    if (!email || !password) {
      res.status(400).json({ error: 'Email and password are required' });
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ error: 'Invalid email format' });
      return;
    }
    
    const result = await authService.loginUser(email, password);
    res.json(result);
  } catch (error) {
    if (error instanceof Error) {
      // Spezifische Fehler basierend auf der Fehlermeldung
      if (error.message.includes('not found') || error.message.includes('invalid')) {
        res.status(404).json({ error: error.message }); // Not Found
        return;
      }
    }
    res.status(401).json({ error: error instanceof Error ? error.message : 'Login failed' });
  }
};
