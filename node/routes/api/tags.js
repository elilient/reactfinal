var router = require('express').Router();
var mongoose = require('mongoose');
var Film = mongoose.model('Film');

// return a list of tags
router.get('/', function(req, res, next) {
  Film.find().distinct('tagList').then(function(tags){
    return res.json({tags: tags});
  }).catch(next);
});

module.exports = router;
