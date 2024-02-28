var fs =require("fs");
const { encode } = require("punycode");

   // read the file sync, write to the file sync
      function read_Write_Sync(){
          console.log("read Write sync")
      const data=fs.readFileSync('/workspaces/code/Airtribe/module2/classwork/Fundamental_of_nodeJs_04/Airtribe_file_manager_1/during_class_self_by_/AFM-source/file.txt',{encoding:'utf8',flag:'r'})

     console.log("read sync completed");
     fs.writeFileSync("/during_class_self_by_/AFM-destination/output.txt",{encoding:"utf8",flag:'w'})
       console.log("done ");
}
read_Write_Sync();
    //read file async, write file sync
    //read file sync, write file async
    //read file async, write file async


