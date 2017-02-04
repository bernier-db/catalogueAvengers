'use strict';

// Declare app level module which depends on views, and components
angular.module('Avengers', [
  'ngRoute',
  'Avengers.accueil',
  'Avengers.characters'
]).
config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {

    $routeProvider.otherwise({
        redirectTo: '/accueil'
    });
}]);
