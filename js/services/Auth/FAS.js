'use strict'
/**
 * FAS Auth Service
 * Make secured API calls to FAS in order to  authenticate and authorize the current user.
 */
angular.module('fedoraHubs')
.factory('fasAuthService', [ '$http', '$q',
    function( $http, $q ) {
        var fasAuth = {};

        fasAuth.login = function () {}
        fasAuth.csrfToken= function () {}
        fasAuth.checkStatus = function () {}

        return fbService;
    }
]);