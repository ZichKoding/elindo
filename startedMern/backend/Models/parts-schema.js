const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const partSchema = new Schema({
  Reference: { type: String },
  Description: { type: String },
  Replacements: { type: String },
});

const parts = mongoose.model("parts", partSchema);

module.exports = parts;
