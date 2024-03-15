


const { crearYGuardarPreguntasMC } = require('./crearPreguntaMC');

// Array de nuevas preguntas relacionadas con Mar del Plata
const nuevasPreguntas = [
  {
    question: "¿Cuál es el nombre del monumento emblemático ubicado en la intersección de las calles Avenida Colón y Boulevard Marítimo Peralta Ramos?",
    type: "opcion_multiple",
    difficulty: "turista",
    category: "id_de_la_categoria_correspondiente",
    image: "url_de_la_imagen",
    explanation: "La respuesta correcta es el Monumento al Lobo Marino.",
    answers: ["id_de_la_respuesta_correcta", "id_de_la_respuesta_incorrecta_1", "id_de_la_respuesta_incorrecta_2"]
  },
  {
    question: "¿Cuál es el nombre del barrio ubicado en la zona céntrica de Mar del Plata, conocido por su gran cantidad de bares y restaurantes?",
    type: "opcion_multiple",
    difficulty: "turista",
    category: "id_de_la_categoria_correspondiente",
    image: "url_de_la_imagen",
    explanation: "La respuesta correcta es el barrio Güemes.",
    answers: ["id_de_la_respuesta_correcta", "id_de_la_respuesta_incorrecta_1", "id_de_la_respuesta_incorrecta_2"]
  },
  // Agrega más preguntas aquí...
];

// Llamar a la función para crear y guardar las preguntas
crearYGuardarPreguntasMC(nuevasPreguntas);
