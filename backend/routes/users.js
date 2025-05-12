const express = require('express');
const User = require('../models/users'); // Modelo de usuario
const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Verificar si ya existe un usuario con el mismo correo
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Este correo ya está registrado' });
    }

    // Crear un nuevo usuario sin encriptar la contraseña
    const newUser = new User({
      name,
      email,
      password,  // Contraseña tal como se recibe (sin encriptación)
      role,  // Si no se pasa, se usará 'user' por defecto
    });

    // Guardar el nuevo usuario en la base de datos
    await newUser.save();

    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor al registrar el usuario' });
  }
});

// Ruta para iniciar sesión (login)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar al usuario por correo
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Comparar la contraseña ingresada con la contraseña guardada
    if (user.password !== password) {  // Comparación directa de contraseñas
      return res.status(400).json({ error: 'Contraseña incorrecta' });
    }

    // Si la contraseña es correcta, devolver los datos del usuario
    res.status(200).json({
      message: 'Login exitoso',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role, // Devuelve los datos del usuario
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor al hacer login' });
  }
});

module.exports = router;
