import mongoose from "mongoose";


const catagorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
        
    },
    
    {timestamps: true});

export const Catagory = mongoose.model("Catagory", catagorySchema)