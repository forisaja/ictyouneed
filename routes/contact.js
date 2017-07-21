var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/contact', function(req, res) {
    res.render('about')
});

module.exports = router;