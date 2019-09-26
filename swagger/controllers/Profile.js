'use strict';

var utils = require('../utils/writer.js');
var Profile = require('../service/ProfileService');

module.exports.followUserByUsername = function followUserByUsername (req, res, next) {
  var username = req.swagger.params['username'].value;
  Profile.followUserByUsername(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProfileByUsername = function getProfileByUsername (req, res, next) {
  var username = req.swagger.params['username'].value;
  Profile.getProfileByUsername(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.unfollowUserByUsername = function unfollowUserByUsername (req, res, next) {
  var username = req.swagger.params['username'].value;
  Profile.unfollowUserByUsername(username)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
