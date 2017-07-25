var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var pg = require('pg');


var conString = "postgres://postgres:123456789@localhost:5432/testdb";

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

router.post('/register/addstudent', function(req, res) {
    var student = {
      name: req.body.name,
      lName: req.body.lName,
      email: req.body.email,
      pass1: req.body.pass1,
      country: req.body.country
    };
    console.log(student);
    pg.connect(conString, function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('INSERT INTO public.user (firstName, lastName, email, password, role, location) VALUES ($1, $2, $3, $4, $5, $6)', [student.name, student.lName, student.email, student.pass1, 'student', student.country]);
        done();
        res.redirect("/about");
        console.log(result.rows);
    });
});

module.exports = router;