const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()


app.use(express.json())
app.use("/api", require("./routes/userRoutes"))

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("database connected"))
.catch((err)=>console.log("err" , err))




const PORT= 5002
app.listen(PORT ,()=>console.log("im listening in port :",PORT));