'use strict';

var utils = require('../utils/writer.js');
var UserAndAuthentication = require('../service/UserAndAuthenticationService');

module.exports.createUser = function createUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  UserAndAuthentication.createUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCurrentUser = function getCurrentUser (req, res, next) {
  UserAndAuthentication.getCurrentUser()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.login = function login (req, res, next) {
  var body = req.swagger.params['body'].value;
  UserAndAuthentication.login(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCurrentUser = function updateCurrentUser (req, res, next) {
  var body = req.swagger.params['body'].value;
  UserAndAuthentication.updateCurrentUser(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
