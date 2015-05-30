'use strict'
/**
 * Bootstrap file for Fedora Hubs application.
 * Define:
 *      Providers (@see: https://docs.angularjs.org/guide/providers),
 *      Configurations (e.g.: for routes, services etc.)
 *      and Run (main() / bootstrap) cycle.
 * 
 * @note Beware that using angular.module('myModule', []) will create the module myModule and overwrite any existing module named myModule. 
 *       Use angular.module('myModule') getter to retrieve an existing module.
 */

/**
 * @see: https://docs.angularjs.org/guide/module
 */
angular.module('fedoraHubs', ['ui.router', 'ngMaterial'])
/**
 * Configuration block.
 * Get executed during the provider registrations and configuration phase. 
 * Only providers and constants can be injected into configuration blocks. 
 * This is to prevent accidental instantiation of services before they have been fully configured.
 */
.config(
    function( $mdThemingProvider ) {
        $mdThemingProvider.theme('blue')
            .primaryPalette('light-blue')
            .accentPalette('teal');
    }
)
/**
 * .run()
 * 
 * Run blocks are the closest thing in Angular to the main method. 
 * A run block is the code which needs to run to kickstart the application. 
 * It is executed after all of the services have been configured and the injector has been created. 
 * Run blocks typically contain code which is hard to unit-test,  and for this reason should be declared in isolated modules, so that they can be ignored in the unit-tests.
 */
.run(['$rootScope', '$location',
    function($rootScope, $location) {
        console.log('run() called !');

        $rootScope.isNavActive = function(path) {
            if ( $rootScope.currentRouteName == path) {
                return 'active';
            }
            return '';
        };
    }
]);
