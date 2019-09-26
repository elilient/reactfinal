'use strict';

var utils = require('../utils/writer.js');
var Comments = require('../service/CommentsService');

module.exports.createFilmComment = function createFilmComment (req, res, next) {
  var slug = req.swagger.params['slug'].value;
  var comment = req.swagger.params['comment'].value;
  Comments.createFilmComment(slug,comment)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteFilmComment = function deleteFilmComment (req, res, next) {
  var slug = req.swagger.params['slug'].value;
  var id = req.swagger.params['id'].value;
  Comments.deleteFilmComment(slug,id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFilmComments = function getFilmComments (req, res, next) {
  var slug = req.swagger.params['slug'].value;
  Comments.getFilmComments(slug)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
