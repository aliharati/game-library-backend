require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Game = require('./models/Game');
const User = require('./models/User');
const Library = require('./models/Library');

app.get('/api/games', async (req, res) => {
  const games = await Game.find();
  res.json(games);
});

app.post('/api/library', async (req, res) => {
  const { userId, gameId } = req.body;
  const libraryEntry = new Library({ userId, gameId });
  await libraryEntry.save();
  res.status(201).send();
});

app.get('/api/library', async (req, res) => {
  const { userId } = req.query;
  const library = await Library.find({ userId }).populate('gameId');
  res.json(library);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
