const Question = require('../../models/Question');

// Función para crear y guardar preguntas en la base de datos
async function crearYGuardarPreguntasMC(preguntas) {
  try {
    const preguntasGuardadas = await Promise.all(
      preguntas.map(async (nuevaPregunta) => {
        const pregunta = new Question(nuevaPregunta);
        return await pregunta.save();
      })
    );
    console.log("Preguntas guardadas:", preguntasGuardadas);
  } catch (error) {
    console.error("Error al guardar las preguntas:", error);
  }
}

module.exports = { crearYGuardarPreguntasMC };