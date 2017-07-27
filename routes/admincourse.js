var express = require('express');
var router = express.Router();
var pg = require('pg');
/* GET about page. */
// router.get('/admincourse', function(req, res) {
//     res.render('admincourse', {title: 'Courses'});
// });

var conString = "postgres://fori:123456789@localhost/youneed";

router.get('/admincourse', function(req, res) {
    pg.connect(conString, function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('SELECT * from public.course ', function (err, result) {
            if (err) {
                return console.error('error runing query', err);
            }
            res.render('admincourse', {courses: result.rows, title: 'Admin Courses', counter: 1});
            console.log(result.rows);
            done();
        });
    });
});

router.post('/activatecourse/:st/:id', function(req, res) {
    pg.connect(conString, function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('UPDATE public.course SET course_status=$1 WHERE course_id=$2', [req.params.st, req.params.id]);
        res.send('Course status changed');
        done();
    });
});


module.exports = router;