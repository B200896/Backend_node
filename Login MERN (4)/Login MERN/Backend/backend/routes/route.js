const express = require('express')
const router=express.Router();
const userController=require('../controller/userController');
const user = require('../models/user');
const categoriesController=require('../controller/categoriesController')
const category = require('../models/categories')
const brandController=require('../controller/BrandController')
const brand = require('../models/brands')
const product=require('../models/products')
const productController=require('../controller/ProductController');
const subcategoryController= require('../controller/SubcategoryController');
const cat=require('../controller/categoriesController'); 
const { uploadFile } = require('../multerConfig');
const upload = uploadFile();
router.route('/register').post(userController.userRegister);
router.route('/login').post(userController.userLogin);
router.route('/UserData').get(userController.userDataController);
// router.route('/UserDelete/:id').delete(userController.userDataDelete);
// router.route('/Useredit/:id').get(userController.userDataEdit);
// router.route('/UserActive/:id').post(userController.userDataActive);
router.route('/Categories').post(upload,categoriesController.Categories);
router.route('/CategoriesData').get(categoriesController.categoriesDataController);
router.route('/CategoriesDelete/:id').delete(categoriesController.categoriesDeleteController);
router.route('/CategoriesEdit/:id').get(categoriesController.categoriesEditController);
router.route('/CategoriesUpdate/:id').put(upload,categoriesController.categoriesUpdateController);
router.route('/Brands').post(brandController.brandsDataController);
router.route('/BrandData').get(brandController.brandsDetailsController);
router.route('/BrandsDelete/:id').delete(brandController.brandsDeleteController);
router.route('/BrandsEdit/:id').get(brandController.brandsEditController)
router.route('/BrandsUpdate/:id').put(brandController.brandsUpdateController);
router.route('/Products').post(upload,productController.productsDataController)
router.route('/ProductData').get(productController.productDetailsController)
router.route('/ProductsDelete/:id').delete(productController.productsDeleteController)
router.route('/ProductsEdit/:id').get(productController.productsEditController)
router.route('/ProductsUpdate/:id').put(upload,productController.productsUpdateController)
router.route('/Subcategory').post(subcategoryController.SubCategoryDataController)
router.route('/SubcategoryData').get(subcategoryController.SubCategoryDetailsController)
router.route('/SubcategoryDelete/:id').delete(subcategoryController.SubCategoryDeleteController)
//router.post('/uploads',uploadFile('image'),categoriesController.uploadFileController)
module.exports=router;