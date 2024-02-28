var express = require('express');
var router = express.Router();

/* GET home page, redirects localhost:3000/ to localhost:3000/catalog */
router.get('/', function(req, res, next) {
  res.redirect("/catalog");
});

module.exports = router;
