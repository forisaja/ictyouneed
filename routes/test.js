var express = require('express');
var router = express.Router();
var pg = require('pg');


var conString = "postgres://fori:123456789@localhost/ictyouneed";

/* GET about page. */
router.get('/', function(req, res) {
    pg.connect(conString, function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('SELECT * from recipes', function (err, result) {
            if (err) {
                return console.error('error runing query', err);
            }
            res.render('test', {recipes: result.rows});
            console.log(result.rows);
            done();
        });
    });
});

module.exports = router;