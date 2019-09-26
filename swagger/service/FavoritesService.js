'use strict';


/**
 * Favorite an film
 * Favorite an film. Auth is required
 *
 * slug String Slug of the film that you want to favorite
 * returns SingleFilmResponse
 **/
exports.createFilmFavorite = function(slug) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "film" : {
    "tagList" : [ "tagList", "tagList" ],
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "author" : {
      "image" : "image",
      "following" : true,
      "bio" : "bio",
      "username" : "username"
    },
    "description" : "description",
    "title" : "title",
    "body" : "body",
    "favoritesCount" : 0,
    "slug" : "slug",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00",
    "favorited" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Unfavorite an film
 * Unfavorite an film. Auth is required
 *
 * slug String Slug of the film that you want to unfavorite
 * returns SingleFilmResponse
 **/
exports.deleteFilmFavorite = function(slug) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "film" : {
    "tagList" : [ "tagList", "tagList" ],
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "author" : {
      "image" : "image",
      "following" : true,
      "bio" : "bio",
      "username" : "username"
    },
    "description" : "description",
    "title" : "title",
    "body" : "body",
    "favoritesCount" : 0,
    "slug" : "slug",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00",
    "favorited" : true
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

