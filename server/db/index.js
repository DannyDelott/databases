var mysql = require('mysql');

// initialize the database connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chat'
});

connection.connect();

module.exports = connection;
