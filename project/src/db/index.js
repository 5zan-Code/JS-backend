// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import mongoose from "mongoose";
import colors from "colors"

dotenv.config()


const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}`)
        console.log(`Database connected !! DB Host:- ${connectionInstance.connection.host} `.bgGreen.black)    
    } 
    catch (error) {
        console.log("MongoDB Connection error", error)
            process.exit(1)
    }
}

export default connectDB()