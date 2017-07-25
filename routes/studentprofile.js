var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/studentprofile', function(req, res) {
    res.render('studentprofile', {title: 'Student Profile'});
});

module.exports = router;