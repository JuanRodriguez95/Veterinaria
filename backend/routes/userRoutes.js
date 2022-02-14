import express from "express";
import userController from "../controllers/userController.js";

const user = express.Router();

user.post("/registerUser",userController.registerUser);



export default user;