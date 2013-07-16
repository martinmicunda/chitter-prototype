'use strict';

angular.module('model.tweet', [])
    .factory('Tweet', ['$rootScope', '$http', function ($rootScope, $http) {
        return {
            getTweetsById: function(username) {
                return $http.get('tweets/tweetsForUser/'+username);
            },
            getTweetsByUser: function (userId) {
                return $http.get('tweets/user/' + userId);
            },
            query: function () {
                return $http.get('/tweets');
            },
            save: function (text, userId) {
                return $http.post('/tweet', {userId: userId, text: text});
            },
            deleteTweet: function(id) {
                return $http.delete('/tweets/'+id);
            }
        }
    }])