const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/elindo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;