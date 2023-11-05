const express=require('express')
const app=express();
const dbconnect=require('./config/dbconnect')

const taskRoutes=require('./routes/taskRoutes');


require("dotenv").config();

const PORT=process.env.PORT || 5000;

app.use(express.json());

// mount the routes
app.use('/api/v1',taskRoutes);

app.listen(PORT,()=>{
       console.log(`Server is running at ${PORT}`);
       
})

app.get("/",(req,res)=>{
        res.set('Content-Type', 'text/html');

      res.send("<h1>This is Home page</h1>")
})
dbconnect();



