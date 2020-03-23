


app.controller("sourceListViewModel", function ($scope, sourceService, $http, $q, $routeParams, $window, $location, viewModelHelper) {


    //sourceModule.controller("SourceListViewModel", function ($scope, $http, $q, $routeParams, $window, $location, viewModelHelper) {


    $scope.viewModelHelper = viewModelHelper;
    $scope.sourceService = sourceService;

    var initialize = function () {
        $scope.refreshSources();
        $scope.DISPLAY_TEST = "DISPLAY TEST";
        //alert("initialize")
    }

    $scope.refreshSources = function () {
        viewModelHelper.apiGet('api/source', null,
            function (result) {
                //$scope.customers = result.data;
                //alert("source list");
                //console.log(result.data);
                $scope.sources = result.data;

                //alert("TESTING");
            });
    }

    initialize();



    $scope.deleteSourceFromList = function (idx) {
        var sourceToDelete = $scope.sources[idx];
        //alert("index:" + idx);
        //alert(sourceToDelete.SourceID);
        //alert(sourceToDelete);
        $scope.sources.splice(idx, 1);
        //$scope.deleteSource2({ personId: sourceToDelete.sourceId }); CHECK ON THIS -- DON'T FOLLOW IT!!
        $scope.deleteSource2(sourceToDelete.SourceID);
    }


    $scope.createSource = function () {
        //viewModelHelper.navigateTo("source/create");
        viewModelHelper.navigateTo("contact/create");

    }

    $scope.deleteSource2 = function (sourceId) {
        //alert(sourceId);
        viewModelHelper.apiDelete("api/source/delete/" + sourceId, null,
            function (result) {

                // alert("here is result " + sourceId);
                //sourceService.sourceId = sourceId;
                //$scope.source = result.data;
                //$scope.getSourceType();
                //alert(sourceId);

                // alert(result.data);
                //console.log(result.data);

                //alert(sourceId);
            });

        //viewModelHelper.navigateTo('source/list');


    }


    //alert("after initialize");

    /*
    var url = "http://localhost:54064/api/source";
    var MainController = function ($scope, $http) {

        var onSuccess = function (response) {
            $scope.sources = response.data
        };
        var onFailure = function (error) {
            $scope.error = reason
        };

        var getAllSources = function () {
            $http.get(url)
                .then(onSuccess, onFailure)

        }

        getAllSources();
       

    }
     */
    //$scope.showCustomer = function (customer) {
    //    $scope.flags.shownFromList = true; // note this object is declared in the RootViewModel
    //    viewModelHelper.navigateTo('customer/show/' + customer.CustomerId);
    //}

    //$scope.deleteSourceTEST2 = function () {
    //    alert("delete test 2");
    //    if (sourceService.sourceId != 0) {
    //        // $scope.flags.shownFromList = false;
    //        //alert("hello");
    //        viewModelHelper.navigateTo(
    //            'source/Delete/' + sourceService.sourceId);
    //        //alert(sourceService.sourceId);
    //    };

    //}



});
