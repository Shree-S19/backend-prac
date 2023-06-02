// // const http = require('http');

// // const ip = 'localhost';
// // const port = 3000;

// // const htmlData = '<h1>Welcome</h1>';
// // const thankdata = '<h1>Thank you</h1>';
// // const error = '<h1>Error Happened</h1>';



// // const requestListener = (req,res) => {
// //     res.setHeader('Content-Type',"text/html");
// //     res.writeHead(200);
// //     res.end(htmlData);
// // }
// // const server = http.createServer(requestListener);
// // server.listen(port,ip,()=>{
// //     console.log(`server listening to the port ${port}`)
// // });

// //===================================================================
// //hosting a server//
// //======================================================================

// const http = require('http');

// const ip = 'localhost';
// const port = 3000;

// const htmlData = '<h1>Welcome</h1>';
// const thankdata = '<h1>Thank you</h1>';
// const error = '<h1>Error Happened</h1>';

// const requestListener = (req,res)=> {
//     res.setHeader('Content-Type',"text/html");
//     res.writeHead(200);
// switch(req.url){
//     case '/welcome' : res.end(htmlData);
//                     break;
//     case '/thank' : res.end(thankdata);
//                     break;
// }
// }


// const server = http.createServer(requestListener);
// server.listen(port,ip,()=>{
//     console.log(`server listening to the port ${port}`)
// });

