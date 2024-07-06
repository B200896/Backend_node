const Products = require('../models/products')
const Cloudinery=require('../utils/cloudinery')
const ProductsServiceAdd = async (req,res) => {
    const {name,description,price,model,brandid,subcategoryid} = req.body;
    const image=req.file;
    try{
        if(!name || !description || !price || !model || !brandid || !subcategoryid || !image){
            return res.status(400).json({success: false, msg: "Enter the required field"});
    }
    const uploadImage=await Cloudinery.uploadOnCloudinary(image.path);
    const newProduct = new Products({
        name,
        description,
        price,
        model,
        brandid,
        subcategoryid,
        image:uploadImage.secure_url

    });
    await newProduct.save();
    return res.status(201).json({success: true, msg:"Details successfully added"});
}
catch (error){
    console.log('Error',error);
    return res.status
}
}
const ProductsServiceDetails = async (req,res) => {
    try{
        const data= await Products.find().populate('brandid','name').populate('subcategoryid','name');
        res.status(200).send(data)
    }
    catch(error){
        res.status(400).send(error);
    }
}
const ProductsServiceDelete = async (req,res) => {
    try{
        const id = req.params.id;
        await Products.findByIdAndDelete(id)
        return res.status(200).send({ success:true, msg:"Succesfully deleted"});
    }
    catch (error) {
        res.status(400).send(error);
        return res.status(400).send(error);
    }
}
const ProductsServiceEdit = async (req,res) => {
    const image=req.file;
    try{
        const id = req.params.id;
        const response = await Products.findById(id)
        return res.status(200).send({success: true, msg:"Successfully edited",response});
    }
    catch (error){
        res.status(400).send(error);
        return res.status(400).send(error);
    }
}
const ProductsServiceUpdate = async (req,res) => {
    const { id } = req.params;
    const {name,description,price,model,brandid,subcategoryid}=req.body;
    const image=req.file;
      try{
        const updateImage=await Cloudinery.uploadOnCloudinary(image.path)
        const updatedProduct= await Products.findByIdAndUpdate(id, {name,description,price,model,brandid,subcategoryid,image:updateImage.secure_url})
        if (updatedProduct){
            res.status(200).json({success: true,msg:"Successfully updated", product:updatedProduct});
        } else{
            res.status(404).json({success:false,msg:"Product not found"});
        }
      } catch (error){
        console.error('Error updating product',error)
        res.status(500).json({success:false,error:error.message})
      }
};

module.exports={ProductsServiceAdd,ProductsServiceDetails,ProductsServiceDelete,ProductsServiceEdit,ProductsServiceUpdate};
