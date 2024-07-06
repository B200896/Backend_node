const express = require('express')
const router=express.Router()
const app=express()
const port=5000
const{
    getallproduct,
    getallproductTesting,
}=require("../Controllers/product")
router.route("/").get(getallproduct)
router.route("/testing").get(getallproductTesting);
module.exports=router;