'use strict';


/**
 * Create a comment for an film
 * Create a comment for an film. Auth is required
 *
 * slug String Slug of the film that you want to create a comment for
 * comment NewCommentRequest Comment you want to create
 * returns SingleCommentResponse
 **/
exports.createFilmComment = function(slug,comment) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "comment" : {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "author" : {
      "image" : "image",
      "following" : true,
      "bio" : "bio",
      "username" : "username"
    },
    "id" : 0,
    "body" : "body",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
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
 * Delete a comment for an film
 * Delete a comment for an film. Auth is required
 *
 * slug String Slug of the film that you want to delete a comment for
 * id Integer ID of the comment you want to delete
 * no response value expected for this operation
 **/
exports.deleteFilmComment = function(slug,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get comments for an film
 * Get the comments for an film. Auth is optional
 *
 * slug String Slug of the film that you want to get comments for
 * returns MultipleCommentsResponse
 **/
exports.getFilmComments = function(slug) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "comments" : [ {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "author" : {
      "image" : "image",
      "following" : true,
      "bio" : "bio",
      "username" : "username"
    },
    "id" : 0,
    "body" : "body",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "createdAt" : "2000-01-23T04:56:07.000+00:00",
    "author" : {
      "image" : "image",
      "following" : true,
      "bio" : "bio",
      "username" : "username"
    },
    "id" : 0,
    "body" : "body",
    "updatedAt" : "2000-01-23T04:56:07.000+00:00"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

