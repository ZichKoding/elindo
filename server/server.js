const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require('./routes'));

// Serve up static assets
if( process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
});