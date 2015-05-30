'use strict'

angular.module('fedoraHubs')
.factory('hubsLog', [ '$interval', '$log',
    function( $interval, $log ) {
        var msgQuee = [];

        function log() {
            if (msgQuee.length) {
                $log.log('HubsLog : ', msgQuee);
                msgQuee = [];
            }
        }

        function getLogger() {
            return $log;
        }

        // start periodic checking
        $interval(log, 5000);

        return function( msg ) { msgQuee.push(msg); }
    }
]);