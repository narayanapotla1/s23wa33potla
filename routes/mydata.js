var express = require('express');
var router = express.Router();

/* GET home page from use mydata */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Narayana Potla' });
});

module.exports = router;
