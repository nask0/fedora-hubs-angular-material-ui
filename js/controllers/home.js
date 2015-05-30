'use strict';

angular.module('fedoraHubs')
.controller('HomeController', ['$scope', '$rootScope', '$mdSidenav',
    function( $scope, $rootScope, $mdSidenav ) {
        $rootScope.splashPage = false;

        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };
    }
]);