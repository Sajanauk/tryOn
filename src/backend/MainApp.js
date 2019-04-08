const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require('cors');
const userRoute = require("./routes/user");

const app = express();
const CONNECTION_URL = " mongodb+srv://member1:member1@cluster0-gwlhh.mongodb.net/tryondb?retryWrites=true";
const mongoLocal = 'mongodb://localhost:27017/tryondb';

/*const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dulip:<password>@cluster0-gwlhh.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, {
  useNewUrlParser: true
});
*/
con = 0;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true
  })
  .then(() => {
    con = 1;
    console.log("connected to the remote database");
  })
  .catch(() => {
    console.log("connection failed to the remote server");
  })

if (con != 1) {
  mongoose
    .connect(mongoLocal, {
      useNewUrlParser: true
    })
    .then(() => {
      console.log("connected to the local database");
    })
    .catch(() => {
      console.log("connection failed to the local server");
    })
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
//var jsonParser = bodyParser.json();
//var urlencodedParser = bodyParser.urlencoded({ extended: false });

//app.use(cors);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type,Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});




app.post("/api/user/login1", (req, res, next) => {
  console.log(req.body.email);
})



app.use("/api/user", userRoute);
app.use("/api/customer", userRoute);
console.log("aaa");
module.exports = app;