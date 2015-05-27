angular.module('test').


controller('ListingController', function($scope, $http) {
    var isUpdate = false;
    var index = 0;
    $scope.showme = true;
    $scope.contact = {};
    $scope.showModal = false;

    function getContacts() {
        /*$http.get(buildUrl("contacts"))
        .success(function(data, status, headers, config) {
            $scope.contacts = data
        }).
        error(function(data, status, headers, config) {});*/
        $scope.contacts = [{firstName: "khalid", lastName: "khalid", email: "khalid3n@yahoo.com", contactNo: "452345" }, 
                            {firstName: "khalid", lastName: "khalid", email: "khalid3n@yahoo.com", contactNo: "452345" }, 
                            {firstName: "khalid", lastName: "khalid", email: "khalid3n@yahoo.com", contactNo: "452345" },
                            {firstName: "khalid", lastName: "khalid", email: "khalid3n@yahoo.com", contactNo: "452345" }];
    }

    getContacts();

    $scope.removeContact = function(contact) {
        var retVal = confirm("Are you sure you want to delete this contact?");
        if (!retVal)
            return;
        //$http.delete(buildUrl("contact/" + contact.id)).
        //success(function(data, status, headers, config) {
            var index = $scope.contacts.indexOf(contact);
            $scope.contacts.splice(index, 1);
        //}).
        //error(function(data, status, headers, config) {
        //   console.log("this was not expected!!")
        //});
    }

    $scope.viewContact = function(contact) {
        $scope.showModal = true;
        $scope.contact = contact;
        $scope.showme = false;
    }

    $scope.editContact = function(contact) {
        $scope.showModal = true;
        index = $scope.contacts.indexOf(contact);
        $scope.contact = contact;
        isUpdate = true;
    }

    function buildUrl(urlText) {
        return "http://localhost:8080/ElanceTest/" + urlText;
    }
    return $scope;
});