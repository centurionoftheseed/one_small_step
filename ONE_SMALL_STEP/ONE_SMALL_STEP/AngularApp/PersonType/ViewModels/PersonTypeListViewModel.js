

app.controller("personTypeListViewModel", function ($scope, personService, $http, $q, $routeParams, $window, $location, viewModelHelper) {


    //personModule.controller("PersonListViewModel", function ($scope, $http, $q, $routeParams, $window, $location, viewModelHelper) {


    $scope.viewModelHelper = viewModelHelper;
    //$scope.personService = personService;

    var initialize = function () {
        $scope.getPersonTypeList();
        //$scope.DISPLAY_TEST = "DISPLAY TEST MESSAGE TYPE LIST VIEW MODEL";
        //$scope.pageHeading = "Message Type List"
        //alert("initialize")
    }

    $scope.getPersonTypeList = function () {
        viewModelHelper.apiGet('api/contacttype', null,
            function (result) {

                $scope.personTypes = result.data;

            });
    }

    initialize();



    $scope.deletePersonTypeFromList = function (idx) {
        var personTypeToDelete = $scope.personTypes[idx];
        $scope.personTypes.splice(idx, 1);
        //$scope.deletePerson2({ personId: personToDelete.personId }); CHECK ON THIS -- DON'T FOLLOW IT!!

        $scope.deletePersonType(personTypeToDelete.PersonTypeID);

    }


    $scope.createPersonType = function () {
        viewModelHelper.navigateTo("contacttype/create");
    }


    $scope.deletePersonType = function (personTypeId) {
        //alert(personId);
        viewModelHelper.apiDelete("api/contacttype/delete/" + personTypeId, null,
            function (result) {
            });

        //viewModelHelper.navigateTo('person/list');


    }

    //showPersonType
    $scope.showPersonType = function (personTypeId) {

        //$scope.$applyAsync();
        //$scope.data = { pageHeading: "TESTING 22" };
        viewModelHelper.navigateTo("contacttype/" + personTypeId);
        //$scope.data.pageHeading = "TESTING 2";

        //data.pageHeading = "Message Type";  


        //$scope.pageHeading = "Message Type"
    }





});
