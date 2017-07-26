var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/admincourse', function(req, res) {
    res.render('admincourse', {title: 'Courses'});
});

module.exports = router;