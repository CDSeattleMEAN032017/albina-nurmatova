var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
 name: {type : String, required : true, minlength : 1}
})

var User = mongoose.model('User',UserSchema) 
