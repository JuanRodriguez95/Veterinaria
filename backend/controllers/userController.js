import user from "../models/user.js";
import { userValidator } from "../helpers/validator.js";

/*
name:String,
    idCedula:String,
    address:String,
*/


const registerUser = async (req,res) =>{
    if(!userValidator(req))
        return res.status(400).send({message: "Incomplete Data"});
    let schema = new user({
        name:req.body.name,
        idCedula:req.body.idCedula,
        address:req.body.address,
        phone:req.body.phone,
        dbStatus:true,
    });
    let result = await schema.save();
    if(!result)
        return res.status(500).send({message: "Failed to register User"});
    res.status(200).send({result});
};

export default {registerUser};