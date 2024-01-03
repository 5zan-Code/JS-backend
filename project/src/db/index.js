// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import mongoose from "mongoose";
import colors from "colors"

dotenv.config()

const db_url = "mongodb+srv://f97aizan:Faizan1@cluster1.gnzh36l.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async ()=>{
    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}`)
        console.log(`-> Database connected !! DB Host:- ${connectionInstance.connection.host} `.bgGreen.black)    

    } 
    catch (error) {
        console.log("MongoDB Connection error", error)
            process.exit(1)
    }
}







export default connectDB()
