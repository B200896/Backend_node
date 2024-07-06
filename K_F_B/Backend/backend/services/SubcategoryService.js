const SubCategory=require('../models/subcatogories')
const SubCategoryServiceAdd=async(req,res)=>{
    const {name,description,category} = req.body;
    try {
        if (!name || !description || !category) {
            return res.status(400).json({ success: false, msg: "Enter the required fields" });
        }
        const newSubcategories = new SubCategory({
            name,
            description,
            category 
        });
        await newSubcategories.save();
        return res.status(201).json({ success: true, msg: "Details saved successfully" });
    } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ success: false, msg: "Error saving SubCategory" });
    }
}
const SubCategoryServiceDetails=async(req,res)=>{
    console.log('==reqreqreq==', req.body)
   try{
    const data= await SubCategory.find({}).populate('category', 'name')
    res.status(200).json(data)
   }
   catch(error){
    console.log('==error==', error)
    res.status(400).send(error);
   }
}
const SubCategoryDelete=async(req,res)=>{
    try{
        const id=req.params.id;
        await SubCategory.findByIdAndDelete(id)
        return res.status(200).send({success:true,msg:"Successfully deleted"});
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports={SubCategoryServiceAdd,SubCategoryServiceDetails,SubCategoryDelete}