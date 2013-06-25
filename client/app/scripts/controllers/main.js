'use strict';

angular.module('clientCore', ['ui.bootstrap'])
    .controller('MainCtrl', function ($scope, TweetData) {

        // Modal Form
        $scope.open = function() {
            $scope.showModal = true;
        };

        $scope.save = function(tweet) {
            TweetData.addTweet(tweet);
            $scope.showModal = false;
         };

        $scope.cancel = function() {
          $scope.showModal = false;
        };

        $scope.tweets = TweetData.getTweet();

    })

    .factory('TweetData', ['$rootScope', function ($rootScope) {
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





