//import employee data
const employeeList = require('../data/employees.js');

module.exports = function(app){
  //send back employee list when called
   app.get('/api/employees', function(req, res){
        res.json(employeeList);
   });
};