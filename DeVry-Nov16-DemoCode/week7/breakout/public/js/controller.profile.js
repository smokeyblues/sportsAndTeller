angular.module('Valhalla')
  .controller('profileCtrl', profileCtrl)
              
profileCtrl.$inject = ["$routeParams", "$http"];

// $routeParams is basically req.params for angular

function profileCtrl ($routeParams, $http) {
  var pCtrl = this;
  
  console.log($routeParams);
  
  pCtrl.getVikingProfile = function(){
    $http({
      method : 'GET',
      url : '/api/vikings/' + $routeParams.id
    }).then(function(resp){
      pCtrl.viking = resp.data;
    })
  }
  
  pCtrl.getVikingProfile();
  
}              