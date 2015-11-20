/**
 * Created by administrator on 11/19/15.
 */
// add the script to the directive map in the compile phase

var utilitiesApp = angular.module('gllUtilities', []);

utilitiesApp.directive('map', function ($compile) {
    return {
        templateUrl:"directive.html",
        compile:function(element,attrs){
            console.log(element);
            var scriptElem = angular.element(document.createElement('script'))
            scriptElem.attr("src", "https://maps.googleapis.com/maps/api/js?v=3.exp&callback=init") // set var appropriately
            element.append(scriptElem)

            var scriptElem1 = angular.element(document.createElement('script'))
            scriptElem1.attr("src", "test.js") // set var appropriately
            element.append(scriptElem1)

        }
    };
});

