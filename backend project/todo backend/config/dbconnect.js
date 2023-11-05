const mongoose=require('mongoose')
require('dotenv').config();
const URL="mongodb://localhost:27017/mydatabase"

const connectDB=()=>{
        mongoose.connect(URL,{
                useNewUrlParser:true,
                useUnifiedTopology:true
        })
        .then(()=>{console.log("Database connected succesfully")})
        .catch((error)=>{console.log("Database not connected")})
}
module.exports=connectDB;