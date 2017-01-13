var Vikings = require('./controllers/vikingCtrl');
var Regions = require('./controllers/regionCtrl');

module.exports = (app) =>{
 
  app.get('/', (req, res)=>{
   res.sendFile('index.html', {root : './public/html'});
 });
 
  // Viking Routes
  app.get('/api/vikings', Vikings.get); // Get Many
  app.get('/api/vikings/:id', Vikings.get); // Get One
  app.post('/api/vikings', Vikings.create);

  // Region Routes
  app.get('/api/regions', Regions.get); // Get Many
  app.get('/api/regions/:id', Regions.get); // Get One
  app.post('/api/regions', Regions.create);
  
  app.get('*', (req, res)=>{
   res.sendFile('index.html', {root : './public/html'});
 });
}

