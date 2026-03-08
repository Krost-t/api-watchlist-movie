import express from "express"

export const movieRoutes = express.Router()

movieRoutes.get("/hello", (req, res) => {
    res.json({message: "Hello "})
})