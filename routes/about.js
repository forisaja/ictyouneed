var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/about', function(req, res) {
    res.render('about', {title: 'About us'});
});

module.exports = router;