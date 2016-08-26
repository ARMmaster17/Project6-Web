var mongoose = require("mongoose");
var Users = require("./models/Users");
var Events = require("./models/Events");
mongoose.connect(process.env.MONGODB_URI);

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function(callback){
    console.log("MongoDB connection Succeeded.");
});
var User = mongoose.model("User", Users.userSchema);
var Event = mongoose.model("Event", Events.eventSchema);

module.exports.User = User;
module.exports.Event = Event;
