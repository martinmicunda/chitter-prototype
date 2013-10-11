'use strict';

angular.module('model.user', [])
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
            },
            addNewUser: function (username, name, email, password) {
                return $http.post('/users', {username:username, name:name, email:email, password:password});
            }
        }
    }]);