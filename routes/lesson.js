var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/lesson', function(req, res, next) {
    res.render('lesson', { title: 'lesson' });
});

module.exports = router;
