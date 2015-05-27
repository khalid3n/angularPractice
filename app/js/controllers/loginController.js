angular.module('elanceTest')

.controller('LoginController',
    function ($scope, $location, $cookieStore, authorization) {

    $location.path('/listing');
       
    $scope.login = function () {
      var credentials = {
          username: this.username,
          passwrod: this.password
      };

      var success = function (data) {
          var token = data.token;

          api.init(token);

          $cookieStore.put('token', token);
          $location.path('/');
      };

      var error = function () {
          // TODO: apply user notification here..
      };

      authorization.login(credentials).success(success).error(error);
  };
});