'use strict';

angular.module('Avengers.accueil', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/accueil', {
            templateUrl: 'accueil/accueil.html',
            controller: 'accueilCtrl'
        });
        
}])

.controller('accueilCtrl', ['$scope', function ($scope) {

    $scope.recherche = function(){
        if($scope.nom)
        console.log($scope.nom);
        location.href="#/characters/" + $scope.nom;
    }
    
}])
    .controller('charactersCtrl', ['$scope', function ($scope) {
        $scope.persos = ['Luke Cage', 'Captain America', 'Amadeus Cho', 'Iron Man', 'Jocasta', 'Mockingbird', 'Captain Marvel (Carol Danvers)', 'Quicksilver', 'Hawkeye', 'Spider-Woman (Jessica Drew)', 'Spider-Man', 'Stature', 'Thor', 'Vision', 'Hank Pym', 'Wolverine']


}])
