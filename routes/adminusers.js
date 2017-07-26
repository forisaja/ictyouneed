var express = require('express');
var router = express.Router();
var pg = require('pg');

/* GET about page. */
// router.get('/adminusers', function(req, res) {
//     res.render('adminusers', {title: 'Admin Users'});
// });

var conString = "postgres://postgres:123456789@localhost/youneed";

router.get('/adminusers', function(req, res) {
    pg.connect(conString, function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('SELECT * from public.user', function (err, result) {
            if (err) {
                return console.error('error runing query', err);
            }
            res.render('adminusers', {users: result.rows, title: 'Users', counter: 1});
            console.log(result.rows);
            done();
        });
    });
});

router.post('/activateuser/:st/:id', function(req, res) {
    pg.connect(conString, function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query('UPDATE public.user SET account_status=$1 WHERE user_id=$2', [req.params.st, req.params.id]);
        res.send(req.params.st);
        done();
    });
});


module.exports = router;