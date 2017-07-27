var express = require('express');
var router = express.Router();
var pg = require('pg');


var conString = "postgres://fori:123456789@localhost/youneed";

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


router.post('/login', function (req, res) {


    // session = req.session;
    // if (req.body.email == 'm.saja@gmail.com' && req.body.pass== 'admin'){
    //     session.uniqueID = req.body.email;
    //     res.redirect('/adminprofile');
    // }
    pg.connect(conString, function (err, client, done) {
        client.query("SELECT email, password from public.user where email=$1 and password=$2", [req.body.email, req.body.pass], function (err, result) {
            var user = result.rows[0];
            console.log(user);

            if (req.body.email == user.email && req.body.pass == user.password) {
                console.log('test validation');
                res.redirect('/adminprofile');
            }

            else {
                res.redirect('/register');
            }
        })
    })
});


// app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function(req, res) {
//
//         res.redirect('/adminprofile');
//
//
// });


router.post('/add', function(req, res) {
    pg.connect(conString, function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        //console.log(req.body.accountstatus);
        client.query("INSERT into public.user(firstname, lastname, email, password, role, location) VALUES ($1, $2, $3, $4, $5, $6)",
            [req.body.firstname, req.body.lastname, req.body.email, req.body.pass, 'student', req.body.loc]);

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