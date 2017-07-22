var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/uploadlesson', function(req, res) {
    res.render('uploadlesson', {title: 'Lesson'});
});

module.exports = router;