const userCategories=require('../services/categoriesService')
const Categories= (req,res)=>{
    userCategories.CategoriesService(req,res)
}
const categoriesDataController= (req,res)=>{
    userCategories.categoriesData(req,res)

}
const categoriesDeleteController= (req,res)=>{
    userCategories.categoriesDelete(req,res)
}
const categoriesEditController= (req,res)=>{
    userCategories.categoriesEdit(req,res)
}
const categoriesUpdateController= (req,res)=>{
    userCategories.categoriesUpdate(req,res)
}
const categoriesApiController=(req,res)=>{
    userCategories.apiService(req,res)
}
const uploadFileController=async(req,res)=>{
    userCategories.uploadFile(req,res)

}


module.exports={Categories,categoriesDataController,categoriesDeleteController,categoriesEditController,categoriesUpdateController,categoriesApiController,uploadFileController};