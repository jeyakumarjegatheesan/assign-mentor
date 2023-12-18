import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const connectDB = async()=>{
    
    try {
        console.log(process.env.MONGODBCONNECTIONSTRING);
        const mongoURL= process.env.MONGODBCONNECTIONSTRING
        const connection = await mongoose.connect(mongoURL)

       console.log("connected to mongoDB")
       return connection;
        
    } catch (error) {
        console.log("Error in connection",error)
    }

}


export default connectDB;