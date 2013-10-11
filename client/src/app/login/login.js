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
        $scope.welcome = true;
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
        };

        $scope.registerUserForm = {
            name: '',
            username: '',
            email: '',
            password: '',
            visible: false
        };

        $scope.showRegisterUserForm = function() {
            $scope.welcome = false;
            $scope.registerUserForm.visible = true;
        };

        $scope.hideRegisterUserForm = function() {
            $scope.welcome = true;
            $scope.registerUserForm.visible = false;
        }


        $scope.registerNewUser = function () {
            User.addNewUser($scope.registerUserForm.username, $scope.registerUserForm.name,
                $scope.registerUserForm.email, $scope.registerUserForm.password).then(function(response) {
                    if (angular.isUndefined(response.data.user)) {
                        $scope.registerUserForm.visible = false;
                        $scope.welcome = true;
                        $scope.loginErrorMessage = false;
                    } else {
                        $scope.loginErrorMessage = true;
                        $log.info("Failed to register new user.");
                    }
                })
        }
    }]);
