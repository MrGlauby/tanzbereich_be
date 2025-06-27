// src/api/auth/auth.controller.ts
import { Request, Response } from 'express';
import * as authService from './auth.service'; // <-- SERVICE IMPORTIEREN

export const register = async (req: Request, res: Response) => {
  const result = await authService.registerUser(); // <-- SERVICE AUFRUFEN
  res.status(201).json(result);
};

export const login = async (req: Request, res: Response) => {
  const result = await authService.loginUser(); // <-- SERVICE AUFRUFEN
  res.json(result);
};