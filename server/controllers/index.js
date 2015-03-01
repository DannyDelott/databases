var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {
      // parse the request body for the input fields
      console.log('post request received');
      models.messages.post(req.body, function(userId){
        console.log('user id is', userId);
        console.log('ending post response');
        res.end();
      });

    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

