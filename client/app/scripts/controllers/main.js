'use strict';

angular.module('clientCore', ['ui.bootstrap'])
    .controller('MainCtrl', function ($scope, $rootScope, $location, $http, UserService, TweetService, $log) {
        $scope.users = UserService.getUser();

        $scope.loginErrorMessage = false;
        // Modal Form
        $scope.open = function() {
            $scope.showModal = true;
        };

        $scope.save = function(tweet) {
            TweetService.addTweet(tweet);
            $scope.showModal = false;
         };

        $scope.cancel = function() {
          $scope.showModal = false;
        };

        $scope.tweets = TweetService.getTweet();

        $scope.loginUser = function() {
            var loggedIn = false;
            var totalUsers = $scope.users.length;
            var usernameTyped = $scope.email;
            var passwwordTyped = $scope.password;

            for( var i = 0; i < totalUsers; i++ ) {
                if( $scope.users[i].email === usernameTyped && $scope.users[i].password === passwwordTyped) {
                    loggedIn = true;
                    break;
                }
            }

            if( loggedIn === true ) {
                $log.info("login successful");
                $location.path("/home");
            } else {
                $scope.loginErrorMessage = true;
                $log.info("username does not exist")
            }
        }

    })

    .factory('UserService', ['$rootScope', function($rootScope) {
        var users = [
            {
                id: "507f1f77bcf86cd799439011",
                name: 'Martin Micunda',
                username: 'mmicunda',
                email: 'martin.micunda@asidua.com',
                password: 'mmicunda123',
                avatar: ''
            },
            {
                id: "507f1f77bcf86cd799439012",
                name: 'Chris  Laughlin',
                username: 'claughlin',
                email: 'christopher.laughlin@asidua.com',
                password: 'claughlin123',
                avatar: ''
            },
            {
                id: "507f1f77bcf86cd799419011",
                name: 'chitter',
                username: 'chitter',
                email: 'chitter',
                password: 'chitter123',
                avatar: ''
            }
        ];

        return {
            getUser:function () {
                return users;
            }
        }
    }])


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





