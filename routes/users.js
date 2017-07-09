var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('under /users/users.......');

});

router.get('/', function(req, res, next) {
  res.send('under /users');
});

module.exports = router;
