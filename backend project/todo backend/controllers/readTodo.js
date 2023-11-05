const dataBase=require("../models/databaseSchema")


const readTask=async (req,res)=>{
             
        try{
                const response=await dataBase.find({})
                console.log(response);
                res.status(200).json({
                        kaam: "ho gaya",
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

module.exports=readTask;