var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var slug = require('slug');
var User = mongoose.model('User');

var FilmSchema = new mongoose.Schema({
  slug: {type: String, lowercase: true, unique: true},
  title: String,
  description: String,
  body: String,
  favoritesCount: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  tagList: [{ type: String }],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, {timestamps: true});

FilmSchema.plugin(uniqueValidator, {message: 'is already taken'});

FilmSchema.pre('validate', function(next){
  if(!this.slug)  {
    this.slugify();
  }

  next();
});

FilmSchema.methods.slugify = function() {
  this.slug = slug(this.title) + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
};

FilmSchema.methods.updateFavoriteCount = function() {
  var film = this;

  return User.count({favorites: {$in: [film._id]}}).then(function(count){
    film.favoritesCount = count;

    return film.save();
  });
};

FilmSchema.methods.toJSONFor = function(user){
  return {
    slug: this.slug,
    title: this.title,
    date: this.date,
    body: this.body,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    tagList: this.tagList,
    favorited: user ? user.isFavorite(this._id) : false,
    favoritesCount: this.favoritesCount,
    author: this.author.toProfileJSONFor(user)
  };
};

mongoose.model('Film', FilmSchema);
