const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const db = require('./config/connection');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./routes'));

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

// Serve up static assets
if( process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
});