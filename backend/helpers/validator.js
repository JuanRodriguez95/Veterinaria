import user from "../models/user.js"
import animal from "../models/animal.js";

//name:String,idCedula:String,address:String,
export const userValidator = (param) =>{
    if(!param.body.name || !param.body.idCedula || !param.body.address){
        return false;
    }else{
        return true;
    }
}

/*
name:String, 
    race:String,
    weight:Number,
    height:Number,
    Health:String,
    age:Number,
*/


export const animalValidator = (param) =>{
    if(!param.body.name || !param.body.race || !param.body.weight || !param.body.height || !param.body.health || !param.body.age){
        return false;
    }else{
        return true;
    }
}

