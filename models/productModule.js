const mongoose=require("mongoose")

const productSchema=new mongoose.Schema({
    name:{type:String,unique:true, require:true},
    final_price:{type:Number, require:true},
    actual_price:{type:Number, require:true},
    dec:{type:String,require:true},
    stock: { type: Number, required: true },

},{timestamps:true})
module.exports=mongoose.module("product",productSchema)