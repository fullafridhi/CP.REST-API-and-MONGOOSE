const User = require("../Models/userSchema")


const getUser =async( req , res)=>{
    try {
 const newUser =await User.find()
 res.status(200).json({msg:"find all users" ,newUser})
    }
catch(err){
res.status(500).json({msg:err.msg})
}

}
const createtUser =async( req , res)=>{
    try{
 const newUser = await User.create(req.body)
 await newUser.save()
 res.status(201).json({msg:"create user" ,newUser})
    }
    catch(err){
        res.status(500).json({msg:err.msg})
        }

}
const updateUser =async( req , res)=>{
    try {
        const newUser = await User.findByIdAndUpdate({_id:req.params.id},{...req.body})
   if(!newUser) return res.satuts(404).json({msg:"not found"})
    res.status(201).json({msg:"user updated" ,newUser})
    }
    catch(err){
        res.status(500).json({msg:err.msg})
        }

}
const deleteUser =async( req , res)=>{
    try {
        const newUser = await User.findByIdAndDelete(req.params.id)
   if(!newUser) return res.satuts(404).json({msg:"not found"})
    res.status(201).json({msg:"user deleted" ,newUser})
    }
    catch(err){
        res.status(500).json({msg:err.msg})
        }

}
module.exports={getUser,createtUser,updateUser,deleteUser}

