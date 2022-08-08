var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 const answer = {
  message: "Hello World Laura, siiiii",
 };
 res.json(answer);
});

module.exports = router;
