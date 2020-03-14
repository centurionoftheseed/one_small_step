

app.controller("sourceTypeListViewModel", function ($scope, personService, $http, $q, $routeParams, $window, $location, viewModelHelper) {


    //personModule.controller("PersonListViewModel", function ($scope, $http, $q, $routeParams, $window, $location, viewModelHelper) {


    $scope.viewModelHelper = viewModelHelper;
    //$scope.personService = personService;

    var initialize = function () {
        $scope.getSourceTypeList();
        //$scope.DISPLAY_TEST = "DISPLAY TEST MESSAGE TYPE LIST VIEW MODEL";
        //$scope.pageHeading = "Message Type List"
        //alert("initialize")
        console.log("initialize");
    }

    $scope.getSourceTypeList = function () {
        viewModelHelper.apiGet('api/sourcetype', null,
            function (result) {

                $scope.sourceTypes = result.data;
                console.log($scope.sourceTypes);
            });
    }

    initialize();



    $scope.deleteSourceTypeFromList = function (idx) {
        var sourceTypeToDelete = $scope.sourceTypes[idx];
        $scope.sourceTypes.splice(idx, 1);
        //$scope.deletePerson2({ personId: personToDelete.personId }); CHECK ON THIS -- DON'T FOLLOW IT!!

        $scope.deleteSourceType(sourceTypeToDelete.SourceTypeID);

    }


    $scope.createSourceType = function () {
        viewModelHelper.navigateTo("sourcetype/create");
    }


    $scope.deleteSourceType = function (sourceTypeId) {
        //alert(personId);
        viewModelHelper.apiDelete("api/sourcetype/delete/" + sourceTypeId, null,
            function (result) {
            });

        //viewModelHelper.navigateTo('person/list');


    }

    //showSourceType
    $scope.showSourceType = function (sourceTypeId) {

        //$scope.$applyAsync();
        //$scope.data = { pageHeading: "TESTING 22" };
        viewModelHelper.navigateTo("sourcetype/" + sourceTypeId);
        //$scope.data.pageHeading = "TESTING 2";

        //data.pageHeading = "Message Type";  


        //$scope.pageHeading = "Message Type"
    }





});
