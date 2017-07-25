var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/adminusers', function(req, res) {
    res.render('adminusers', {title: 'Admin Users'});
});

module.exports = router;