const mongoose=require('mongoose')
let productSchema = new mongoose.Schema({
    title:{type:String, required:true},
    price:{type:Number, required:true},
    img:{type:String, required:true}});
module.exports=mongoose.model('products',productSchema)
//the flow will go from model to repository