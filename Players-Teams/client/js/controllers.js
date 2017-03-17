app.controller('playersController', ['$scope', 'playerFactory', function($scope, playerFactory){
	$scope.controller_method_add = function() {
		playerFactory.add_player($scope.new_player);
		$scope.new_player = {};

			
	}
	$scope.remove = function(idx) {
		playerFactory.delete(idx);
	}
	playerFactory.getPlayers(function(data) {
		$scope.players = data;
	});
}]);
	
app.controller('teamsController', ['$scope', 'teamFactory', function($scope, teamFactory){
	$scope.controller_method_add = function() {
		teamFactory.add_team($scope.new_team);
		$scope.new_team = {};
	}
	$scope.remove = function(idx) {
		teamFactory.delete(idx);
	}
	teamFactory.getTeams(function(data) {
		$scope.teams = data;
	});

	

}]);

app.controller('associationsController', ['$scope','playerFactory','teamFactory', function($scope,playerFactory,teamFactory){
	
	$scope.association={};
	$scope.players=[];
	$scope.teams=[];


	teamFactory.getTeams(function(data) {
		$scope.teams = data;
	});

	playerFactory.getPlayers(function(data) {
		$scope.players = data;
	});

	playerFactory.get_player_teams(function(data) {
		$scope.player_teams = data;
		console.log($scope.player_teams);
	});


	$scope.controller_method_add = function() {
		playerFactory.add_player_teams($scope.selectedPlayer, $scope.selectedTeam);
	}

	$scope.remove = function(idx) {
		playerFactory.delete_player_team(idx);
	}

	
	
}]);


