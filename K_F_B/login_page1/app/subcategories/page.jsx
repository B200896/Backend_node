"use client"
import React,{useState,useEffect} from 'react'
import './subcategories.css'

const Subcategory=()=>{
    const[subcategory,setSubcategory]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            try{
                const response=await fetch('http://localhost:4000/SubcategoryData/')
                if(!response.ok){
                    throw new Error('No response')
                }
                const data=await response.json();
                console.log(data)
                setSubcategory(data)
            }catch(error){
                console.error('Error in fetching')
            }
        }
    fetchData()
    },[])

return(
    <div className="subcategory-class">
        <h2>Subcategories</h2>
        {subcategory.map((item)=>(
            <div className="cart">
                
                <div className="content">
                    <h1>Title:{item.name}</h1>
                    {/* <h2>Price:{item.price}</h2> */}
                    <p>Description:{item.description}</p>
                </div>
            </div>
            

        ))}

    </div>
)
}
export default Subcategory;