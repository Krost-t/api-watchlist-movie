import express from "express"
import { register, login, logout} from "../controllers/auth.controller.js"
import { validateRequest } from "../middleware/validate.reques.js"
import { registerSchema, loginSchema} from "../validators/auth.validators.js"



export const authRoutes = express.Router()

authRoutes.post("/register", validateRequest(registerSchema),register)

 authRoutes.post("/login",validateRequest(loginSchema), login)

authRoutes.get("/logout", logout)
 
