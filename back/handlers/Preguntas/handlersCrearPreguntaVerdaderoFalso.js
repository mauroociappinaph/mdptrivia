// handlers/handlersCrearPreguntasVF.js
const Question = require("../../models/Question");

async function crearYGuardarPreguntasVF(preguntas) {
  try {
    const preguntasGuardadas = await Question.create(nuevasPreguntas);
    console.log("Preguntas verdadero/falso guardadas:", preguntasGuardadas);
  } catch (error) {
    console.error("Error al guardar las preguntas verdadero/falso:", error);
  }
}

module.exports = { crearYGuardarPreguntasVF };
