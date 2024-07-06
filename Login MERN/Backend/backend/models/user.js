const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const UserSchema= new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    //firstname
    //lastname
    //pincode
    //city
    //state
    //gender (radio)
    //isActive
    //profilepicture
    //isDeleted
    lastname:{
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
    pincode:{
        type:Number,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    state:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    
    isActive: {
        type: Boolean,
        default:true,
    },

    createdAt:{
        type:Date,
        default:Date.now(),
    },
    userType:{
        type:String,
        required:true
    }
  
})

UserSchema.pre('save',async function (next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
    }
    next();
})
module.exports=mongoose.model("User",UserSchema);