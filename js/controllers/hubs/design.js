'use strict';

angular.module('fedoraHubs')
    .controller('TestsController', ['$scope', '$rootScope', '$timeout', '$http', '$mdDialog', 'DemoHubs',
        function( $scope, $rootScope, $timeout, $http, $mdDialog, DemoHubs ) {
            var alert;

            $scope.showAlert = showAlert;
            $scope.showDialog = showDialog;
            $scope.items = ["one", "two", "three"];

            $scope.hubStats = {};
            DemoHubs.getWidget( 1 ).then(
                function( data ) {
                    console.log('Response data:', data);
                    $scope.hubStats = data;
                },
                function( error, httpStatus ) {
                    console.log(error, httpStatus);
                    $scope.hubStats = {};
                }
            );

            // Internal method
            function showAlert() {
                alert = $mdDialog.alert({
                    title: 'Attention',
                    content: 'This is an example of how easy dialogs can be!',
                    ok: 'Close'
                });
                $mdDialog
                    .show( alert )
                    .finally(function() {
                        alert = undefined;
                    });
            };

            function showDialog($event) {
                var parentEl = angular.element(document.body);
                $mdDialog.show({
                    parent: parentEl,
                    targetEvent: $event,
                    template:
                    '<md-dialog aria-label="List dialog">' +
                    '  <md-dialog-content>'+
                    '    <md-list>'+
                    '      <md-list-item ng-repeat="item in items">'+
                    '       <p>Number {{item}}</p>' +
                    '      '+
                    '    </md-list-item></md-list>'+
                    '  </md-dialog-content>' +
                    '  <div class="md-actions">' +
                    '    <md-button ng-click="closeDialog()" class="md-primary">' +
                    '      Close Dialog' +
                    '    </md-button>' +
                    '  </div>' +
                    '</md-dialog>',
                    locals: {
                        items: $scope.items
                    },
                    controller: DialogController
                })
                function DialogController(scope, $mdDialog, items) {
                    scope.items = items;
                    scope.closeDialog = function() {
                        $mdDialog.hide();
                    }
                }
            };
        }
    ]);