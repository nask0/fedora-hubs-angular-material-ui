'use strict';

angular.module('fedoraHubs')
.controller('HomeController', ['$scope', '$rootScope',
    function($scope, $rootScope) {
        $rootScope.splashPage = false;
    }
]);