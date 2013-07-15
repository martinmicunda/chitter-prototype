'use strict';

angular.module('user-home', ['models'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
//            .when('/home/:id', {
//                templateUrl: 'app/user_home/user-home.tpl.html',
//                controller: 'UserCtrl'
//            })
    }])

    .controller('UserCtrl', ['$scope', '$location', '$log', 'User', function ($scope, $location, $log, User) {

    }]);
