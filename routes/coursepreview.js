var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/coursepreview', function(req, res) {
    res.render('coursepreview', {title: 'Course Preview'});
});

module.exports = router;