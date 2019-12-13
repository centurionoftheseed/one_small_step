



var commonModule = angular.module('common', ['ngRoute']);
//var mainModule = angular.module("main", ['common','personModule']);
var mainModule = angular.module('main', []);

var personModule = angular.module('person', []);
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



commonModule.factory('viewModelHelper',
    function ($http, $q, $window, $location) {
        return MyApp.viewModelHelper(
            $http, $q, $window, $location);
    });

commonModule.factory('validator', function () { return valJs.validator(); });


rootApp.controller("indexViewModel", function (
    $scope, $rootScope,$http, $q, $routeParams, $window,
    $location, viewModelHelper, navbarService) {

    var self = this;

    $scope.topic =
        "COMING FROM APP.JS -- MAIN";
    $scope.author = "Richard W. Memmer";
    $scope.randomText = "Et ipsum ea sit magna facer nostrud sit vel wisi amet exerci enim eum dolore ipsum dolore voluptua ipsum erat"


    //$scope.personList = function () {
    //    //alert("hello");

    //    $scope.showPersonList = false;
    //    alert($scope.showPersonList);
    //    viewModelHelper.navigateTo('person/list')
    //}
});


    //viewModelHelper.navigateTo('person/list');
//mainModule.controller("indexViewModel", function (
//mainModule.controller("mainPersonListViewModel", function (
//    $scope, $http, $q, $routeParams, $window,
//    $location, viewModelHelper) {

//    var self = this;

//    $scope.topic =
//        "COMING FROM APP.JS -- MAIN";
//    $scope.author = "Richard W. Memmer";
//    $scope.randomText = "Et ipsum ea sit magna facer nostrud sit vel wisi amet exerci enim eum dolore ipsum dolore voluptua ipsum erat"

    
//    //$scope.personList = function () {
//    //    //$scope.showPersonList = false;
//    //    alert("test:");
//    //}

//    //$scope.personList = function () {
//    //    $scope.showPersonList = false;
//    //    alert($scope.showPersonList);
//    //    viewModelHelper.navigateTo('person/list');
//    //}
//});



//mainModule.controller("mainPersonListViewModel", function ($scope, $http, $q, $routeParams, $window, $location, viewModelHelper) {


//    //personModule.controller("PersonListViewModel", function ($scope, $http, $q, $routeParams, $window, $location, viewModelHelper) {


//    $scope.viewModelHelper = viewModelHelper;
//    //$scope.personService = personService;



//    var initialize = function () {
//        $scope.refreshPersons();
//        $scope.DISPLAY_TEST = "DISPLAY TEST";
//        alert("TEST");
//        //alert("initialize")
//    }

//    $scope.refreshPersons = function () {
//        viewModelHelper.apiGet('api/person', null,
//            function (result) {
//                //$scope.customers = result.data;
//                //alert("person list");
//                //console.log(result.data);
//                $scope.personList = result.data; //need to change persons to personList elsewhere
//                //alert("TESTING");
//            });
//    }

//    initialize();



//    $scope.deletePersonFromList = function (idx) {
//        var personToDelete = $scope.persons[idx];
//        //alert("index:" + idx);
//        //alert(personToDelete.PersonID);
//        //alert(personToDelete);
//        $scope.persons.splice(idx, 1);
//        //$scope.deletePerson2({ personId: personToDelete.personId }); CHECK ON THIS -- DON'T FOLLOW IT!!
//        $scope.deletePerson2(personToDelete.PersonID);
//    }



//    $scope.deletePerson2 = function (personId) {
//        //alert(personId);
//        viewModelHelper.apiDelete("api/person/delete/" + personId, null,
//            function (result) {

//                // alert("here is result " + personId);
//                //personService.personId = personId;
//                //$scope.person = result.data;
//                //$scope.getPersonType();
//                //alert(personId);

//                // alert(result.data);
//                //console.log(result.data);

//                //alert(personId);
//            });

//        //viewModelHelper.navigateTo('person/list');


//    }


//    //alert("after initialize");

//    /*
//    var url = "http://localhost:54064/api/person";
//    var MainController = function ($scope, $http) {

//        var onSuccess = function (response) {
//            $scope.persons = response.data
//        };
//        var onFailure = function (error) {
//            $scope.error = reason
//        };

//        var getAllPersons = function () {
//            $http.get(url)
//                .then(onSuccess, onFailure)

//        }

//        getAllPersons();
       

//    }
//     */
//    //$scope.showCustomer = function (customer) {
//    //    $scope.flags.shownFromList = true; // note this object is declared in the RootViewModel
//    //    viewModelHelper.navigateTo('customer/show/' + customer.CustomerId);
//    //}

//    //$scope.deletePersonTEST2 = function () {
//    //    alert("delete test 2");
//    //    if (personService.personId != 0) {
//    //        // $scope.flags.shownFromList = false;
//    //        //alert("hello");
//    //        viewModelHelper.navigateTo(
//    //            'person/Delete/' + personService.personId);
//    //        //alert(personService.personId);
//    //    };

//    //}



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



        //Function to Delete Employee based upon id
        //this.delete = function (id) {

        //self.apiDelete = function (id) {
        //    var request = $http({
        //        method: "delete",
        //        url: uri
        //    });
        //    return request;
        //};

        //self.apiDelete = function (uri, data, success, failure, always) {
        //    self.modelIsValid = true;

        //    alert("url is " + uri + "   " + data);
        //    //$http.delete(MyApp.rootPath + uri, data)
        //    //    .then(function (result) {
        //    //        success(result);
        //    //        if (always != null)
        //    //            always();
        //    //    }, function (result) {
        //    //        if (failure != null) {
        //    //            failure(result);
        //    //        }
        //    //        else {
        //    //            var errorMessage = result.status + ':' + result.statusText;
        //    //            if (result.data != null) {
        //    //                if (result.data.Message != null)
        //    //                    errorMessage += ' - ' + result.data.Message;
        //    //                if (result.data.ExceptionMessage != null)
        //    //                    errorMessage += ' - ' + result.data.ExceptionMessage;
        //    //            }
        //    //            self.modelErrors = [errorMessage];
        //    //            self.modelIsValid = false;
        //    //        }
        //    //        if (always != null)
        //    //            always();
        //    //    });
        //    //alert(uri);
        //}

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

//app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
//    $routeProvider
//    when("/", { templateUrl: "/Home/Index" })
//        //.when("/", { templateUrl: "/Home/Home" })
//        .when("/contact", { templateUrl: "/Home/Contact" })
//        .otherwise({ redirectTo: "/" });

//    $locationProvider.html5Mode(false).hashPrefix("!");
//}]);
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

app.controller("MainController", MainController);

*/


