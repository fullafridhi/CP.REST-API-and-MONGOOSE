const mongoose = require("mongoose")

const userSchema = mongoose.Schema ({
    name: {type:String , require:true},
    age : Number,
    email:{type:String , require:true}
});

const User= mongoose.model("user", userSchema);
module.exports = User;