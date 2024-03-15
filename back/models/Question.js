const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true, validate: { maxLength: 255 } },
  type: { type: String, enum: ['verdadero_falso', 'opcion_multiple'], required: true },
  difficulty: { type: String, enum: ['turista', 'residente', 'nativo'], required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  image: String,
  explanation: String,
  answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }],
});

questionSchema.index({ category: 1, difficulty: 1, type: 1 }); // Ejemplo de índice

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
