var express = require('express');
var router = express.Router();

router.post('/me/location', function(req, res, next) {
    // TODO: Check to see if token is valid.
    // TODO: Update the current users location.
});

router.post('/me/add-friend', function(req, res, next) {
    // TODO: CHeck to see if token is valid.
    // TODO: Add a friend to the current users friend list.
});

router.get('/me/near-me', function(req, res, next) {
    // TODO: Check to see if token is valid.
    // TODO: Return a list of users near the specified GPS coordinates.
});

router.get('/me', function(req, res, next) {
    // TODO: Check to see if token is valid.
    var query = req.Models.User.findOne({ 'userFriendlyName': 'test' });
    query.select('userFriendlyName userFriendList');
    query.exec(function (err, user) {
        if (err) res.send("DB_ERROR");
        else res.send(user.toJSON);
    });
});

router.post('/me', function(req, res, next) {
    // TODO: Check to see if token is valid.
    // TODO: Replace 'test' with current users username.
    var query = req.Models.User.findOne({ 'userFriendlyName': 'test' });
    query.select('userFriendlyName userFriendList');
    query.exec(function (err, user) {
        if (err) res.send("DB_ERROR");
        else {
            // TODO: Fill in new fields in user object.
            user.save();
        }
    });
});

module.exports = router;
