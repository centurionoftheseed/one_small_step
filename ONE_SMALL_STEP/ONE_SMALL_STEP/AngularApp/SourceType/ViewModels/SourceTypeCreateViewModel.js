app.controller("sourceTypeCreateViewModel",
    function ($scope, personService, $http, $q, $routeParams, $window, $location, viewModelHelper) {

        $scope.viewModelHelper = viewModelHelper;
        $scope.personService = personService;



        var initialize = function () {
            //document.getElementById("sourceTypeEdit").disabled = true;  
            //document.getElementById("sourceTypeDelete").disabled = true;  

            //alert($routeParams.sourceId);

            //$scope.refreshSource($routeParams.sourceId);
            //$scope.createSource();
            //$scope.getSourceType();
            //$scope.saveSource();
            //$scop.saveSource();
            //alert("hello" + result.data);
            //$scope.sourceTypeList();
        }

 

        $scope.cancelSourceType = function () {
            viewModelHelper.navigateTo("sourcetype");
            //$scope.disableField();
            //document.getElementById("sourceTypeEdit").disabled = true;    
        }




        $scope.saveSourceType = function () {
            //alert("create source test");

            var sourceTypeData = {

                SourceTypeName: $scope.SourceTypeName

            };
            //alert($scope.EmailAddress);
            //$scope.postSource();
            viewModelHelper.apiPost("api/sourcetype/create", sourceTypeData,
                function (result) {
                    $scope.sourceTypeId = result.data;

                    //result.data = {};

                    //$scope.SourceTypeName = '' 
                    //$scope.SourceTypeID = ''


                    viewModelHelper.navigateTo("sourcetype");




                });
        }





        initialize();

    });
