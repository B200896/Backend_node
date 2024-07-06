// const{getallproduct,getallproductTesting

const getallproduct= async (req,res)=>{
    res.status(200).json({msg:"All products received"});
};
const getallproductTesting=async (req,res)=>{
    res.status(200).json({msg:"All products received with testing"})
};
module.exports={getallproduct,getallproductTesting}