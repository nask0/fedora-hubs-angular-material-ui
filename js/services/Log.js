'use strict'

angular.module('fedoraHubs')
.factory('hubsLog', [ '$interval', '$log',
    function( $interval, $log ) {
        return function( msg ) { $log.debug(msg); }
    }
]);