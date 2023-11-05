const { response } = require("express");
const dataBase=require("../models/databaseSchema")


const updateTask=async (req,res)=>{
             
        try{
                // update according to give email id
                const {Email,description}=req.body;
                const email=req.body.Email;
                const des=req.body.description;
                // const cBy=req.body.createdBy;
                const response=await dataBase.findOne({Email})
                // console.log("i am in")
                // console.log(response)
                await dataBase.findOneAndUpdate(
                        {_id:response.id},
                        {$set:{description:des}}
                );
                res.status(200).json({
                        kaam: "kaam huwa",
                        tumahara_data:response,
                        message:"succesfully"
                })
                
             
               
               
        }catch(err){
                console.log("Kuch to gadbad hai");
                res.status(400).json({
                        kaam: "Nahi huwa",
                        tumahara_data:err,
                        message:"unsuccesfully"
                })

        }

}

module.exports=updateTask;