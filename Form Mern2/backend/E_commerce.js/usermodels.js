import mongoose from 'mongoose';
const comSchema= new mongoose.Schema(
    {
        user:
        {
            type:String,
            required:["true","this field is required"],
            unique:true,
            lowercase:true

        },
        password:
        {
            type:Boolean,
            required:[true,"This field is required"],
            unique:true

        },
        status:
        {
            type:String,
            enum:["Pending","Cancelled","Delivered"],
            default:"Pending"
        }

    },
    {
        timestamps:"true"
    }
);
export const User=mongoose.models("User",comSchema);