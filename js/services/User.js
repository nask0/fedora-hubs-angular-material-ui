'use strict'
/**
 * Main Auth Service
 */
angular.module('fedoraHubs')
.factory('userService', [ '$http', '$q', '$window', 'hubsAppConfig',
    function( $http, $q, $window, hubsAppConfig) {
        // @todo: define client only user data struct
        var userService = {};
        var currentUser = {};

        /**
         * Get user data by id
         *
         * @param id - user id
         */
        userService.getUserFakeData = function() {
            var deferred = $q.defer();

            // do checks and whatever other configuration needed before make request here
            $http.get(hubsAppConfig.api.urls.user).then(
                function(response) {
                    deferred .resolve(response.data);
                },
                function(errorResponse) {
                    console.log('Error occured while trying to get user fake data', errorResponse);
                    // handle error response
                    deferred .reject(false);
                }
            );

            return deferred.promise;
        }

        userService .getGuestUserFakeData = function () {
            return $http.get(hubsAppConfig.api.urls.userGuest);
        }

        return userService;
    }
]);