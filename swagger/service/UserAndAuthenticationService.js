'use strict';


/**
 * Register a new user
 * Register a new user
 *
 * body NewUserRequest Details of the new user to register
 * returns UserResponse
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user" : {
    "image" : "image",
    "bio" : "bio",
    "email" : "email",
    "token" : "token",
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
 * Get current user
 * Gets the currently logged-in user
 *
 * returns UserResponse
 **/
exports.getCurrentUser = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user" : {
    "image" : "image",
    "bio" : "bio",
    "email" : "email",
    "token" : "token",
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
 * Existing user login
 * Login for existing user
 *
 * body LoginUserRequest Credentials to use
 * returns UserResponse
 **/
exports.login = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user" : {
    "image" : "image",
    "bio" : "bio",
    "email" : "email",
    "token" : "token",
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
 * Update current user
 * Updated user information for current user
 *
 * body UpdateUserRequest User details to update. At least **one** field is required.
 * returns UserResponse
 **/
exports.updateCurrentUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user" : {
    "image" : "image",
    "bio" : "bio",
    "email" : "email",
    "token" : "token",
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

