app.controller("sourceTypeViewModel",
    function ($scope, personService, $http, $q, $routeParams, $window, $location, viewModelHelper) {

        $scope.viewModelHelper = viewModelHelper;
        $scope.personService = personService;
        $scope.personIdTEST = 0;

        $scope.pageHeading = "Source Type";


        var initialize = function () {
            //$scope.getSourceType();
            $scope.getSourceType($routeParams.sourceTypeId);
            //$scope.DISPLAY_TEST = "DISPLAY TEST MESSAGE TYPE LIST VIEW MODEL";
            //$scope.pageHeading = "Source Type List"
            //alert("initialize")
            //console.log($routeParams.sourceTypeId);
        }


        $scope.getSourceType = function (sourceTypeId) {
            viewModelHelper.apiGet("api/sourcetype/" + sourceTypeId, null,
                function (result) {
                    // alert("here is result " + personId);
                    //personService.personId = personId;

                    $scope.sourceTypeId = sourceTypeId;
                    $scope.sourceType = result.data;
                    //console.log($scope.sourceType);
                    //$scope.getPersonType();
                    $scope.disableField();
                    //alert(personId);

                    // alert(result.data);
                    //console.log(result.data);

                    //alert(personId);
                    //showSourceType();
                });




        }

        initialize();




        $scope.showSourceType = function (sourceTypeId) {
            viewModelHelper.navigateTo("sourcetype/" + sourceTypeId);
        }




        $scope.createSourceType = function () {
            viewModelHelper.navigateTo("sourcetype/create");
            //$scope.disableField();
            //document.getElementById("sourceTypeEdit").disabled = true;    
        }

        $scope.cancelSourceType = function () {
            viewModelHelper.navigateTo("sourcetype");

        }

        $scope.deletePerson2 = function (personId) {
            alert(personId);
            viewModelHelper.apiDelete("api/person/delete/" + personId, null,
                function (result) {


                });
        }









        //initialize();
        //personTypeList();

        $scope.disableField = function () {
            document.getElementById("sourceTypeFieldset").disabled = true;
            document.getElementById("sourceTypeSave").disabled = true;
            document.getElementById("sourceTypeCancel").disabled = true;
        }

        $scope.enableField = function () {
            document.getElementById("sourceTypeFieldset").disabled = false;
            document.getElementById("sourceTypeSave").disabled = false;
            document.getElementById("sourceTypeCancel").disabled = false;
            document.getElementById("sourceTypeDelete").disabled = true;
            document.getElementById("sourceTypeEdit").disabled = true;
        }


        $scope.editSourceType = function () {
            $scope.enableField();

        }


        $scope.saveSourceType = function (sourceType) {


            viewModelHelper.apiPut("api/sourcetype/update", sourceType,
                function (result) {
                    //alert("here is result ");
                    //  personService.personId = personId;
                    //  alert("hello" + result.data);
                    //alert("api/create/person");
                    //alert("hello");
                    //alert(person.LastName);
                    $scope.sourceTypeId = result.data;
                    viewModelHelper.navigateTo("sourcetype");
                });
            $scope.disableField();
            //$scope.$apply();
            //viewModelHelper.navigateTo("sourcetype");
        }




        $scope.deleteSourceType = function (sourceTypeId) {
            //alert(personId);
            viewModelHelper.apiDelete("api/sourcetype/delete/" + sourceTypeId, null,
                function (result) {

                    // alert("here is result " + personId);
                    //personService.personId = personId;
                    //$scope.person = result.data;
                    //$scope.getPersonType();
                    //alert(personId);

                    // alert(result.data);
                    //console.log(result.data);
                    viewModelHelper.navigateTo("sourcetype");
                    //alert(personId);
                });

        }

      


    });
