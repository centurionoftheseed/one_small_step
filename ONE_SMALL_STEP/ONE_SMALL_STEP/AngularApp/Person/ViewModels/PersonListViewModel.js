
app.controller("personListViewModel", function ($scope, personService, $http, $q, $routeParams, $window, $location, viewModelHelper) {


    $scope.viewModelHelper = viewModelHelper;
    $scope.personService = personService;

    var initialize = function () {
        $scope.refreshPersons();
        $scope.DISPLAY_TEST = "DISPLAY TEST";
        //alert("initialize")
    }

    $scope.refreshPersons = function () {
        viewModelHelper.apiGet('api/person', null,
            function (result) {
                //$scope.customers = result.data;
                //alert("person list");
                //console.log(result.data);
                //$scope.persons = result.data;
                $scope.dataGridContacts.data = result.data;
         
                //alert("TESTING");
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


    $scope.createPerson = function () {
        //viewModelHelper.navigateTo("person/create");
        viewModelHelper.navigateTo("contact/create");

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

    $scope.dataGridContacts = {
        //dataSource: customers,
        //data: customers,
        //data: $scope.personList,
        //data: personlstNew,
        columnDefs: [
            { name: "FirstName", field: "FirstName" },
            { name: "LastName", field: "LastName" },
            { name: "EmailAddress", field: "EmailAddress" },
            {
                name: 'isAction', displayName: 'Action', cellTemplate: '<div class="ngCellText ui-grid-cell-contents">' +
                    ' <div ng-click="grid.appScope.rowClick(row)">{{COL_FIELD}}</div>' +
                    //'<a href="#" id="aDeleteData" ng-click="grid.appScope.deleteRow(row)" >Delete</a>' +
                    '<a href="#" id="aDetailsData" ng-click="grid.appScope.detailsRow(row)" >Details</a>' +
                    '</div>'
            },
            { name: "LastName", field: "LastName" },
            { name: "EmailAddress", field: "EmailAddress" },

            { name: "View", field: 'click', cellTemplate: '<button class="btn primary" ng-click="grid.appScope.sampledetails(index)">Click Me</button>' },
            { name: 'isActive', displayName: 'Active', type: 'boolean', cellTemplate: '<input type="checkbox" ng-model="row.entity.isActive">' }
        ],

        //columns: ["CompanyName", "City", "State", "Phone", "Fax"],
        showBorders: true,
        enableRowHeaderSelection: true,
        enableRowSelection: true
    };

    $scope.detailsRow = function (row) {
        //debugger;

        var vPersonID = row.entity.PersonID;
        var index = $scope.dataGridContacts.data.indexOf(row.entity);
        console.log(index);
        //$scope.showPerson(COL_FIELD)


        $scope.personDetailData = $scope.dataGridContacts.data[index];
        //viewModelHelper.navigateTo('personDetailsView');
        viewModelHelper.navigateTo("contact/" + vPersonID);

    }
























  



});
