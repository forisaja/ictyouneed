var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/catalog', function(req, res) {
    res.render('catalog', {title: 'Catalog'});
});

module.exports = router;