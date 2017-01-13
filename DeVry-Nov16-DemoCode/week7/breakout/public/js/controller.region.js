angular.module('Valhalla')
  .controller('regionCtrl', regionCtrl)
              
regionCtrl.$inject = ["$routeParams", "$http"];

// $routeParams is basically req.params for angular

function regionCtrl ($routeParams, $http) {
  var rCtrl = this;
  
  console.log($routeParams);
  
  rCtrl.getRegion = function(){
    $http({
      method : 'GET',
      url : '/api/regions/' + $routeParams.id
    }).then(function(resp){
      rCtrl.region = resp.data;
    })
  }
  
  rCtrl.getVikings = function(){
    $http({
      method : 'GET',
      url : '/api/vikings',
      params : {
        // query string parameters
        region : $routeParams.id
      }
    }).then(function(resp){
      rCtrl.regionVikings = resp.data;
    })
  }
//   /api/vikings?region=w312903jwdfo
  rCtrl.getRegion();
  rCtrl.getVikings();
  
}              