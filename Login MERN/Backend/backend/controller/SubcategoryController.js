const usersubcategory=require('../services/SubcategoryService')
const SubCategoryDataController=(req,res)=>{
    usersubcategory.SubCategoryServiceAdd(req,res)
}
const SubCategoryDetailsController=(req,res)=>{
    usersubcategory.SubCategoryServiceDetails(req,res)
}
const SubCategoryDeleteController=(req,res)=>{
    usersubcategory.SubCategoryDelete(req,res)
}
module.exports={SubCategoryDataController,SubCategoryDetailsController,SubCategoryDeleteController};