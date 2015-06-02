'use strict';

angular.module('fedoraHubs')
.controller('HomeController', ['$scope', '$rootScope', '$mdSidenav', '$timeout', 'DemoHubs',
    function( $scope, $rootScope, $mdSidenav, $timeout, DemoHubs ) {
        // $scope.openLeftMenu = function() { $mdSidenav('left').toggle(); };

        $scope.tabError = false;
        $scope.tabContent = false;
        $scope.tabLoading = false;

        $scope.loadWidgetData  = function( widget ) {
            $scope.tabLoading = true;
            DemoHubs.loadWidgetData( widget ).then(
                function( data ) {
                    $timeout(function() {
                        console.log('Response data:', data);
                        $scope.tabContent = data;
                        $scope.tabLoading = false;
                    }, 650); // lag a little in order to show loading :)

                },
                function( error, httpStatus ) {
                    $scope.tabContent = 'Error (' + httpStatus + ') occured while fetching widget data';
                    console.log(error);
                    $scope.tabLoading = false;
                }
            );
        };

        $scope.loadWidgetData( 1 );
    }
]);