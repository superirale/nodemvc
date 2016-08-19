
// GRAB THE PACKAGES/VARIABLES WE NEED
// ==================================================
var express = require('express');
var app = express();
// used to parse JSON object given in the request body
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());


// CONFIGURE THE APP
// ==================================================
// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));
// set the view engine to ejs
app.set('view engine', 'ejs');


// SET THE ROUTES
// ===================================================
// send express object app to router
require('./router')(app);

// START THE SERVER
// ==================================================
app.listen(3000);
console.log('App Server started! Look at http://localhost:3000');
