import express from 'express';
import path from "path"; //used for roter static posicion in root
import paymentRoutes from './routes/paymentroutes.js';
import { PORT } from './config.js';

const app = express()

app.use(express.json())

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(paymentRoutes)

// Static files
app.use(express.static(path.resolve("src/public")));

// app.listen(3000)
app.listen(PORT)
// console.log('Server on port', PORT)