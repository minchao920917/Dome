var express = require('express');
var router = express.Router();

var bookInfo;
/* GET users listing. */
router.get('/', function(req, res, next) {


  res.render('users',{title:"users"})
});

module.exports = router;
