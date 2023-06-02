// const express = require("express")
// const app = express();
// // const bodyParser = require('body-parser')
// // const path = require('path')
// // app.use(bodyParser.urlencoded());

// const courses = [
//     {id:1,name:"math"},
//     {id:2,name:"phy"},
//     {id:3,name:"chem"}
// ]

// app.get('/',(req,res)=>{
//     console.log(req.statusCode);
//     res.send(courses);
// })
// app.get('/courses/:id',(req,res)=>{
//     const ID = parseInt(req.params.id);
//     console.log(ID)
//     if(ID>=courses.length){
//         res.status(404).send("The entered id is not found");
//     }
//     else{
//     const msg = courses[ID].name;
//     console.log(msg)
//     res.send(msg);
//     }
// })
// app.get('/courses',(req,res)=>{
//     res.sendFile(__dirname +'/page2.html');
// })
// app.post('/courses',(req,res)=>{
//     res.send("file was sent successfully")
// })

// const port = process.env.PORT || 3000;
// app.listen(port , console.log(`listening port ${port}....`))