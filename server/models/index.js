var db = require('../db');

module.exports = {
  messages: {

     // a function which produces all the messages
    get: function (callback) {
      var qryString = 'SELECT * FROM messages';
      db.query(qryString, function(err, result){
        callback(result);
      });
    },

    // a function which can be used to insert a message into the database
    post: function (params, callback) {
      var qryString = 'INSERT INTO messages SET ?';
      db.query(qryString, params, function(err, result){
        if (err) throw err;
        callback(result);
      });

    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var qryString = 'SELECT * FROM users';
      db.query(qryString, function(err, result){
        callback(result);
      });
    },
    post: function () {}
  }
};

