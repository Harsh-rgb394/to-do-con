const List=require("../Models/List")
const Creatodo=async(req,res)=>{
    try {
        const {title,info}=req.body;

        if(!title || !info){
            res.status(401).json({message:"Error or incomplete details",success:false});
        }

        const newtodo=new List({title,info});

        await newtodo.save();

        res.status(200).json({message:"Successfully created",data:newtodo,success:true});

    } catch (error) {
        res.status(500).json({message:"Error while creating the todo",success:false});
        
    }
}

const getodos=async(req,res)=>{
    try {
        const alltodos=await List.find({});

        res.status(200).json(alltodos);
        
    } catch (error) {
        res.status(500).json({message:"Error while fetching the todos",success:false});
        
    }


}

const deletetodos=async(req,res)=>{
    try {
        const {id}=req.params;

        const deletedtodo=await List.findByIdAndDelete(id);

        if(!deletedtodo){
            res.status(401).json({message:"There is no todo for that id",success:false});
        }

        res.status(200).json({message:"Successfully deleted",success:true});
        
    } catch (error) {
        res.status(500).json({message:"Error while deleting the todo",success:false});
        
    }

}


module.exports={Creatodo,getodos,deletetodos};