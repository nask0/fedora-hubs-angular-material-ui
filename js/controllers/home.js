'use strict';

angular.module('fedoraHubs')
.controller('HomeController', ['$scope', '$rootScope', '$mdSidenav', 'DemoHubs',
    function( $scope, $rootScope, $mdSidenav, DemoHubs ) {
        // $scope.openLeftMenu = function() { $mdSidenav('left').toggle(); };

        $scope.tabError = false;
        $scope.tabContent = false;

        $scope.fetchTabContent = function( tab ) {
            switch( tab ) {
                case 'subscribers':
                    DemoHubs.getSubscribers().then(
                        function( data ) {
                            $scope.tabContent = data;
                        },
                        function( error ) {
                            $scope.tabContent = 'Error occured while fetching data !';
                            console.log(error);
                        }
                    )
                break;
            }

        }
    }
]);