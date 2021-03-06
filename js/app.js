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
// @todo: this config *must* come from server side script!
.constant('hubsAppConfig', {
        ver: '0.1a',
        api: {
            urls: {
                user: 'fake-api.php?route=user',
                userGuest: 'fake-api.php?route=user&sub_route=guest',
                hubs: 'fake-api.php?route=hubs',
                widgets: 'fake-api.php?route=widgets'
            }
        }
    }
)
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
        $stateProvider
            // This will get automatically plugged into the unnamed ui-view
            // of the parent state template. Since this is a top level state,
            // its parent state template is index
            .state('index', {
                url: "/",
                views: {
                    'navigation': { templateUrl: window.appConfig.baseUrl + 'templates/partials/navigation.html' },
                    'sidenav': {
                        controller: 'SidenavController',
                        templateUrl: window.appConfig.baseUrl + 'templates/partials/sidenav.html'
                    },
                    'content': {
                        controller: 'HomeController',
                        templateUrl: window.appConfig.baseUrl + 'templates/home/home.html'
                    }
                }
            })
            .state('design', {
                url: '/design',
                views: {
                    'navigation': { templateUrl: window.appConfig.baseUrl + 'templates/partials/navigation.html' },
                    'sidenav': {
                        controller: 'SidenavController',
                        templateUrl: window.appConfig.baseUrl + 'templates/partials/sidenav.html'
                    },
                    'content': {
                        controller: 'DesignController',
                        templateUrl: window.appConfig.baseUrl + 'templates/hubs/design.html'
                    }
                }
            })
            .state('hub', {
                url: '/hub/:hubKey',
                resolve: {
                    hubResolver:
                        function(HubsService, $stateParams) {
                            return HubsService.getHub( $stateParams.hubKey);
                        }
                },
                views: {
                    'navigation': { templateUrl: window.appConfig.baseUrl + 'templates/partials/navigation.html' },
                    'sidenav': {
                        controller: 'SidenavController',
                        templateUrl: window.appConfig.baseUrl + 'templates/partials/sidenav.html'
                    },
                    'content': {
                        controller: 'HubController',
                        templateUrl: window.appConfig.baseUrl + 'templates/hubs/hub.html'
                    }
                }
            });
        $urlRouterProvider.otherwise('/');

        /**
         * Configure theme color palletes
         *
         * @todo: research how to define custom theme, it should be trivial
         * */

        $mdThemingProvider.definePalette('fedoraHubs', {
            '50': 'ffebee',
            '100': 'ffcdd2',
            '200': 'ef9a9a',
            '300': 'e57373',
            '400': 'ef5350',
            '500': 'f44336',
            '600': 'e53935',
            '700': 'd32f2f',
            '800': 'c62828',
            '900': 'b71c1c',
            'A100': 'ff8a80',
            'A200': 'ff5252',
            'A400': 'ff1744',
            'A700': 'd50000',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                // on this palette should be dark or light
            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                '200', '300', '400', 'A100'],
            'contrastLightColors': 'dark'    // could also specify this if default was 'dark'
        })
        .extendPalette('fedoraHubs', {
                'hue-test': 'fefefe'
            });

        $mdThemingProvider.theme('blue')
            .primaryPalette('fedoraHubs', {
        })
        ;
        /*.accentPalette('light-blue');*/
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
.run(['$rootScope', '$location', '$log', 'userService',
    function($rootScope, $location, $log, userService) {
        // load session user fake data
        $rootScope.currentUser = false;

        // @todo: move this code into userService
        if ( !$rootScope.currentUser ) {
            userService.getUserFakeData().then(
                // (http) success handler callback
                function(userData) {
                    $rootScope.currentUser = userData;
                    console.log($rootScope.currentUser );
                },
                // (http) error handler callback
                function() { $rootScope.currentUser = false; }
            );
        }

        $rootScope.chatToggled = false;
        $rootScope.toggleChat = function() {
            angular.element( document.querySelector( '#chat' ) ).toggleClass('toggled');
            /*console.log(angular.element( document.getElementById('#chat') ).toggleClass('toggled'));*/
            !! $rootScope.chatToggled;
        };

        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams){
                $log.log(['event: $stateChangeStart', 'To State', toState, 'To Params', toParams, 'From state',fromState, 'From Params',fromParams]);
            });

        $rootScope.$on('$routeChangeSuccess', function() {
            $log.log(['event: $routeChangeSuccess']);
        });

        $rootScope.$on('$routeChangeError', function() {
            $log.log( ['event: $routeChangeError !!!'] );
        });
    }
]);
