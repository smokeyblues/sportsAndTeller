angular.module('sportsTeller', ['ngRoute'])
  .config(Router);

Router.$inject = ['$routeProvider', '$locationProvider'];

function Router ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl  : '/html/signup.html',
      controller   : '',
      controllerAs : ''
    })
    .when('/profile', {
      templateUrl  : '/html/profile.html',
      controller   : 'longHouse',
      controllerAs : 'lh'
    })
    .when('/picks', {
      templateUrl : '/html/picks.html'
    })
}