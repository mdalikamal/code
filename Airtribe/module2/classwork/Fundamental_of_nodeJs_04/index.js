const fs=require('fs')



function readSyncWriteSync(){
console.log("read sync");
const data =fs.readFileSync('./AFM-source/file.txt',{encoding:'utf8',flag:'r'});
console.log(data);
fs.writeFileSync('./AFM-destination/output_Sync_read_write_Sync.txt',data,{encoding:'utf8',flag:'w'});
console.log("data writen");
}
readSyncWriteSync();
  function readAsync_writesync(){
          fs.readFile('./AFM-source/file.txt',"utf-8", (err, data)=>{
                    if(!err)
                    console.log(data)
          let ata =data+`reading file async writing sync `
          fs.writeFileSync('./AFM-destination/output_ASync_read_write_Sync.txt',ata,{encoding:'utf8',flag:'w'});
                    console.log("data writen");
          });
          
              





}
readAsync_writesync();




          function readFileSync_writeFileAsync()
          {
          console.log("read sync");
          const data =fs.readFileSync('./AFM-source/file.txt',{encoding:'utf8',flag:'r'});
          console.log(data);
          fs.writeFile('./AFM-destination/output_Sync_read_write_aSync.txt',data,{encoding:'utf8',flag:'w'},function(err,data) 
                             {
                              if(err){
                                        console.log('data had syn');
                              }
                              else{
                               console.log("synced")
                              }
                       
                    })
                    console.log("every thing done");
          }
          readFileSync_writeFileAsync();
          
function read_Async_write_Async()
{

 const data= fs.readFile('./AFM-source/file.txt',"utf-8", function(err, data){
    if(!err)
    console.log("1"+data);
    let r=data+" read file a sync and write file a sync"
  
  console.log(r)
  fs.writeFile('./AFM-destination/output_ASync_read_write_ASync.txt',r,{encoding:'utf8',flag:'w'},function(err,data) 
  {
                              if(err){
                                        console.log('data had syn');
                              }
                              else{
                               console.log("synced")
                              }
                       
                    })
                    console.log("every thing done");
  
  
  
  
  
  
  
  
  })
 

  
}
read_Async_write_Async();