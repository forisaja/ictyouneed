var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/adminprofile', function(req, res) {
    res.render('adminprofile', {title: 'Admin Profile'});
});

module.exports = router;