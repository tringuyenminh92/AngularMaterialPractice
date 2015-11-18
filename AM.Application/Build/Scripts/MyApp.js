
(function() {
    angular.module('GlobalModule', ['ui.router']);

    var configFunction = function ($stateProvider, $httpProvider, $locationProvider, $urlRouterProvider) {

        $locationProvider.hashPrefix('!').html5Mode(true);

        $urlRouterProvider.otherwise('/Home');
    }


    configFunction.$inject = ['$stateProvider', '$httpProvider', '$locationProvider', '$urlRouterProvider'];
    angular.module('GlobalModule').config(configFunction);

})();