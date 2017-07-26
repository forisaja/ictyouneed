var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/adminprofile', function(req, res) {
    res.render('adminprofile', {title: 'Profile'});
});

module.exports = router;