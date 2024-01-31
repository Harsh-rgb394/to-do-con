const mongoose=require("mongoose");
const MongoUrl="mongodb://localhost:27017/todo"

const ConnectDB=async()=>{
    try {
        await mongoose.connect(MongoUrl);
        console.log("Connection Successfull".bgGreen);

    } catch (error) {
        console.log("Connection Failue with error".bgRed,error);
        
    }

}

module.exports=ConnectDB;