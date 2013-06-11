'use strict';

angular.module('clientApp', [])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/login.html',
          controller: 'MainCtrl'
        })
        .when('/home', {
          templateUrl: 'views/home.html',
          controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
  });
