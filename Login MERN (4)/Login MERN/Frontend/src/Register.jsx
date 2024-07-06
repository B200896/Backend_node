import React, { useState } from 'react';
import './Register.css'
import { toast } from 'react-toastify';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export function Register() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [gender, setGender] = useState("");
    const [userType, setUserType] = useState("");
    const [pincode, setPincode] = useState('');
    const navigate=useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:4000/register', {
                firstname,
                lastname,
                email,
                password,
                city,
                state,
                gender,
                pincode,
                userType

            });

            if (response) {
                toast.success("Registration successful", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "colored"
                });
                navigate('/')
            } else {
                toast.error(response.data.msg || "Registration failed", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "colored"
                });
            }
        } catch (error) {
            // console.error('Error:', error);
            toast.error(error.response?.data?.msg || "Registration failed", {
                position: "top-right",
                autoClose: 3000,
                theme: "colored"
            });
        }
    };
    
    return (
        <div className="container">
            <h2>Register Page</h2>
            <form id="registerForm" onSubmit={handleSubmit} method="POST">
                <div>
                    <label htmlFor="firstname">Firstname:</label>
                    <input type="text" id="firstname" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="lastname">Lastname:</label>
                    <input type="text" id="lastname" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="state">State:</label>
                    <input type="text" id="state" name="state" value={state} onChange={(e) => setState(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <input type="radio" id="male" name="gender" value="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)} />
                    <label htmlFor="male">Male</label>
                    <input type="radio" id="female" name="gender" value="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)} />
                    <label htmlFor="female">Female</label>
                    <input type="radio" id="other" name="gender" value="other" checked={gender === "other"} onChange={(e) => setGender(e.target.value)} />
                    <label htmlFor="other">Other</label>
                </div>
                <div>
                    <label htmlFor="userType">User type:</label>
                    <input type="radio" id="user" name="userType" value="user" checked={userType === "user"} onChange={(e) => setUserType(e.target.value)} />
                    <label htmlFor="user">User</label>
                    <input type="radio" id="admin" name="userType" value="admin" checked={userType === "admin"} onChange={(e) => setUserType(e.target.value)} />
                    <label htmlFor="female">Admin</label>
                    
                </div>
                

                <div>
                    <label htmlFor="pincode">Pincode:</label>
                    <input type="text" id="pincode" name="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
                </div>
                <Link to="/" >Login</Link>
                <button type="submit">Register</button>
            
            </form>
        </div>
    );
}
