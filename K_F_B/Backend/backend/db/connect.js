const mongoose = require("mongoose");

const connetDB = () => {
    const uri = "mongodb+srv://kashishkaramchandani1904:gzOpHNay0TfzOOMg@mydatabase.d790mzd.mongodb.net/User?retryWrites=true&w=majority&appName=Mydatabase";
    console.log("Data base connected");
    return mongoose.connect(uri);
};

module.exports = connetDB;