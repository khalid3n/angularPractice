var app = angular.module('test', [
  "ngRoute",
  "ngCookies", 
  "ui.bootstrap.modal"
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        redirectTo: '/listing'
      }).
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'LoginController'
      }).
      when('/listing', {
        templateUrl: 'partials/listing.html',
        controller: 'ListingController'
      }).
      otherwise({
        redirectTo: '/listing'
      });
  }]);
