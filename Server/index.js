const express = require("express");
const connectDB = require("./MongoDB/connect");
const app = express();
const PORT = 3000;
connectDB();

app.listen(PORT,()=>{
    console.log("Listening to PORT:",PORT);
})