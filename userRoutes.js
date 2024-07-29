const express = require("express")
const router = express.Router()
// router.post("/post",createtUser)
const {getUser,createtUser,updateUser,deleteUser} = require ("../controllers/userControllers")





router.get("/get" , getUser)
router.post("/post",createtUser)
router.put("/put/:id" , updateUser)
router.delete("/delete/:id" , deleteUser)

module.exports= router