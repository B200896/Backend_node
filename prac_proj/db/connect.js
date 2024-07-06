const mongoose= require('mongoose')
const connectDB=()=>{
    const uri="mongodb+srv://kashishkaramchandani1904:7bOvHfblFFomtyta@mydatabase.d790mzd.mongodb.net/Mydatabase?retryWrites=true&w=majority&appName=Mydatabase";
    console.log("Database connected !!")
    return mongoose.connect(uri)
}

module.exports = connectDB;

