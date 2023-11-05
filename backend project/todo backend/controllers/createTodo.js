const dataBase=require("../models/databaseSchema")


const createTask=async (req,res)=>{
             
        try{
                const {title,description,createdBy,Email}=req.body;
                
                
                const response=await dataBase.create({title,description,createdBy,Email});
                
                res.status(200).json({
                        kaam:"Mera Kaam ho gaya",
                        tumahara_data:response,
                        message:"Succesfully"
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

module.exports=createTask;