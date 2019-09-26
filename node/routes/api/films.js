var router = require('express').Router();
var mongoose = require('mongoose');
var Film = mongoose.model('Film');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');
var auth = require('../auth');

// Preload film objects on routes with ':film'
router.param('film', function(req, res, next, slug) {
  Film.findOne({ slug: slug})
    .populate('author')
    .then(function (film) {
      if (!film) { return res.sendStatus(404); }

      req.film = film;

      return next();
    }).catch(next);
});

router.param('comment', function(req, res, next, id) {
  Comment.findById(id).then(function(comment){
    if(!comment) { return res.sendStatus(404); }

    req.comment = comment;

    return next();
  }).catch(next);
});

router.get('/', auth.optional, function(req, res, next) {
  var query = {};
  var limit = 20;
  var offset = 0;

  if(typeof req.query.limit !== 'undefined'){
    limit = req.query.limit;
  }

  if(typeof req.query.offset !== 'undefined'){
    offset = req.query.offset;
  }

  if( typeof req.query.tag !== 'undefined' ){
    query.tagList = {"$in" : [req.query.tag]};
  }

  Promise.all([
    req.query.author ? User.findOne({username: req.query.author}) : null,
    req.query.favorited ? User.findOne({username: req.query.favorited}) : null
  ]).then(function(results){
    var author = results[0];
    var favoriter = results[1];

    if(author){
      query.author = author._id;
    }

    if(favoriter){
      query._id = {$in: favoriter.favorites};
    } else if(req.query.favorited){
      query._id = {$in: []};
    }

    return Promise.all([
      Film.find(query)
        .limit(Number(limit))
        .skip(Number(offset))
        .sort({createdAt: 'desc'})
        .populate('author')
        .exec(),
      Film.count(query).exec(),
      req.payload ? User.findById(req.payload.id) : null,
    ]).then(function(results){
      var films = results[0];
      var filmsCount = results[1];
      var user = results[2];

      return res.json({
        films: films.map(function(film){
          return film.toJSONFor(user);
        }),
        filmsCount: filmsCount
      });
    });
  }).catch(next);
});

router.get('/feed', auth.required, function(req, res, next) {
  var limit = 20;
  var offset = 0;

  if(typeof req.query.limit !== 'undefined'){
    limit = req.query.limit;
  }

  if(typeof req.query.offset !== 'undefined'){
    offset = req.query.offset;
  }

  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    Promise.all([
      Film.find({ author: {$in: user.following}})
        .limit(Number(limit))
        .skip(Number(offset))
        .populate('author')
        .exec(),
      Film.count({ author: {$in: user.following}})
    ]).then(function(results){
      var films = results[0];
      var filmsCount = results[1];

      return res.json({
        films: films.map(function(film){
          return film.toJSONFor(user);
        }),
        filmsCount: filmsCount
      });
    }).catch(next);
  });
});

router.post('/', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    var film = new Film(req.body.film);

    film.author = user;

    return film.save().then(function(){
      console.log(film.author);
      return res.json({film: film.toJSONFor(user)});
    });
  }).catch(next);
});

// return a film
router.get('/:film', auth.optional, function(req, res, next) {
  Promise.all([
    req.payload ? User.findById(req.payload.id) : null,
    req.film.populate('author').execPopulate()
  ]).then(function(results){
    var user = results[0];

    return res.json({film: req.film.toJSONFor(user)});
  }).catch(next);
});

// update film
router.put('/:film', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if(req.film.author._id.toString() === req.payload.id.toString()){
      if(typeof req.body.film.title !== 'undefined'){
        req.film.title = req.body.film.title;
      }

      if(typeof req.body.film.description !== 'undefined'){
        req.film.description = req.body.film.description;
      }

      if(typeof req.body.film.body !== 'undefined'){
        req.film.body = req.body.film.body;
      }

      if(typeof req.body.film.tagList !== 'undefined'){
        req.film.tagList = req.body.film.tagList
      }

      req.film.save().then(function(film){
        return res.json({film: film.toJSONFor(user)});
      }).catch(next);
    } else {
      return res.sendStatus(403);
    }
  });
});

// delete film
router.delete('/:film', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    if(req.film.author._id.toString() === req.payload.id.toString()){
      return req.film.remove().then(function(){
        return res.sendStatus(204);
      });
    } else {
      return res.sendStatus(403);
    }
  }).catch(next);
});

// Favorite an film
router.post('/:film/favorite', auth.required, function(req, res, next) {
  var filmId = req.film._id;

  User.findById(req.payload.id).then(function(user){
    if (!user) { return res.sendStatus(401); }

    return user.favorite(filmId).then(function(){
      return req.film.updateFavoriteCount().then(function(film){
        return res.json({film: film.toJSONFor(user)});
      });
    });
  }).catch(next);
});

// Unfavorite an film
router.delete('/:film/favorite', auth.required, function(req, res, next) {
  var filmId = req.film._id;

  User.findById(req.payload.id).then(function (user){
    if (!user) { return res.sendStatus(401); }

    return user.unfavorite(filmId).then(function(){
      return req.film.updateFavoriteCount().then(function(film){
        return res.json({film: film.toJSONFor(user)});
      });
    });
  }).catch(next);
});

// return an film's comments
router.get('/:film/comments', auth.optional, function(req, res, next){
  Promise.resolve(req.payload ? User.findById(req.payload.id) : null).then(function(user){
    return req.film.populate({
      path: 'comments',
      populate: {
        path: 'author'
      },
      options: {
        sort: {
          createdAt: 'desc'
        }
      }
    }).execPopulate().then(function(film) {
      return res.json({comments: req.film.comments.map(function(comment){
        return comment.toJSONFor(user);
      })});
    });
  }).catch(next);
});

// create a new comment
router.post('/:film/comments', auth.required, function(req, res, next) {
  User.findById(req.payload.id).then(function(user){
    if(!user){ return res.sendStatus(401); }

    var comment = new Comment(req.body.comment);
    comment.film = req.film;
    comment.author = user;

    return comment.save().then(function(){
      req.film.comments.push(comment);

      return req.film.save().then(function(film) {
        res.json({comment: comment.toJSONFor(user)});
      });
    });
  }).catch(next);
});

router.delete('/:film/comments/:comment', auth.required, function(req, res, next) {
  if(req.comment.author.toString() === req.payload.id.toString()){
    req.film.comments.remove(req.comment._id);
    req.film.save()
      .then(Comment.find({_id: req.comment._id}).remove().exec())
      .then(function(){
        res.sendStatus(204);
      });
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
