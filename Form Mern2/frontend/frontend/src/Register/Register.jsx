import react from 'react';
import React,{useState} from 'react';
import {Link , useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Register.css'
const register = ()=>{
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",

    
    })
    const handleChange = e =>{
        console.log(e.target);
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        }
        )}
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('',{name,email,password})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

       return(
        <div className="Register">
            {/* console.log(user) */}
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={user.name} placeholder='Your name' onChange={handleChange}></input>
        <input type="text" name="email" value={user.email} placeholder='Your Email' onChange={handleChange}></input>
        <input type="password" name="password" value={user.password} placeholder='Your password' onChange={handleChange}></input>
        <button>Register</button>
        <div>or</div>
        <button>Login</button>
        </form>
        </div>
       )
}
export default register;