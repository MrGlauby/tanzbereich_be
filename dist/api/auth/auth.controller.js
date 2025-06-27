"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const register = (req, res) => {
    res.status(201).json({ message: 'User registriert (aus Controller)' });
};
exports.register = register;
const login = (req, res) => {
    res.json({ message: 'Login erfolgreich (aus Controller)', token: 'jwt.token.hier' });
};
exports.login = login;
