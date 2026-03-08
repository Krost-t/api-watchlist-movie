import express from "express"
import { register, login, logout} from "../controllers/auth.controller.js"

export const authRoutes = express.Router()

authRoutes.post("/register", register)

 authRoutes.post("/login", login)

authRoutes.get("/logout", logout)
 
