const express = require('express');
const router = express.Router();
const menu=require('../lib/menu');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layouts/home',{data:menu});
});

module.exports = router;
