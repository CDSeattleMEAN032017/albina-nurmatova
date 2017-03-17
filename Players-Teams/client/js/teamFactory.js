app.factory('teamFactory', function(){
		var teams = [];
		
		var factory = {};
		
		factory.getTeams = function(callback){
				callback(teams)
		}
		factory.add_team = function(new_team){
			teams.push(new_team);
		}
		factory.delete = function(idx){
			var team_delete = teams[idx];
			teams.splice(teams.indexOf(team_delete),1)
		}
		
	return factory;
});