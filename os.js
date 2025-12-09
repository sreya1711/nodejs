//const fs=require("fs");

// const content="Hii this is Hello world";

//  fs.writeFile("hello.txt",content,"utf-8",(err)=>{
//      if(err){
//          console.log(err);
//          return;
//      }
//      console.log("Add Data sucessfully in the file");
//  })



// fs.appendFile("hello.txt","New Text Updated",(err)=>{
//     if(err){
//         console.log("Error:",err);
//         return;
//     }
//     console.log("Data Updated");

// })


// fs.rename("hello.txt","new.txt",(err)=>{
//     if(err)
//     {
//         console.log(err);
//         return;
//     }
//     console.log("File renamed succesfully");
// })

// fs.unlink("new.txt",(err)=>{

//     if(err)
//     {
//         console.log(err);
//         return;
//     }
//     console.log("File deleted succesfully");
// })



// const path=require("path");

// const filepath="/Users/Sreya/OneDrive/Desktop/ADVANCED FULLSTACK/DAY 2 OF MERN/";
// console.log("Base name: ",path.basename(filepath));
// console.log("Dir name : ",path.dirname(filepath));
// console.log("Extension name: ",path.extname(filepath));


// const joinedPath=path.join(__dirname,"public","index.html");
// console.log(joinedPath);







const os=require("os");
console.log("Platform:",os.platform());
console.log("Os type: ",os.type());
console.log("Total memory: ",os.totalmem());
console.log("Free memory: ",os.freemem());
console.log("Home Dir : ",os.homedir());
console.log("CPU Info: ",os.cpus());