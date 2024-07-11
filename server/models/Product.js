import mongoose from "mongoose";

const productSchema =new mongoose.Schema( { 
    name: {type: String},
    number:{type:Number},
    imageUrl: {type:String,required:true}
})
const productModel = mongoose.model('Product' ,productSchema)
export {productModel as Product}