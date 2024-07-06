import mongoose from mongoose;
const todoSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"This field is required"],
        unique:true,
        isActive:true

    },
    email:{
        type:String,
        required:[true,"This field is required"],
        unique:true,
        isActive:true
    },
    password:
    {
        type:String,
        unique:true,
        required:true,
    }
})
export const todo=mongoose.model("todo",todoSchema)