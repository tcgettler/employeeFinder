//import path 
const path = require('path');

module.exports = function(app){
    //route to survey when url has /survey at the end
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    //all other routes go to home
    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, '../public/home.html'))
    })
}