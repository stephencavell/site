'use strict';

angular.module('Main', [
    'ui.router'
])

    .config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
        
        .state('home', {
            url: '/',
            templateUrl: '/'
        })
        
        $urlRouterProvider.otherwise("/");
});

