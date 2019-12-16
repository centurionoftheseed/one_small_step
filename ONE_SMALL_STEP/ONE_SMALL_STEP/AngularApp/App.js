



var commonModule = angular.module('common', ['ngRoute']);

commonModule.factory('viewModelHelper',
    function ($http, $q, $window, $location) {
        return MyApp.viewModelHelper(
            $http, $q, $window, $location);
    });

//var mainModule = angular.module("main", ['common','personModule']);
var mainModule = angular.module('main', ['common']);

var personModule = angular.module('person', ['common']);
//var personModule = angular.module('person', []);
//var rootApp = angular.module('rootApp', ['common', 'mainModule', 'personModule']);


var rootApp = angular.module('rootApp', ['common', 'main', 'person']);



//var rootApp = angular.module('rootApp',['common'])
//var mainModule = angular.module("main", []);

//var mainModule = angular.module('main', ['common','person']);


//rootApp.factory('Scopes', function ($rootScope) {
//    var mem = {};

//    return {
//        store: function (key, value) {
//            mem[key] = value;
//        },
//        get: function (key) {
//            return mem[key];
//        }
//    };
//});


//app.controller('OneController', function ($scope, Scopes) {
//    Scopes.store('OneController', $scope);
//    //...
//});
//app.controller('TwoController', function ($scope, Scopes) {
//    Scopes.store('TwoController', $scope);
//    //...
//});



//commonModule.factory('viewModelHelper',
//    function ($http, $q, $window, $location) {
//        return MyApp.viewModelHelper(
//            $http, $q, $window, $location);
//    });

commonModule.factory('validator', function () { return valJs.validator(); });


//rootApp.controller("indexViewModel", function (
//    $scope, $rootScope, $http, $q, $routeParams, $window,
//    $location, viewModelHelper, navbarService) {

//    //$rootScope.$on("dummyevent"), function () {
//    //    var t = navbarService.getData();
//    //    alert(t);
//    //}

//    //var self = this;
//    //$scope.TEST_DATA = "TESTING 123";

//    //$scope.topic =
//    //    "COMING FROM APP.JS -- MAIN";
//    //$scope.author = "Richard W. Memmer";
//    //$scope.randomText = "Et ipsum ea sit magna facer nostrud sit vel wisi amet exerci enim eum dolore ipsum dolore voluptua ipsum erat"

//    $scope.personList = function () {
//        alert("hello 2");

//        $scope.showPersonList = false;
//        alert($scope.showPersonList);
//        viewModelHelper.navigateTo('person/list');
//    }

//});






(function (myApp) {
    var viewModelHelper = function (
        $http, $q, $window, $location) {

        var self = this;

        self.modelIsValid = true;
        self.modelErrors = [];

        self.resetModelErrors = function () {
            self.modelErrors = [];
            self.modelIsValid = true;
        }




        self.apiDelete = function (uri, data, success, failure, always) {
            self.modelIsValid = true;
            //alert("delete method" + MyApp.rootPath + uri);
            
            $http.delete(MyApp.rootPath + uri, data)
                .then(function (result) {
                    success(result);
                    if (always != null)
                        always();
                }, function (result) {
                    if (failure != null) {
                        failure(result);
                    }
                    else {
                        var errorMessage = result.status + ':' + result.statusText;
                        if (result.data != null) {
                            if (result.data.Message != null)
                                errorMessage += ' - ' + result.data.Message;
                            if (result.data.ExceptionMessage != null)
                                errorMessage += ' - ' + result.data.ExceptionMessage;
                        }
                        self.modelErrors = [errorMessage];
                        self.modelIsValid = false;
                    }
                    if (always != null)
                        always();
                });
            //alert(uri);
        }





        self.apiGet = function (uri, data, success, failure, always) {
            self.modelIsValid = true;
            //alert("get method" + uri);
            $http.get(MyApp.rootPath + uri, data)
                .then(function (result) {
                    success(result);
                    if (always != null)
                        always();
                }, function (result) {
                    if (failure != null) {
                        failure(result);
                    }
                    else {
                        var errorMessage = result.status + ':' + result.statusText;
                        if (result.data != null) {
                            if (result.data.Message != null)
                                errorMessage += ' - ' + result.data.Message;
                            if (result.data.ExceptionMessage != null)
                                errorMessage += ' - ' + result.data.ExceptionMessage;
                        }
                        self.modelErrors = [errorMessage];
                        self.modelIsValid = false;
                    }
                    if (always != null)
                        always();
                });
            //alert(uri);
        }

        self.apiPost = function (uri, data, success, failure, always) {
            self.modelIsValid = true;
            //alert("apiPost");
            $http.post(MyApp.rootPath + uri, data)
                .then(function (result) {
                    success(result);
                    if (always != null)
                        always();
                }, function (result) {
                    if (failure != null) {
                        failure(result);
                    }
                    else {
                        var errorMessage = result.status + ':' + result.statusText;
                        if (result.data != null) {
                            if (result.data.Message != null)
                                errorMessage += ' - ' + result.data.Message;
                            if (result.data.ExceptionMessage != null)
                                errorMessage += ' - ' + result.data.ExceptionMessage;
                        }
                    }
                    if (always != null)
                        always();
                });
        }


        self.apiPut = function (uri, data, success, failure, always) {
            self.modelIsValid = true;
            //alert("put method" + MyApp.rootPath + uri + data);

            $http.put(MyApp.rootPath + uri, data)
                .then(function (result) {
                    //alert("http_put" + data);
                    success(result);
                    if (always != null)
                        always();
                    alert("http_put 2");
                }, function (result) {
                    if (failure != null) {
                        failure(result);
                        //alert("http_put 3");
                    }
                    else {
                        var errorMessage = result.status + ':' + result.statusText;
                        alert(errorMessage);
                        if (result.data != null) {
                            if (result.data.Message != null)
                                errorMessage += ' - ' + result.data.Message;
                            if (result.data.ExceptionMessage != null)
                                errorMessage += ' - ' + result.data.ExceptionMessage;
                        }
                        self.modelErrors = [errorMessage];
                        self.modelIsValid = false;
                    }
                    if (always != null)
                        always();
                });
            //alert(errorMessage);
        }


        self.goBack = function () {
            $window.history.back();
        }

        self.navigateTo = function (path, params) {
            if (params == null)
                $location.path(MyApp.rootPath + path);  
            else
                $location.path(MyApp.rootPath + path).search(params);
        }

        self.refreshPage = function (path) {
            $window.location.href = MyApp.rootPath + path;
        }

        self.clone = function (obj) {
            return JSON.parse(JSON.stringify(obj))
        }

        self.querystring = function (param) {
            if ($location.search != null)
                return $location.search()[param];
            else
                return null;
        }

        self.resetQueryParams = function () {
            $location.url($location.path());
        }

        return this;
    };
    myApp.viewModelHelper = viewModelHelper;
}(window.MyApp));


