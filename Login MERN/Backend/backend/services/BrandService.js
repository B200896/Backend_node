const Brands = require('../models/brands')
const BrandServiceAdd = async(req,res) =>{
    const { name, description} = req.body;
    try{
        if(!name || !description){
            return res.status(400).json({success: false, msg:"Enter the required field"});

        }
        const newBrand = new Brands({
            name,
            description,
        });
        await newBrand.save();
        return res.status(201).json({success: true, msg:"Details saved successfully"})
    }
    catch (error) {
        console.log('Error',error);
        return res.status
    }
}
const BrandServiceDetails = async (req,res)=>{
    try{
        const data= await Brands.find({})
        res.status(200).send(data)
    }
    catch(error){
        res.status(400).send(error);
    }
}
const BrandsServiceDelete = async (req,res) => {
    try{
        // console.log(req.params.id)
        const id = req.params.id;
        await Brands.findByIdAndDelete(id)
        return res.status(200).send({success: true,msg:"Successfully deleted"}); 
    }
    catch (error){
        res.status(400).send(error);
        return res.status(400).send(error)
    }

}
const BrandServiceEdit =async (req,res) => {
    try{
        const id = req.params.id;
        const response = await Brands.findById(id)
        return res.status(200).send({success:true,msg:"Successfully edited",response});
    }
    catch(error){
        res.status(400).send(error);
        return res.status(400).send(error);
    }
}
const BrandServiceUpdate = async (req,res) => {
    
    
    try{
        const { id }= req.params;
        const {name,description} = req.body;
        console.log(req.body , "req.body")
        const updatedBrand= await Brands.findByIdAndUpdate(id, {name,description});
        // console.log(updatedBrand , "updatedBrand")
        if(updatedBrand){
            res.status(200).send({success: true,msg:"Successfully updated",category: updatedBrand});
        } else {
            res.status(404).send({success:false,msg:"Brand not updated"});
        }
    } catch (error){
        console.error('Error updating brand:',error)
       // res.status(404).send({success:false,Mess:"error"});
    }

}
module.exports={BrandServiceAdd,BrandServiceDetails,BrandsServiceDelete,BrandServiceEdit,BrandServiceUpdate}