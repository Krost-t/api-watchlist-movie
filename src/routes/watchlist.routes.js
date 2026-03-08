import express from "express"
import {addToWatchlist, removeFromeWatchlist, updateWatchlistItem} from "../controllers/watchlist.controller.js"
import { authMiddleware } from "../middleware/auth.middleware.js"
import { validateRequest } from "../middleware/validate.reques.js"
import { addTowatchlistSchema } from "../validators/watchlist.validators.js"



export const watchlistRoutes = express.Router()

watchlistRoutes.use(authMiddleware)

watchlistRoutes.post("/", validateRequest(addTowatchlistSchema), addToWatchlist)

watchlistRoutes.delete("/:id", removeFromeWatchlist)

watchlistRoutes.put("/:id", updateWatchlistItem)

/*  authRoutes.post("/login", login)

authRoutes.get("/logout", logout)
  */
