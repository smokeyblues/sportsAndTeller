var mongoose = require('mongoose');

// Define Teams Schema
var teamsSchema = mongoose.Schema({
  teamName : String,
  teamLogo : String
});

// Export our model
module.exports = mongoose.model('Teams', teamsSchema);

