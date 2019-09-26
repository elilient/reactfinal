'use strict';

var utils = require('../utils/writer.js');
var Favorites = require('../service/FavoritesService');

module.exports.createFilmFavorite = function createFilmFavorite (req, res, next) {
  var slug = req.swagger.params['slug'].value;
  Favorites.createFilmFavorite(slug)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteFilmFavorite = function deleteFilmFavorite (req, res, next) {
  var slug = req.swagger.params['slug'].value;
  Favorites.deleteFilmFavorite(slug)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
