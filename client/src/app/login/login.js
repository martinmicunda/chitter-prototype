'use strict';

angular.module('login', ['models'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/login/login.tpl.html',
                controller: 'LoginCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])

    .controller('LoginCtrl', ['$scope', '$location', '$log', 'User', function ($scope, $location, $log, User) {
        $scope.loginErrorMessage = false;

        $scope.loginUser = function () {
            var logUserIn = User.logUserIn($scope.username, $scope.password);

            logUserIn.then(function (response) {
                if (angular.isUndefined(response.data.user)) {
                    $scope.loginErrorMessage = true;
                    $log.info("username does not exist");
                } else {
                    $location.path('/home/' + response.data.user._id);
                }
            });
        }
    }]);
