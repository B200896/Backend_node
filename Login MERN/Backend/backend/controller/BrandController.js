const userBrands=require('../services/BrandService')
const brandsDataController= (req,res)=>{
    userBrands.BrandServiceAdd(req,res)
}
const brandsDetailsController= (req,res)=>{
    userBrands.BrandServiceDetails(req,res)
}
const brandsDeleteController = async (req,res) => {
     userBrands.BrandsServiceDelete(req,res)
}
const brandsEditController = async (req,res) => {
    userBrands.BrandServiceEdit(req,res)
}
const brandsUpdateController = async (req,res) => {
    userBrands.BrandServiceUpdate(req,res)
}
module.exports={brandsDataController,brandsDetailsController,brandsDeleteController,brandsUpdateController,brandsEditController};