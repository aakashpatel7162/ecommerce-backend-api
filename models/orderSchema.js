const mongoose=require("mongoose")

const orderSchema=new mongoose.Schema({
    final_price:{type:Number, require:true},
    actual_price:{type:Number, require:true},
    dec:{type:String,require:true},
})
module.exports=mongoose.module("order",orderSchema)