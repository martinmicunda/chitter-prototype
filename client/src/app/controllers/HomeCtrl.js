'use strict';

function HomeCtrl($scope, $routeParams, User, Tweet) {

    $scope.user = {};
    $scope.userToView = {};
    $scope.tweets = [];
    $scope.updateDates =  null;

    //Get All tweet for time line
    function getTweets() {
        Tweet.getTweets().then(function (responce) {
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

    getUser($routeParams.id);
    getTweets();


    // Modal Form
    $scope.open = function () {
        $scope.showModal = true;
    };

    $scope.save = function (tweet) {
        //TODO: remove tweet service and call back end instead
        Tweet.addTweet(tweet);
        $scope.showModal = false;
    };

    $scope.cancel = function () {
        $scope.showModal = false;
    };

    $scope.addTweet = function (message) {
        Tweet.addNewTweet(message, $scope.user).then(function(responce) {
            message = "";
            getTweets();
            updateUserTweetCount();
        });
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

};