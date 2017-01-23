var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({sucess: "get"});
});

router.put('/', function(req, res, next) {
  res.json({sucess: "put"});
});

router.post('/', function(req, res, next) {
  res.json({sucess: "post"});
});

router.delete('/', function(req, res, next) {
  res.json({sucess: "delete"});
});

module.exports = router;
