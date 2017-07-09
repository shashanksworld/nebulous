var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("under index router");
  res.render('index', { title: 'Express' });

});

router.get('/home', function(req, res, next) {
  console.log("under index router for home");
  res.render('home', { title: 'HOME' });

});

module.exports = router;
