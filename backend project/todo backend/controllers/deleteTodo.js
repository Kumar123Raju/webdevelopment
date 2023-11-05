const dataBase=require("../models/databaseSchema")


const deleteTask=async (req,res)=>{
             
        try{
              const {Email}=req.body;
              const response=await dataBase.deleteOne({Email});
              if(response){
                console.log("Your Data successfully deleted")

              }else{
                console.log("your data is not deleted")
              }
              res.status(200).json({

                kaam: "kaam huwa",
                tumahara_data:response,
                message:"succesfully"
              }

              )
             
      
        }catch(err){
                console.log("Kuch to gadbad hai");
                res.status(400).json({
                        kaam: "Nahi huwa",
                        tumahara_data:err,
                        message:"unsuccesfully"
                })

        }

}

module.exports=deleteTask;