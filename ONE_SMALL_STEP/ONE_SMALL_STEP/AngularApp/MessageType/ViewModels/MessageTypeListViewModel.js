

app.controller("messageTypeListViewModel", function ($scope, personService, $http, $q, $routeParams, $window, $location, viewModelHelper) {
                

    //personModule.controller("PersonListViewModel", function ($scope, $http, $q, $routeParams, $window, $location, viewModelHelper) {


    $scope.viewModelHelper = viewModelHelper;
    //$scope.personService = personService;

    var initialize = function () {
        $scope.getMessageTypeList();
        //$scope.DISPLAY_TEST = "DISPLAY TEST MESSAGE TYPE LIST VIEW MODEL";
        //$scope.pageHeading = "Message Type List"
        //alert("initialize")
    }

    $scope.getMessageTypeList = function () {
        viewModelHelper.apiGet('api/messagetype', null,
            function (result) {           
    
                $scope.messageTypes = result.data;
   
            });
    }

    initialize();



    $scope.deleteMessageTypeFromList = function (idx) {
        var messageTypeToDelete = $scope.messageTypes[idx];
        //var messageTypeIDToDelete = messageTypeToDelete.messageTypeId;
        //console.log(idx);
        //console.log($scope.messageTypes[idx]);
        //console.log(messageTypeToDelete.MessageTypeID);
        //alert("index:" + idx);
        //alert(personToDelete.PersonID);
        //console.log(messageTypeToDelete.messageTypeId);
        //alert(personToDelete);
        $scope.messageTypes.splice(idx, 1);
        //$scope.deletePerson2({ personId: personToDelete.personId }); CHECK ON THIS -- DON'T FOLLOW IT!!

        $scope.deleteMessageType(messageTypeToDelete.MessageTypeID);
        //$scope.deleteMessageType(messageTypeIDToDelete);
        
        
    }


    $scope.createMessageType = function () {
        viewModelHelper.navigateTo("messagetype/create");
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

                //alert(personId);
            });

        //viewModelHelper.navigateTo('person/list');


    }

    //showMessageType
    $scope.showMessageType = function (messageTypeId) {

        //$scope.$applyAsync();
        //$scope.data = { pageHeading: "TESTING 22" };
        viewModelHelper.navigateTo("messagetype/" + messageTypeId);
        //$scope.data.pageHeading = "TESTING 2";

        //data.pageHeading = "Message Type";  


        //$scope.pageHeading = "Message Type"
    }

 



});
