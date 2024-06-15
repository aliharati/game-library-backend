const mongoose = require('mongoose');

const librarySchema = new mongoose.Schema({
  userId: String,
  gameId: { type: mongoose.Schema.Types.ObjectId, ref: 'Game' }
});

module.exports = mongoose.model('Library', librarySchema);
