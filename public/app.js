/**
 * Created by zara on 29/09/16.
 */
var app = angular.module('app', ['ngRoute', 'firebase']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', {
            template: '<home></home>'
        })
        .otherwise('/home')
})