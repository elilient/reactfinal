'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.tagsGET = function tagsGET (req, res, next) {
  Default.tagsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
