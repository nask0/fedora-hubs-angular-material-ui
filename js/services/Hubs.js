'use strict'
/**
 * Hubs Service
 */
angular.module('fedoraHubs')
    .factory('HubsService', [ '$http', '$q', '$window', 'hubsAppConfig',
        function( $http, $q, $window, hubsAppConfig) {
            var HubsService = {};

            HubsService.getHub = function( hubKey ) {
                var deferred = $q.defer();

                // do checks and whatever other configuration needed before make request here
                $http({
                    url: hubsAppConfig.api.urls.hubs,
                    method: 'GET',
                    params: {
                        id: hubKey
                    }
                }).then(
                    function(response) {
                        deferred .resolve(response.data);
                    },
                    function(errorResponse) {
                        // @todo: handle error response
                        deferred .reject(false);
                    }
                );

                return deferred.promise;
            }

            return HubsService;
        }
    ]);