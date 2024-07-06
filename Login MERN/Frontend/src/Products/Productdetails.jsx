import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

export function ProductDetails() {
    const [userProducts, setUserProducts] =  useState([]);
    const navigate= useNavigate();
    
    const productDetails = async () =>{
        try{
            const response= await axios.get("http://localhost:4000/ProductData")
            setUserProducts(response.data)
            
            
        } catch(error){
            console.log(error)
        }
    };
    const deleteData = async(_id) => {
        try{
            await axios.delete(`http://localhost:4000/ProductsDelete/${_id}`);
            productDetails();
        } catch(error){
            console.error('Error deleting products', error)
        }
    };

    useEffect(()=>{
        productDetails();
    },[])
    return(
        <div>

            <button style={{width:'130px'}} onClick={()=>navigate('/products')}>Add Product</button>
        <table className="brands-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Model</th>
                    <th>BrandId</th>
                    <th>SubCategoryId</th>
                    <th>Images</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {userProducts.map((item,index) => (
                    <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>{item.model}</td>
                    <td>{item.brandid.name}</td>
                    <td>{item.subcategoryid.name}</td>
                    <td><img src={item.image}alt=""style={{width:'130px'}}/></td>
                    <td>
                        <Link to={`/product/edit/${item._id}`}>
                        <button>edit</button>
                        </Link>
        
                        <button onClick={() => deleteData(item._id)}>Delete</button>
                    </td>

                    </tr>
                ))

                }
            </tbody>
        </table>
        </div>
    )
}