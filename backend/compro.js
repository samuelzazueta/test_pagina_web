const bcrypt = require('bcryptjs');

const storedPasswordHash = "$2b$10$xXeCzliyLz8d8LdyQm3vouRKx4PGV07w.c7HybTtx8S1muNnaas0m"; // El hash de la base de datos
const inputPassword = "password123"; // Contraseña ingresada

bcrypt.compare(inputPassword, storedPasswordHash, (err, result) => {
  if (err) {
    console.error(err);
  }
  console.log(result); // Debería ser `true` si las contraseñas coinciden
});
