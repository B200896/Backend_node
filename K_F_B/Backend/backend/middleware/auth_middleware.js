const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authmiddleware = async (req, res, next) => {
    const Mytoken = req.header('authorization');
    console.log("Mytoken",Mytoken)
    const token = Mytoken.replace("Bearer ","");

    console.log(token,"token")

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized HTTP, Token Not Provided' });
    }
   
    try{

        const isVerified = jwt.verify(token,process.env.JWT_SECRET_KEY);
        console.log(isVerified,"is verified")
        const userData = await User.findOne({email:isVerified.email}).select({

            password:0,
        });
        
        req.user = userData;
        req.token = token;
        req.userId = userData._id

        next();
    }
    catch(error){

        return res.status(401).json({message:'Unauthorized. Invalid Token'})
    }

};

module.exports = authmiddleware;
