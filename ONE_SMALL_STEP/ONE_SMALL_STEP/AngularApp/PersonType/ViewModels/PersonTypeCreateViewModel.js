﻿app.controller("personTypeCreateViewModel",
    function ($scope, personService, $http, $q, $routeParams, $window, $location, viewModelHelper) {

        $scope.viewModelHelper = viewModelHelper;
        $scope.personService = personService;



        var initialize = function () {
            //document.getElementById("personTypeEdit").disabled = true;  
            //document.getElementById("personTypeDelete").disabled = true;  

            //alert($routeParams.personId);

            //$scope.refreshPerson($routeParams.personId);
            //$scope.createPerson();
            //$scope.getPersonType();
            //$scope.savePerson();
            //$scop.savePerson();
            //alert("hello" + result.data);
            //$scope.personTypeList();
        }

        //$scope.refreshPerson = function (personId) {
        //    viewModelHelper.apiGet("api/persontype/" + personId, null,
        //        function (result) {
        //            // alert("here is result " + personId);
        //            //personService.personId = personId;
        //            $scope.person = result.data;
        //            //$scope.getPersonType();
        //            //$scope.createPerson();
        //            // alert(result.data);
        //            //console.log(result.data);

        //            //alert(personId);
        //        });
        //}

        $scope.cancelPersonType = function () {
            viewModelHelper.navigateTo("contacttype");
            //$scope.disableField();
            //document.getElementById("personTypeEdit").disabled = true;    
        }




        $scope.savePersonType = function () {
            //alert("create person test");

            var personTypeData = {

                PersonTypeName: $scope.PersonTypeName

            };
            //alert($scope.EmailAddress);
            //$scope.postPerson();
            viewModelHelper.apiPost("api/contacttype/create", personTypeData,
                function (result) {
                    $scope.personTypeId = result.data;

                    //result.data = {};

                    //$scope.PersonTypeName = '' 
                    //$scope.PersonTypeID = ''


                    viewModelHelper.navigateTo("contacttype");




                });
        }



        //////////$scope.savePersonType = function () {
        //////////    //alert("create person test");

        //////////    var personTypeData = {

        //////////          PersonTypeName: $scope.PersonTypeName   

        //////////    };
        //////////    //alert($scope.EmailAddress);
        //////////    //$scope.postPerson();
        //////////    viewModelHelper.apiPost("api/persontype/create", personTypeData,
        //////////        function (result) {
        //////////            $scope.messasgTypeId = result.data;

        //////////            //result.data = {};

        //////////            //$scope.PersonTypeName = '' 
        //////////            //$scope.PersonTypeID = ''


        //////////         viewModelHelper.navigateTo("persontype");




        //////////        });
        //////////}

        //$scope.createPerson = function () {
        //    viewModelHelper.navigateTo("person/create");

        //}
        //$scope.postPerson = function () {
        //    viewModelHelper.apiPost("api/person/create", personData,
        //        function (result) {
        //            //   alert("here is result " + personId);
        //            //  personService.personId = personId;
        //            //  alert("hello" + result.data);
        //            //alert("api/create/person");
        //            $scope.person = result.data;
        //            //$scope.personTypeList();
        //            ///     alert(result.data);
        //            //console.log(result.data);

        //            //alert(personId);
        //        });
        //}




        //$scope.personTypeList = function () {

        //    alert("before invokeing");
        //    viewModelHelper.apiGet("api/person/personType"), null,
        //        function (result) {
        //            alert("calling before result" + result.data);
        //            $scope.personType = result.data;
        //            alert("calling after result" + result.data);


        //        };
        //};

        initialize();
        //personTypeList();





        //alert("initialize");
    });
