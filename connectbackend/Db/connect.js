const mongoose=require('mongoose')
uri="mongodb+srv://kashishkaramchandani1904:Admin@123@mydatabase.d790mzd.mongodb.net/Mydatabase?retryWrites=true&w=majority&appName=Mydatabase";
const connectDB=()=>{
    console.log("connect my database")
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
};
module.exports=connectDB;