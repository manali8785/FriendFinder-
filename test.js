/**
 * Created by administrator on 11/19/15.
 */
var injector = angular.injector(['ng']);
var $q = injector.get('$q');
// two ways of creating a promise
// 1. $q()
// 2. $q.defer().promise
var map;
var init_deferred = $q.defer();
function init () {
    console.log('google maps api is loaded ... ');
    var div_mymap = document.getElementById('mymap');
    map = new google.maps.Map(div_mymap, {
        center: {lat: 10, lng: 100},
        zoom: 14
    });
    init_deferred.resolve('google maps was loaded');
}
// geolocation
// Immediately Invoked Function Expression
function createGeolocationPromise () {
    return $q(function (resolve, reject) {
        window.navigator.geolocation.getCurrentPosition(function (position) {
            console.log('got the position');
            console.log(position);
            resolve(position);
        }, function () {
            console.log('could not get position!!!');
            console.log(arguments);
            reject(arguments);
        });
    });
}
var promises = [init_deferred.promise, createGeolocationPromise()];
$q.all(promises).then(function (results) {
    var position = results[1];
    map.setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude
    });
    map.setZoom(20);
});