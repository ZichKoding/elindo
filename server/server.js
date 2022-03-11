const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/connection');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
});