//import express and path
const express = require('express');
const path = require('path');

//assign express to app
const app = express();

//create port connection based on host
var PORT = process.env.PORT || 3000;

//allow express to obtain the url users add into.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'app/public')));

//create a path for all static stylings and js files
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './app/public/home.html'));
  });

//import the routing js files
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

//start connection to the port to listen to routing calls
app.listen(PORT, function(){
    console.log(`Listening on PORT ${PORT}`);
})