'use strict';

angular.module('Avengers.characters', ['ngRoute'])

.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/characters/:name', {
            templateUrl: 'characters/characters.html',
            controller: 'charactersFetchCtrl'
        });

}])
    .controller('charactersFetchCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

        fetch($scope, $http, $routeParams.name);
}]);


function fetch($scope, $http, name) {
    var key = "4b5fd93ba58eaf054fc9f6edb24bdd6d";
    var hashed ="b94305c16a09f6310fa12e427d397d1b";

    $http.get("http://gateway.marvel.com:80/v1/public/characters?name=" + name + "&ts=1&apikey="+key+"&hash="+hashed)
        .then(function (res) {
            console.log(res.data);

            if (res.data.code === 200 && res.data.data.results.length > 0) {
                var infos = res.data.data.results[0];
                $scope.ok = true;
                
                $scope.nom = infos.name;
                $scope.attribution = res.data.attributionText;
                $scope.description = infos.description;
                $scope.img = infos.thumbnail.path + '/portrait_fantastic.' + infos.thumbnail.extension;
                $scope.urls = infos.urls;
                
                if(!$scope.description || $scope.description==" "){
                    $scope.description = 'Aucune description disponible';
                }
            } else {
                $scope.ok = false;
            }

        });

}
