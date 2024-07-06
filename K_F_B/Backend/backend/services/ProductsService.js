const Products = require('../models/products')
const Cloudinery=require('../utils/cloudinery')
const MyCart = require('../models/addcart');
const User = require('../models/user')

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
        const data= await Products.find({})
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


const AddToCart = async (req,res) => {

    console.log("I am in");
    const { userId, productId } = req.body;
    console.log(userId,productId,"product")


    try {
        const user = await User.findById(userId);
        const product = await Products.findById(productId);

        if (!user || !product) {
            return res.status(404).json({ error: 'User or Product not found' });
        }

        let cart = await MyCart.findOne({ user: userId });

        if (!cart) {
            cart = new MyCart({ user: userId, products: [] });
        }

        const productIndex = cart.products.findIndex(item => item.product.toString() === productId);

        if (productIndex > -1) {
            cart.products[productIndex].quantity += 1;
        } else {
            cart.products.push({ product: productId, quantity: 1 });
        }

        await cart.save();
        res.status(200).json({ message: 'Product added to cart successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add product to cart' });
    }
};

const CartData = async (req,res)=>{
    
    try{
        const userId = req.params.id;
        const cart = await MyCart.findOne({ user: userId }).populate('products.product', 'name price description image');;
        res.status(200).send(cart);

    }catch(error){
        res.status(400).send(error)
    }
};

const UpdateCartQuantity = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;
        const cart = await MyCart.findOne({ user: userId });

        const productIndex = cart.products.findIndex(item => item.product.toString() === productId);

        if (productIndex !== -1) {
            cart.products[productIndex].quantity = quantity;
            await cart.save();
            res.status(200).send(cart);
        } else {
            res.status(404).send({ message: 'Product not found in cart' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

// Add a new route to handle product removal
// app.post('/RemoveCartProduct', 
const RemoveCartProduct = async (req, res) => {
    try {
        const { userId, productId } = req.body;
        const cart = await MyCart.findOne({ user: userId });
        if (cart) {
            cart.products = cart.products.filter(item => item.product.toString() !== productId);
            await cart.save();
            res.status(200).send(cart);
        } else {
            res.status(404).send({ message: 'Cart not found' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};


module.exports={ProductsServiceAdd,ProductsServiceDetails,ProductsServiceDelete,ProductsServiceEdit,ProductsServiceUpdate,AddToCart,CartData,UpdateCartQuantity,RemoveCartProduct};
