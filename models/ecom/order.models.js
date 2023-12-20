import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Confirmed", "Delivered", "Cancelled"],
        default: "Pending"
    }
})



const orderSchema = new mongoose.Schema({

    orderPrice:{
        type: String,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderItems: {
        type: [orderItemSchema]
    },
    address: {
        type: String,
        required: true
    }


},{timestamps: true});

export const Order = mongoose.model("Order", orderSchema)