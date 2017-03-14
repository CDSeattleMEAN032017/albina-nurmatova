var users = require('../controllers/users.js');
module.exports = function(app){

app.get('/', function(req, res) {
    users.show(req, res);
})

app.get('/new/:name/', function(req, res) {
    users.create(req, res);
})

app.get('/remove/:name/', function(req, res) {
    users.delete(req, res);
})

app.get('/:name', function(req, res) {
    users.display(req, res);
})


}