'use strict';

function HomeCtrl($scope, $routeParams, User, Tweet) {

    $scope.user = {};
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

};