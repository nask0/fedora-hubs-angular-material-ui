'use strict';

angular.module('fedoraHubs')
.controller('HomeController', ['$scope', '$rootScope', '$timeout', 'DemoHubs',
    function( $scope, $rootScope, $timeout, DemoHubs ) {
        // $scope.openLeftMenu = function() { $mdSidenav('left').toggle(); };

        $scope.tabError = false;
        $scope.tabContent = false;
        $scope.tabLoading = false;

        $scope.loadWidgetData  = function( widget ) {
            $scope.tabContent = false;
            $scope.tabLoading = true;
            DemoHubs.getWidget( widget ).then(
                function( data ) {
                    $timeout(function() {
                        console.log('Response data:', data);
                        $scope.tabContent = data;
                        $scope.tabLoading = false;
                    }, 500); // lag a little in order to show loader

                },
                function( error, httpStatus ) {
                    $scope.tabContent = 'Error (' + httpStatus + ') occured while fetching widget data';
                    console.log(error);
                    $scope.tabLoading = false;
                }
            );
        };

        if ( !$scope.tabContent ) {
            $scope.loadWidgetData(1);
        }
    }
]);