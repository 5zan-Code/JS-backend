import mongoose from "mongoose"

const user = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: false
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            
        },
        password: {
            type: String,
            required: [true, "Password is required!"],
            min: 8
        }
    },
    {
        timestamps: true
    }
)


export const User = mongoose.model("User", subToDoSchema)