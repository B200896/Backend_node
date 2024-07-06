const userService=require('../services/userService')

const userRegister=async (req,res)=>{
    
    userService.userRegisterService(req,res)
}
const userLogin=async (req,res)=>{
    userService.userLoginService(req,res)
}
const userDataController=async (req,res)=>{
    userService.userData(req,res)
}
// const userDataDelete=async (req,res)=>{
//     userService.userDelete(req,res)
// }
// const userDataEdit=async (req,res)=>{
//     userService.userEdit(req,res)
// }
// const userDataActive=async (req,res)=>{
//     userService.isActiveUser(req,res)
// }

module.exports={userRegister,userLogin,userDataController}
