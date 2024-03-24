import mongoose from"mongoose";import{boolean}from"zod";
const orderSchema=new mongoose.Schema({
    userId:{type:String},
    items:{type:Array},
    place:{type:String},
    payment:{type:String}
})

const Order=mongoose.models.Order||mongoose.model("Order",orderSchema);

export default orderSchema;