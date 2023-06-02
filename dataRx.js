const express = require('express')
const app = express();
// const route = express.Router();
const bodyParser = require('body-parser')
const path = require('path')
// const { date } = require('joi');
const mongoose = require('mongoose');


app.use(bodyParser.urlencoded({urlencoded:true})); //The buffer data is parsed into JSON format 
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/toman',{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{console.log("connected to DB.....")})
    .catch((err)=>{console.log(err)}) 

const cap_schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength:5,
        maxlength:50,
    },
    division : {
        type:Number,
        required:true,
    },
    position : {
        type:String,
        required:true,
        enum:["captain","vice captain","soldier"]
    },
    date : {type:Date, default : Date.now}
    // date : Date.now()
});

app.get('/',(req,res)=>{
    const index_path = path.join(__dirname,'index.html');
    res.sendFile(index_path)
})
app.post('/',(req,res)=>{
    const formData = req.body;
    const toman_recruit = mongoose.model('captains', cap_schema);

    async function newRecruit(){
        const recruter = new toman_recruit({
            name : formData.name,
            division : formData.division,
            position : formData.position
        }) 
        const res = await recruter.save();
        console.log("db op success!")
    }
    newRecruit();

    res.send(formData.name+formData.division+formData.position);

})

app.listen(3000,()=>{console.log("connected to the PORT 3000......")});