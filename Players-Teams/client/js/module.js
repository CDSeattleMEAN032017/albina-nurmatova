var app = angular.module('app', ['ngRoute']);
	app.config(function($routeProvider){
		$routeProvider
		.when('/players',{
			templateUrl:'Partials/players.html',
			controller:'playersController'
		})
		.when('/teams',{
			templateUrl: 'Partials/teams.html',
			controller:'teamsController'
		})
		.when('/associations',{
			templateUrl: 'Partials/associations.html',
			controller:'associationsController'
		})
		.otherwise({
			redirectTo: '/'
		});
});