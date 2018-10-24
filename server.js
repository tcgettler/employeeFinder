const express = require('express');
const path = require('path');

const app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'app/public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './app/public/home.html'));
  });

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
    console.log(`Listening on PORT ${PORT}`);
})