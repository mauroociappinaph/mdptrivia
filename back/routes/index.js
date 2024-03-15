const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const questionRoutes = require('./questionRoutes');
const gameRoutes = require('./gameRoutes');

// Rutas de autenticación
router.use('/auth', authRoutes);

// Rutas de preguntas
router.use('/questions', questionRoutes);

// Rutas de juego
router.use('/game', gameRoutes);

module.exports = router;
