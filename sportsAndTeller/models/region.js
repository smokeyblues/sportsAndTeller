var mongoose = require('mongoose');

// Define Schema
var regionSchema = mongoose.Schema({
  name : String,
  location : {
    lat : Number,
    lng : Number
  },
  culture : {type : Array, default : []},
  
  // one to many
//   vikings : [{
//     type : mongoose.Schema.ObjectId,
//     ref : 'Viking'
//   }]
  
});

// Export our model
module.exports = mongoose.model('Region', regionSchema);

