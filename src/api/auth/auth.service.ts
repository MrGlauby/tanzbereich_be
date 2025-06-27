// src/api/auth/auth.service.ts

// Diese Funktion wird später den User in der DB erstellen
export const registerUser = async () => {
  // Stell dir vor, hier wird das Passwort gehasht und der User gespeichert
  return { message: 'User registriert (aus Service)' };
};

// Diese Funktion wird später den User prüfen und ein Token erstellen
export const loginUser = async () => {
  return { message: 'Login erfolgreich (aus Service)', token: 'jwt.token.hier' };
};