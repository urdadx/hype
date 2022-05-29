import express from 'express'
import * as  dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import linkRoutes from "./routes/linkRoutes.js";
import cors from "cors"

dotenv.config()

connectDB()

const app = express() 

app.use(cors())

app.use(express.json())

app.use('/api/auth', userRoutes)
app.use('/api/link', linkRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running on port ${PORT}`
  )
)
