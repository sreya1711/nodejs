// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {"content-type":"text/plain"});
//     if(req.url=="/"){
//         res.end("welcome to my nodeJS server");
//     } 
//     else if(req.url=="/about")
//     {
//         res.end("This is the about page");
//     }
//     else
//     {
//         res.statusCode=404;
//         res.end("404 Not found");
//     }
// });
// server.listen(3001,()=>{
//     console.log("Server is created sucessfully");
// })