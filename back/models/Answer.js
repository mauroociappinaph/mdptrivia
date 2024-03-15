const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  question_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
  answer: { type: String, required: true },
  is_correct: { type: Boolean, default: false }
});

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
