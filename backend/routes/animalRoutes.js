import express from "express";
import animalController from "../controllers/animalController.js";

const animal = express.Router();

animal.post("/registerAnimal",animalController.registerAnimal);

export default animal;