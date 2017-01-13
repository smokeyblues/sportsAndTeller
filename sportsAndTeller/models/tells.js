var mongoose = require('mongoose');

// Define Tells Schema
var tellsSchema = mongoose.Schema({
    user_id    : {
      type : mongoose.Schema.ObjectId,
      ref  : "User"
    },
    game_id    : {
      type : mongoose.Schema.ObjectId,
      ref  : "Games"
    },
    tell       : String
});

// Export our model
module.exports = mongoose.model('Tells', tellsSchema);
