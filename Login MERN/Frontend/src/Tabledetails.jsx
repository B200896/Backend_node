import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

export function Tabledetails() {
    const [userCategory, setUserCategory] = useState([]);
    const navigate=useNavigate();

    const categoryDetails = async () => {
        try {
            const response = await axios.get("http://localhost:4000/categoriesData");
            setUserCategory(response.data);
            
        } catch (error) {
            console.log(error);
        }
        
    };

    const deleteData = async (_id) => {
        try {
            await axios.delete(`http://localhost:4000/CategoriesDelete/${_id}`);
            categoryDetails();
        } catch (error) {
            console.error('Error deleting Category', error);
        }
    };

    useEffect(() => {
        categoryDetails();
    }, []);

    return (
        <div >
            <button style={{width:'130px'}} onClick={()=>navigate('/category/add')} >Add Category</button>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Images</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {userCategory.map((item, index) => (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td><img src={item.image}alt=""style={{width:'130px'}}/></td>
                        <td></td>
                        <td>
                            <Link to={`/category/edit/${item._id}`}>
                                <button>Edit</button>
                            </Link>
                            <button onClick={() => deleteData(item._id)}>Delete</button>
                            
                            
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}
