var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/welcomeinstructor', function(req, res) {
    res.render('welcomeinstructor', {title: 'Welcome Instructor'});
});

module.exports = router;