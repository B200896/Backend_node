const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:[true,"Email must be provided"],
    },
    password:{
        type:String,
        required:[true,"password must be provided"],

    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },

    
})

UserSchema.pre('save',async function (next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
    }
    next();
})
module.exports=mongoose.model("User",UserSchema);