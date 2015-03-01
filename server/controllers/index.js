var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(result){
        res.json(result);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log(req.body);
      models.messages.post(req.body, function(result){
        res.sendStatus(201);
      });
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
          models.users.get(function(result){
            res.json(result);
          });
        },
    post: function (req, res) {
      res.sendStatus(201);
    }
  }
};

