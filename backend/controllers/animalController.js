import animal from "../models/animal.js";
import {animalValidator} from "../helpers/validator.js";

const registerAnimal = async (req,res) =>{
    if(!animalValidator(req))
        return res.status(400).send({mesagge: "Invalid Data"});

    let schema = new animal({
        name:req.body.name,
        race:req.body.race,
        weight:req.body.weight,
        height:req.body.height,
        health:req.body.health,
        age:req.body.age,
        dbStatus:true
    });

    let result = await schema.save();

    if(!result)
        return res.status(500).send({message: "Failed to register Animal"});
    
        res.status(200).send({result});
}

export default {registerAnimal};