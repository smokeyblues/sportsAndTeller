var mongoose = require('mongoose');

//Connect to the Database (use db)
mongoose.connect('mongodb://localhost/sptell');

// Mongoose expects us to provide SCHEMA for our Documents/Collections
// We need to specify WHAT a document looks like
// And then, name the collection those documents should live in

// Create Document Schemas

// Define User Schema
var userSchema = mongoose.Schema({
   username   : String,
   passwword  : String
});

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

// Define Games Schema
var gamesSchema = mongoose.Schema({
 home : String,
 away : String,
 start : Date,
 result : Boolean
});

// Define Teams Schema
var teamsSchema = mongoose.Schema({
 teamShort : String,
 teamLong : String
});

// Create the collection and hand off the document schema

var user  = mongoose.model('User', userSchema);
var tells = mongoose.model('Tells', tellsSchema);
var games = mongoose.model('Games', gamesSchema);
var teams = mongoose.model('Teams', teamsSchema);


// // Creates a new Games, Team documents (record) in the sptell collection
var teamsArray = new teams([
  {
  teamShort : 'HOU',
  teamLong   : 'Houston Texans'
  },
  {
  teamShort : 'PIT',
  teamLong : 'Pittsburg Steelers'
  },
  {
  teamShort : 'NE',
  teamLong : 'New England Patriots'  
  },
  {
  teamShort : 'KC',
  teamLong  : 'Kansas City Chiefs'
  },
  {
  teamShort : 'GB',
  teamLong  : 'Green Bay Packers'
  },
  {
  teamShort : 'SEA',
  teamLong  : 'Seattle Seahawks'

  },
  {
  teamShort : 'ATL',
  teamLong : 'Atlanta Falcons'
  },
  {
  teamShort : 'DAL',
  teamLong : 'Dallas Cowboys'
  },
]);

//  home : String,
//  away : String,
//  start : Date,
//  result : Boolean

var gamesArray = new games([
  {home :"ATL",
   away : "SEA",
   start: "2:35PM",
   result: False
  },
  {home :"NE",
   away : "HOU",
   start: "6:15PM",
   result: False
  },
  {home :"DAL",
   away : "GB",
   start: "2:40PM",
   result: False
  },
  {home :"KC",
   away : "PIT",
   start: "6:20PM",
   result: False
  }
]);
