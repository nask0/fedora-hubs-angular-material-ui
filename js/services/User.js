'use strict'
/**
 * Main Auth Service
 */
angular.module('fedoraHubs')
.factory('userService', [ '$http', '$q', '$window', 'fasAuthService', 'githubAuthService', 'facebookAuthSerivce', 'hubsLog',
    function( $http, $q, $window, fasAuthService, githubAuthService, facebookAuthSerivce, hubsLog ) {
        var userService = {};

        /**
         * Get user data by id
         *
         * @param id - user id
         */
        userService.getFakeData = function() {
            return $http.get($window.appConfig.baseUrl + '/static/data/user.json');
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