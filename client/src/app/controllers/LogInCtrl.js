'use strict';

function LoginCtrl($scope, $location, User, $log) {
    $scope.loginErrorMessage = false;
    // Modal Form
    $scope.open = function () {
        $scope.showModal = true;
    };

    $scope.cancel = function () {
        $scope.showModal = false;
    };

    $scope.loginUser = function () {
        var logUserIn = User.logUserIn($scope.email, $scope.password);
        logUserIn.then(function (response) {
            if (angular.isUndefined(response.data.user)) {
                $scope.loginErrorMessage = true;
                $log.info("username does not exist");
            } else {
                $location.path('/home/' + response.data.user._id);
            }
        });
    }
}