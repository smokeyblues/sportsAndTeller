var mongoose = require('mongoose');

// Define Games Schema
var gamesSchema = mongoose.Schema({
  home : String,
  away : String,
  start : Date,
  result : Boolean
});

// Export our model
module.exports = mongoose.model('Games', gamesSchema);

