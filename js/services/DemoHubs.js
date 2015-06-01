'use strict'
/**
 * DemoHubs service
 * Fetches data from Ralph hubs prototype (https://github.com/ralphbean/fedora-hubs-prototype) and displays it on client.
 */
angular.module('fedoraHubs')
    .factory('DemoHubs', [ '$http',
        function( $http ) {
            var DemoHubs= {};

            DemoHubs.getSubscribers = function() {
                return $http.get('http://localhost:5000/designteam/1/json/');
            };

            DemoHubs.getRulesAndOwners = function() {
                return $http.get('http://localhost:5000/designteam/2/json/');
            }

            return DemoHubs;
        }
    ]);