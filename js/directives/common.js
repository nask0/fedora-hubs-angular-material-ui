'use strict'

angular.module('fedoraHubs')
/* Simple directive that displays splash image on single hub page */
.directive('hubSplash',
    function() {
        return {
            link: function(scope, element, attrs) {
                var url = attrs.hubSplash;
                element.css({
                    'border-top':'1px solid #fcfcfc',
                    'background': 'url(' + url +') center center',
                    'background-size' : 'cover'
                });
            }
        }
    }
);