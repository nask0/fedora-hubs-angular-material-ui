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
.config(['$stateProvider', '$httpProvider', '$urlRouterProvider', '$locationProvider', '$mdThemingProvider',
    function( $stateProvider, $httpProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider ) {
        /**
         * Define app routes. Quick notice how ui-router "states" works:
         * --
         * The new $stateProvider works similar to Angular's v1 router, but it focuses purely on state.
         * A state corresponds to a "place" in the application in terms of the overall UI and navigation.
         * A state describes (via the controller / template / view properties) what the UI looks like and does at that place.
         * States often have things in common, and the primary way of factoring out these commonalities in this model is
         * via the state hierarchy, i.e. parent/child states aka nested states.
         * --
         * @see https://github.com/angular-ui/ui-router/wiki
         */
        console.log(window.appConfig.baseUrl + '/templates/home/home.html');

        $stateProvider
            // default (home)
            .state('/', {
                url: "/",
                controller: 'HomeController',
                templateUrl: window.appConfig.baseUrl + '/templates/home/home.html'
            })
            // home
            .state('home', {
                url: "/home",
                controller: 'HomeController',
                templateUrl: window.appConfig.baseUrl + '/templates/home/home.html'
            });

        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);

        /**
         * Configure theme color palletes
         *
         * @todo: research how to define custom theme, it should be trivial
         * */
        $mdThemingProvider.theme('blue')
            .primaryPalette('light-blue')
            .accentPalette('teal');
    }
])
/**
 * .run()
 * 
 * Run blocks are the closest thing in Angular to the main method. 
 * A run block is the code which needs to run to kickstart the application. 
 * It is executed after all of the services have been configured and the injector has been created. 
 * Run blocks typically contain code which is hard to unit-test,  and for this reason should be declared in isolated modules, so that they can be ignored in the unit-tests.
 */
.run(['$rootScope', '$location', 'hubsLog',
    function($rootScope, $location, hubsLog) {
        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams){
                hubsLog(['event: $stateChangeStart', 'To State', toState, 'To Params', toParams, 'From state',fromState, 'From Params',fromParams]);
            });

        $rootScope.$on('$routeChangeSuccess', function() {
            hubsLog(['event: $routeChangeSuccess']);
        });

        $rootScope.$on('$routeChangeError', function() {
            hubsLog( ['event: $routeChangeError !!!'] );
        });
    }
]);
