const express = require('express');
const cookieParser = require('cookie-parser');
require("./conn");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use("/",require("./route"));

app.listen(4000,()=>{
    console.log("Port is Running on 4000");
});