'use strict';

angular.module('clientCore', ['ui.bootstrap'])
    .controller('MainCtrl', function ($scope, $rootScope, $location, $http, TweetService, $log) {
        $scope.loginErrorMessage = false;
        // Modal Form
        $scope.open = function() {
            $scope.showModal = true;
        };

        $scope.save = function(tweet) {
            //TODO: remove tweet service and call back end instead
            TweetService.addTweet(tweet);
            $scope.showModal = false;
        };

        $scope.cancel = function() {
            $scope.showModal = false;
        };

        $scope.loginUser = function() {
            var request = $http.post('/login', {email: $scope.email, password: $scope.password});
            return request.then(function(response) {
                $rootScope.user = response.data.user;
                $rootScope.tweets = response.data.tweets;
                if(angular.isUndefined($scope.user)) {
                    $scope.loginErrorMessage = true;
                    $log.info("username does not exist");
                } else {
                    $location.path('/home')
                }
            });
        }

    })

    .factory('TweetService', ['$rootScope', function ($rootScope) {
        var tweets = 	[
        		{
                    id: "507f1f77bcf86cd799439012",
                    user: {
                        id:"507f1f77bcf86cd799439011",
                        name: "Martin",
                        username: "martinmicunda",
                        avatar: ""
                    },
        			date: "2h",
                    text: "Welcome Martin! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in est orci, ac ultrices lorem. Sed convallis turpis ac enim convallis cursus. Cras tempor mi et urna interdum sed venenatis ipsum molestie ",
        			tags: [ "mongoDB", "angulaJS"]
        		},
        		{
                    id: "507f1f77bcf86cd799439412",
                    user: {
                        id:"507f1f77bcf86cd799438011",
                        name: "Chris",
                        username: "chrislauglin",
                        avatar: ""
                    },
        			date: "3h",
                    text: "Welcome Chris! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in est orci, ac ultrices lorem. Sed convallis turpis ac enim convallis cursus. Cras tempor mi et urna interdum sed venenatis ipsum molestie ",
        			tags: [ "mongoDB", "angulaJS"]
        		},
                {
                    id: "507f1f77bif86cd799439012",
                    user: {
                      id:"507f1f78bcf86cd799439011",
                      name: "Martin",
                      username: "martinm",
                      avatar: ""
                    },
          			date: "2h",
          			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in est orci, ac ultrices lorem. Sed convallis turpis ac enim convallis cursus. Cras tempor mi et urna interdum sed venenatis ipsum molestie ",
          			tags: [ "mongoDB", "angulaJS"]
          		},
                {
                    id: "507f1f77bif86cd799439012",
                    user: {
                      id:"507f1f78bcf86cd799439011",
                      name: "Martin",
                      username: "martinm",
                      avatar: ""
                    },
                    date: "2h",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in est orci, ac ultrices lorem. Sed convallis turpis ac enim convallis cursus. Cras tempor mi et urna interdum sed venenatis ipsum molestie ",
                    tags: [ "mongoDB", "angulaJS"]
                },
                {
                    id: "507f1f77bif86cd799439012",
                    user: {
                      id:"507f1f78bcf86cd799439011",
                      name: "Martin",
                      username: "martinm",
                      avatar: ""
                    },
                    date: "2h",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in est orci, ac ultrices lorem. Sed convallis turpis ac enim convallis cursus. Cras tempor mi et urna interdum sed venenatis ipsum molestie ",
                    tags: [ "mongoDB", "angulaJS"]
                }
        	];

        return {
            getTweet:function () {
                return tweets;
            },
            addTweet:function(tweet) {
                tweets.unshift(tweet);
            }
        }
    }]);





