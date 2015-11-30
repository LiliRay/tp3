var app = angular.module("BddClient", ['ngRoute', 'BddClientController'])


app.config(['$routeProvider',

    function($routeProvider) {

        $routeProvider.

        when('/', {

            templateUrl: 'index.html',
            controller: 'CtrlPrincipal'

        }).
        otherwise({

            redirectTo: '/'
        });
    }
]);
