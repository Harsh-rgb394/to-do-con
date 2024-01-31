const express=require("express");
const {Creatodo,getodos,deletetodos}=require("../Controllers/Logic");
const router=express.Router();


router.post("/create",Creatodo);

router.get("/get",getodos);

router.delete("/delete",deletetodos);


module.exports=router;