'use strict'
/**
 * Hubs Service
 */
angular.module('fedoraHubs')
    .factory('WidgetsService', [ '$http', '$q', '$window', 'hubsAppConfig',
        function( $http, $q, $window, hubsAppConfig) {
            var WidgetsService = {};

            WidgetsService.getWidget = function( hubId ) {
                var deferred = $q.defer();

                // do checks and whatever other configuration needed before make request here
                $http({
                    url: hubsAppConfig.api.urls.widgets,
                    method: 'GET',
                    params: {
                        id: hubId
                    }
                }).then(
                    function(response) {
                        deferred .resolve(response.data);
                    },
                    function(errorResponse) {
                        console.log('Error occured while trying to get widgets fake data', errorResponse);
                        // handle error response
                        deferred .reject(false);
                    }
                );

                return deferred.promise;
            }

            return WidgetsService;
        }
    ]);