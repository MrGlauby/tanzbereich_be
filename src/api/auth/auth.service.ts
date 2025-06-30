// src/api/auth/auth.service.ts

// Diese Funktion wird später den User in der DB erstellen
export const registerUser = async (email: string, password: string, name: string) => {
  // Stell dir vor, hier wird das Passwort gehasht und der User gespeichert
  // TODO: Passwort hashen, User in DB speichern
  console.log('Registriere User:', { email, name }); // Debug-Ausgabe
  return { 
    message: 'User registriert (aus Service)', 
    user: { email, name } 
  };
};

// Diese Funktion wird später den User prüfen und ein Token erstellen
export const loginUser = async (email: string, password: string) => {
  // TODO: User in DB prüfen, Passwort vergleichen, JWT Token erstellen
  console.log('Login Versuch für:', email); // Debug-Ausgabe
  return { 
    message: 'Login erfolgreich (aus Service)', 
    token: 'jwt.token.hier',
    user: { email }
  };
};