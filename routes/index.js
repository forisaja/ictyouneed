var express = require('express');
var router = express.Router();
var pg = require('pg');


var conString = "postgres://postgres:123456789@localhost/youneed";

/* GET home page. */
router.get('/', function(req, res, next) {
    pg.connect(conString, function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('SELECT * from public.course LIMIT 4', function (err, result) {
            if (err) {
                return console.error('error runing query', err);
            }
            res.render('index', {courses: result.rows, title: 'Home'});
            console.log(result.rows);
            done();
        });
    });
});

module.exports = router;
