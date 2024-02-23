 const path = require("path");
 const fs=require("fs");
// console.log(path.basename("Airtribe/module2/classwork/pathmodule3/basic.js"));
// console.log(path.dirname("module2/classwork/pathmodule3/basic.js"));
// console.log(path.extname("module2/classwork/pathmodule3/basic.js"));
// console.log(path.parse("module2/classwork/pathmodule3/basic.js"));



const filepath=path.join("read","writ","example.txt");
fs.readFile(filepath,"utf8",(err,data)=>{
          console.log(data);

});