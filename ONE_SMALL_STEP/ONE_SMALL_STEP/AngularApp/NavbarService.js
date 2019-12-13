rootApp.factory('navbarService', [

    function ($rootScope, personService, $http, viewModelHelper) {

        $rootScope.personList = function () {
            $scope.showPersonList = false;
            //alert($scope.showPersonList);
            viewModelHelper.navigateTo('person/list');

            //alert("nagigate to person/list");
        }


    }]);
//var mainModule = angular.module angular.module('main', ['common']);