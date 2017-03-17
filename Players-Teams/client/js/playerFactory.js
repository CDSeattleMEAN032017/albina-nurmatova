app.factory('playerFactory', function(){
		var players = [];
		var playerTeams = [];
		var factory = {};
		factory.getPlayers = function(callback){
				callback(players)
		}
		factory.add_player = function(new_player){
			players.push(new_player);
		}
		factory.delete = function(idx){
			var player_delete = players[idx];
			players.splice(players.indexOf(player_delete),1)
		}
		factory.add_player_teams = function(player, team) {
			playerTeams.push({'player_name': player, 'team_name': team});
		}

		factory.get_player_teams = function(callback) {
			callback(playerTeams);
		}
		factory.delete_player_team = function(idx) {
			var player_team_del = playerTeams[idx];
			playerTeams.splice(playerTeams.indexOf(player_team_del),1)
		}


	return factory;
});