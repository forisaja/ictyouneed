var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/instructorprofile', function(req, res) {
    res.render('instructorprofile', {title: 'Instructor Profile'});
});

module.exports = router;