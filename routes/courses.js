var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/courses', function(req, res) {
    res.render('courses', {title: 'Courses'});
});

module.exports = router;