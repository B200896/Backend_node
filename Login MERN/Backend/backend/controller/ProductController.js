const userProducts=require('../services/ProductsService')
const productsDataController= (req,res)=>{
    userProducts.ProductsServiceAdd(req,res)
}
const productDetailsController= (req,res)=>{
    userProducts.ProductsServiceDetails(req,res)
}
const productsDeleteController= (req,res)=>{
    userProducts.ProductsServiceDelete(req,res)
}
const productsEditController= (req,res)=>{
    userProducts.ProductsServiceEdit(req,res);
}
const productsUpdateController=(req,res)=>{
    userProducts.ProductsServiceUpdate(req,res);
}
const uploadFileController=async(req,res)=>{
    userCategories.uploadFile(req,res)

}
module.exports={productsDataController,productDetailsController,productsDeleteController,productsEditController,productsUpdateController,uploadFileController};