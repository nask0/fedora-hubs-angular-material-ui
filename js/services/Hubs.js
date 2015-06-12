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
                    url: hubsAppConfig.apiUrls.hubs,
                    method: 'GET',
                    params: {
                        id: hubKey
                    }
                }).then(
                    function(response) {
                        deferred .resolve(response.data);
                    },
                    function(errorResponse) {
                        // console.log('Error occured while trying to get hubs fake data', errorResponse);
                        // handle error response
                        deferred .reject(false);
                    }
                );

                return deferred.promise;
            }

            return HubsService;
        }
    ]);