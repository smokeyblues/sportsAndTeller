var mongoose = require('mongoose');

// Define Schema
var vikingSchema = mongoose.Schema({
    firstName      : String,
    lastName       : String,
    
    favoriteWeapon : String,
    berserker      : {type : Boolean, default : false},
  
    favoriteGod    : String,
  
  // one to one
    region         : {
      type : mongoose.Schema.ObjectId,
      ref  : "Region"
    }
  
});

// Export our model
module.exports = mongoose.model('Viking', vikingSchema);

