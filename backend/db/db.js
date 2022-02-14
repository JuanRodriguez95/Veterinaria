import mongoose from "mongoose";

const dbconnection = async () =>{
    try{
        await mongoose.connect(process.env.BD_CONNECTION,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Success connection with MongoDB : ON");
    }catch(e){
        console.log("Error connecting to MongoDB: \n",e);
    }
};

export default { dbconnection };