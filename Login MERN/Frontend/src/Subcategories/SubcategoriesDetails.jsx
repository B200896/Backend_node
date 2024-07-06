import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

export function SubcategoriesDetails() {
    const [userSub, setUserSub] = useState([]);
    const navigate = useNavigate();
    // const {id} =useParams();
    const getsubCategory = async () => {
        try {
            const response = await axios.get("http://localhost:4000/SubcategoryData/");
            setUserSub(response.data);
        } catch (error) {
            console.log(error);
        }
    };  
    const deleteData = async (_id) => {
        try {
            await axios.delete(`http://localhost:4000/SubcategoryDelete/${_id}`);
            getsubCategory()
        } catch (error) {
            console.error('Error deleting subcategory', error);
        }
    };  
    
    useEffect(() => {
        getsubCategory();
    }, []);

    
    

    return (
        <div>
            <div>
                <button style={{ width: '130px' }} onClick={() => navigate('/subcategory')}>Add Subcategories</button>
                <table className="Subcategories-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Subcategory</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userSub.map((item, index) => (
                            
                            <tr key={index}>
                                
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.subcategory}</td>
                                <td>
                                    <button onClick={() => deleteData(item._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
