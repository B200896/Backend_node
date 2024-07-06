const User = require('../models/user');
const bcrypt=require('bcrypt');


const userRegisterService = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!email, !password, !name) {
            res.status(404).send({ success: false, msg: "Enter the required field" })

        }
        const user = await User.findOne( {email} )
        if(user){
            res.status(422).send({success:false,msg:"/user already exists"})
        }
      
        const newUser= new User({
            name,
            email,
            password
        })
        newUser.save();
        return res.status(201).send({success:true,msg:"user successfully registered"})

    }
    catch (error) {
            return res.status(500).send({success:false,msg:"Error occurs"})

    }

}


module.exports={userRegisterService};


