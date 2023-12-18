const fs = require('fs');
/*
//  create file with Node JS
 fs.writeFileSync('fruit.txt','All fruits are available here');
//  remove file with Node JS
 fs.unlinkSync('fruit.txt');*/

const path = require('path');
const dirPath = path.join(__dirname,'files');
console.log(dirPath)
for(let i=0;i<5;i++){ 
  fs.writeFileSync(dirPath+"/info"+i+".txt","a kind of file")
}
fs.readdir(dirPath,(err,files)=>{
files.forEach((item)=>{
  console.log("The files name is: "+item)
})
})
  