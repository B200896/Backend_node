const Categories = require('../models/categories')
const Cloudinery=require('../utils/cloudinery')

const CategoriesService = async (req, res) => {
   const { name, description } = req.body;
  
    console.log(name)
    const image=req.file;
    console.log(image.path)
    try {
        if (!name || !description) {
            return res.status(400).json({ success: false, msg: "Enter the required field" });
        }
        const existingCategory=await Categories.findOne({name,description});
        if(existingCategory){
            return res.status(400).json({success:false,msg:"Category already exists"});
        }
        const uploadImage=await Cloudinery.uploadOnCloudinary(image.path);
        console.log(uploadImage)
        const newCategory = new Categories({
            name,
            description,
            image:uploadImage.secure_url

        });
        await newCategory.save();
        return res.status(201).json({ success: true, msg: "Details successfully added" });
    }
    catch (error) {
        console.log('Error', error);
        return res.status

    }
}
const categoriesData = async (req, res) => {
    try {
        const data = await Categories.find({})
        res.status(200).send(data);
    }
    catch (error) {
        res.status(400).send(error);
    }
}
const categoriesDelete = async (req, res) => {
    try {
        console.log('==req.params.id==', req.params.id)
        const id = req.params.id;
        await Categories.findByIdAndDelete(id)
        return res.status(200).send({ success: true, msg: "Successfully deleted" });
    }
    catch (error) {
        res.status(400).send(error);
        return res.status(400).send(error);
    }

}
const categoriesEdit = async (req, res) => {
    const image=req.file;
    try {
        const id = req.params.id;
        const response = await Categories.findById(id)
        return res.status(200).send({ success: true, msg: "Successfully edited", response });
       
        
    }
    catch (error) {
        res.status(400).send(error);
        return res.status(400).send(error);
    }
}
const categoriesUpdate = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    const image = req.file;
    console.log(image);
    
    try {
  
    
      const updateImage = await Cloudinery.uploadOnCloudinary(image.path);
      
    
    const updatedCategory = await Categories.findByIdAndUpdate(id, {name,description,image:updateImage.secure_url});
    
    
    if (updatedCategory) {
      res.status(200).json({ success: true, msg: "Successfully updated", category: updatedCategory });
    } else {
      res.status(404).json({ success: false, msg: "Category not found" });
    }
    } catch (error) {
    console.error('Error updating category:', error);
    res.status(500).json({ success: false, error: error.message });
    }
    };
    
    
const apiService = async(req,res)=> {
    try{
        const {name,description} = req.body;
        const filePath=req.file.path;
        res.status(201).json({message:'Category created successfully'});
    } catch(error){
        console.error('Error creating category',error);
        res.status(500).json({message:'Internal Server error'});
    }
    };
module.exports = { CategoriesService, categoriesData, categoriesDelete, categoriesEdit, categoriesUpdate,apiService};