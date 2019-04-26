var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/yulia', (req, res, next)=>{
//   res.json({hello: 'from Yulia'})
// })
module.exports = router;
