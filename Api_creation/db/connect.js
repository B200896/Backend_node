const mongoose = require("mongoose")

uri = "mongodb+srv://kashishkaramchandani3:AeFrrrcr6bZBcwGT@cluster0.ucepqkx.mongodb.net/Cluster0?retryWrites=true&w=majority"
const connectDB = () => {
   console.log("connect database")
    return mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
}

module.exports = connectDB;