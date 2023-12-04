const mongoose = require("mongoose");

function connectDB(){
    mongoose.connect("mongodb+srv://admin:shanky@cluster0.pfusu6o.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>console.log("DB connected!"))
    .catch(error=>console.error(error));
}
module.exports = connectDB;