// handlers/crearPreguntasVF.js

const {crearYGuardarPreguntasVF} = require('./crearPreguntaVF');


  const nuevasPreguntas = [
    {
      question: "¿Mar del Plata es la capital de Argentina?",
      type: "verdadero_falso",
      difficulty: "turista",
      category: "id_de_la_categoria_correspondiente",
      explanation: "Mar del Plata no es la capital de Argentina.",
      correct_answer: true
    },
    {
      question: "¿El Monumento a los Españoles se encuentra en Mar del Plata?",
      type: "verdadero_falso",
      difficulty: "residente",
      category: "id_de_la_categoria_correspondiente",
      explanation: "El Monumento a los Españoles sí se encuentra en Mar del Plata.",
      correct_answer: false
    },
    // Agrega más preguntas verdadero/falso aquí...
  ];

  crearYGuardarPreguntasVF(nuevasPreguntas);
  


