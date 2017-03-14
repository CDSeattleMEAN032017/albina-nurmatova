var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './node_modules')));


app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/messages');

var Schema = mongoose.Schema;


var MessageSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 4},
	text: {type:String, required : true},
	comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}],
},{timestamps: true});

var CommentSchema = new mongoose.Schema({
	_message: {type: mongoose.Schema.Types.ObjectId, ref: 'Message'},
	name: {type: String, required: true, minlength: 4},
	text: {type: String, required: true}
},{timestamps : true});


mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);


var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment'); 

app.get('/', function(req, res) {
	Message
		.find({})
		.populate('comments').exec(function(err, message) {
			res.render('index', {message : message});
	})
})
      

app.post('/message', function(req, res) {
	var message = new Message({name: req.body.name, text: req.body.message});
	message.save(function(err) {
		if(err) {
			res.status(500).json({info:"ERROR! Name should be at least 4 letters"})
		} else { 
			console.log('successfully added a message!');
			res.redirect('/');
    	}
  	})
})

// create comment
app.post('/message/:id', function (req, res){
	Message.findOne({_id: req.params.id}, function(err, message){
		console.log('hello from Comments');
		console.log(message);
		var comment = new Comment(req.body);
		comment.name = req.body.name;
		comment.text = req.body.comment;
		comment._message = message._id;
		message.comments.push(comment);
		comment.save(function(err) {
            if (err) {
				res.status(500).json({info:"ERROR! Name should be at least 4 letters"})
            } else {
                message.save(function(err) {
                    if (err) {
						res.status(500).json({info:"ERROR! Name should be at least 4 letters"})
                    } else {
                        res.redirect('/');
                    }
                });
            }
        });
	})
})

app.listen(8000, function() {
    console.log("listening on port 8000");
});