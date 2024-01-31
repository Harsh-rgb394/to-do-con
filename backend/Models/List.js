const mongoose=require("mongoose");


const NewSchema=mongoose.Schema({
   
    title:{
        type:String,
        required:true
    },
    info:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})


const List=mongoose.model("List",NewSchema);

module.exports=List;
