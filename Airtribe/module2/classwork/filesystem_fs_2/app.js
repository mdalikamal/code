const fs = require("fs");
const data =fs.readFile("./example.txt", "utf-8", (err, data) => {
  if (!err) {
    console.log(data);
  }
});
