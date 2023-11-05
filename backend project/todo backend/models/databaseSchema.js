const mongoose=require("mongoose")

const dataBase=new mongoose.Schema({
        title:{
                type:String,
                required:true,
                maxLength:50
        },
        description:{
                type:String,
                required:true,
                maxLength:200
        },
        createdAt:{
                type:Date,
                default:Date.now()

        },
        completed:{
                type:Boolean,
                default:false
        },
        createdBy:{
                type:String,
                required:true,
                maxLength:20
        },
        Email:{
                type:String,
                required:true,
                unique:true
        }
        
});
module.exports=mongoose.model("dataBase",dataBase);