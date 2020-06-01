//mainModule.controller("mainPersonListViewModel", function ($scope, $http, $q, $routeParams, $window, $location, viewModelHelper) {


//mainModule.controller("mainPersonListViewModel", function ($scope, $http, $q, $window, $location, viewModelHelper) {

app.controller("mainPersonListViewModel", function ($scope, $http, $q, $window, viewModelHelper) {
    //personModule.controller("PersonListViewModel", function ($scope, $http, $q, $routeParams, $window, $location, viewModelHelper) {
    console.log("Loading main personal list 1...")

    $scope.viewModelHelper = viewModelHelper;
    // $scope.personService = personService;

    //$scope.personList = "";

    //$scope.mailingList = [];

    var store = new DevExpress.data.CustomStore({
        key: "PersonID",
        load: function () {


            //$scope.refreshPersons()
        }


            //viewModelHelper.apiGet('api/person', null,
            //function (result) {
                //debugger;

                //$scope.personList = result.data;
                //$scope.dataGridMailingList.dataSource = result.data;

                //console.log("test");
                //$scope.mailingList = result.data;
                //console.log($scope.mailingList);
                //$scope.dataGridContacts.data = result.data;

                //this.personlstNew = result.data;

            //})

           //$scope.refreshPersons()

        
});



    viewModelHelper.apiGet('api/person', null,
        function (result) {
            
            $scope.mailingList = result.data;
            //console.log($scope.mailingList);
            

        });


    var personlstNew = [];
    viewModelHelper.apiGet('api/person', null,
        function (result) {
            //debugger;
            //personlstNew = result.data;
            //$scope.mailingList = result.data;
            //$scope.dataSource = result.data;
            //$scope.mailingList = result.data;
            //mailingList = result.data;
            //console.log($scope.dataGridContacts.data);

            //console.log($scope.mailingList);
            //console.log(mailingList);
            //$scope.dataGridMailingList.data = result.data;
        });

    //console.log($scope.mailingList);

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

    var isChief = function (position) {
        return position && ["CEO", "CMO"].indexOf(position.trim().toUpperCase()) >= 0;
    };

    $scope.refreshPersons = function () {

        viewModelHelper.apiGet('api/person', null,
            function (result) {
                //debugger;

                //$scope.personList = result.data;
                //$scope.dataGridMailingList.dataSource = result.data;

                //console.log("test");

                $scope.mailingList = result.data;
                console.log($scope.mailingList);
                //console.log($scope.mailingList);
                $scope.dataGridContacts.data = result.data;
                //console.log($scope.dataGridContacts.data);
                //this.personlstNew = result.data;


                $scope.dataGridMailingList = {
                    dataSource: $scope.mailingList,
                    showBorders: true,
                    editing: {
                        mode: "row",
                        allowUpdating: true,
                        allowDeleting: true,
                        //allowDeleting: function (e) {
                        //    return !isChief(e.row.data.Position);
                        //},
                        useIcons: true
                    },

                    columns: [
                        {
                            type: "buttons",
                            width: 110,
                            buttons: ["edit", "delete", {
                                hint: "Clone",
                                icon: "repeat",
                                //visible: function (e) {
                                //    return !e.row.isEditing && !isChief(e.row.data.Position);
                                //},
                                
                                onClick: function (e) {
                                    //var clonedItem = angular.copy(e.row.data);
                                    //alert(e.row.data.PersonID);
                                    console.log(e.row.data.PersonID);
                                    //var personId = e.row.data.PersonID;
                                    //$scope.showPerson(e.row.data.PersonID)
                                    //$scope.showPerson(personId);
                                    DevExpress.ui.notify("The button was clicked");
                                    //viewModelHelper.navigateTo("contact/" + personId)

                                    //clonedItem.ID = ++maxID;
                                    //employees.splice(e.row.rowIndex, 0, clonedItem);
                                    //e.component.refresh(true);
                                    //e.event.preventDefault();
                                }
                            }]
                        },
                                  "PersonID"
                                , "EmailAddress"
                                , "FirstName"
                                , "LastName"
                                ]
                        //},
                    //],
                    
                };


            });
    }

    initialize();
    console.log("calling data");
    //console.log($scope.dataGridContacts.data);

    

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


    //$scope.dataGridOptions = {
    //    //dataSource: customers,
    //    //data: customers,
    //    data: customers,
    //    columnDefs: [
    //        { name: "CompanyName", field: "CompanyName" },
    //        { name: "City", field: "City" },
    //        { name: "State", field: "State" },
    //        { name: "Phone", field: "Phone" },
    //        { name: "Fax", field: "Fax" },
    //        { name: "View", field: 'click', cellTemplate: '<button class="btn primary" ng-click="grid.appScope.sampledetails()">Click Me</button>' },
    //        { name: 'isActive', displayName: 'Active', type: 'boolean', cellTemplate: '<input type="checkbox" ng-model="row.entity.isActive">' }

    //    ],

    //    //columns: ["CompanyName", "City", "State", "Phone", "Fax"],
    //    showBorders: true,
    //    enableRowHeaderSelection: true

    //};


    $scope.sampledetails = function (firstName) {
        alert('Hi Click is working ' + firstName);
    }
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

    //console.log(mailingList);

    //$scope.gridData = [];
    //var jsonData = $scope.mailingList;
    //$scope.gridData = jsonData;

    //console.log($scope.mailingList);

    //$scope.dataGridMailingList = {
    //    dataSource: $scope.gridData,
    //    columns: ["EmailAddress", "FirstName", "LastName"],
    //    showBorders: true
    //};

    //$scope.dataGridMailingList = {
    //             //dataSource: $scope.mailingList
    //    //}
    //    //,
    //    dataSource: store,
    //    columns: [

    //        {
    //            dataField: "Product",
    //            groupIndex: 0
    //        },

    //        'FirstName'
    //        ,
    //        {
    //            dataField: "FirstName",
    //            dataType: "string"
    //            //,
    //            //width: 150
    //        },
    //        {
    //            dataField: "LastName",
    //            dataType: "string"
    //            //,
    //            //width: 150
    //        }


    //        //,
    //        //{
    //        //    dataField: "Amount",
    //        //    caption: "Sale Amount",
    //        //    dataType: "number",
    //        //    format: "currency",
    //        //    alignment: "right",
    //        //}
    //        //,

    //        //{
    //        //    dataField: "Discount",
    //        //    caption: "Discount %",
    //        //    dataType: "number",
    //        //    format: "percent",
    //        //    alignment: "right",
    //        //    allowGrouping: false,
    //        //    cellTemplate: "discountCellTemplate",
    //        //    cssClass: "bullet"
    //        //},
    //        //{
    //        //    dataField: "SaleDate",
    //        //    dataType: "date"
    //        //},
    //        //{
    //        //    dataField: "Region",
    //        //    dataType: "string"
    //        //},
    //        //{
    //        //    dataField: "Sector",
    //        //    dataType: "string",
    //        //},
    //        //{
    //        //    dataField: "Channel",
    //        //    dataType: "string",
    //        //},
    //        //{
    //        //    dataField: "Customer",
    //        //    dataType: "string",
    //        //    width: 150
    //        //}
    //    ]

    //}


    //$scope.getValue = function (cellValue, colKey, rowIndex) {
    //    //$('#cellModal').modal('show');
    //    $scope.cellValue = cellValue;
    //    colKeyTemp = colKey;
    //    rowIndexTemp = rowIndex;
    //};

        /*
        < div ng - class="'colt' + col.index" ng - input="COL_FIELD" ng - model="COL_FIELD" >
            <a href="" ng-click="getValue(COL_FIELD, col.field, row.rowIndex )" > {{ COL_FIELD }} </a>
</div >
*/

    //$scope.dataGridOptions = {
    //    dataSource: {
    //        store: {
    //            type: "odata",
    //            url: "https://js.devexpress.com/Demos/SalesViewer/odata/DaySaleDtoes",
    //            beforeSend: function (request) {
    //                request.params.startDate = "2018-05-10";
    //                request.params.endDate = "2018-05-15";
    //            }
    //        }
    //    },
    //    paging: {
    //        pageSize: 10
    //    },
    //    pager: {
    //        showPageSizeSelector: true,
    //        allowedPageSizes: [10, 25, 50, 100]
    //    },
    //    remoteOperations: false,
    //    searchPanel: {
    //        visible: true,
    //        highlightCaseSensitive: true
    //    },
    //    groupPanel: { visible: true },
    //    grouping: {
    //        autoExpandAll: false
    //    },
    //    allowColumnReordering: true,
    //    rowAlternationEnabled: true,
    //    showBorders: true,
    //    columns: [
    //        {
    //            dataField: "Product",
    //            groupIndex: 0
    //        },
    //        {
    //            dataField: "Amount",
    //            caption: "Sale Amount",
    //            dataType: "number",
    //            format: "currency",
    //            alignment: "right",
    //        },
    //        {
    //            dataField: "Discount",
    //            caption: "Discount %",
    //            dataType: "number",
    //            format: "percent",
    //            alignment: "right",
    //            allowGrouping: false,
    //            cellTemplate: "discountCellTemplate",
    //            cssClass: "bullet"
    //        },
    //        {
    //            dataField: "SaleDate",
    //            dataType: "date"
    //        },
    //        {
    //            dataField: "Region",
    //            dataType: "string"
    //        },
    //        {
    //            dataField: "Sector",
    //            dataType: "string",
    //        },
    //        {
    //            dataField: "Channel",
    //            dataType: "string",
    //        },
    //        {
    //            dataField: "Customer",
    //            dataType: "string"
    //        }
    //    ],
    //    onContentReady: function (e) {
    //        if (!collapsed) {
    //            collapsed = true;
    //            e.component.expandRow(["EnviroCare"]);
    //        }
    //    }
    //};

    //$scope.customizeTooltip = function (pointsInfo) {
    //    return { text: parseInt(pointsInfo.originalValue) + "%" };
    //};

});
