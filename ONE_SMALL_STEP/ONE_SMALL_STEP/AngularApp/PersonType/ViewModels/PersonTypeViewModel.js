app.controller("personTypeViewModel",
    function ($scope, personService, $http, $q, $routeParams, $window, $location, viewModelHelper) {

        $scope.viewModelHelper = viewModelHelper;
        $scope.personService = personService;
        $scope.personIdTEST = 0;

        $scope.pageHeading = "Contact Type";

        //$scope.data = { pageHeading: "Message Type" };

        //$scope.obj = { pageHeading: null }; 
        //$scope.pageHeading = "TESTING";
        //var initialize = function () {
        //    //alert($routeParams.personId);

        //    $scope.refreshMessageType($routeParams.personId);
        //    //$scope.personTypeList();
        //}




        var initialize = function () {
            //$scope.getMessageType();
            $scope.getPersonType($routeParams.personTypeId);
            //$scope.DISPLAY_TEST = "DISPLAY TEST MESSAGE TYPE LIST VIEW MODEL";
            //$scope.pageHeading = "Message Type List"
            //alert("initialize")
            //console.log($routeParams.messageTypeId);
        }


        $scope.getPersonType = function (personTypeId) {
            viewModelHelper.apiGet("api/contacttype/" + personTypeId, null,
                function (result) {
                    // alert("here is result " + personId);
                    //personService.personId = personId;

                    $scope.personTypeId = personTypeId;
                    $scope.personType = result.data;
                    console.log($scope.personType);
                    //console.log($scope.messageType);
                    //$scope.getPersonType();
                    $scope.disableField();
                    //alert(personId);

                    // alert(result.data);
                    //console.log(result.data);

                    //alert(personId);
                    //showMessageType();
                });



            //$scope.refreshMessageType = function () { 
            //    //data.pageHeading = "Message Type List"
            //    viewModelHelper.apiGet('api/messageType', null,
            //        function (result) {
            //            //$scope.customers = result.data;
            //            //alert("person list");
            //            //console.log(result.data);
            //            $scope.messageTypes = result.data;
            //            //alert("TESTING");
            //        });
        }

        initialize();




        //$scope.showPersonType = function (personTypeId) {
        //    viewModelHelper.navigateTo("contacttype/" + personTypeId);
        //}


        //$scope.showMessageType = function (messageTypeId) {

        //    //$scope.$applyAsync();
        //    //$scope.data = { pageHeading: "TESTING 22" };
        //    viewModelHelper.navigateTo("messagetype/" + messageTypeId);
        //    //$scope.data.pageHeading = "TESTING 2";

        //    //data.pageHeading = "Message Type";  


        //    //$scope.pageHeading = "Message Type"
        //}


        $scope.createPersonType = function () {
            viewModelHelper.navigateTo("contacttype/create");
            //$scope.disableField();
            //document.getElementById("messageTypeEdit").disabled = true;    
        }

        $scope.cancelPersonType = function () {
            viewModelHelper.navigateTo("contacttype");

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
            document.getElementById("personTypeFieldset").disabled = true;
            document.getElementById("personTypeSave").disabled = true;
            document.getElementById("personTypeCancel").disabled = true;
        }

        $scope.enableField = function () {
            document.getElementById("personTypeFieldset").disabled = false;
            document.getElementById("personTypeSave").disabled = false;
            document.getElementById("personTypeCancel").disabled = false;
            document.getElementById("personTypeDelete").disabled = true;
            document.getElementById("personTypeEdit").disabled = true;
        }


        $scope.editPersonType = function () {
            $scope.enableField();

        }


        $scope.savePersonType = function (personType) {


            viewModelHelper.apiPut("api/contacttype/update", personType,
                function (result) {
                    //alert("here is result ");
                    //  personService.personId = personId;
                    //  alert("hello" + result.data);
                    //alert("api/create/person");
                    //alert("hello");
                    //alert(person.LastName);
                    $scope.personTypeId = result.data;
                });
            $scope.disableField();
            //$scope.$apply();
            viewModelHelper.navigateTo("contacttype");
        }




        $scope.deleteMessageType = function (messageTypeId) {
            //alert(personId);
            viewModelHelper.apiDelete("api/messagetype/delete/" + messageTypeId, null,
                function (result) {

                    // alert("here is result " + personId);
                    //personService.personId = personId;
                    //$scope.person = result.data;
                    //$scope.getPersonType();
                    //alert(personId);

                    // alert(result.data);
                    //console.log(result.data);
                    viewModelHelper.navigateTo("messagetype");
                    //alert(personId);
                });

        }

        //$scope.saveMessageType = function () {
        //    //alert("create person test");

        //    var messageTypeData = {

        //        MessageTypeName: $scope.MessageTypeName

        //    };
        //    //alert($scope.EmailAddress);
        //    //$scope.postPerson();
        //    viewModelHelper.apiPost("api/messagetype/create", messageTypeData,
        //        function (result) {
        //            $scope.messasgTypeId = result.data;

        //            //result.data = {};

        //            //$scope.MessageTypeName = '' 
        //            //$scope.MessageTypeID = ''


        //            viewModelHelper.navigateTo("messagetype");




        //        });
        //}


    });
