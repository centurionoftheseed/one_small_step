//mainModule.controller("mainPersonListViewModel", function ($scope, $http, $q, $routeParams, $window, $location, viewModelHelper) {


//mainModule.controller("mainPersonListViewModel", function ($scope, $http, $q, $window, $location, viewModelHelper) {

app.controller("mainPersonListViewModel", function ($scope, $http, $q, $window, viewModelHelper) {
    //personModule.controller("PersonListViewModel", function ($scope, $http, $q, $routeParams, $window, $location, viewModelHelper) {
    console.log("Loading main personal list 1...")

    $scope.viewModelHelper = viewModelHelper;
    // $scope.personService = personService;

    //$scope.personList = "";


    var personlstNew = [];
    viewModelHelper.apiGet('api/person', null,
        function (result) {
            //debugger;
            //personlstNew = result.data;
            $scope.dataGridContacts.data = result.data;
        });


    $scope.showPerson = function (personId) {
        //viewModelHelper.navigateTo("person/show/" + personId);
        viewModelHelper.navigateTo("contact/" + personId);
    }

    //$scope.personList = function () {
    //    alert("hello 33");

    //    //$scope.showPersonList = false;
    //    //alert($scope.showPersonList);
    //    viewModelHelper.navigateTo('person/list');
    //}
    $scope.DISPLAY_TEST_MAIN = "DISPLAY TEST MAIN PERSON LIST VIEW MODEL.";


    //$scope.showPerson = function (personId) {
    //    viewModelHelper.navigateTo("person/show/" + personId);
    //}


    var initialize = function () {
        //debugger;
        $scope.refreshPersons();

        //alert("TEST");
        //alert("initialize")
    }



    $scope.refreshPersons = function () {

        viewModelHelper.apiGet('api/person', null,
            function (result) {
                //debugger;

                $scope.personList = result.data;
                $scope.dataGridContacts.data = result.data;

                //this.personlstNew = result.data;

            });
    }

    initialize();



    $scope.deletePersonFromList = function (idx) {
        var personToDelete = $scope.persons[idx];
        //alert("index:" + idx);
        //alert(personToDelete.PersonID);
        //alert(personToDelete);
        $scope.persons.splice(idx, 1);
        //$scope.deletePerson2({ personId: personToDelete.personId }); CHECK ON THIS -- DON'T FOLLOW IT!!
        $scope.deletePerson2(personToDelete.PersonID);
    }



    $scope.deletePerson2 = function (personId) {
        //alert(personId);
        viewModelHelper.apiDelete("api/person/delete/" + personId, null,
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


    //alert("after initialize");

    /*
    var url = "http://localhost:54064/api/person";
    var MainController = function ($scope, $http) {

        var onSuccess = function (response) {
            $scope.persons = response.data
        };
        var onFailure = function (error) {
            $scope.error = reason
        };

        var getAllPersons = function () {
            $http.get(url)
                .then(onSuccess, onFailure)

        }

        getAllPersons();
       

    }
     */
    //$scope.showCustomer = function (customer) {
    //    $scope.flags.shownFromList = true; // note this object is declared in the RootViewModel
    //    viewModelHelper.navigateTo('customer/show/' + customer.CustomerId);
    //}

    //$scope.deletePersonTEST2 = function () {
    //    alert("delete test 2");
    //    if (personService.personId != 0) {
    //        // $scope.flags.shownFromList = false;
    //        //alert("hello");
    //        viewModelHelper.navigateTo(
    //            'person/Delete/' + personService.personId);
    //        //alert(personService.personId);
    //    };

    //}

    //DemoApp.controller('DemoController', function DemoController($scope) {

    //function DemoController($scope) {


    $scope.dataGridOptions = {
        //dataSource: customers,
        //data: customers,
        data: customers,
        columnDefs: [
            { name: "CompanyName", field: "CompanyName" },
            { name: "City", field: "City" },
            { name: "State", field: "State" },
            { name: "Phone", field: "Phone" },
            { name: "Fax", field: "Fax" },
            { name: 'isActive', displayName: 'Active', type: 'boolean', cellTemplate: '<input type="checkbox" ng-model="row.entity.isActive">' }

        ],

        //columns: ["CompanyName", "City", "State", "Phone", "Fax"],
        showBorders: true,
        enableRowHeaderSelection: true

    };




    //console.log($scope.personList);


    $scope.dataGridContacts = {
        //dataSource: customers,
        //data: customers,
        //data: $scope.personList,
        //data: personlstNew,
        columnDefs: [
            { name: "FirstName", field: "FirstName" },
            { name: "LastName", field: "LastName" },
            { name: "EmailAddress", field: "EmailAddress" },
            { name: 'isActive', displayName: 'Active', type: 'boolean', cellTemplate: '<input type="checkbox" ng-model="row.entity.isActive">' }
        ],

        //columns: ["CompanyName", "City", "State", "Phone", "Fax"],
        showBorders: true,
        enableRowHeaderSelection: true

    };




});
