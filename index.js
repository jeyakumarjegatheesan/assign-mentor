import express from 'express';
import cors from 'cors';
import connectDB from './Database/db.config.js';
import mentorRouter from './Routers/mentor.router.js';
import studentRouter from './Routers/student.router.js';
import dotenv from 'dotenv';
dotenv.config()

const port = process.env.PORT


const app= express();

app.use(cors());
app.use(express.json());

app.use('/api',mentorRouter)
app.use('/api',studentRouter)

connectDB();

app.get('/',(req,res)=>{
    res.send("Working good");
})
app.listen(port,()=>{
    console.log("App is listening",port)
})