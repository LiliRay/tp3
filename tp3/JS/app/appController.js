var appController = angular.module('BddClientController', [])




.controller('CtrlPrincipal', CtrlPrincipal)


CtrlPrincipal.$inject = ['$scope', '$http'];

function CtrlPrincipal($scope, $http) {
    $scope.utilisateur = null;
    $scope.chercher = function() {
        $http.get("https://api.github.com/users/" + $scope.username)
            .success(function(data) {
                $scope.utilisateur = data;
                $scope.resultat = "Trouvé";
            })
            .error(function(error) {
                $scope.resultat = "Non trouvé";
                $scope.utilisateur = null;
            });
    };

}
