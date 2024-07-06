import mongoose from 'mongoose';
const subSchema= new mongoose.Schema(
    {
        name:
        {
            type:String,
            required:[true,"the field is required"],
            isActive:true,
            unique:true
        },
        email:
        {
            type:String,
            required:[true,"the field is required"],
            isActive:true,
            unique:true,
            lowercase:true

        },
        password:
        {
            type:Boolean,
            unique:true,
            isActive:true,
            required:[true,"this field is required"]
        },
        createdAt:
        {
            type:Date,
            default:Date.now()

        },
        createdBy:
        {
            type:mongoose.Schema.types.ObjectId,
            ref:"list"
        },

    },
    {timestamps: true}

)
export const subUser=mongoose.model("list",subSchema);