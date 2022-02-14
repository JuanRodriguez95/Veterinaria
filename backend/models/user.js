import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    idCedula:String,
    address:String,
    phone:String,
    registerDate:{type:Date,default: Date.now},
    dbStatus:Boolean,
});

const user = mongoose.model("users",userSchema);

export default user;