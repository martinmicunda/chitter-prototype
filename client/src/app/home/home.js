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
        $scope.tweets = [];
        $scope.updateDates =  null;

        getUser($routeParams.id);
        getTweets();

//        $scope.addUser = function () {
//            User.addNewUser();
//        }
        // Modal Form
        $scope.open = function () {
            $scope.showModal = true;
        };

        $scope.cancel = function () {
            $scope.showModal = false;
        };

        $scope.addTweet = function (message) {
            Tweet.save(message, $routeParams.id).then(function(responce) {
                $scope.message = "";
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

        $scope.viewUser = function(userId) {
            $location.path('/home/' + $routeParams.id + '/user/' + userId);
        }

        // TODO: martin - move this to app.js once we get cookies run as this will be navigation part
        $scope.viewHome = function() {
            $location.path('/home/' + $routeParams.id);
        };

        $scope.viewUserHome = function() {
            $location.path('/home/' + $routeParams.id + '/user/' + $routeParams.id);
        }
        // TODO: END

        //Get All tweet for time line
        function getTweets() {
            Tweet.query().then(function (responce) {
                if (!_.isNull($scope.updateDates)){
                    clearInterval($scope.updateDates);
                }
                $scope.tweets = responce.data;
                _.each($scope.tweets, function(tweet) {
                    if ($scope.user._id == tweet.user._id) {
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
                Tweet.getTweetsByUser($scope.user._id).then(function(responce) {
                    $scope.user.totalTweets = responce.data.length;
                });
                $scope.viewMessage = "";
            });
        }

        //Update the UserTweetCount
        function updateUserTweetCount() {
            Tweet.getTweetsByUser($scope.user._id).then(function(responce) {
                $scope.user.totalTweets = responce.data.length;
            });
        }

        function formatTweetDate(date) {
            return prettyDate(date);
        }

    }]);