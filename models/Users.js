var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
    userPersonalityFingerprint: String,
    userFriendlyName: String,
    userPosition: [{ lat: Number, long: Number }],
    userLastSeen: Date,
    userEmail: String,
    userHashedPassword: String,
    userFriendList: [Schema.Types.ObjectId]
});

module.exports.userSchema = userSchema;