const express=require('express'); // imports the Express module.
const app=express(); //This line creates an instance of the Express application 
const bodyparser=require('body-parser');

app.use(bodyparser.json());

// activate server at 3000
app.listen(3000,()=>{
 console.log("server 3000 running.......");

})

// routes
// get request
app.get('/',(req,res)=>{
       res.send("Hello mitroooo"); 
})

// post request
app.post('/api/cars',(req,res)=>{
        const{name,brand}=req.body;
          console.log(name);
          console.log(brand);
          res.send("submitted succesfullY");
          
})

// connect database:
const mongoose=require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/mydatabase',{
        useNewurlParser:true,
        useUnifiedTopology:true
})
.then(()=>{console.log("connection successfull")})  //promising 
.catch((error)=>{console.log(error.message)})

