var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db = require('monk')('localhost/blogspace');

/* Blog Posts. */
router.get('/', function(req, res, next) {
	var db = req.db;
	var posts = dg.get('posts');
	posts.find({},{}, function(err, posts){
		res.render('index', { 
			title: 'Blogs',
			'posts':posts 
		});
	});
  
});

module.exports = router;
