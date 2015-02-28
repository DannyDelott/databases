var db = require('../db');

db.getUsers(function(rows){
  console.log(JSON.stringify(rows));
}, null);

module.exports = {
  messages: {

     // a function which produces all the messages
    get: function (timestamp, callback) {
      // use db.getMessages(callback, timestamp)
    },

    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

