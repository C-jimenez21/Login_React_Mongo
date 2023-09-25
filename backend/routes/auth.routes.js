import { Router } from "express";
import { register, login, logout, profile } from "../controllers/auth.controllers.js";
import { validateToken } from "../middlewares/Token.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/user.schema.js"

const appAuth = Router()

appAuth.post('/register', validateSchema(registerSchema), register)
appAuth.post('/login', validateSchema(loginSchema), login)

appAuth.post('/logout', logout)

appAuth.get('/profile', validateToken, profile)

export default appAuth;
