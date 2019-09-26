'use strict';


/**
 * Get tags
 * Get tags. Auth not required
 *
 * returns TagsResponse
 **/
exports.tagsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "tags" : [ "tags", "tags" ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

