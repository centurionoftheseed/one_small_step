app.controller("mainHomeViewModel", function (
    $scope, $http, $q, $routeParams, $window,
    $location, viewModelHelper) {

    var self = this;


    $scope.topic =
        "Integrating ASP.NET MVC and AngularJS";
    $scope.author = "Miguel A. Castro";

    console.log("THIS IS THE MAIN HOME VIEW MODEL BEING CALLED")
    $scope.viewModelHelper = viewModelHelper;
    //$scope.customerService = customerService;
    $scope.pageHeading = "This is the Main Home View Model";

    var initialize = function () {
        $scope.refreshCustomers();
    }

    $scope.refreshCustomers = function () {
        console.log("inside refresh customers in mainHomeViewModel");
        viewModelHelper.apiGet('api/customers', null,
            function (result) {
                $scope.customers = result.data;
                //console.table($scope.customers);
            });
    }



    // $scope.dataGridOptions = {
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
    //            dataType: "string",
    //            width: 150
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


    //$scope.showCustomer = function (customer) {
    //    $scope.flags.shownFromList = true; // note this object is declared in the RootViewModel
    //    viewModelHelper.navigateTo('customer/show/' + customer.CustomerId);
    //}

    //initialize();




});















//mainModule.controller("mainHomeViewModel", function ($scope, customerService, $http, $q, $routeParams, $window, $location, viewModelHelper) {

//    $scope.viewModelHelper = viewModelHelper;
//    $scope.customerService = customerService;
//    $scope.TEST_FROM_MAIN_MODULE = "test from main module";

//    var initialize = function () {
//        $scope.refreshCustomers();
//    }

//    $scope.refreshCustomers = function () {
//        viewModelHelper.apiGet('api/customers', null,
//            function (result) {
//                $scope.customers = result.data;
//            });
//    }

//    $scope.showCustomer = function (customer) {
//        $scope.flags.shownFromList = true; // note this object is declared in the RootViewModel
//        viewModelHelper.navigateTo('customer/show/' + customer.CustomerId);
//    }

//    initialize();
//});
