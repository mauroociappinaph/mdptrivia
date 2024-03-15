const express = require('express');
const router = express.Router();

// Importar rutas específicas para cada tipo de juego
const verdaderoFalsoRoutes = require('./verdaderoFalsoRoutes');


// Rutas base para cada tipo de juego
router.use('/verdaderofalso', verdaderoFalsoRoutes);
// router.use('/riddles', riddlesRoutes);

//! Importar Rutas base para Multiple Choose

//! Rutas base para Multiple Choose
router.use('/trivia', triviaRoutes);



module.exports = router;
