var codingNinjaRoster = angular.module('codingNinjaRoster', ['ui.router']);

codingNinjaRoster.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html"
    })
    $stateProvider.state('ninja_sign_in', {
        url: "/ninja_sign_in",
        templateUrl: "partials/ninja_sign_in.html",
        controller: "NinjaCtrl"
    })
    $stateProvider.state('ninjas_here', {
        url: "/ninjas_here",
        templateUrl: "partials/ninjas_here.html",
        controller: 'NinjaCtrl'
    });
});