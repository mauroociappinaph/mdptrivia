// En tu controlador (controllers/verdaderoFalsoController.js)

const Question = require('../models/Question');

exports.getPreguntasVerdaderoFalso = async (req, res) => {
  try {
    // Obtener preguntas de verdadero/falso de la base de datos
    const preguntasVF = await Question.find({ type: 'verdadero_falso' });

    res.status(200).json({ preguntasVF });
  } catch (error) {
    console.error("Error al obtener las preguntas de verdadero/falso:", error);
    res.status(500).json({ message: 'Hubo un error al obtener las preguntas de verdadero/falso' });
  }
};
