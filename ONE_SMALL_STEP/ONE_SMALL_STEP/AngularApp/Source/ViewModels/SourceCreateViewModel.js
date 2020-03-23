app.controller("sourceCreateViewModel",
    function ($scope, sourceService, $http, $q, $routeParams, $window, $location, viewModelHelper) {

        $scope.viewModelHelper = viewModelHelper;
        $scope.sourceService = sourceService;

        var initialize = function () {
            //alert($routeParams.sourceId);

            //$scope.refreshSource($routeParams.sourceId);
            //$scope.createSource();
            $scope.getSourceType();
            //$scope.saveSource();
            //$scop.saveSource();
            //alert("hello" + result.data);
            //$scope.sourceTypeList();
        }

        $scope.refreshSource = function (sourceId) {
            viewModelHelper.apiGet("api/source/" + sourceId, null,
                function (result) {
                    // alert("here is result " + sourceId);
                    //sourceService.sourceId = sourceId;
                    $scope.source = result.data;
                    //$scope.getSourceType();
                    //$scope.createSource();
                    // alert(result.data);
                    //console.log(result.data);

                    //alert(sourceId);
                });
        }

        $scope.getSourceType = function () {
            viewModelHelper.apiGet("api/sourceType", null,
                function (result) {
                    //   alert("here is result " + sourceId);
                    //  sourceService.sourceId = sourceId;
                    //alert("hello" + result.data);
                    $scope.sourceType = result.data;

                    //$scope.sourceTypeList();
                    ///     alert(result.data);
                    //console.log(result.data);

                    //alert(sourceId);
                });
        }
        //initialize();

        //$scope.getSourceType = function () {
        //    viewModelHelper.apiGet("api/source/sourceType", null,
        //        function (result) {
        //            //   alert("here is result " + sourceId);
        //            //  sourceService.sourceId = sourceId;
        //              //alert("hello" + result.data);
        //            $scope.sourceType = result.data;
        //            //$scope.sourceTypeList();
        //            ///     alert(result.data);
        //            //console.log(result.data);

        //            //alert(sourceId);
        //        });
        //}


        $scope.saveSource = function () {
            //alert("create source test");

            var sourceData = {
                //  SourceID: $scope.SourceID
                //,
                FirstName: $scope.FirstName
                , LastName: $scope.LastName
                , EmailAddress: $scope.EmailAddress
                , Screenshot: $scope.Screenshot
                , SourceTypeID: $scope.SourceTypeID

            };
            //alert($scope.EmailAddress);
            //$scope.postSource();
            viewModelHelper.apiPost("api/source/create", sourceData,
                function (result) {
                    //   alert("here is result " + sourceId);
                    //  sourceService.sourceId = sourceId;
                    //  alert("hello" + result.data);
                    //alert("api/create/source");
                    //alert("hello");
                    $scope.sourceId = result.data;
                    //var output = JSON.parse(result.data);
                    //$scope.sourceID = output.sourceID;
                    //$scope.sourceTypeList();
                    ///     alert(result.data);
                    //console.log(result.data);
                    //alert(output);
                    //alert(sourceId);
                    //$scope.refreshSource(result.data);


                    //viewModelHelper.navigateTo(
                    //    'source/show/' + $scope.sourceId);
                    //formSourceCreateView
                    //$scope.formSourceCreateView.$se
                    result.data = {};
                    //$scope.
                    //alert("pristine 1")
                    //$scope.formSourceCreateView.$setPristine();
                    $scope.sourceId = ''
                    $scope.FirstName = ''
                    $scope.LastName = ''
                    $scope.EmailAddress = ''
                    $scope.Screenshot = ''
                    $scope.SourceTypeID = ''
                    //alert("pristine 2")
                    //$scope.createSource();
                    //alert("TEST");
                    //sourceData = null;
                    //window.history.back();

                    //alert($scope.sourceId);
                    //$scope.refreshSource($scope.sourceId);
                    //$scope.
                });
        }

        //$scope.createSource = function () {
        //    viewModelHelper.navigateTo("source/create");

        //}
        //$scope.postSource = function () {
        //    viewModelHelper.apiPost("api/source/create", sourceData,
        //        function (result) {
        //            //   alert("here is result " + sourceId);
        //            //  sourceService.sourceId = sourceId;
        //            //  alert("hello" + result.data);
        //            //alert("api/create/source");
        //            $scope.source = result.data;
        //            //$scope.sourceTypeList();
        //            ///     alert(result.data);
        //            //console.log(result.data);

        //            //alert(sourceId);
        //        });
        //}




        //$scope.sourceTypeList = function () {

        //    alert("before invokeing");
        //    viewModelHelper.apiGet("api/source/sourceType"), null,
        //        function (result) {
        //            alert("calling before result" + result.data);
        //            $scope.sourceType = result.data;
        //            alert("calling after result" + result.data);


        //        };
        //};

        initialize();
        //sourceTypeList();





        //alert("initialize");
    });
