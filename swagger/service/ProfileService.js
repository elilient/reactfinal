'use strict';


/**
 * Follow a user
 * Follow a user by username
 *
 * username String Username of the profile you want to follow
 * returns ProfileResponse
 **/
exports.followUserByUsername = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "profile" : {
    "image" : "image",
    "following" : true,
    "bio" : "bio",
    "username" : "username"
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
 * Get a profile
 * Get a profile of a user of the system. Auth is optional
 *
 * username String Username of the profile to get
 * returns ProfileResponse
 **/
exports.getProfileByUsername = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "profile" : {
    "image" : "image",
    "following" : true,
    "bio" : "bio",
    "username" : "username"
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
 * Unfollow a user
 * Unfollow a user by username
 *
 * username String Username of the profile you want to unfollow
 * returns ProfileResponse
 **/
exports.unfollowUserByUsername = function(username) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "profile" : {
    "image" : "image",
    "following" : true,
    "bio" : "bio",
    "username" : "username"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

