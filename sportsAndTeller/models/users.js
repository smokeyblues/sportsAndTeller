var mongoose = require('mongoose');

// Define User Schema
var userSchema = mongoose.Schema({
    username   : String,
    passwword  : String
});

// Export our model
module.exports = mongoose.model('User', userSchema);

