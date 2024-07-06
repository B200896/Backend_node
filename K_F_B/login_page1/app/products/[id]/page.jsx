"use client"
import React,{useState,useEffect} from 'react'
import '../products.css'
const Products=({params})=>{
    console.log(params)
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        const fetchData=async ()=>{
            try{
                const response=await fetch('http://localhost:4000/ProductData');
                console.log(response);
                
                if(!response.ok){
                    throw new Error("No response");
                                        
                }
                const data=await response.json();
                console.log(data,'pppppppppooooo')
                
                let f_data = data.filter((item)=>{
                    console.log(item.brandid,'-------+++++')
                    return item.brandid._id == params.id;
                    
                })
                console.log(f_data)
                setProducts(f_data)

            }catch (error){
                console.error('Error fetching api')

            }
        }
        
        fetchData();
    },[])
    
    return(
      <div className='products-container'>
        <h1 className='h'>Products</h1>
        {products.map((item)=>(
            <div className="cart">
                <img src={item.image} alt="" />
            <div className="image">
                
            </div>
            <div className="content">
                <h1>Title:{item.name}</h1>
                <h2>price:{item.price}</h2>
                <p>description:{item.description}</p>
            </div>
        </div>

        ))}
        
        
         
      </div>
    )
}

export default Products;