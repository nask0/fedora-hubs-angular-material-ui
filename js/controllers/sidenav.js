'use strict';

angular.module('fedoraHubs')
    .controller('SidenavController', ['$scope', '$rootScope', '$mdSidenav',
        function( $scope, $rootScope, $mdSidenav) {
            $scope.openLeftMenu = function() {
                $mdSidenav('left').toggle();
            };
        }
    ]);