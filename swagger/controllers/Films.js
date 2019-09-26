'use strict';

var utils = require('../utils/writer.js');
var Films = require('../service/FilmsService');

module.exports.createFilm = function createFilm (req, res, next) {
  var film = req.swagger.params['film'].value;
  Films.createFilm(film)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteFilm = function deleteFilm (req, res, next) {
  var slug = req.swagger.params['slug'].value;
  Films.deleteFilm(slug)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFilm = function getFilm (req, res, next) {
  var slug = req.swagger.params['slug'].value;
  Films.getFilm(slug)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFilms = function getFilms (req, res, next) {
  var tag = req.swagger.params['tag'].value;
  var author = req.swagger.params['author'].value;
  var favorited = req.swagger.params['favorited'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Films.getFilms(tag,author,favorited,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getFilmsFeed = function getFilmsFeed (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Films.getFilmsFeed(limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateFilm = function updateFilm (req, res, next) {
  var slug = req.swagger.params['slug'].value;
  var film = req.swagger.params['film'].value;
  Films.updateFilm(slug,film)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
