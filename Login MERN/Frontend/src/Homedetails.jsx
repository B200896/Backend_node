import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Homedetails.css';
import { Link } from 'react-router-dom';

export function Homedetails() {
    const [userDetails, setUserDetails] = useState([]);

    const fetchDetails = async () => {
        try {
            const response = await axios.get("http://localhost:4000/UserData");
            setUserDetails(response.data);
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    useEffect(() => {
        fetchDetails();
    }, []);

    const deleteData = async (_id) => {
        try {
            await axios.delete(`http://localhost:4000/UserDelete/${_id}`);
            fetchDetails();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const toggleActiveStatus = async (_id) => {
        try {
            // Find the current user details
            const user = userDetails.find(user => user._id === _id);
            if (user) {
                // Toggle the isActive status
                const newStatus = !user.isActive;

                // Send the updated status to the server
                await axios.post(`http://localhost:4000/UserActive/${_id}`, { isActive: newStatus });

                // Refresh the user details
                fetchDetails();
            }
        } catch (error) {
            console.error('Error toggling user active status:', error);
        }
    };

    const editData = async (_id) => {
        try {
            // Implement your edit functionality here
            // Example: await axios.put(`http://localhost:4000/Useredit/${_id}`, { /* new user data */ });
            fetchDetails();
        } catch (error) {
            console.error('Error editing user:', error);
        }
    };

    return (
        <div className="home">
            <div className="left-side">
                <div className="text-container">
                    <Link to='/login'><span>Login</span></Link>
                </div>
                <div className="text-container">
                    <Link to='/user'><span>Users</span></Link>
                </div>
                <div className="text-container">
                    <Link to='/categoriesdata'><span>Categories</span></Link>
                </div>
                <div className="text-container">
                    <Link to='/brands'><span>Brands</span></Link>
                </div>
                <div className="text-container">
                    <Link to='/productdata'><span>Products</span></Link>
                </div>
                <div className="text-container">
                    <Link to='/subcategories'><span>SubCategory</span></Link>
                </div>

            </div>
            <div className='right'>
                <div className="table-container">
                    <h2>User Table</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Gender</th>
                                <th>Pincode</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userDetails.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.firstname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.city}</td>
                                    <td>{user.state}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.pincode}</td>
                                    <td>
                                        <button onClick={() => toggleActiveStatus(user._id)}>
                                            {user.isActive ? 'Deactivate' : 'Activate'}
                                        </button>
                                        <button onClick={() => editData(user._id)}>Edit</button>
                                        <button onClick={() => deleteData(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}
