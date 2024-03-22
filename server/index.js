const express = require("express");
const app = express();
require('dotenv').config();
const dbconnect = require("./config/database");
const cloudinary = require("./config/cloudinary")


const PORT = process.env.PORT || 4000;
dbconnect.connect();
cloudinary.cloudinaryConnect();

app.use(express.json());
// route import and mount
const user = require("./routes/user");
app.use("/api/v1", user);

// activate server
app.listen(PORT,()=>{
    console.log(`App is listening at ${PORT}`);
}) 