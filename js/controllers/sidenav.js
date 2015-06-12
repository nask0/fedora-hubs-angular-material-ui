'use strict';

angular.module('fedoraHubs')
    .controller('SidenavController', ['$scope', '$rootScope', '$mdSidenav', 'HubsService',
        function( $scope, $rootScope, $mdSidenav, HubsService) {
            /*if ( $rootScope.currentUser ) {
                _.each($rootScope.currentUser.hubs, function (hub) {
                    console.log(hub);
                    HubsService.getHub(hub.id).then(
                        function(data) {
                            console.log(data);
                        }
                    )
                })
            };*/

            $scope.toggleSideNav = function() {
                $mdSidenav('left').toggle();
            };
        }
    ]);