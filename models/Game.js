const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: String,
  genre: String,
  releaseDate: Date
});

module.exports = mongoose.model('Game', gameSchema);
