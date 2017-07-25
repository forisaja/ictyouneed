var express = require('express');
var router = express.Router();
var pg = require('pg');


var conString = "postgres://postgres:123456789@localhost/testdb";

/* GET about page. */
router.get('/register', function(req, res) {
    pg.connect(conString, function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('SELECT * from public.user', function (err, result) {
            if (err) {
                return console.error('error runing query', err);
            }
            res.render('register', {users: result.rows, title: 'Register'});
            console.log(result.rows);
            done();
        });
    });
});

router.post('/add', function(req, res) {
    pg.connect(conString, function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query("INSERT into public.user(firstname, lastname, email, password, role, location) VALUES ($1, $2, $3, $4, $5, $6)",
            [req.body.firstname, req.body.lastname, req.body.email, req.body.pass, 'student', req.body.loc]);

            //res.render('register', {users: result.rows, title: 'Register'});
            //console.log(result.rows);
            done();
            res.redirect('/test');
    });
});



router.post('/addInstructor', function(req, res) {
    pg.connect(conString, function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query("INSERT into public.user(firstname, lastname, email, password, role, location) VALUES ($1, $2, $3, $4, $5, $6)",
            [req.body.firstname, req.body.lastname, req.body.email, req.body.pass, 'instructor', req.body.loc]);

        //res.render('register', {users: result.rows, title: 'Register'});
        //console.log(result.rows);
        done();
        res.redirect('/test');
    });
});
module.exports = router;