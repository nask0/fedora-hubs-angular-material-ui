'use strict';

/** @deprecated */

angular.module('fedoraHubs')
    .controller('DesignController', ['$scope', '$rootScope', '$timeout', '$http', '$mdDialog', 'WidgetsService',
        function( $scope, $rootScope, $timeout, $http, $mdDialog, WidgetsService ) {
            $scope.loadHub = function() {

            };

            $scope.loadWidget = function( widgetId ) {

            };
        }
    ]);