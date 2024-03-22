import mongoose, { mongo } from "mongoose";

const CategorySchema=new mongoose.Schema({
      name:{
        type:String,
        required:true
      }
},{timestamps:true}
)

export const Post=mongoose.model("Category",CategorySchema);