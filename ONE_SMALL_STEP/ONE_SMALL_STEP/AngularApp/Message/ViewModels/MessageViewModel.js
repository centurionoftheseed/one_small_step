app.controller("messageViewModel",
    function ($scope, personService, $http, $q, $routeParams, $window, $location, viewModelHelper) {

        $scope.viewModelHelper = viewModelHelper;
        $scope.personService = personService;
        $scope.personIdTEST = 0;

        $scope.pageHeading = "Message";

  
        var initialize = function () {
            //$scope.getMessageType();
            $scope.getMessage($routeParams.messageId);
        }


        $scope.getMessageType = function (messageTypeId) {
            viewModelHelper.apiGet("api/message/" + messageId, null,
                function (result) {
                    // alert("here is result " + personId);
                    //personService.personId = personId;

                    $scope.messageTypeId = messageTypeId;
                    $scope.messageType = result.data;
                    //console.log($scope.messageType);
                    //$scope.getPersonType();
                    $scope.disableField();
  
                });


        }


        $scope.getMessage = function (messageId) {
            viewModelHelper.apiGet("api/message/" + messageId, null,
                function (result) {
                    // alert("here is result " + personId);
                    //personService.personId = personId;

                    $scope.messageId = messageId;
                    $scope.message = result.data;
                    $scope.getMessageType();
                    $scope.disableField();
                    //alert(personId);

                    // alert(result.data);
                    //console.log(result.data);

                    //alert(personId);
                });
        }




        //$scope.getMessageType = function (messageTypeId) {
        //    viewModelHelper.apiGet("api/messagetype/" + messageTypeId, null,
        //        function (result) {
        //            // alert("here is result " + personId);
        //            //personService.personId = personId;

        //            $scope.messageTypeId = messageTypeId;
        //            $scope.messageType = result.data;
        //            //console.log($scope.messageType);
        //            //$scope.getPersonType();
        //            $scope.disableField();
        //            //alert(personId);

        //            // alert(result.data);
        //            //console.log(result.data);

        //            //alert(personId);
        //            //showMessageType();
        //        });




        initialize();




        $scope.showMessageType = function (messageTypeId) {
            viewModelHelper.navigateTo("message/" + messageTypeId);
        }


        $scope.createMessageType = function () {
            viewModelHelper.navigateTo("message/create");
            //$scope.disableField();
            //document.getElementById("messageTypeEdit").disabled = true;    
        }

        $scope.cancelMessageType = function () {
            viewModelHelper.navigateTo("message");

        }


        //initialize();
        //personTypeList();

        $scope.disableField = function () {
            document.getElementById("messageTypeFieldset").disabled = true;
            document.getElementById("messageTypeSave").disabled = true;
            document.getElementById("messageTypeCancel").disabled = true;
        }

        $scope.enableField = function () {
            document.getElementById("messageTypeFieldset").disabled = false;
            document.getElementById("messageTypeSave").disabled = false;
            document.getElementById("messageTypeCancel").disabled = false;
            document.getElementById("messageTypeDelete").disabled = true;
            document.getElementById("messageTypeEdit").disabled = true;
        }


        $scope.editMessageType = function () {
            $scope.enableField();

        }


        $scope.saveMessageType = function (messageType) {


            viewModelHelper.apiPut("api/message/update", messageType,
                function (result) {
                    //alert("here is result ");
                    //  personService.personId = personId;
                    //  alert("hello" + result.data);
                    //alert("api/create/person");
                    //alert("hello");
                    //alert(person.LastName);
                    $scope.messageTypeId = result.data;
                });
            $scope.disableField();
            //$scope.$apply();
            viewModelHelper.navigateTo("message");
        }




        $scope.deleteMessageType = function (messageTypeId) {
            //alert(personId);
            viewModelHelper.apiDelete("api/message/delete/" + messageTypeId, null,
                function (result) {

                    // alert("here is result " + personId);
                    //personService.personId = personId;
                    //$scope.person = result.data;
                    //$scope.getPersonType();
                    //alert(personId);

                    // alert(result.data);
                    //console.log(result.data);
                    viewModelHelper.navigateTo("message");
                    //alert(personId);
                });

        }



    });
