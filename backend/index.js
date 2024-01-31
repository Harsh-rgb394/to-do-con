const express=require("express");
const bodyparser=require("body-parser");
const dotenv=require("dotenv");
const cors=require("cors");
const colors=require("colors");
const ConnectDB=require("./db/config");
const PORT=process.env.PORT ||5000;
const app=express();


// now make connections for mongodb and env file 
dotenv.config();
ConnectDB();

// now used middlwares for parsing the data 
app.use(cors());
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


// for default routes making 
app.use("/todos",require("./routes/routers"));
// app.get("/",(req,res)=>{
//     res.status(200).send({message:"Hello world"});
// })


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`.bgBlue);
})