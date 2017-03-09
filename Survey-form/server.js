var express = require("express")
var path = require('path')
var bodyParser = require('body-parser')
var session = require('express-session')

var app = express()

var PORT = 8000

app.use(express.static(path.join(__dirname, "./user")))
app.use(express.static(path.join(__dirname, "./node_modules")))
app.use(bodyParser.urlencoded({extended: true}))
app.use(session({secret:'user_user'}))



app.set('views', path.join(__dirname, './user/views')) 
app.set('view engine', 'ejs')


app.get("/", function (request, response){

	return response.render('index');
})

app.post("/create_user", function (request, response){
	request.session.name = request.body.name;
	request.session.location = request.body.location;
	request.session.language = request.body.language;
	request.session.comment = request.body.comment;

	response.redirect('/result')
})

app.get("/result", function (request, response){
    var user = {
    	name : request.session.name,
    	location : request.session.location,
    	language : request.session.language,
    	comment : request.session.comment
        
    }
    response.render('result', {users: user})
    
})

app.post("/submit", function (request, response){
	response.render('index')
})


app.listen(8000, function(){
	console.log('listening on 8000')
})
