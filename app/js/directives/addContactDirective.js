(function() {
  'use strict';

  angular.module('test')
    .directive('addContact', function() {
      return {
        templateUrl: '/partials/addContact.html',
        

        controller: ['$attrs', '$scope', '$http', function($attrs, $scope, $http) {
          var url  = $attrs.url || "A";
          var number = $attrs.number;
          console.log(url);
          console.log(number);

          $scope.addContact = function() {
            $scope.showModal = true;
            $scope.contact = {};
            $scope.showme = true;
          }

          $scope.closeModal = function() {
            $scope.contact = {};
            $scope.showModal = false;
            $scope.showme = true;
          }
          $scope.submitForm = function() {
            /*var url = buildUrl("contact");
            var method = "POST";*/
            /*if (isUpdate) {
                url = buildUrl("contact/" + $scope.contact.id);
                method = "PUT";
            }
            $http({
                method: method,
                url: url,
                data: $scope.contact,
                headers: {
                    'Content-Type': 'application/json'
                }
            }).success(function(data) {
                if (isUpdate) {
                    $scope.contacts[index] = data;*/
            //} else {
            $scope.contacts.push($scope.contact);
            //}
            $scope.contact = {};
            $scope.showModal = false;
            /* }).error(function() {
                 console.log("something went wrong!!");
             });*/
          }
        }]
      };
    });
})();
