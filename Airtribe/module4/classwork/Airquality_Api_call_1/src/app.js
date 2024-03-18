const express = require("express");
const app = express();
const routes = require("express").Router();
const airQuality = require('./controller/airqualityController');

//this is going to be our routes
app.use(routes);

//this is our top level resourse
routes.use(`/airQuality`, airQuality);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const Port = 1000;
app.listen(Port, (err) => {
  if (err) {
    console.log("Server is running not start at  port 100");
  } else {
    console.log("Server is running at port 100");
  }
});