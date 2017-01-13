var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan')('dev'),
    mongoose = require('mongoose'),
    Routes = require('./routes'),
    PORT = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/vikingQuest');

var app = express();

// Middleware
app.use(
  express.static('public'),
  logger, 
  bodyParser.json(),
  bodyParser.urlencoded({extended : true})
);

// Routes
Routes(app);

app.listen(PORT, ()=>{
   console.log(`Server is running on ${PORT}`);
});