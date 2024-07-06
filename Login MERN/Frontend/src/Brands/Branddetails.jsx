import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export function Branddetails(){
    const[userBrands,setUserBrands] = useState([]);
    const navigate=useNavigate();
    const brandDetails = async () =>{
        try{
            const response = await axios.get("http://localhost:4000/BrandData")
            setUserBrands(response.data);
        } catch(error){
            console.log(error)
        }
    };
    const deleteData = async (_id) => {
        try{
            await axios.delete(`http://localhost:4000/BrandsDelete/${_id}`);
            brandDetails();
        } catch (error){
            console.error('Error deleting brands',error)
        }
    };
    useEffect(() =>{
        brandDetails();
    },[])
    return(
        <div>
            <button style={{width:'130px'}} onClick={()=>navigate('/brand')}>Add brands</button>
        <table className="brands-table">
            
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {userBrands.map((item,index) => (
                    <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>
                        <Link to={`/brand/edit/${item._id}`}>
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