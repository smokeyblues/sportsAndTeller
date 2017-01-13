var Region = require('../models/region');

module.exports = {
  get : (req, res) => {
  
    if(req.params.id){
      // get one
      Region.findOne({_id : req.params.id}, (err, region)=>{
        res.send(region);
      });
    }
    else{
      // get many
      Region.find({}, (err, regions)=>{
        res.send(regions);
      });
    }
    
    
  },
  
  create : (req, res) => {
    var newRegion = new Region(req.body);
    
    newRegion.save((err, region)=>{
      if(err) {
        return res.send(err);
      }
      
      res.send(region);
      
    });
  }
  
}