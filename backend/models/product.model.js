import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5,
        maxlength:15
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
},{
    timestamps:true //adds createdAt and updatedAt fields to the schema
});

const Product = mongoose.model("Product", productSchema);

export default Product;