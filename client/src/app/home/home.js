'use strict';

angular.module('home', ['models', 'ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home/:id', {
                templateUrl: 'app/home/home.tpl.html',
                controller: 'HomeCtrl'
            })
    }])

    .controller('HomeCtrl', ['$scope', '$routeParams', '$location', '$log', 'User', 'Tweet', function ($scope, $routeParams, $location, $log, User, Tweet) {
        $scope.user = {};
        $scope.userToView = {};
        $scope.tweets = [];
        $scope.updateDates =  null;

        getUser($routeParams.id);
        getTweets();

        // Modal Form
        $scope.open = function () {
            $scope.showModal = true;
        };

        $scope.cancel = function () {
            $scope.showModal = false;
        };

        $scope.addTweet = function (message) {
            Tweet.save(message, $routeParams.id).then(function(responce) {
                message = "";
                getTweets();
                updateUserTweetCount();
            });
            $scope.showModal = false;
        }

        $scope.deleteTweet = function(id) {
            Tweet.deleteTweet(id).then(function(responce) {
                getTweets();
                updateUserTweetCount();
            })
        }

        $scope.viewUser = function(id) {
            User.getUserById(id).then(function(responce) {
                $scope.userToView = responce.data;
                $scope.userToView.viewMessage = " by " + $scope.userToView.name;
                Tweet.getTweetsById($scope.userToView.username).then(function(responce) {
                    $scope.tweets = responce.data;
                    $scope.userToView.totalTweets = responce.data.length;
                })
            })
        }

        $scope.homeClicked = function() {
            getUser($routeParams.id);
            getTweets();
        }

        //Get All tweet for time line
        function getTweets() {
            Tweet.query().then(function (responce) {
                if (!_.isNull($scope.updateDates)){
                    clearInterval($scope.updateDates);
                }
                $scope.tweets = responce.data;
                _.each($scope.tweets, function(tweet) {
                    if ($scope.user.username == tweet.user.username) {
                        console.log("Tweet belongs to user");
                        tweet.canBeDeleted = true;
                    } else {
                        tweet.canBeDeleted = false;
                    }
                    tweet.creationDate = formatTweetDate(tweet.creationDate);
                });
                $scope.updateDates = setInterval(function() {
                    _.each($scope.tweets, function (tweet) {
                        tweet.creationDate = formatTweetDate(tweet.creationDate);
                    });
                },5000);
            })
        }

        //Get user details
        function getUser(id) {
            User.getUserById(id).then(function (responce) {
                $scope.user = responce.data;
                Tweet.getTweetsById($scope.user.username).then(function(responce) {
                    $scope.user.totalTweets = responce.data.length;
                });
                $scope.userToView = responce.data;
                $scope.userToView.viewMessage = "";
            });
        }

        //Update the UserTweetCount
        function updateUserTweetCount() {
            Tweet.getTweetsById($scope.user.username).then(function(responce) {
                $scope.user.totalTweets = responce.data.length;
            });
        }

        function formatTweetDate(date) {
            return prettyDate(date);
        }

    }]);