angular.module('Valhalla')
  .controller('longHouse', longHouse);
           
longHouse.$inject = ['$http', '$location'];
              
function longHouse($http, $location) {
  var lh = this;
  
  lh.submitViking = function() {
    console.log(lh);
    
    // Send the data to the server
    $http({
      method : 'POST',
      url    : '/api/vikings',
      data   : lh.newViking
    }).then(function(response){
      console.log(response);
//       $location.url('/about')// used for routing between ANGULAR routes, NOT express routes
//       window.location.href = '/about'// used for routing between EXPRESS routes, NOT angular routes
    });
  }
  
  lh.getVikings = function(){
    $http({
      method : 'GET',
      url    : '/api/vikings'
    }).then(function(response){
      lh.vikings = response.data;
    });
  }
  lh.getVikings();
  
  lh.getRegions = function(){
    $http({
      method : 'GET',
      url    : '/api/regions'
    }).then(function(response){
      lh.regionList = response.data;
    });
  }
  lh.getRegions();
  
}              