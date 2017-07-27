var express = require('express');
var router = express.Router();

var pg = require('pg');
var conString = "postgres://postgres:123456789@localhost/youneed";

/* GET about page. */
router.get('/courses', function(req, res) {
    res.render('courses', {title: 'Courses'});
});

//Add new course
router.post('/addcourse', function(req, res) {
    pg.connect(conString, function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        //console.log(req.body.accountstatus);
        client.query("INSERT into public.course(title, level, category, description, course_status, id_instructor, photo) VALUES ($1, $2, $3, $4, $5, $6, $7)",
            [req.body.title, 'Beginner', 'OOP', req.body.description, true, 4, '/coursephotos/2.jpg']);
        done();
        //res.send("blablablah");
        res.redirect('/courses');
    });
});

module.exports = router;