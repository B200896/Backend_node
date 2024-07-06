import mongoose from mongoose;
const userSchema = new mongoose.Schema(
    {
        name:
        {
            type:String,
            required:true,
            unique:true,
            lowercase:true
        },
        email:
        {
            type:String,
            required:[true,"Enter the required field"],
            unique:[true],
            lowercase:true
        },
        password:
        {
            type:String,
            required:[true,"required field"]

        },
        createdAt:
        {
            type:Date,
            default:Date.now()
        }

    }
)
export const User=mongoose.model("User",userSchema)