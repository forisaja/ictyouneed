var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/welcomepage', function(req, res, next) {
    res.render('welcomepage', { title: 'Welcome page' });
});

module.exports = router;
