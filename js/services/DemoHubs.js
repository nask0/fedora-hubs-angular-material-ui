'use strict'
/**
 * DemoHubs service
 * Fetches data from Ralph hubs prototype (https://github.com/ralphbean/fedora-hubs-prototype) and displays it on client.
 *
 * @todo:
 *     - remove hardcoded url's
 */
angular.module('fedoraHubs')
    .factory('DemoHubs', [ '$http', '$q',
        function( $http, $q ) {
            var DemoHubs= {};

            DemoHubs.getWidget = function( widget ) {
                var deferred = $q.defer();

                $http.get('http://localhost:5000/designteam/' + parseInt(widget) + '/json/', {unique:true})
                    // additional params: status, headers, config
                    .success( function(data) {
                        // this callback will be called asynchronously
                        // when the response is available
                        deferred.resolve(data);
                    }).error( function(data, status) { // , headers, config
                        // called asynchronously if an error occurs
                        // or server returns response with an error status.
                        deferred.reject(data, status);
                    });

                return deferred.promise;
            };

            return DemoHubs;
        }
    ]);