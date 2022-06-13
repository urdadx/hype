import express from 'express'
import * as  dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import linkRoutes from "./routes/linkRoutes.js";
import cors from "cors"
import morgan from "morgan";
import path from "path"

dotenv.config()

connectDB()

const app = express() 

app.use(cors())


if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())

app.use('/api/auth', userRoutes)
app.use('/api/link', linkRoutes)


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}



app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT} `
  )
)
