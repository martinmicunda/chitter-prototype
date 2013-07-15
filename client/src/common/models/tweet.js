'use strict';

angular.module('model.tweet', [])
    .factory('Tweet', ['$rootScope', '$http', function ($rootScope, $http) {
        return {
            getTweetsById: function(username) {
                return $http.get('tweets/tweetsForUser/'+username);
            },
            getTweetsForUserName: function (username) {
                var request = $http.post('/users', {username: username});
                return request.promise;
            },
            query: function () {
                return $http.get('/tweets');
            },
            save: function (message, userId) {
                return $http.post('/tweet', {userId: userId, text: message});
            },
            deleteTweet: function(id) {
                return $http.delete('/tweets/'+id);
            }
        }
    }])