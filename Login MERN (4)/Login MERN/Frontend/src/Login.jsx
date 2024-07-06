import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Login.css' 
import Loader from './Loader';
export function Login() {
    console.log('==Login() ==')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading]=useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("http://localhost:4000/Login", {
                email,
                password
            });
            const matchingUser = response.data.success;
            if (matchingUser) {
                navigate('/home');
                toast.success("Successfully logged in", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "colored"
                });
            } else {
                toast.error("Incorrect username or password", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "colored"
                });
            }
        } catch (error) {
            console.log('error:', error);
            toast.error(error.response?.data?.msg || "Registration failed", {
                position: "top-right",
                autoClose: 3000,
                theme: "colored"
            });
        } finally {
            setLoading(false);
        }
    };
    

return (
    <>
            <div className="container">
                <h2>Login Page1111111</h2>
                <form id="loginForm" onSubmit={handleSubmit}
                method="POST">
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>

                    <button type="submit">Login</button>
                </form>

                <h5>Don't have an account? <Link to="/register">Register</Link></h5>
            </div>
            { loading && <Loader/> }
    </>
    )
}
    