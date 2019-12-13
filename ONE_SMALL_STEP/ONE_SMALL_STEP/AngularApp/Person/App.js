//var personModule = angular.module('person', ['common'], ['main']);

//var personModule = angular.module('common', ['ngRoute']);

//var personModule = angular.module('person', ['ngRoute']);

//var personModule = angular.module('person', ['common']);


//var personModule = angular.module('person', ['common']);
//var personModule = main.module('person', ['common']);
//var personModule = personModule.controller('personModule', ['common']);
//var personModule = angular.module('person', ['common']);
//var personModule = angular.module('person', ['common']);

personModule.config(function ($routeProvider,
    $locationProvider) {
    //$routeProvider.when('/person', {
    //    templateUrl: '/AngularApp/Person/Views/PersonHomeView.html',
    //    controller: 'personHomeViewModel'
    //});
    console.log("person module is working-person-app");
    $routeProvider.when('/person/list', {
        templateUrl: '/AngularApp/Person/Views/PersonListView.html',
        controller: 'personListViewModel'
    })
    .when('/person/show/:personId', {
        templateUrl: '/AngularApp/Person/Views/PersonView.html',
        controller: 'personViewModel'
    })
        .when('/person/delete/:personId', {
        templateUrl: '/AngularApp/Person/Views/PersonDeleteView.html',
        //controller: 'personDeleteViewModel'
        controller: 'personDeleteViewModel'

    })
        .when('/person/create', {
        templateUrl: '/AngularApp/Person/Views/PersonCreateView.html',
        controller: 'personCreateViewModel'
    })

    //$routeProvider.when('/person/update/:personId', {
    .when('/person/update', {
        templateUrl: '/AngularApp/Person/Views/PersonView.html',
        controller: 'personViewModel'
    })

    //$routeProvider.when('/person/update/:personId', {
    .when('/', {
        //templateUrl: '/AngularApp/Person/Views/PersonListView.html',
        templateUrl: '/AngularApp/Person/Views/mainHomeView.html',
        controller: 'mainPersonListViewModel'
    })


    


    //    //$routeProvider.when('/person/:personId', {
    //    //    templateUrl: '/AngularApp/Person/Views/PersonView.html',
    //    //    controller: 'personViewModel'
    //    //});

       /* $routeProvider.otherwise({
            redirectTo: '/person'
        });*/
   .otherwise({
        redirectTo: '/'
    });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });


    personModule.factory('personService',
    function ($http, $location, viewModelHelper) {
        return MyApp.personService($http,
            $location, viewModelHelper);
    });


    (function (myApp) {
        var personService = function ($http, $location,
            viewModelHelper) {

            var self = this;

            self.personId = 0;

            return this;
        };
        myApp.personService = personService;
    }(window.MyApp));
