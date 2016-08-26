var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    eventTitle: String,
    eventPosition: [{ lat: Number, long: Number }],
    eventMaxNumberOfPeople: Number,
    eventAttendees: [Schema.Types.ObjectId],
    eventAveragePersonalityFingerprint: String,
    eventAttendeeInstructions: String,
    eventStartTime: Date,
    eventTimePosted: { type: Date, default: Date.now() },
    eventFinderImageID: Number
});

module.exports.eventSchema = eventSchema;