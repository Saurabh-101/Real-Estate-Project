import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to the Database.');
    }).catch((err)=>{
        console.log(err);
    });
 
const app = express();
app.use(express.json());

app.use('/api/user',userRouter);

app.use('/api/auth',authRouter);

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});


const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running on Port ${port}`);
})