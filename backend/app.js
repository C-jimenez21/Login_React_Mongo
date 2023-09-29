import express from 'express';
import morgan from 'morgan';
import cookieParser from "cookie-parser";
import cors from 'cors';
//import appPrueba from './routes/prueba.routes.js';
import appAuth from './routes/auth.routes.js';
const app = express(); 
import dotenv from 'dotenv';

dotenv.config('../')

const URI = `http://${process.env.VITE_HOSTNAME}:${process.env.VITE_PORT_FRONTEND}`
app.use(morgan('dev'));
app.use(cors(
    {
        origin: URI,
        credentials:true
    }
));
app.use(cookieParser());
app.use(express.json())
app.use('/', appAuth)
    
export default app


