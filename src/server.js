import express from "express"
import cors from "cors";
import {config} from "dotenv"
import { connectDB, disconnectDB } from "./config/db.js"

// Import Routes
import { movieRoutes } from "./routes/movie.routes.js"
import { authRoutes } from "./routes/auth.routes.js"
import { watchlistRoutes } from "./routes/watchlist.routes.js"

config()
connectDB()

const PORT = 5001
const app = express()


// Body parsing middlwares
app.use(cors());
 app.use(express.json())
 app.use(express.urlencoded({extended: true}))


// API Routes
app.use("/movies", movieRoutes)
app.use("/auth", authRoutes)
app.use("/watchlist",watchlistRoutes )




const server = app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})


process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});



process.on("uncaughtException", (err) => {
    console.error("Unhandled Exception:", err)
    server.close(async () => {
        await disconnectDB()
        process.exit(1)
    })
})

process.on("SIGTERM", (err) => {
    console.error("SIGTERM received, shutting down gracefully")
    server.close(async () => {
        await disconnectDB()
        process.exit(0)
    })
})