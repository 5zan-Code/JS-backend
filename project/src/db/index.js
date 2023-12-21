import mongoose from "mongoose";



const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO-URL}/MeTube`)
        console.log(`Database connected !! DB Host: ${connectionInstance} `)    
    } 
    catch (error) {
        console.log("MongoDB Connection error", error)
            process.exit(1)
    }
}

connectDB()