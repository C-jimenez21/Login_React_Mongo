import express from 'express';
import morgan from 'morgan';
import cookieParser from "cookie-parser";
//import appPrueba from './routes/prueba.routes.js';
import appAuth from './routes/auth.routes.js';
const app = express(); 

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json())
app.use('/', appAuth)

export default app


