var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {



show : function(req, res) {
	User.find({}, function(err, user) {
		if(err) {
			console.log('something went wrong');
        	res.status(500).json({info:"ERROR"})
      	} else {
        	console.log('SUCCESS');
        	res.json(user)
      	}
	})
},

create : function(req, res) {
    var user = new User({name: req.params.name});
    user.save(function(err,newperson) {
		if(err) {
			console.log(err);
        	res.status(500).json({info:"ERROR!"})
		} else {
        	console.log(`SUCCESS!`);
        	res.json(newperson)
        
      	}
	})
},


delete : function(req, res) {
    
    User.remove({name:req.params.name},function(err,user) {
      	if(err) {
        	res.status(500).json({info:"ERROR!"})
      	} else { 
        	console.log('SUCCESS!');
        	res.json({info:`REMOVED SUCCESSFULLY!`})
      	}
	})
},


display : function(req, res) {
	User.findOne({name:req.params.name}, function(err, user) {
		if(err) {
        	console.log(err);
        	res.status(500).json({info:"ERROR!"})
		} else {
        	console.log('SUCCESS ');
			res.json(user)
		}
	})
}
}