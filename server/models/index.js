var db = require('../db');

module.exports = {
  messages: {

     // a function which produces all the messages
    get: function (timestamp, room, callback) {
      // use db.getMessages(callback, timestamp)
    },

    // a function which can be used to insert a message into the database
    post: function (body, callback) {

      var username = body.username;
      console.log('username received:', username);

      db.getUserId(username, function(rows){
        console.log('rows in users table', rows);
        // username doesn't exist in table
        if(rows.length === 0){
          db.insertUser({user: username}, function(result){
            // console.log('result id is', result.insertId);
            callback(result.insertId);
          });
        }else {
          callback(rows[0].id);
        }

      });


      //  doesn't exist in the users table
        // insert user into users table and return the userID
      // else
        // get the userID from the users table

      // if the roomname inside the body object
      // doesn't exist in the rooms table
        // insert room into rooms table and return the roomID
      // else
        // get the roomID from the rooms table


    }
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

