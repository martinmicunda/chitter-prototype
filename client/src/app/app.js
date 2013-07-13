'use strict';
var chitterApp = angular.module('chitterApp',['chitterServices']);
chitterApp.config(function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'app/templates/login.tpl.html',
            controller: LoginCtrl
        })
        .when('/home/:id', {
            templateUrl: 'app/templates/home.tpl.html',
            controller: HomeCtrl
        })
//        .when('/home/:id', {
//            templateUrl: 'app/templates/user_home.tpl.html',
//            controller: UserCtrl
//        })
        .otherwise({
            redirectTo: '/'
        });
    });
