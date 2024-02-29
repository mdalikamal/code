const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(3000, () => {
  console.log("server is listening on started on 3000");
});
