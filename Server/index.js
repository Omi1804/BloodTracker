const express = require("express");
const connectDB = require("./Database/connect");
const app = express();
const PORT = 3000;
connectDB();

app.listen(PORT, () =>{
  console.log("Listening to PORT:", PORT);
});
