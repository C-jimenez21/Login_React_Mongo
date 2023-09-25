import { Router } from "express";
import { getUsers } from "../controllers/controller.js";

const appPrueba = Router()


appPrueba.get('/pruebas', getUsers)

export default appPrueba