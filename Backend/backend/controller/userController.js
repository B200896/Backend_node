const userService=require('../services/userService')


const userRegister=async (req,res)=>{
    
    userService.userRegisterService(req,res)

}
module.exports={userRegister}