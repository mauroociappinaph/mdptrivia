const mongoose = require('mongoose');

const responseSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
  response: { type: String, required: true },
  correct: { type: Boolean, default: false },
});

const Response = mongoose.model('Response', responseSchema);

module.exports = Response;
