var mysql = require('mysql');

// initialize the database connection
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chat'
});
connection.connect();

module.exports.getUsers = function(callback){
  connection.query('SELECT user FROM users', function(err, rows, fields){
    if(err) throw err;
    callback(rows);
  });
};

module.exports.getMessages = function(callback){
  connection.query('SELECT message FROM messages', function(err, rows, fields){
    if(err) throw err;
    callback(rows);
  });
};

module.exports.getRooms = function(callback){
  connection.query('SELECT room FROM rooms', function(err, rows, fields){
    if(err) throw err;
    callback(rows);
  });
};

// pass in user as object {user: 'name'}
module.exports.insertUser = function(user){
  connection.query('INSERT INTO users', user, function(err, result){
    if(err) throw err;
    console.log(result);
  })
};

