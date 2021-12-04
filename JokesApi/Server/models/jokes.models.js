const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
  {
    name:
    {
      type: String,
      required: true
    },

    joke:
    {
      type: String,
      required: true
    }
  }
);

const Jokes = mongoose.model('Jokes', JokeSchema);

module.exports = Jokes;