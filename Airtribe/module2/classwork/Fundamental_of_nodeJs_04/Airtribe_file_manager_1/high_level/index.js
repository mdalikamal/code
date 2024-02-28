const fs = require('fs');
const path = require('path');
let readings = '';

fs.readFile("./self_during-class/al/path/read/read.txt", "utf8", (err, data) => {
    if (!err) {
        readings = readings + data;
        console.log(readings);
        fs.writeFile("./self_during-class/al/path/write/write.txt", readings, (err) => {
            if (err) throw err;
            console.log("File written successfully.");
        });
    }
});
