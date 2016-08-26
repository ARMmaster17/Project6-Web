var express = require('express');
var router = express.Router();

router.post('/me/location', function(req, res, next) {
    // TODO: Check to see if token is valid.
    // TODO: Update the current users location.
});

router.get('/me', function(req, res, next) {
    // TODO: Check to see if token is valid.
    // TODO: Respond with JSON data of current user.
    var query = req.Models.User.findOne({ 'userFriendlyName': 'test' });
    query.select('userFriendlyName userFriendList');
    query.exec(function (err, user) {
        if (err) res.send("DB_ERROR");
        else res.send(user.toJSON);
    });
});

router.post('/me', function(req, res, next) {
    // TODO: Check to see if token is valid.
    // TODO: replace current user object with new specified settings.
    var query = req.Models.User.findOne({ 'userFriendlyName': 'test' });
    query.select('userFriendlyName userFriendList');
    query.exec(function (err, user) {
        if (err) res.send("DB_ERROR");
        else res.send(user.toJSON);
    });
});

router.get('/near-me', function(req, res, next) {
    // TODO: Check to see if token is valid.
    // TODO: Return a list of users near the specified GPS coordinates.
});

module.exports = router;
