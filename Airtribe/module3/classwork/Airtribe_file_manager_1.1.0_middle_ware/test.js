const fs = require("fs");

function read_Async_write_Async() {
  const data = fs.readFile("./AFM-source/file.txt", "utf-8",function (err, data) {
     if (!err)
      console.log("1" + data);
      let r = data + " read file a sync and write file a sync";
       console.log(r);
      fs.writeFile("./AFM-destination/output_ASync_read_write_ASync.txt", r, { encoding: "utf8", flag: "w" },function (err, data) {
          if (err) {
            console.log("data had not being syn");
          } else {
            console.log("synced");
          }
        }
      );
      console.log("every thing done");
    }
  );
}

read_Async_write_Async();
