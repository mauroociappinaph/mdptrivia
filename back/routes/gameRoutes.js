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


// Agregar un console.log para la ruta base
router.use('/', (req, res, next) => {
    console.log('Se accedió a la ruta base de juegos');
    next();
});

module.exports = router;
