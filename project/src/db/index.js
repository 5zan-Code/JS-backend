import mongoose from "mongoose";
import 'dotenv/config'
import {DB_Name} from '../constants.js'

const db_url = "mongodb+srv://f97aizan:Faizan1@cluster1.gnzh36l.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(db_url)
        console.log(`Database connected !! DB Host: ${connectionInstance} `)    
    } 
    catch (error) {
        console.log("MongoDB Connection error", error)
            process.exit(1)
    }
}

connectDB()





