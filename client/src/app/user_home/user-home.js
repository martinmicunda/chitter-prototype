'use strict';

angular.module('user-home', ['models'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/home/:id/user/:userId', {
                templateUrl: 'app/user_home/user-home.tpl.html',
                controller: 'UserCtrl'
            })
    }])

    .controller('UserCtrl', ['$scope', '$routeParams', '$location', '$log', 'User', 'Tweet', '$modal', function ($scope, $routeParams, $location, $log, User, Tweet, $modal) {

        $scope.user = {};
        $scope.tweets = [];

        getUser($routeParams.userId);
        getTweets();

        // Modal Form
        $scope.open = function () {
            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: ModalInstanceCtrl,
                resolve: {
                    addTweet: function() {
                        return $scope.addTweet;
                    }
                }
            });
        };

        $scope.addTweet = function (message) {
            Tweet.save(message, $routeParams.id).then(function(responce) {
                $scope.message = "";
                getTweets();
                updateUserTweetCount();
            });
            $scope.showModal = false;
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
            Tweet.getTweetsByUser($routeParams.userId).then(function(responce) {
                $scope.tweets = responce.data;
                $scope.user.totalTweets = responce.data.length;
            });
        }

        //Get user details
        function getUser(id) {
            User.getUserById(id).then(function (responce) {
                $scope.user = responce.data;
                Tweet.getTweetsByUser($scope.user._id).then(function(responce) {
                    $scope.user.totalTweets = responce.data.length;
                });
                $scope.viewMessage = " by " + $scope.user.name;
            });
        }

        //Update the UserTweetCount
        function updateUserTweetCount() {
            Tweet.getTweetsByUser($scope.user._id).then(function(responce) {
                $scope.user.totalTweets = responce.data.length;
            });
        }
    }]);
