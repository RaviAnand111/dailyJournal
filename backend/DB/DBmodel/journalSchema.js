const mongoose = require("mongoose");

const journalSchema = mongoose.Schema({
 title: {
  type: String,
  required: true
 },
 content: {
  type: String,
  required: true
 }
})

const journal = mongoose.model("journal", journalSchema);

module.exports = journal;