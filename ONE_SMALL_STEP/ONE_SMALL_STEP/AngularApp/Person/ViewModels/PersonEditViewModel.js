app.controller("personEditViewModel",
    function ($scope, personService, $http, $q, $routeParams, $window, $location, viewModelHelper) {

        $scope.viewModelHelper = viewModelHelper;
        $scope.personService = personService;
        $scope.personIdTEST = 0;

        $scope.pageHeading = "Contact";

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
            $scope.getMessageType($routeParams.messageTypeId);
            //$scope.DISPLAY_TEST = "DISPLAY TEST MESSAGE TYPE LIST VIEW MODEL";
            //$scope.pageHeading = "Message Type List"
            //alert("initialize")
            //console.log($routeParams.messageTypeId);
        }


        $scope.getMessageType = function (messageTypeId) {
            viewModelHelper.apiGet("api/messagetype/" + messageTypeId, null,
                function (result) {
                    // alert("here is result " + personId);
                    //personService.personId = personId;

                    $scope.messageTypeId = messageTypeId;
                    $scope.messageType = result.data;
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




        $scope.showPerson = function (personId) {
            viewModelHelper.navigateTo("contact/" + personId);
        }


        //$scope.showMessageType = function (messageTypeId) {

        //    //$scope.$applyAsync();
        //    //$scope.data = { pageHeading: "TESTING 22" };
        //    viewModelHelper.navigateTo("messagetype/" + messageTypeId);
        //    //$scope.data.pageHeading = "TESTING 2";

        //    //data.pageHeading = "Message Type";  


        //    //$scope.pageHeading = "Message Type"
        //}


        $scope.createPerson= function () {
            viewModelHelper.navigateTo("contact/create");
            //$scope.disableField();
            //document.getElementById("messageTypeEdit").disabled = true;    
        }

        $scope.cancelPerson = function () {
            viewModelHelper.navigateTo("contact");

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
            document.getElementById("personFieldset").disabled = true;
            document.getElementById("personSave").disabled = true;
            document.getElementById("personCancel").disabled = true;
        }

        $scope.enableField = function () {
            document.getElementById("personFieldset").disabled = false;
            document.getElementById("personSave").disabled = false;
            document.getElementById("personCancel").disabled = false;
            document.getElementById("personDelete").disabled = true;
            document.getElementById("personEdit").disabled = true;
        }


        $scope.editPerson = function () {
            $scope.enableField();

        }


        $scope.savePerson2 = function (person) {


            viewModelHelper.apiPut("api/person/update", person,
                function (result) {
                    //alert("here is result ");
                    //  personService.personId = personId;
                    //  alert("hello" + result.data);
                    //alert("api/create/person");
                    //alert("hello");
                    //alert(person.LastName);
                    $scope.personId = result.data;
                });
            $scope.disableField();
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
