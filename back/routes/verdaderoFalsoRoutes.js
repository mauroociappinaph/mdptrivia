const express = require('express');
const router = express.Router();

// Importar controladores específicos para Trivia
const triviaController = require('../controllers/triviaController');

// Definir rutas para Trivia
router.get('/start', triviaController.startTrivia);
router.post('/answer', triviaController.submitAnswer);
router.get('/score', triviaController.getTriviaScore);

module.exports = router;
