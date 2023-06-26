import express from 'express'
import paymentRoutes from './routes/paymentroutes.js'
import { PORT } from './config.js'

const app = express()

app.use(express.json())

app.use(paymentRoutes)

// app.listen(3000)
app.listen(PORT)
console.log('Server on port', PORT)
