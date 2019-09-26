'use strict';


/**
 * Create an film
 * Create an film. Auth is required
 *
 * film NewFilmRequest Film to create
 * returns SingleFilmResponse
 **/
exports.createFilm = function(film) {
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
 * Delete an film
 * Delete an film. Auth is required
 *
 * slug String Slug of the film to delete
 * no response value expected for this operation
 **/
exports.deleteFilm = function(slug) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get an film
 * Get an film. Auth not required
 *
 * slug String Slug of the film to get
 * returns SingleFilmResponse
 **/
exports.getFilm = function(slug) {
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
 * Get recent films globally
 * Get most recent films globally. Use query parameters to filter results. Auth is optional
 *
 * tag String Filter by tag (optional)
 * author String Filter by author (username) (optional)
 * favorited String Filter by favorites of a user (username) (optional)
 * limit Integer Limit number of films returned (default is 20) (optional)
 * offset Integer Offset/skip number of films (default is 0) (optional)
 * returns MultipleFilmsResponse
 **/
exports.getFilms = function(tag,author,favorited,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "films" : [ {
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
  }, {
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
  } ],
  "filmsCount" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get recent films from users you follow
 * Get most recent films from users you follow. Use query parameters to limit. Auth is required
 *
 * limit Integer Limit number of films returned (default is 20) (optional)
 * offset Integer Offset/skip number of films (default is 0) (optional)
 * returns MultipleFilmsResponse
 **/
exports.getFilmsFeed = function(limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "films" : [ {
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
  }, {
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
  } ],
  "filmsCount" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an film
 * Update an film. Auth is required
 *
 * slug String Slug of the film to update
 * film UpdateFilmRequest Film to update
 * returns SingleFilmResponse
 **/
exports.updateFilm = function(slug,film) {
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

