
angular.module('chitterServices', ['ui.bootstrap'])
    .factory('User', ['$rootScope', '$http', function ($rootScope, $http) {
    return {
        getUserFromUserName: function(username) {
            return $http.post('/userByUsername/'+username);
        },
        logUserIn: function(email, password) {
            return $http.post('/login', {email: email, password: password});
        },
        getUserById: function(id) {
            return $http.get('/users/'+id);
        }
    }}])
    .factory('Tweet', ['$rootScope', '$http', function ($rootScope, $http) {
        return {
            getTweetsForUserName: function (username) {
                var request = $http.post('/users', {username: username});
                return request.promise;
            },
            getTweets: function () {
                return $http.get('/tweets');
            },
            addTweet: function (tweet) {

            }
        }
    }]);
