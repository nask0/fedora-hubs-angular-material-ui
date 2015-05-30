'use strict'
/**
 * Main Auth Service
 */
angular.module('fedoraHubs')
.factory('UserService', [ '$http', '$q', '$window', 'fasAuthService', 'githubAuthService', 'facebookAuthService', 'hubsLog',
    function( $http, $q, $window, fasAuth, fasAuthService, githubAuthService, facebookAuthService, hubsLog ) {
        var userService = {};

        /**
         * Get user data by id
         *
         * @param id - user id
         */
        userService.get = function(id) {
            $http.get($window.appConfig.baseUrl + '/static/data/user.json');
        }

        userService .updateLoginStatus = function () {
            hubsLog.getLogger().debug('function called: authService.updateLoginStatus()');
            return true;
        }

        userService .fasLogin = function () {

        }

        userService.facebookLogin = function () {

        }

        userService.githubLogin = function () {

        }

        return userService;
    }
]);