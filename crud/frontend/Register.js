import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export function Register () {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [email, setEmail] = useState('');
const navigate=useNavigate();

const handleSubmit = async(event) => {
    event.preventDefault();
    const{name,email,password}=user;

    await fetch('http://localhost:4000/register',{
        method:'post'
    },user)
    .then((result)=>{
        toast.success(result.data.message, {
            position: "top-right",
            autoClose: 3000,
            theme: "colored"
        });
    }).catch((error)=>{
        console.log(error)
    })
    
};


return (
    <div className="container">
        <h2>Login Page</h2>
        <form id="loginForm" onSubmit={handleSubmit} method="POST">
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="email">Password:</label>
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
);
};

