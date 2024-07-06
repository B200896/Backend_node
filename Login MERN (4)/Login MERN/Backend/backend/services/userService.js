const User = require('../models/user');
const bcrypt = require('bcrypt');

// User Registration Service
const userRegisterService = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ success: false, msg: "Enter the required fields" });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(422).json({ success: false, msg: "User already exists" });
        }

        // const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            // firstname,
            // lastname,
            username,
            email,
            password,
            // pincode,
            // gender,
            // state,
            // city,
            // isActive,
            // userType,

        });

        console.log('==newUser==', newUser);
        await newUser.save();
        return res.status(201).json({
            success: true, msg: "User successfully registered", token: await newUser.generateToken(),
            userId: newUser._id.toString(),
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ success: false, msg: "Error occurs" });
    }
}



const userLoginService = async (req, res) => {
    const { email, password } = req.body;
    console.log("password from request body:", password);
    console.log("email from request body:", email);

    if (!email || !password) {
        return res.status(400).json({ success: false, msg: "Enter the required fields" });
    }

    try {
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("client password:", password);
        console.log("user password:", user.password);
        console.log("password match result:", isMatch);

        if (isMatch) {
            return res.status(200).json({
                success: true, msg: "Successfully logged in",
                token: await user.generateToken(),
                userId: user._id.toString(),
            })

        }
        else {
            return res.status(400).json({ success: false, msg: "wrong credentials" });
        }



    } catch (error) {
        console.error('Error during login process:', error);
        return res.status(500).json({ success: false, msg: "Error occurs" });
    }
}
const userData = async (req, res) => {
    try {
        const data = await User.find({})
        // console.log(data);
        res.status(200).send(data);

    }
    catch (error) {
        res.status(400).send(error);

    }

}
// const userDelete = async (req,res)=>{
//     try{
//         const id = req.params.id;
//         const data=await User.findByIdAndDelete(id, {isDeleted : true, isActive: false})
//         return res.status(200).send({ success: true, msg: "Successfully deleted"});
//     }
//     catch(error){
//         res.status(400).send(error);
//         return res.status(400).send(error);
//     }
// }
// const userEdit = async (req,res)=>{
//     try{
//         const id = req.params.id;
//         const data=await User.findById(id)
//         return res.status(200).send({success: true, msg: "Successfully edited",data});
//     }
//     catch(error){
//         res.status(400).send(error);
//         return res.status(400).send(error);
//     }
// }
// const isActiveUser = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const { isActive } = req.body;
//         console.log(isActive, "isActive===")
//         await User.findByIdAndUpdate(id, { isActive});


//         return res.status(200).send({ success: true, msg: "User active status updated." });
//     } catch (error) {
//         res.status(500).send({ success: false, msg: "Error updating user status." });
//     }
// };


module.exports = { userRegisterService, userLoginService, userData };
