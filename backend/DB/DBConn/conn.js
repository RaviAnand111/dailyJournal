const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dailyJournal").then(() => {
 console.log("DB Connection Successful");
}).catch(err => {
 console.log("DB Connection Failed");
})