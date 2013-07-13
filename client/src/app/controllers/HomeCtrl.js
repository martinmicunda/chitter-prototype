'use strict';

function HomeCtrl($scope, $routeParams, User, Tweet) {

    $scope.user = {};
    $scope.userToView = {};
    $scope.tweets = [];

    //Get All tweet for time line
    function getTweets() {
        Tweet.getTweets().then(function (responce) {
            $scope.tweets = responce.data;
        })
    }

    //Get user details
    function getUser(id) {
        User.getUserById(id).then(function (responce) {
            $scope.user = responce.data;
            $scope.userToView = responce.data;
            $scope.userToView.viewMessage = "";
        });
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

    $scope.addTweet = function (tweet) {

    }

    $scope.viewUser = function(id) {
        User.getUserById(id).then(function(responce) {
            $scope.userToView = responce.data;
            $scope.userToView.viewMessage = " by " + $scope.userToView.name;
            Tweet.getTweetsById($scope.userToView.username).then(function(responce) {
                $scope.tweets = responce.data;
            })
        })
    }

};