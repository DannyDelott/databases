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

module.exports.getUserId = function(username, callback) {
  connection.query('SELECT id FROM users WHERE user=?', username, function(err, rows){
    callback(rows);
  });
};

module.exports.getMessages = function(timestamp, room, callback){
  connection.query('SELECT message FROM messages', function(err, rows, fields){
    if(err) throw err;
    callback(rows);
  });
};

module.exports.getRooms = function(callback){
  connection.query('SELECT room FROM rooms', function(err, rows){
    if(err) throw err;
    callback(rows);
  });
};

// pass in user as object {user: 'name'}
module.exports.insertUser = function(user, callback){
  connection.query('INSERT INTO users SET ?', user, function(err, result){
    if(err) throw err;
    callback(result);
  });
};

module.exports.insertMessage = function (message){
  connection.query('INSERT INTO messages SET ?', message, function(err, result){
    if (err) throw err;
  });
};

module.exports.insertRoom = function (room){
 connection.query('INSERT INTO rooms SET ?', room, function(err, result){
   if (err) throw err;
 });
}
