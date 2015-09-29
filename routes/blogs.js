var db = require('monk')('localhost/my-two-cents');
var blogCollection = db.get('blogs');

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
